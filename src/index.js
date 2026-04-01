import "dotenv/config";
import dns from "dns";
import connectDB from "./db/index.js";

// DNS server added na korle kaj kore na database connection korte gele.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 8000;

connectDB();
