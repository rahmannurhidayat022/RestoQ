const About = require('../models/About');

module.exports = {
  viewAbout: async (req, res) => {
    try{
      const teams = await About.find();
      
      res.render('about', { teams, title: "Teams" });
    } catch(error) {
      console.log(error);
    }
  }
};