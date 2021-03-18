import User from '../models/User';
import Like from '../models/Like';

class LikeController {
  async store(req, res) {
    const isUser = await User.findOne({
      where: {
        id: req.userId,
        admin: false,
      },
    });

    if (!isUser) {
      return res
        .status(400)
        .json({ error: 'Usuário não tem permissão para votar.' });
    }

    //Verificar quantidade de votos

    const Likes = await Like.findAndCountAll({
      where: {
        user_id: req.userId,
        film_id: req.body.film_id,
      },
    });

    if (Likes.count >= 4) {
      return res.status(400).json({
        error:
          'Não é possivel votar. Você chogou no limite maximo de votos por filme',
      });
    }

    const dataLike = req.body;
    dataLike.user_id = req.userId;

    const resultLike = await Like.create(dataLike);
    if (!resultLike) {
      return res.status(400).json({ error: 'Erro na votação. Tente de novo.' });
    }
    return res.json({ success: true });
  }
}

export default new LikeController();
