const About = require('../models/About');

module.exports = {
  viewAbout: async (req, res) => {
    try{
      const about = await About.find();

      res.render('about', { about, title: "Teams" });
    } catch(error) {
      console.log(error);
    }
  }
};