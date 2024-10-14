import Image from "next/image"
import React from "react"
import ContactUsForm from "./form"

function Contact() {
	return (
		<div
			className=" mb-[40px] lg:mb-[100px] xl:px-[120px] lg:px-[50px] px-6"
			id="contact-us"
		>

				<ContactUsForm />
		</div>
	)
}

export default Contact
