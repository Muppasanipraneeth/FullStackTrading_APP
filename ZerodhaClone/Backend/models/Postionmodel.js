const mongoose = require("mongoose");
const { PositionSchema } = require('../schemas/Postionschema');

const PositionModel = mongoose.model("Position", PositionSchema);

module.exports = { PositionModel };
 