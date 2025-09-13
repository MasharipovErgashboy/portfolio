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
      title: "My Journey Across Three Universities",
      excerpt: "How I'm managing simultaneous studies in IT, Psychology, and Linguistics across Japan and Uzbekistan",
      date: "2024-01-15",
      category: "personal",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300&text=University+Journey",
      telegramUrl: "https://t.me/your_username", // 🔗 Telegram link
    },
    {
      title: "Building SU Academy: From Idea to 5000+ Users",
      excerpt: "The complete story behind creating a Japanese learning platform that reached thousands of learners",
      date: "2024-01-10",
      category: "personal",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300&text=SU+Academy+Story",
      telegramUrl: "https://t.me/your_username",
    },
    {
      title: "The Future of AI in Language Learning",
      excerpt: "How artificial intelligence is revolutionizing the way we learn and teach languages",
      date: "2024-01-05",
      category: "technology",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300&text=AI+Language",
      telegramUrl: "https://t.me/your_username",
    },
    {
      title: "Study Tips for Multi-University Students",
      excerpt: "Practical advice for managing multiple degree programs simultaneously",
      date: "2023-12-20",
      category: "education",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300&text=Study+Tips",
      telegramUrl: "https://t.me/your_username",
    },
    {
      title: "React vs Vue: A Developer's Perspective",
      excerpt: "Comparing two popular frontend frameworks based on real project experience",
      date: "2023-12-15",
      category: "technology",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300&text=React+vs+Vue",
      telegramUrl: "https://t.me/your_username",
    },
    {
      title: "Living and Studying in Japan as an Uzbek Student",
      excerpt: "Cultural insights and practical tips for international students in Japan",
      date: "2023-12-10",
      category: "personal",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300&text=Japan+Life",
      telegramUrl: "https://t.me/your_username",
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
        {/* Enhanced Blog Filters */}
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
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant={
                        post.category === "personal"
                          ? "default"
                          : post.category === "education"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs capitalize"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
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
                    className="w-full"
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
