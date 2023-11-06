import DoctorModel from "../../models/doctor/doctor.model.js";

class doctorController {
  async findAll(req, res) {
    try {
      const doctors = await DoctorModel.findAll();

      if (!doctors) {
        return res.status(400).json({ msg: "Could not find Doctors" });
      }

      return res.status(200).json(doctors);
    } catch (error) {
      throw new error();
    }
  }
  async createDoctor(req, res) {
    try {
      const { name, email, role, gender } = req.body;
      const newDoctor = await DoctorModel.create({
        name,
        email,
        role,
        gender,
      });

      if (!newDoctor) {
        return res.status(400).json({ msg: "Could not create Doctor" });
      }
      res.status(201).json(newDoctor);
    } catch (error) {
      console.log(error.message);
    }
  }
  async findOne(req, res) {
    try {
      const id = +req.params.id;
      const doctor = await DoctorModel.findOne({ where: id });

      if (!doctor) {
        return res.status(400).json({ msg: "Could not find Doctor" });
      }

      res.status(200).json([doctor]);
    } catch (error) {
      throw new error();
    }
  }
  async update(req, res) {
    const id = req.params.id;
    const { role, name, nextWorkDay } = req.body;
    const updatedUser = await DoctorModel.update(
      { role, name, nextWorkDay },
      { where: { id: id } }
    );
    if (!updatedUser) {
      return res.status(400).json({ msg: "Could not update Doctor" });
    }

    res.status(200).json(updatedUser);
  }
  async deleteDoctor(req, res) {
    const id = +req.params.id;

    try {
      const deletedDoctor = await DoctorModel.destroy({ where: { id } });

      if (deletedDoctor) {
        res.status(200).json({ msg: "Doctor successfully deleted" });
      } else {
        res.status(404).json({ msg: "Doctor not found" });
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
      res.status(500).json({ msg: "Error deleting doctor" });
    }
  }
  async search(req, res) {
    const query = req.query.query;

    try {
      const searchResults = await DoctorModel.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${query}%`,
          },
        },
      });

      res.json(searchResults);
    } catch (error) {
      console.error("Search failed:", error);
      res.status(500).json({ error: "Search failed" });
    }
  }
}

export default new doctorController();
