import User from '../models/User';

class AdminController {
  async store(req, res) {
    const userExists = await User.findOne();

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Não é possivel registrar usuário admin.' });
    }

    const userAdmin = req.body;
    userAdmin.admin = true;

    const { id, name, email, admin } = await User.create(userAdmin);
    return res.json({ id, name, email, admin });
  }
}

export default new AdminController();
