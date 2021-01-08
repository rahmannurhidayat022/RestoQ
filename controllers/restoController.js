const Resto = require("../models/Resto");

module.exports = {
  viewResto: async (req, res) => {
    try {
      const resto = await Resto.find();

      const alertMessage = req.flash("AlertMessage");
      const alertStatus = req.flash("AlertStatus");

      const alert = { message: alertMessage, status: alertStatus }

      res.render('index', {
        resto,
        alert,
        title: "RestoQ"
      })
      
    } catch(error) {
      res.redirect('/resto')

      console.log(error);
    }
  },
  addResto: async (req, res) => {
    try {
      const { nama, deskripsi, alamat, favoriteMenu } = req.body;

      await Resto.create({ nama, deskripsi, alamat, favoriteMenu });

      req.flash("alertMessage", "Success add data Restaurant");
      req.flash("alertStatus", "success");
      req.redirect('/resto');

    } catch(error) {
      res.redirect('/resto')

      console.log(error);
    } 
  },
}