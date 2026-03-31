import "dotenv/config";
import dns from "dns";
import connectDB from "./db/index.js";

// DNS server added na korle kaj kore na database connection korte gele.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 8000;

connectDB();

console.log(process.env.MONGODB_URI);

/* 
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
