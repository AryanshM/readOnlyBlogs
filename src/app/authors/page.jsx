import React from 'react'
import fetchPosts from '../fetchPosts'
import BookCard from '../components/BookCard'

export default async function page() {
    let authors = {}
    const posts = await fetchPosts()

    posts.map(post => {
        const author = post.author
        if (!(author in authors)){
            authors[author] = [post]
        }
        else{
            authors[author].push(post)
        }
    }
    )
    console.log(authors)
    // categories = { cat : [ , , ]}
  return (
    <div className='flex flex-row flex-wrap'>
        {
            Object.keys(authors).map(
                author => {
                    const postsArray = authors[author]
                    return(
                        <div>
                            <div key={author} className='text-3xl flex flex-row'>{author}</div>

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

