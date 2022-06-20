const mongoose = require("mongoose");

const BrewerySchema = new mongoose.Schema({
  address_2: String,
  address_3: String,
  brewery_type: String,
  city: String,
  country: String,
  county_province: String,
  created_at: String,
  id: String,
  latitude: String,
  longitude: String,
  name: String,
  phone: String,
  postal_code: String,
  state: String,
  street: String,
  updated_at: String,
  website_url: String,
});

const BreweryModel = mongoose.model("Brewery", BrewerySchema);
module.exports.BreweryModel = BreweryModel;
