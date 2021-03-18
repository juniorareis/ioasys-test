import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      launch: Yup.date().required(),
      age: Yup.number().required(),
      diretor_id: Yup.number().required(),
      genero_id: Yup.number().required(),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Informações não são validas', message: error.inner });
  }
};
