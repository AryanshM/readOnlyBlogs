import React from 'react'
import fetchPosts from '../fetchPosts'
import BookCard from '../components/BookCard'

async function page() {
    let categories = {}
    const posts = await fetchPosts()

    posts.map(post => {
        const cat = post.category
        if (!(cat in categories)){
            categories[cat] = [post]
        }
        else{
            categories[cat].push(post)
        }
    }
    )
    console.log(categories)
    // categories = { cat : [ , , ]}
  return (
    <div className='flex flex-row flex-wrap'>
        {
            Object.keys(categories).map(
                cat => {
                    const postsArray = categories[cat]
                    postsArray.map(post =>{
                        console.log(post)
                        console.log("hihi")
                        return (
                            <div key={post.id}>
                                <div>post.title</div>
                            </div>
                        )
                    })
            
                    } 
                
            )
        }
    </div>
  )
}

export default page