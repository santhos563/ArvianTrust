import { EnvelopeIcon, MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};
const ContactMain = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Form submitted successfully!");
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
                                />

                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Subject *
                                </label>

                                <select
                                    {...register("subject", { required: "Please select a subject" })}
                                    className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#1f6f5e]"
                                >
                                    <option value="">Select a subject</option>
                                    <option>General Inquiry</option>
                                    <option>Make a Donation</option>
                                    <option>Volunteer Opportunities</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>

                                {errors.subject && (
                                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
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
                                />

                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1f6f5e] text-white py-2 rounded-md hover:bg-[#185a4c] transition duration-300 cursor-pointer"
                            >
                                Send Message
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
                                <a href="mailto:info@arviantrust.org" className="text-[#1f6f5e] text-sm cursor-pointer">
                                    info@arviantrust.org
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