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

  addResto: async (req, res) => {
    try {
      const { nama, deskripsi, alamat, favoriteMenu } = req.body;

      await Resto.create({ nama, deskripsi, alamat, favoriteMenu });

      req.flash("alertMessage", "Success add data Restaurant");
      req.flash("alertStatus", "success");
      res.redirect('/resto');
    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/resto')
    } 
  },

  editResto: async (req, res) => {
    try{
      const { id, nama, deskripsi, alamat, favoriteMenu } = req.body;

      const resto = await Resto.findOne({ _id: id });

      resto.nama = nama;
      resto.deskripsi = deskripsi;
      resto.alamat = alamat;
      resto.favoriteMenu = favoriteMenu;

      await resto.save();

      req.flash("alertMessage", "Success edit data mahasiswa");
      req.flash("alertStatus", "success");

      res.redirect("/resto");
    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");

      res.redirect("/resto");
    }
  },

  deleteResto: async (req, res) => {
    try{
      const { id } = req.params;

      const resto = await Resto.findOne({ _id: id });

      await resto.remove();

      req.flash("alertMessage", "Success add data Restaurant");
      req.flash("alertStatus", "success");
      res.redirect('/resto');
    } catch(error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/resto')
    }
  }
}