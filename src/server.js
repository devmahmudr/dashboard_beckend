import express from "express";
import "dotenv/config.js";
import authRoute from "./router/auth/auth.route.js";
import sequelize from "./config/sequelize.js";
import headerRoute from "./router/header/header.route.js";
import cors from "cors";
import sidebarRoute from "./router/sidebar/sidebar.route.js";
import doctorRoute from "./router/doctor/doctor.route.js";
import userModel from "./models/user/user.model.js";
import bcrypt from "bcrypt"

const app = express();

async function bootstrap() {
  try {
    await sequelize.authenticate();
    sequelize
      .sync({ alter: true })
      .then(() => {
        console.log("Database schema synchronized.");
      })
      .catch((error) => {
        console.error("Error synchronizing database schema:", error);
      });

    const existAdmin = await userModel.findOne({
      where: { username: "admin" },
    });
    if (!existAdmin) {
      const hashedPassword = await bcrypt.hash("admin",10)
      await userModel.create({
        username: "admin",
        password: hashedPassword,
      });
      console.log("admin created");
    }
    const corsOptions = {
      origin: "http://localhost:5173",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    };
    app.use(cors(corsOptions));

    app.use(express.json());
    app.use(authRoute);
    app.use(headerRoute);
    app.use(sidebarRoute);
    app.use(doctorRoute);
    app.listen(process.env.PORT || 3000, process.env.HOST || "localhost", () =>
      console.log("running...")
    );
  } catch (error) {
    console.log(error.message);
  }
}
bootstrap();
