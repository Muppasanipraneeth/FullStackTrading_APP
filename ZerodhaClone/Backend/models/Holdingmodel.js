const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/Holdingschema.js");

const HoldingModel = mongoose.model("Holding", HoldingSchema);

module.exports = { HoldingModel };
