import * as nodemailer from "nodemailer";

type TMailOptions = {
	subject: string;
	html: string;
	to?: string;
};

const transporter = nodemailer.createTransport({
	host: process.env["GOOGLE_HOST"],
	port: parseInt(process.env["GOOGLE_PORT"] || "587"),
	secure: false,
	auth: {
		user: process.env["GOOGLE_USER"],
		pass: process.env["GOOGLE_PASSWORD"],
	},
});

const sendMail = async ({ to, ...options }: TMailOptions) => {
	try {
		const info = await transporter.sendMail({
			from: "Quema Consulting <quemaconsulting@gmail.com>",
			to: [to || "quemaconsulting@gmail.com"],
			...options,
		});
		console.log("Mail sent:", info);
	} catch (error) {
		console.error("Error sending mail:", error);
	}
};

export { sendMail };
