import User from '../models/User';
import Director from '../models/Director';

class DirectorController {
  async index(req, res) {
    const directors = await Director.findAll();
    res.json(directors);
  }

  async store(req, res) {
    const isUserAdmin = await User.findOne({
      where: {
        id: req.userId,
        admin: true,
      },
    });

    if (!isUserAdmin) {
      return res
        .status(400)
        .json({ error: 'Usuário não tem permissão para registrar.' });
    }

    const { id, name } = await Director.create(req.body);
    return res.json({ id, name });
  }
}

export default new DirectorController();
