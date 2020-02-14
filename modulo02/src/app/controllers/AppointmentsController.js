import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schema/Notification';

class AppointmentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointment = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['url', 'path'],
            },
          ],
        },
      ],
    });
    return res.json(appointment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { provider_id, date } = req.body;

    /* Check if provider_id is a provider */
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    /* Check if user not is provider */
    const checkUserIsNoProvider = await User.findOne({
      where: { id: req.userId, provider: false },
    });

    if (!checkUserIsNoProvider) {
      return res
        .status(401)
        .json({ error: 'you cannot book an agency as a provider' });
    }

    // Checar se a data não ja passou
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Essa data não é permitida' });
    }

    // Checa se a data escolhida não esta preenchida
    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'O agendamento nesta data não é possivel' });
    }
    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });

    /*
      Notify appointment provider
    */
    const user = await User.findByPk(req.userId);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', ás' H:mm'h' ",
      { locale: pt }
    );
    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    return res.status(201).json(appointment);
  }

  // Cancelando um agendamento de serviço
  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id);

    if (appointment.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You do not have permission to cancel this appointment',
      });
    }

    const subWithSub = subHours(appointment.date, 2);

    if (isBefore(subWithSub, new Date())) {
      return res
        .status(401)
        .json({ error: 'You can only cancel appointments 2 hours in advance' });
    }

    appointment.canceled_at = new Date();

    await appointment.save();
    return res.json(appointment);
  }
}

export default new AppointmentsController();
