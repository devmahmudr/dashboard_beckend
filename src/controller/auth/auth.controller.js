import bcrypt from "bcrypt";
import { TokenHelper } from "../../utils/token.js";
import userModel from "../../models/user/user.model.js";

class authController {
  async signup(req, res) {
    try {
      const { username, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await userModel.create({
        username,
        password: hashedPassword,
      });

      const token = TokenHelper.sign({ newUser }, process.env.SECRET_KEY);
      newUser.token = token;
      res.status(201).json({ msg: "success", data: newUser });
    } catch (error) {
      console.log(error.message);
    }
  }
  async signin(req, res) {
    const { username, password } = req.body;
    const chackUser = await userModel.findOne({
      where: { username: username },
    });

    if (!chackUser) {
      return res.status(404).json({ msg: "user not found" });
    }

    const compyredPassword = await bcrypt.compare(password, chackUser.password);

    if (!compyredPassword) {
      return res.status(400).json({ msg: "username or password is incorrect" });
    }

    const token = TokenHelper.sign({ chackUser }, process.env.SECRET_KEY);
    
    return res
      .status(200)
      .json({ msg: "successfully signed in", data: chackUser, token });
  }
}

export default new authController();
