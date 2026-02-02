import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email notification to info@eufta.in
    const notificationSubject = `New PDF Request: 2026 Tariff Schedule - ${email}`;
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">New PDF Request: 2026 Tariff Schedule</h2>
        <p>A customer has requested the 2026 Tariff Schedule PDF.</p>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })}</p>
        </div>
        <p style="color: #dc2626; font-weight: bold;">Action Required: Send the 2026 Tariff Schedule PDF to the customer.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
        <p style="color: #6b7280; font-size: 12px;">This is an automated notification from eufta.in</p>
      </div>
    `;

    // Send notification email to info@eufta.in
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "noreply@eufta.in",
          to: "info@eufta.in",
          subject: notificationSubject,
          html: notificationHtml,
          replyTo: email, // So you can reply directly to the customer
        });

        console.log("Notification email sent to info@eufta.in for customer:", email);
      } catch (emailError) {
        console.error("Error sending notification email:", emailError);
        // Continue even if email fails - don't break the user experience
      }
    } else {
      console.warn("RESEND_API_KEY not set. Email notification skipped.");
      console.log("PDF Request received (email not sent):", {
        customerEmail: email,
        notificationTo: "info@eufta.in",
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "PDF request received. You will receive the download link via email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing PDF request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
