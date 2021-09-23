const express = require("express");
const router = express.Router();

const Review = require("../modals/review");

router.post("/new", async (req, res) => {
  const review = new Review({
    reviewText: req.body.reviewText,
    rating: req.body.rating,
  });
  try {
    await review.save();
    res.send();
  } catch (e) {
    res.send({ message: "Review were not submitted", e });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (e) {
    res.send({ message: "Could not fetch Data" });
  }
});

module.exports = router;
