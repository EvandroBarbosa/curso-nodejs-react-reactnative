// Carrega o modulo do JWT
import jwt from 'jsonwebtoken';

// Carrega o modulo do YUP para validações
import * as Yup from 'yup';

// Carrega o model de user
import User from '../models/User';
// Carrega o model de file
import File from '../models/File';

// Carrega as configurações de token
import authConfig from '../../config/auth';

class SessionController {
  // Cria uma sessão do usuário na aplicação, isso é pra quem ja tem um cadastro
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      password: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, provider } = user;

    return res.status(200).json({
      user: { id, name, email, provider, avatar },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
