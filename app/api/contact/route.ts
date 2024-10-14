import { sendMail } from "@/app/_helpers/mail.helper"

export async function POST(request: Request) {
	const formData = await request.formData()
	const name = formData.get("name")
	const email = formData.get("email")
	const phone = formData.get("phone")
	const message = formData.get("message")

	sendMail({
		subject: "New Message from Quema Consulting Website",
		html: `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px;">
			<h1 style="color: #821fa0; text-align: center;">Quema Consulting Limited</h1>
			<div style="text-align: center;">
				<img src='https://tinypic.host/images/2024/10/10/logo_primary_iINHMOrK.png' alt='logo' style="width: 150px; margin-bottom: 20px;" />
			</div>
			
			<p style="color: #333; font-size: 16px;">You have received a new message through the website contact form:</p>

			<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
				<tr>
					<td style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; font-weight: bold;">Name</td>
					<td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; font-weight: bold;">Email</td>
					<td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; font-weight: bold;">Phone</td>
					<td style="border: 1px solid #ddd; padding: 10px;">${phone}</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; font-weight: bold;">Message</td>
					<td style="border: 1px solid #ddd; padding: 10px;">${message}</td>
				</tr>
			</table>

			<p style="color: #555; font-size: 14px; text-align: center;">This message was sent from the contact form on the Quema Consulting website.</p>

			<div style="text-align: center; margin-top: 30px;">
				<p style="color: #821fa0; font-size: 12px;">Quema Consulting Limited</p>
			</div>
		</div>
		`,
	})

	return new Response("success", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	})
}
