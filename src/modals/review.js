const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    trim: true,
    min: 1,
    max: 5,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
