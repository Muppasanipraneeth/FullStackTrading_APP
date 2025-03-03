// Importing required packages
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

// Importing models
const { HoldingModel } = require("./models/Holdingmodel");
const { PositionModel } = require('./models/Postionmodel');
const { Ordermodel } = require('./models/OrderModel');

// Creating an instance of Express
const app = express();

// Middleware
const cors = require("cors");

// Middleware
// Middleware
app.use(cors({
    origin: "http://localhost:5173", // Allow requests only from this origin
    credentials: true // Allow credentials if you need to send cookies or HTTP authentication
}));

app.use(express.json());
app.use(bodyParser.json());

// Setting up the MongoDB connection
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Listening on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Sample route to check if server is working
app.get("/", (req, res) => {
    res.send({ msg: "This is working" });
});

// Route to add holdings
app.get("/addholdings", async (req, res) => {
    const tempdata = [
        { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
        { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
        { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
        { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
        { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
        { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
        { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
        { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%", isLoss: true },
        { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
        { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
        { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
        { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
        { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];

    try {
        await Promise.all(tempdata.map(item => {
            const newHolding = new HoldingModel(item);
            return newHolding.save();
        }));
        res.send("Holdings added successfully");
    } catch (err) {
        console.log("Error saving holdings:", err);
        res.status(500).send("Failed to add holdings");
    }
});

// Route to add positions
app.get("/addPosition", async (req, res) => {
    const tempPost = [
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
    ];

    try {
        await Promise.all(tempPost.map(item => {
            const newPost = new PositionModel(item);
            return newPost.save();
        }));
        res.send("The position data is saved");
    } catch (err) {
        console.log("Error saving position data:", err);
        res.status(500).send("Failed to save position data");
    }
});

// Route to get all holdings
app.get("/allHoldings", async (req, res) => {
    const data = await HoldingModel.find({});
    res.json(data);
});

// Route to get all positions
app.get("/allPositions", async (req, res) => {
    const data = await PositionModel.find({});
    res.json(data);
});

// Route to place a new order
app.post('/newOrder', async (req, res) => {
    console.log(req.body); 
    try{
        const neworder= new Ordermodel({
         name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode: req.body.mode
        })
        await neworder.save();
        res.json({ message: "Order received!" });

    }catch(err){
        console.log(err);
        res.send("there is an error")

    }

});
