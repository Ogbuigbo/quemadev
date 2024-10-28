"use client"
import React, { useRef } from "react"
import { handleSubmit } from "./action"
import { toast } from "react-toastify"

function Form() {
	const ref = useRef<HTMLFormElement>(null)

	const _handleSuccess = () => {
		toast.dark(
			"Your message has been received. We will get back to you shortly"
		)
		ref.current?.reset()
	}
	const _handleError = () => {
		toast.dark(
			"An error occurred while sending your message. Please try again later."
		)
	}

	const _handleSubmit = async (formData: FormData) => {
		const resp = await handleSubmit(formData)
		if (resp) {
			_handleSuccess()
		} else {
			_handleError()
		}
	}

	return (
		<section className="py-16">
			<div className=" bg-white p-8 rounded-lg shadow-lg border border-[#e0e0e0]">
				<h1 className="font-bold text-3xl text-gray-800 mb-8 text-left">
					Contact Us
				</h1>
				<form
					action={_handleSubmit}
					className="space-y-6"
					ref={ref}
				>
					<div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-8">
						<div className="flex flex-col">
							<label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name <span className="text-red-600">*</span></label>
							<input
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  transition-all placeholder-gray-500 text-sm"
								placeholder="Enter your name"
								type="text"
								id="name"
								name="name"
								required
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email Address <span className="text-red-600">*</span></label>
							<input
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  transition-all placeholder-gray-500 text-sm"
								placeholder="Enter your email"
								type="email"
								id="email"
								name="email"
								required
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="phone" className="text-gray-700 font-semibold mb-2">Phone <span className="text-gray-400">(optional)</span></label>
							<input
								className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  transition-all placeholder-gray-500 text-sm"
								placeholder="Enter your phone number"
								type="tel"
								id="phone"
								name="phone"
							/>
						</div>
					</div>

					<div className="flex flex-col">
						<label htmlFor="message" className="text-gray-700 font-semibold mb-2">Message</label>
						<textarea
							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#4a90e2] transition-all placeholder-gray-500 text-sm"
							placeholder="Write your message here..."
							rows={6}
							id="message"
							name="message"
							required
						/>
					</div>

					<div className="flex  mt-6">
						<button
							type="submit"
							className="inline-block bg-[#5f1928] hover:bg-[#a23d58] transition-colors text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Form
