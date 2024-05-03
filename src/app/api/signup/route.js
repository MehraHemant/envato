import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/mongodb";

export async function POST(req, res) {
  try {
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const db = await connectDB();
    console.log("Connected to MongoDB");

    const user = await db.collection("user").findOne({ email });

    if (user) {
      return Response.json({
        status: false,
        message: "User already exist.",
      });
    }

    const result = await db.collection("user").insertOne({
      email,
      password: hashedPassword,
    });

    if (result.insertedId) {
      return Response.json({
        status: true,
        message: "Signup successfully.",
        user: user,
      });
    } else {
      return Response.json({
        status: false,
        message: "Something went wrong.",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return Response.json({
      status: false,
      message: "Something went wrong.",
      data: error,
    });
  }
}
