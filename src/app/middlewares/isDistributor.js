import Distributor from '../models/Distributor';

export default async (req, res, next) => {
  const distributor = await Distributor.findByPk(req.userId);

  if (!distributor) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  return next();
};
