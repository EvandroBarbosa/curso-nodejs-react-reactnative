// Carrega o model user
import User from '../models/User';

// Carrega schema de notificações, esse usa-se o mongoDB
import Notification from '../schema/Notification';

class NotificationController {
  // Cria consulta de notificações do provedor
  async index(req, res) {
    // Check if user is a provider
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(10);
    return res.json(notifications);
  }

  // Atualiza as notificações como sendo visualizada
  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
