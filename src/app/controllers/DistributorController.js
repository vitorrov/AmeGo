import * as Yup from 'yup';
import Distributor from '../models/Distributor';

class DistributorController {
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
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Preencha todos os campos corretamente' });
    }

    const distributorExists = await Distributor.findOne({
      where: { email: req.body.email },
    });

    if (distributorExists) {
      return res.status(401).json({ error: 'Email já cadastrado' });
    }

    const distributor = await Distributor.create(req.body);
    const [firstName] = distributor.name.split(' ');

    return res.json({
      success: `É gratificante saber que você quer trabalhar conosco ${firstName}! Iremos analisar seu cadastro e entrar em contato com você o mais rápido possível, fique de olho no seu e-mail.`,
    });
  }

  async update(req, res) {
    const distributor = await Distributor.findByPk(req.params.id);

    const { name, email, avatar_id } = req.body;

    if (name && !(name !== distributor.name)) {
      return res
        .status(401)
        .json({ error: 'Name can not be the same as already registered' });
    }

    if (email && !(email !== distributor.email)) {
      return res
        .status(401)
        .json({ error: 'Email can not be the same as already registered' });
    }

    if (avatar_id && !(avatar_id !== distributor.avatar_id)) {
      return res
        .status(401)
        .json({ error: 'Avatar can not be the same as already registered' });
    }
    await distributor.update(req.body);

    return res.json(distributor);
  }

  async delete(req, res) {
    const distributor = await Distributor.findByPk(req.params.id);

    if (!distributor) {
      return res.status(401).json({ error: 'Distributor not found' });
    }

    await distributor.destroy();

    return res.json({
      success: `Distributor ${distributor.name} was deleted succesfully`,
    });
  }
}

export default new DistributorController();
