import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    try {
        /* ===============================
           1. MAIL TO YOU (ADMIN MAIL)
        =============================== */
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `📩 New Inquiry: ${subject || "Portfolio Contact"}`,
            html: `
      <div style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" style="max-width:650px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
                
                <!-- HEADER -->
                <tr>
                  <td style="background:linear-gradient(135deg,#7c3aed,#2563eb);padding:28px 32px;color:#ffffff;">
                    <h1 style="margin:0;font-size:24px;">📬 New Portfolio Inquiry</h1>
                    <p style="margin:8px 0 0;font-size:14px;opacity:.9;">
                      Someone contacted you from your portfolio website.
                    </p>
                  </td>
                </tr>

                <!-- BODY -->
                <tr>
                  <td style="padding:32px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #eee;">
                          <strong style="color:#111;">Name:</strong><br/>
                          <span style="color:#555;">${name}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #eee;">
                          <strong style="color:#111;">Email:</strong><br/>
                          <span style="color:#555;">${email}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #eee;">
                          <strong style="color:#111;">Subject:</strong><br/>
                          <span style="color:#555;">${subject || "Portfolio Contact"}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:18px 0 8px;">
                          <strong style="color:#111;">Message:</strong>
                        </td>
                      </tr>

                      <tr>
                        <td style="background:#f8fafc;border-radius:12px;padding:18px;color:#444;line-height:1.7;">
                          ${message}
                        </td>
                      </tr>
                    </table>

                    <div style="margin-top:28px;">
                      <a href="mailto:${email}"
                        style="display:inline-block;background:#111827;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:600;">
                        Reply to ${name}
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding:22px 32px;background:#f8fafc;color:#777;font-size:12px;text-align:center;">
                    Portfolio Notification • ${new Date().toLocaleString()}
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>
      `,
        });

        /* ===============================
   2. CONFIRMATION MAIL TO USER
   (Replace your current block with this)
=============================== */
        await transporter.sendMail({
            from: `"Shreya Prajapati" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "✨ Thank you for reaching out | Shreya Prajapati",
            html: `
  <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 18px;">
      <tr>
        <td align="center">

          <table width="100%" cellpadding="0" cellspacing="0"
            style="max-width:680px;background:#ffffff;border-radius:22px;overflow:hidden;box-shadow:0 14px 40px rgba(0,0,0,0.08);">

            <!-- HEADER -->
            <tr>
              <td style="background:linear-gradient(135deg,#111827,#1e293b,#7c3aed);padding:42px 34px;text-align:center;color:#ffffff;">
                <div style="font-size:34px;line-height:1;">✨</div>

                <h1 style="margin:14px 0 10px;font-size:28px;font-weight:700;">
                  Thank You, ${name}!
                </h1>

                <p style="margin:0;font-size:15px;line-height:1.6;opacity:.92;">
                  Your message has been received successfully.
                </p>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:38px 34px;">

                <p style="margin:0 0 18px;font-size:15px;color:#374151;line-height:1.8;">
                  Hi <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 18px;font-size:15px;color:#374151;line-height:1.8;">
                  Thank you for contacting me through my portfolio website.
                  I appreciate your interest and the time you took to write.
                </p>

                <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.8;">
                  I’ll review your message carefully and get back to you within
                  <strong>24 hours</strong>.
                </p>

                <!-- MESSAGE BOX -->
                <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:22px;margin-bottom:26px;">
                  <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:1px;color:#6b7280;text-transform:uppercase;">
                    Your Submitted Message
                  </p>

                  <p style="margin:0;font-size:15px;color:#111827;line-height:1.8;white-space:pre-line;">
                    ${message}
                  </p>
                </div>

                <!-- INFO CARDS -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                  <tr>
                    <td width="50%" style="padding-right:8px;">
                      <div style="background:#fafafa;border:1px solid #ececec;border-radius:14px;padding:16px;">
                        <p style="margin:0 0 6px;font-size:12px;color:#6b7280;">Response Time</p>
                        <p style="margin:0;font-size:15px;font-weight:700;color:#111827;">Within 24 Hours</p>
                      </div>
                    </td>

                    <td width="50%" style="padding-left:8px;">
                      <div style="background:#fafafa;border:1px solid #ececec;border-radius:14px;padding:16px;">
                        <p style="margin:0 0 6px;font-size:12px;color:#6b7280;">Status</p>
                        <p style="margin:0;font-size:15px;font-weight:700;color:#16a34a;">Received Successfully</p>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- BUTTON -->
                <div style="text-align:center;margin-top:8px;">
                  <a href="mailto:${process.env.GMAIL_USER}"
                    style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#ffffff;text-decoration:none;padding:14px 26px;border-radius:999px;font-size:14px;font-weight:700;">
                    Reply / Contact Again
                  </a>
                </div>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background:#f8fafc;padding:26px 30px;text-align:center;border-top:1px solid #e5e7eb;">

                <p style="margin:0 0 6px;font-size:14px;color:#111827;font-weight:700;">
                  Shreya Prajapati
                </p>

                <p style="margin:0 0 10px;font-size:13px;color:#6b7280;">
                  Frontend Developer • React • Next.js • UI/UX
                </p>

                <p style="margin:0;font-size:12px;color:#9ca3af;">
                  This is an automated confirmation email.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `,
        });
        /* ===============================
           3. SLACK ALERT
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