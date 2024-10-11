const mongoose = require("mongoose");
const { OrderSchema } = require('../schemas/OrderSchema');

const Ordermodel = mongoose.model("Order", OrderSchema);

module.exports = { Ordermodel };
