import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Distributor from '../models/Distributor';

class DistributorSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Preencha todos os campos corretamente' });
    }
    const { email, password } = req.body;

    const distributor = await Distributor.findOne({ where: { email } });

    if (!distributor) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (!(await distributor.checkPassword(password))) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    const { id, name } = distributor;

    return res.json({
      distributor: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new DistributorSessionController();
