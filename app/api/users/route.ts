import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }
  try {
    const response = await axios.get(apiUrl);
    const {data} = response;
    
    return NextResponse.json(data);

  } catch (error) {
   // console.log("[USERS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}