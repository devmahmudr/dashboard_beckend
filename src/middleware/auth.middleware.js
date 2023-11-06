import userModel from "../models/user/user.model.js";

class authMiddleware {
  async signupChack(req, res, next) {
    const { username, password } = req.body;

    if (!(username || password)) {
      return res.status(400).json({ msg: "required username password" });
    }
    const existUser = await userModel.findOne({
      where: { username: username },
    });
    if (existUser) {
      return res.status(400).json({
        msg: "this username already taken,please choose another one!",
      });
    }
    next();
  }
}
export default new authMiddleware();
