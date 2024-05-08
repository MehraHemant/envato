import { connectDB } from "../../../../lib/mongodb";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();
    const db = await connectDB();
    console.log("Connected to MongoDB");
    const user = await db.collection("user").findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign({ email }, "secret", {
          expiresIn: "4h",
        });
        return Response.json({
          status: true,
          message: "Login successful",
          email: user.email,
          token
        });
      } else {
        return Response.json({
          status: false,
          message: "Invalid credentials",
        });
      }
    } else {
      return Response.json({
        status: false,
        message: "User not found.",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return Response.json({
      status: false,
      message: "Internal Server Error",
    });
  }
}
