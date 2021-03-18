import User from '../models/User';
import Genre from '../models/Genre';

class GenreController {
  async index(_req, res) {
    const genres = await Genre.findAll();
    res.json(genres);
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

    const { id, name } = await Genre.create(req.body);
    return res.json({ id, name });
  }
}

export default new GenreController();
