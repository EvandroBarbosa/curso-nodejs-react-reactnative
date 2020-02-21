// Carrega o modulo de configurações de datas
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

// Carrega os models utilizado nesse controller
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  // Cria consulta da agenda do provedor
  // para ele verificar o que ele tem de serviços solicitados
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not as provider' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
