const Kurs = require('../pkg/kursModel/kursSchema');

const SiteKusevi = async (req, res) => {
  try {
    const Kursevi = await Kurs.find();

    res.status(200).render('welcome', {
      title: 'Welcome',
      Kursevi,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

const oneKurs = async (req, res) => {
  try {
    const kurs = await Kurs.findById(req.params.id);
    res.status(201).json({
      status: 'Success',
      kurs
    });

  } catch(err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const createKurs = async (req, res) => {
  try {
    const newKurs = await Kurs.create(req.body);
    res.status(201).json({
      status: 'Success',
      newKurs
    });

  } catch(err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const updateKurs = async (req, res) => {
  try {
    const update = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'Success',
      update
    });
    
  } catch (err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const deleteKurs = async(req, res) => {
  try {
    await Kurs.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'Success',
      data: null
    });
  } catch (err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

module.exports = {
  SiteKusevi,
  oneKurs,
  createKurs,
  updateKurs,
  deleteKurs
};