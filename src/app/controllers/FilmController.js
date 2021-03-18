import { Op } from 'sequelize';

import User from '../models/User';
import Film from '../models/Film';
import Director from '../models/Director';
import Genre from '../models/Genre';
import Like from '../models/Like';

class FilmController {
  async index(req, res) {
    const { name, diretor_id, genero_id } = req.query;
    console.log(req.query);
    const films = await Film.findAll({
      where: {
        name: {
          [Op.like]: '%' + name + '%',
        },
        diretor_id: diretor_id,
        genero_id: genero_id,
      },
      attributes: ['id', 'name', 'description', 'launch', 'age'],
      include: [
        {
          model: Director,
          attributes: ['name'],
        },
        {
          model: Genre,
          attributes: ['name'],
        },
        {
          required: false,
          model: Like,
          as: 'likes',
        },
      ],
    });
    res.json(films);
  }

  async show(req, res) {
    const genres = await Film.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Director,
          attributes: ['name'],
        },
        {
          model: Genre,
          attributes: ['name'],
        },
        {
          required: false,
          model: Like,
          as: 'likes',
        },
      ],
    });
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

    const filmResult = await Film.create(req.body);
    return res.json(filmResult);
  }
}

export default new FilmController();
