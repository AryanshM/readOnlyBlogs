import BookCard from "./components/BookCard";
import fetchPosts from "./fetchPosts"
export default async function Home() {

  
  let posts = await fetchPosts()
  return (
    <div className="flex flex-row flex-wrap">
      { posts.map(post => 
        {
          console.log(post)
          console.log("hehe")
          return (<div>
            <BookCard key= {post.id} post = {post}/>            
          </div>
          )
        }
        )
      
      }
      
    </div>
  );
}
