"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, Github, Linkedin, Instagram, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import emailjs from "emailjs-com"
import { useLocale, useTranslations } from "next-intl"
import useSWR from "swr"
import { getContactInfo, getSocialLinks } from "@/lib/api"
import { AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const t = useTranslations("Contact")
  const locale = useLocale()
  const { data: contactData } = useSWR("contactInfo", () => getContactInfo().then(res => res.data))
  const { data: socialData } = useSWR("socialLinks", () => getSocialLinks().then(res => res.data))

  const contactInfo = contactData?.[0] || null
  const socialLinks = socialData || []

  const getLocalized = (item: any, field: string) => {
    if (!item) return ""
    if (locale === "uz") return item[field]
    const localizedField = `${field}_${locale}`
    return item[localizedField] || item[field]
  }

  const [isSubmitted, setIsSubmitted] = useState(false)
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
          setIsSubmitted(true)
          setFormData({ from_name: "", from_email: "", subject: "", budget: "", message: "" })
        },
        (error) => {
          alert(t("error"))
          console.error(error.text)
        }
      )
  }

  return (
    <PortfolioLayout>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-10 max-w-sm w-full text-center shadow-2xl border dark:border-gray-800"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                <Check className="w-10 h-10" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">{t("success_modal_title")}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t("success")}
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100 rounded-2xl h-14 font-bold transition-all"
              >
                {t("close_button")}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* 🔹 Hero Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="p-10 text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{t("hero_title")}</h1>
            <p className="text-lg text-blue-100">
              {t("hero_subtitle")}
            </p>
          </CardContent>
        </Card>

        {/* 🔹 Contact Info + Social Links */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 dark:text-white">
        <User className="w-5 h-5" />
        <span>{t("info_title")}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center space-x-3">
        <Mail className="w-4 h-4 text-blue-500" />
        <span>{contactInfo?.email}</span>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-4 h-4 text-green-500" />
        <span>{contactInfo?.phone}</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="w-4 h-4 text-red-500" />
        <span>{getLocalized(contactInfo, 'location')}</span>
      </div>
    </CardContent>
  </Card>

  {/* 🌐 Social Media Section */}
  <Card className="dark:bg-gray-800 dark:border-gray-700">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 dark:text-white">
        <Globe className="w-5 h-5" />
        <span>{t("social_title")}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-center md:justify-start space-x-6">
        {socialLinks.map((link: any) => {
          const Icon = link.platform === "github" ? Github : link.platform === "linkedin" ? Linkedin : Instagram
          return (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <Icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </motion.a>
          )
        })}
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
                <span>{t("form_title")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={sendEmail}>
                {/* Name */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("name_label")}
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t("name_placeholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("email_label")}
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t("email_placeholder")}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("subject_label")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t("subject_placeholder")}</option>
                    <option value="web-development">{t("subjects.web")}</option>
                    <option value="mobile-app">{t("subjects.mobile")}</option>
                    <option value="ui-ux-design">{t("subjects.design")}</option>
                    <option value="consultation">{t("subjects.consultation")}</option>
                    <option value="collaboration">{t("subjects.collaboration")}</option>
                    <option value="other">{t("subjects.other")}</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("budget_label")}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t("budget_placeholder")}</option>
                    <option value="under-1000">{t("budgets.under_1000")}</option>
                    <option value="1000-5000">{t("budgets.1000_5000")}</option>
                    <option value="5000-10000">{t("budgets.5000_10000")}</option>
                    <option value="10000-plus">{t("budgets.10000_plus")}</option>
                    <option value="discuss">{t("budgets.discuss")}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("message_label")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                    placeholder={t("message_placeholder")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 h-12"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("send_button")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </PortfolioLayout>
  )
}
