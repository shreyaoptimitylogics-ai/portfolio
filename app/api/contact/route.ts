
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message, From, phone, subject } = body;

    try {
        await fetch(process.env.SLACK_WEBHOOK_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: `*New Portfolio Contact!*
*From:* ${From}
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}
*Message:* ${message}`,
            }),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}