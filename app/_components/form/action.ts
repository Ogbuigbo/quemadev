"use server"
import { headers } from "next/headers"

export const handleSubmit = async (formData: FormData) => {
	const origin = headers().get("origin")

	const response = await fetch(`${origin}/api/contact`, {
		method: "POST",
		body: formData,
	})

	if (response.ok) {
		return true
	}

	return false
}
