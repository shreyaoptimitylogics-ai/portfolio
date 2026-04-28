import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    try {
        /* ===============================
           SLACK ALERT ONLY
        =============================== */
        await fetch(process.env.SLACK_WEBHOOK_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                blocks: [
                    {
                        type: "header",
                        text: { type: "plain_text", text: "📬 New Portfolio Inquiry!" },
                    },
                    {
                        type: "section",
                        fields: [
                            { type: "mrkdwn", text: `*Name:*\n${name}` },
                            { type: "mrkdwn", text: `*Email:*\n${email}` },
                        ],
                    },
                    {
                        type: "section",
                        text: { type: "mrkdwn", text: `*Subject:*\n${subject || "Portfolio Contact"}` },
                    },
                    {
                        type: "section",
                        text: { type: "mrkdwn", text: `*Message:*\n${message}` },
                    },
                ],
            }),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
