"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, Github, Linkedin, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import emailjs from "emailjs-com"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_wq0lr8t",   // 🔑 Email Service ID
        "template_d56nlnm",  // 🔑 Email Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          budget: formData.budget,
          message: formData.message,
        },
        "phl3UonrUX0suq3ee"    // 🔑 Public Key (API key)
      )
      .then(
        () => {
          alert("✅ Xabar muvaffaqiyatli yuborildi!")
          setFormData({ from_name: "", from_email: "", subject: "", budget: "", message: "" })
        },
        (error) => {
          alert("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.")
          console.error(error.text)
        }
      )
  }

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* 🔹 Hero Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="p-10 text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-blue-100">
              Interested in working together? Fill out the form below or reach out via social media.
            </p>
          </CardContent>
        </Card>

        {/* 🔹 Contact Info + Social Links */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 dark:text-white">
        <User className="w-5 h-5" />
        <span>Contact Info</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center space-x-3">
        <Mail className="w-4 h-4 text-blue-500" />
        <span>ergashmasharipov88@gmail.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-4 h-4 text-green-500" />
        <span>+998 88 709 50 66</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="w-4 h-4 text-red-500" />
        <span>Tashkent, Uzbekistan</span>
      </div>
    </CardContent>
  </Card>

  {/* 🌐 Social Media Section */}
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 dark:text-white">
        <Globe className="w-5 h-5" />
        <span>Social Media</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-center md:justify-start space-x-6">
        {/* GitHub */}
        <motion.a
          href="https://github.com/MasharipovErgashboy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <Github className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="www.linkedin.com/in/ergashboy-masharipov-0a9820298"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 transition"
        >
          <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/iam_masharipov/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-600 transition"
        >
          <Instagram className="w-6 h-6 text-pink-500" />
        </motion.a>
      </div>
    </CardContent>
  </Card>
</div>


        {/* 🔹 Contact Form */}
        <div className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={sendEmail}>
                {/* Name */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development Project</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consultation">Consultation</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 h-12"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </PortfolioLayout>
  )
}
