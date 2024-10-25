import React from 'react'
import Link from 'next/link'
function NavBar() {
  return (
    <div className='w-full text-3xl m-2 p-2 bg-slate-900 text-white flex justify-between'>
        <div>Read Only Blogs</div>
        <div className='flex'>
            <div className='mr-2'>
                <a href=""></a>Posts
            </div>
            <div className='mr-2'>
                <Link href="/categories">Categories</Link>
            </div>
            <div className='mr-2'>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar