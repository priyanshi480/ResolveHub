const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://priyanshi195:hello234@datab.p6s6z.mongodb.net/grievance?retryWrites=true&w=majority&appName=datab",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

