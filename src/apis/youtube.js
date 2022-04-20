import axios from "axios"

const apiKey = 'AIzaSyA1kO3XkyjS0iwjbCsVJFGdZEBSinJeNQ8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: apiKey,
        type: 'video',
        //q params arama yapılırken oluşturulacak
    }
})