import { TokenHelper} from "../utils/token.js";

export const TokenChecker = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json("no token, you should signup to get token");
    }
    const decodedToken = TokenHelper.verify(token, process.env.SECRET_KEY);
    console.log(decodedToken);
    if (!decodedToken) {
      return res.status(401).json("invalid token");
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};