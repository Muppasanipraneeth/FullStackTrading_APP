const {model}=require("mongoose");
const {WatchListSchema}=require("../schemas/Watchlistschema");
const WatchListModel= model("watch",WatchListSchema);
module.exports={WatchListModel};