import React from "react"
import axios from "axios"

const movieBaseurl = "https://api.themoviedb.org/3/trending/movie/day?api_key="
const api_key = "a7af1114bbebcb36d009343210bd7385"

const getTrendingVideos = axios.get(movieBaseurl+api_key)

export default {
    getTrendingVideos
}
