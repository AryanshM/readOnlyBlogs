import React from 'react'

async function fetchPosts() {
        let posts = await fetch("https://api.vercel.app/blog")
    if (posts.ok){
        posts = await posts.json()
    }
    else{
        posts = []
    }

  return posts
}

export default fetchPosts