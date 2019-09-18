import * as Yup from "yup";
import Person from "../models/Person";

class PersonController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      nascimento: Yup.string().required(),
      cpf: Yup.string()
        .required()
        .min(11)
        .max(11),
      telefone: Yup.string(),
      estadoCivil: Yup.string(),
      ocupacao: Yup.string(),
      numeroDeFamiliares: Yup.number(),
      nis: Yup.string()
        .min(11)
        .max(11),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string(),
      bairro: Yup.string().required(),
      created_by: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação." });
    }

    const userExists = await Person.findOne({
      where: { cpf: req.body.cpf }
    });

    if (userExists) {
      return res.status(400).json({ error: "Usuário já cadastrado." });
    }

    const { id, name, cpf } = await Person.create(req.body);

    return res.json({
      id,
      name,
      cpf
    });
  }

  // async update(req, res) {
  //   const schema = Yup.object().shape({
  //     name: Yup.string(),
  //     email: Yup.string().email(),
  //     oldPassword: Yup.string().min(6),
  //     password: Yup.string()
  //       .min(6)
  //       .when("oldPassword", (oldPassword, field) =>
  //         oldPassword ? field.required() : field
  //       ),
  //     confirmPassword: Yup.string().when("password", (password, field) =>
  //       password ? field.required().oneOf([Yup.ref("password")]) : field
  //     )
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: "Falha na validação." });
  //   }

  //   const { email, oldPassword } = req.body;

  //   const user = await User.findByPk(req.userId);

  //   if (email !== user.email) {
  //     const userExists = await User.findOne({
  //       where: { email }
  //     });

  //     if (userExists) {
  //       return res.status(400).json({ error: "Usuário já cadastrado." });
  //     }
  //   }

  //   if (oldPassword && !(await user.checkPassword(oldPassword))) {
  //     return res.status(401).json({ error: "Senha inválida." });
  //   }

  //   const { id, name } = await user.update(req.body);

  //   return res.json({
  //     id,
  //     name,
  //     email
  //   });
  // }
}

export default new PersonController();
