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
    }
  },
}