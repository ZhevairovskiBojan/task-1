const Academy = require('../pkg/akademijaModel/akademijaSchema');

const Website = async (req, res) => {
  try {
    const akademii = await Academy.find();
    res.status(200).render("test", {
      titleOfPage: "Тест за backend развој на софтвер",
      akademii
    });

  } catch(err){
    res.staus(500).send("Error on web");
  }
};

module.exports = {
  Website
}
