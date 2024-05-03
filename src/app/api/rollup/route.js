import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/mongodb";

export async function POST(req, res) {
  try {
    const { ...data } = await req.json();

    const db = await connectDB();
    console.log("Connected to MongoDB");

    const result = await db.collection("rollup").insertOne({
      data,
    });

    if (result.insertedId) {
      return Response.json({
        status: true,
        message: "Data inserted successfully.",
        user: result,
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
