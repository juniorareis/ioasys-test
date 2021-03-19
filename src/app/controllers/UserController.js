import User from '../models/User';

class UserController {
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
        .json({ error: 'Usuário não tem permissão para registrar usuário.' });
    }

    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Já tem usuário com e-mail informado.' });
    }

    const { id, name, email, admin } = await User.create(req.body);
    return res.json({ id, name, email, admin });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email != user.email) {
      const userExists = await User.findOne({
        where: {
          email: email,
        },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Usuário não existe' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'A senha não corresponde' });
    }

    const { id, name, admin } = await user.update(req.body);
    return res.json({ id, name, email, admin });
  }

  async cancel(req, res) {
    const { id } = req.body;

    const isUserAdmin = await User.findOne({
      where: {
        id: req.userId,
        admin: true,
      },
    });

    if (!isUserAdmin) {
      return res
        .status(400)
        .json({ error: 'Usuário não tem permissão para registrar usuário.' });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não foi encontrado.' });
    }

    const { name, email, admin } = await user.update({
      cancel: true,
    });

    return res.json({
      message: 'Usuário cancelado com sucesso',
      data: { name, admin, email },
    });
  }
}

export default new UserController();
