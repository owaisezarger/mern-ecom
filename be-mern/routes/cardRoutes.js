const express = require("express");
const { v4: uuidv4 } = require("uuid"); // Import the uuid library
const Card = require("../models/Card");

const router = express.Router();

// GET all cards
router.get("/getAll", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST a new card
router.post("/add", async (req, res) => {
  try {
    const { image, title, description } = req.body;

    // Generate a UUID for the new card
    const cardId = uuidv4();

    // Create a new card with the generated UUID
    const newCard = new Card({ cardId, image, title, description });

    // Save the card to the database
    await newCard.save();

    res.status(201).json({ message: "Card added successfully", card: newCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
