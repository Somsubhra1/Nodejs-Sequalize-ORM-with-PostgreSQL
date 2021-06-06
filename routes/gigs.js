const router = require("express").Router();
const db = require("../config/database");

const Gig = require("../models/Gig");

// Get gigs list
router.get("/", async (req, res) => {
  try {
    //   Get all data from a table
    const gigs = await Gig.findAll();
    console.log(gigs);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

// Add a gig
router.get("/add", async (req, res) => {
  try {
    const data = {
      title: "Simple WP Website",
      technologies: "Wordpress, PHP, HTML, CSS",
      budget: "$1000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contact_email: "user2@gmail.com",
    };

    let { title, technologies, budget, description, contact_email } = data;

    // Insert into

    const gig = await Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email,
    });

    res.redirect("/gigs");
  } catch (error) {}
});

module.exports = router;
