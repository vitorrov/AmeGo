import Distributor from '../models/Distributor';

export default async (req, res, next) => {
  const distributor = await Distributor.findByPk(req.params.id);

  if (!distributor) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return next();
};
