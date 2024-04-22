import { sendMail } from "@/utils/mail";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // sendMail("Testing Mailing", "abbasaskari797@gmail.com", "hello");
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'abbasaskari797@gmail.com',
        to: ['aztro.webdev@gmail.com', 'zali.bscs22seecs@seecs.edu.pk'],
        subject: 'hello world',
        html: '<strong>it works!</strong>',
      }),
    });

    console.log(await res.json());


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
    // sendMail(data.message);

    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'abbasaskari797@codeleet.netlify.app',
    //     to: ['aztro.webdev@gmail.com', 'zali.bscs22seecs@seecs.edu.pk'],
    //     subject: 'hello world',
    //     html: '<strong>it works!</strong>',
    //   }),
    // });

    console.log(await res.json());


    return NextResponse.json({ message: "Hello" }, { status: 200 });
  } catch (error) {
    console.error("Failed: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
