import React from 'react'

function BookCard({post}) {
  return (
    <div className='bg-slate-600 w-[500px] text-white m-2 p-4 h-[250px] flex flex-col justify-between items-start'>
        <div className='text-3xl'>{post.title}</div>
        <div className='text-2xl'>{post.content}</div>
        
        <div className='flex flex-row'>
            <div className='mr-2'>{post.author}</div>
            <div className='mr-2'>{post.date}</div>
            <div className='mr-2'>{post.category}</div>
        </div>
    </div>

  )
}

export default BookCard