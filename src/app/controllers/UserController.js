import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Email já registrado' });
    }

    const { name, email } = await User.create(req.body);

    return res.json({
      success: `Bem-vindo(a) à Ame Go, ${name}! Seu e-mail para acesso é ${email}`,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { email, oldPassword, password_hash, password } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      // Se o usuario preencheu um email e ele for diferente do atual
      const userExists = await User.findOne({ where: { email } }); // Checa se o novo email já existe no banco

      if (userExists) {
        return res.status(400).json({ error: 'Email já registrado' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'As senhas não conferem' });
    }

    if (password_hash) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (password && !oldPassword) {
      return res
        .status(401)
        .json({ error: 'Você precisa preencher sua senha antiga' });
    }

    const { name } = await user.update(req.body);
    const [firstName] = name.split(' ');

    return res.json({
      success: `Tudo certo, ${firstName}! Seus dados foram atualizados.`,
    });
  }
}

export default new UserController();
