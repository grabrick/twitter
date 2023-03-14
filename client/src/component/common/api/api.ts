import axios from "axios"


export const getPosts = () => {
    axios.get('http://localhost:3000/api/tweet/Tweet')
    .then((items) => {
        return items.data.candidate
    }).catch(() => {
      console.log("Error")
    })
}