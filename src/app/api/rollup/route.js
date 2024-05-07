import { connectDB } from "../../../../lib/mongodb";
import { sendMail } from "../constant";

export async function POST(req, res) {
  try {
    const { ...data } = await req.json();

    const db = await connectDB();
    console.log("Connected to MongoDB");

    const result = await db.collection("rollup").insertOne({
      ...data,
    });

    let trData = "";
    for (let key in data) {
      trData += `
      <tr>
      <td>${key}</td>
      <td>${data[key]}</td>
    </tr>
      `;
    }
    let table = `
    <table border="1">
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
   ${trData}
  </tbody>
</table>
    `;
    await sendMail(
      data.email,
      "Rollup details submitted",
      "",
      "Hi congrats !, You recently submitted the rollup details." + table
    );
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
