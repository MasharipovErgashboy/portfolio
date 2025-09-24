"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"

export default function BlogPage() {
  const [blogFilter, setBlogFilter] = useState("all")
  
  const blogPosts = [
    {
      title: "ICT Week 2025: O‘zbekiston–Yaponiya Forumi va Global Expo",
      excerpt:
        "Bugungi ICT Week doirasidagi O‘zbekiston–Yaponiya forumi va dunyoning yirik kompaniyalari taqdimotlari hamda innovatsion mahsulotlar ko‘rgazmasi haqida taassurotlarim",
      date: "2025-09-24",
      category: "technology",
      readTime: "5 min read",
      image: "/photo_2025-09-24_16-23-47.jpg",
      telegramUrl: "https://www.instagram.com/iam_masharipov/",
    },

    {
      title: "My Journey Across Three Universities",
      excerpt:
        "How I'm managing simultaneous studies in IT, Psychology, and Linguistics across Japan and Uzbekistan",
      date: "2025-09-13",
      category: "personal",
      readTime: "5 min read",
      image: "/kkkk.png",
      telegramUrl: "https://t.me/su_academya",
    },
  ]

  const blogCategories = [
    { id: "all", label: "All Posts" },
    { id: "personal", label: "Personal" },
    { id: "education", label: "Education" },
    { id: "technology", label: "Technology" },
  ]

  const filteredBlogs =
    blogFilter === "all" ? blogPosts : blogPosts.filter((post) => post.category === blogFilter)

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Blog Filters */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
              <Filter className="w-6 h-6" />
              <h3 className="text-xl font-bold">Blog Categories</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={blogFilter === category.id ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setBlogFilter(category.id)}
                  className={`text-xs h-8 px-3 ${
                    blogFilter === category.id
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBlogs.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                {/* Rasim + Gradient Background */}
                <div className="aspect-video relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant={
                        post.category === "personal"
                          ? "default"
                          : post.category === "education"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs capitalize shadow-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                    onClick={() => {
                      if (post.telegramUrl) {
                        window.open(post.telegramUrl, "_blank")
                      }
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PortfolioLayout>
  )
}
