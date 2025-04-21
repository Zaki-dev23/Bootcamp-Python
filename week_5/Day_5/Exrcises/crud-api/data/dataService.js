const axios = require("axios")


async function fetchPosts(url) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        throw new Error("Error to fetching posts");

    }
}


module.exports = {
    fetchPosts
}