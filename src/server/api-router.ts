import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "../test-data.json";

router.get("/contests", (req, res) => {
  // get the data from MongoDB
  res.send({ contests: testData });
});

// router.get("/contest")

export default router;
