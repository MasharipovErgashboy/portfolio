import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getStats = () => api.get("/stats/")
export const getAboutMe = () => api.get("/about-me/")
export const getExperiences = () => api.get("/experiences/")
export const getSkillCategories = () => api.get("/skill-categories/")
export const getSkills = () => api.get("/skills/")
export const getProfessionalCourses = () => api.get("/professional-courses/")
export const getUniversities = () => api.get("/universities/")
export const getProjects = (params?: any) => api.get("/projects/", { params })
export const getProjectBySlug = (slug: string) => api.get(`/projects/${slug}/`) // Assuming standard DRF or I need to update the view
export const getProjectCategories = () => api.get("/project-categories/")
export const getBlogPosts = (params?: any) => api.get("/blog-posts/", { params })
export const getBlogCategories = () => api.get("/blog-categories/")
export const getContactInfo = () => api.get("/contact-info/")
export const getSocialLinks = () => api.get("/social-links/")
export const postMessage = (data: any) => api.post("/messages/", data)

export default api
