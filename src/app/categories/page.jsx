import React from 'react'
import fetchPosts from '../fetchPosts'
import BookCard from '../components/BookCard'

export default async function page() {
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
                    return(
                        <div>
                            <div key={cat} className='text-3xl flex flex-row'>{cat}</div>

                            {
                                postsArray.map(post =>
                                    {
                                        {console.log(post)
                                        console.log("hihi")}
            
                                        return (
            
                                            
                                            <div key = {post.id} className='flex flex-row'>
                                                <BookCard post = {post}/>
                                            </div>
                                            )
                                    
                                        })
                                
                            }
                        </div>
                        
                    )
                    
                    
                    } 
                
            )
        }
    </div>
  )
}

