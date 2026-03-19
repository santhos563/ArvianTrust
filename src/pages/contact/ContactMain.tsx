import { EnvelopeIcon, MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const ContactMain = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    // Replace these with your actual EmailJS credentials
    const EMAILJS_SERVICE_ID = 'service_0elwvkv';
    const EMAILJS_TEMPLATE_ID = 'template_jp6ufsj';
    const EMAILJS_PUBLIC_KEY = 'eQ3cHTEDqueKjIb2m';

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        // Prepare template parameters
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone || 'Not provided',
            message: data.message,
            to_email: 'arivantrust2022@gmail.com', // Your trust's email
            reply_to: data.email
        };

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for contacting us! We have sent a confirmation email to your inbox and will get back to you soon.'
                });
                reset(); // Clear the form
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, something went wrong. Please try again later or contact us directly at arivantrust2022@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-main bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-3xl font-semibold text-[#1f6f5e] mb-3">
                        Get In Touch
                    </h1>
                    {/* Green Line */}
                    <div className="w-22 h-1 bg-[#1f6f5e] mx-auto mt-3 rounded"></div>
                    <p className="text-gray-600 mt-4">
                        Have questions or want to support our cause? We'd love to hear from you.
                    </p>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                    <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-700'
                        : 'bg-red-50 border border-red-200 text-red-700'
                        }`}>
                        {submitStatus.message}
                    </div>
                )}

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Left - Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl">
                        <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-lg font-semibold text-[#1f6f5e] mb-6">
                            Send Us a Message
                        </h2>

                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    {...register("name", { required: "Full name is required" })}
                                    placeholder="Enter your full name"
                                    className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#1f6f5e]"
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Email Address *
                                </label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Enter valid email"
                                        }
                                    })}
                                    placeholder="your.email@example.com"
                                    className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#1f6f5e]"
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    {...register("phone", {
                                        pattern: {
                                            value: /^[0-9]{10,13}$/,
                                            message: "Enter valid phone number"
                                        }
                                    })}
                                    placeholder="+91 1234567890"
                                    className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#1f6f5e]"
                                    disabled={isSubmitting}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Message *
                                </label>
                                <textarea
                                    rows={4}
                                    {...register("message", { required: "Message is required" })}
                                    placeholder="Tell us how we can help you..."
                                    className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#1f6f5e]"
                                    disabled={isSubmitting}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[#1f6f5e] text-white py-2 rounded-md hover:bg-[#185a4c] transition duration-300 cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>

                    </div>

                    {/* Right - Contact Info */}
                    <div className="space-y-6">

                        <div>
                            <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-lg font-semibold text-[#1f6f5e] mb-2">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Feel free to reach out to us through any of the following channels.
                                We're here to answer your questions and discuss how you can help.
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-5 rounded-lg shadow-xl flex items-center gap-4">
                            <div className="bg-[#1f6f5e] text-white p-3 rounded-2xl">
                                <EnvelopeIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p style={{ fontFamily: "Playfair Display, serif" }} className="font-medium text-gray-900">Email Us</p>
                                <a href="mailto:arivantrust2022@gmail.com" className="text-[#1f6f5e] text-sm cursor-pointer">
                                    arivantrust2022@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white p-5 rounded-lg shadow-xl flex items-center gap-4">
                            <div className="bg-[#1f6f5e] text-white p-3 rounded-2xl">
                                <MapPinIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p style={{ fontFamily: "Playfair Display, serif" }} className="font-medium text-gray-900">Our Location</p>
                                <p className="text-gray-600 text-sm">Tamil Nadu, India</p>
                            </div>
                        </div>

                        {/* Support Mission Box */}
                        <div className="bg-[#1f6f5e] text-white p-6 rounded-xl shadow">
                            <h3 style={{ fontFamily: "Playfair Display, serif" }} className="font-semibold mb-3">Support Our Mission</h3>
                            <p className="text-sm mb-4">
                                Every contribution helps us provide education and resources to children in need.
                            </p>

                            <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-4 text-white-400" />
                                    Educational Materials
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-4 text-white-400" />
                                    School Uniforms
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="w-6 h-4 text-white-400" />
                                    Financial Support
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMain;