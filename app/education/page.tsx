"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle, Briefcase as Certificate } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"

export default function EducationPage() {
  const universities = [
    {
      name: "Japan Digital University",
      degree: "IT Engineering",
      period: "2022-2025",
      status: "Active",
      image: "/jdu.png",
      website: "https://jdu.uz",
      country: "🇯🇵 Japan",
      description:
        "Specializing in modern software engineering and digital technologies with focus on AI and machine learning applications.",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Best Project Award", "AI Research"],
    },
    {
      name: "Kyoto Tachibana University",
      degree: "Psychology",
      period: "2023-2026",
      status: "Active",
      image: "/kyoto.png",
      website: "https://www.tachibana-u.ac.jp/english/",
      country: "🇯🇵 Japan",
      description:
        "Understanding human behavior and cognitive processes with emphasis on cross-cultural psychology and language acquisition.",
      gpa: "3.9/4.0",
      achievements: ["Research Excellence", "Cultural Exchange Program", "Psychology Award"],
    },
    {
      name: "UzSWLU",
      degree: "Computer Linguistics",
      period: "2023-2027",
      status: "Active",
      image: "/jahon_tillari.png",
      website: "https://uzswlu.uz",
      country: "🇺🇿 Uzbekistan",
      description:
        "Computational linguistics and natural language processing with focus on multilingual systems and AI-powered translation.",
      gpa: "4.9/5.0",
      achievements: ["Top Student", "Linguistics Competition Winner", "Research Publication"],
    },
  ]

  const courses = [
    {
      title: "Full Stack Development",
      provider: "Amazon",
      platform: "Coursera",
      completed: "2023",
      certificate: "Professional Certificate",
      image: "/amazon1.jpg",
      skills: ["AWS", "Full Stack", "Cloud Computing"],
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/U6B07QP2GA10",
    },
    {
      title: "Introduction to Backend Development",
      provider: "Meta",
      platform: "Coursera",
      completed: "2023",
      certificate: "Professional Certificate",
      image: "/meta.png",
      skills: ["Backend", "APIs", "Database Design"],
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/W002R5SHGCE0",
    },
    {
      title: "Professional Skills for International Business",
      provider: "University of London",
      platform: "Coursera",
      completed: "2022",
      certificate: "Specialization",
      image: "/University_of_London.png",
      skills: ["Business Strategy", "Global Markets", "Management"],
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/7G4MCL01INDO",
    },
    {
      title: "Introduction to Project Management",
      provider: "IBM",
      platform: "Coursera",
      completed: "2022",
      certificate: "Professional Certificate",
      image: "/IBM.png",
      skills: ["Project Management", "Agile", "Leadership"],
      certificateUrl: "https://www.coursera.org/account/accomplishments/verify/7GGRCTD8BKF0",
    },
  ]

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Universities */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Universities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {universities.map((uni, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 dark:border-gray-600"
                    onClick={() => window.open(uni.website, "_blank")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-600 shadow-lg flex-shrink-0">
                          <img
                            src={uni.image || "/placeholder.svg"}
                            alt={uni.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 text-left">{uni.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-left">{uni.country}</p>
                          <Badge variant={uni.status === "Active" ? "default" : "secondary"} className="text-xs">
                            {uni.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-lg">{uni.degree}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{uni.period}</p>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">GPA: {uni.gpa}</p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{uni.description}</p>

                        <div>
                          <h5 className="font-medium text-sm mb-2 dark:text-white">Achievements:</h5>
                          <div className="space-y-1">
                            {uni.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:border-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit University
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Courses */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Professional Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center shadow-md">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.provider}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2">
                            {course.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{course.provider}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {course.platform} • {course.completed}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          {course.certificate}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 dark:text-white">Skills Gained:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Certificate Earned</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent dark:border-gray-600 dark:hover:bg-gray-600"
                          onClick={() => window.open(course.certificateUrl, "_blank")}
                        >
                          <Certificate className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </PortfolioLayout>
  )
}
