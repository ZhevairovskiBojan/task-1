const Akademija = require('../pkg/akademijaModel/akademijaSchema');

const allAcademys = async(req, res) => {
  try {
    const academy = await Akademija.find();

    res.status(201).json({
      status: 'Success',
      academy
    });
    
  } catch(err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const oneAcademy = async (req, res) => {
  try {
    const academy = await Akademija.findById(req.params.id);
    res.status(201).json({
      status: 'Success',
      academy
    });

  } catch(err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const createAcademy = async (req, res) => {
  try {
    const newAcademy = await Akademija.create(req.body);
    res.status(201).json({
      status: 'Success',
      newAcademy
    });

  } catch(err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const updateAcademy = async (req, res) => {
  try {
    const updateAcademy = await Akademija.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'Success',
      updateAcademy
    });
    
  } catch (err) {
    return res.status(404).json({
      status: 'Fail',
      message: err
    });
  }
};

const deleteAcademy = async(req, res) => {
  try {
    await Akademija.findByIdAndDelete(req.params.id);
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
  allAcademys,
  oneAcademy,
  createAcademy,
  updateAcademy,
  deleteAcademy
};