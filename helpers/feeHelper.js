const { Fee } = require("../models/feeHistoryModel");
const AppError = require("../utils/appError");
exports.createFee = async req => {
  try {
    const fee = await Fee.create({
      ...req
    });
    if (fee) return fee;
  } catch (error) {
    console.log("ERROR: ", error);
    return false;
  }
};
exports.removeFee = async studentId => {
  try {
    const fee = await Fee.deleteMany({
      student: studentId
    });
    if (fee) return fee;
  } catch (error) {
    return false;
  }
};

exports.getFee = async studentId => {
  return Fee.findOne({
    student: studentId,
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });
};
