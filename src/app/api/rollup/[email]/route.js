import { connectDB } from "../../../../../lib/mongodb";

export async function GET(req, res, context) {
    try {

      // const { email } = req.params;
      const email = req.url.split('/')[req.url.split('/').length-1]
  
      const db = await connectDB();
      console.log("Connected to MongoDB");
  
      const result = await db.collection("rollup").find({ email: email }).toArray();
  
      if (result) {
        return Response.json({
          status: true,
          message: "Data retrieved successfully.",
          data: result,
        });
      } else {
        return Response.json({
          status: false,
          message: "Data not found for the specified email.",
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