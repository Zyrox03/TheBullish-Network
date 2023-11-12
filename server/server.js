const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const admin = require("firebase-admin");
const firebaseServiceAccount = require("./firebase/bullishnetwork-2959f-firebase-adminsdk-k5s16-216d69c4bc.json");

admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
});

const listUsersAsync = async () => {
  try {
    const { users } = await admin.auth().listUsers();
    // Sort users based on their creation time, from old to new
    const sortedUsers = users.sort((b, a) =>
      a.metadata.creationTime.localeCompare(b.metadata.creationTime)
    );

    return sortedUsers;
  } catch (error) {
    console.error("Error listing users:", error);
  }
};

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Bullish_Network");
  console.log("CONNECTED TO DATABASE !");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors());
app.use(helmet());


// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/admin", async (req, res) => {
  try {
    const listOfUsers = await listUsersAsync();
    res.status(200).json({ listOfUsers });
  } catch (error) {
    res.status(500).json(error);
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
