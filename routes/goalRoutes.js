const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middlware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoals);

module.exports = router;
