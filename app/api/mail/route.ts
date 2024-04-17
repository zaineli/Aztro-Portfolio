import { sendMail } from "@/utils/mail";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    sendMail("Testing Mailing", "abbasaskari797@gmail.com", "hello");
    return NextResponse.json({ message: "Hello" }, { status: 200 });
  } catch (error) {
    console.error("Failed: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);
    sendMail(data.message);
    return NextResponse.json({ message: "Hello" }, { status: 200 });
  } catch (error) {
    console.error("Failed: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
