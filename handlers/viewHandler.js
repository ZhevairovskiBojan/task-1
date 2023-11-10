const Academy = require('../pkg/akademijaModel/akademijaSchema');

const getWebsite = async (req, res) => {
  try {
    const akademii = await Academy.find();
    res.status(200).render("test", {
      titleOfPage: "Test BackEnd Semos Academy",
      akademii
    });

  } catch(err){
    res.staus(500).send("Error on web");
  }
};

module.exports = {
  getWebsite
}
