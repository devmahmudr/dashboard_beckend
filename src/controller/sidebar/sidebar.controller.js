class sidebarController {
  sidebar(req, res) {
   return res
      .status(200)
      .json({
        sidebar_titles: [
          "Overview",
          "Doctors",
          "Create",
        ],
      });
  }
}

export default new sidebarController()