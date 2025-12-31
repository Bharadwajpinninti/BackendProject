import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";  // adjust path if needed

import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.get('/', (req, res) => {
  res.send('Server started working');
});

const PORT = process.env.PORT || 5000;

// === FIXED PART ===
const startServer = async () => {
  try {
    await connectDB();  // Wait for successful connection
    console.log("MongoDB Connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);  // Exit if DB connection fails
  }
};

startServer();