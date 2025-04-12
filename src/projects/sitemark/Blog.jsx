import React from 'react'
import { Link } from 'react-router-dom'
import data from './data'
import Card from './card'
import dataTwo from './datatwo'
import Card2 from './Card2'
import avatar1 from './image/avatar1.png'
import avatar2 from './image/avatar2.png'
import avatar3 from './image/avatar3.png'
import avatar4 from './image/avatar4.png'
import avatar5 from './image/avatar5.png'
import avatar6 from './image/avatar6.png'
import avatar7 from './image/avatar7.png'
import hero1 from './image/hero1.png'
import hero2 from './image/hero2.png'
import hero3 from './image/pic1.png'
import hero4 from './image/pic2.png'
import Pagination from './Pagination'

function Blog() {
  let avt = [avatar1, avatar2]
  let avtr = [avatar7, avatar6, avatar3, avatar1, avatar2, avatar5, avatar6, avatar2, avatar7, avatar3]
  let pics = [hero1, hero2]
  return (
    <section className="lg:px-14 px-6 border-b border-[#333b4d99] bg-radial-[at_10%] from-slate-950 via-slate-900 to-slate-950 to-90%">
      <div className='py-32 '>
        <div className="space-y-9">
          <div className="space-y-7">
            <h1 className="text-5xl font-bold">Blog</h1>
            <p className=" text-sm font-medium text-[#f5f6fa] ">Stay in the loop with the latest about our products
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-baseline justify-between space-y-6 ">
            <div className="lg:order-1 order-2 lg:overflow-auto lg:py-0 py-9  overflow-scroll whitespace-nowrap">
              <ul className="flex gap-6 cursor-pointer ">
                <li
                  className="px-3 py-1 text-[13px] font-medium hover:bg-[#161d2efa] border border-[#333b4d99] text-[#f5f6fa] rounded-2xl">
                  <Link to='/' style={{ color: "#f5f6fa" }}>All categories</Link>
                </li>
                <li
                  className="px-3 py-1 text-[13px] font-medium hover:bg-[#161d2efa] text-[#f5f6fa] rounded-2xl">
                  <Link to='company' style={{ color: "#f5f6fa" }}>Company</Link>
                </li>
                <li
                  className="px-3 py-1 text-[13px] font-medium hover:bg-[#161d2efa] text-[#f5f6fa] rounded-2xl">
                  <Link to='product' style={{ color: "#f5f6fa" }}>Product</Link>
                </li>
                <li
                  className="px-3 py-1 text-[13px] font-medium hover:bg-[#161d2efa] text-[#f5f6fa] rounded-2xl">
                  <Link to='design' style={{ color: "#f5f6fa" }}>Design</Link>
                </li>
                <li
                  className="px-3 py-1 text-[13px] font-medium hover:bg-[#161d2efa] text-[#f5f6fa] rounded-2xl">
                  <Link to='engineering' style={{ color: "#f5f6fa" }} >Engineering</Link>
                </li>
              </ul>
            </div>
            <div className=" flex lg:justify-end space-x-2 lg:order-2 order-1 ">
              <div className="relative lg:w-[40%] w-[90%]">
                <input type="text" placeholder="Search..."
                  className="ps-9 py-2 w-full text-md border border-[#333b4d99] hover:border-[#adb4c399] rounded-lg" />
                <i className="bi bi-search absolute left-[13px] text-sm bottom-[11px]"></i>
              </div>
              <Link
                className="border border-[#333b4d99] cursor-pointer hover:border-[#adb4c399] px-2 text-xs py-2 rounded-lg content-center"><i
                  className="fa-solid fa-rss px-1"></i></Link>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          {
            data.map((dt, index) => {
              return (
                <Card key={index} imageUr={pics[index]} title={dt.title} heading={dt.heading} description={dt.description}
                  avatarUrl={avt[index]} name={dt.name} publishDate={dt.publishDate} />
              )
            })
          }
        </div>
        <div className="space-y-5 ">
          <h2 className="text-4xl font-semibold pt-7">Latest</h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:flex-wrap justify-between gap-16">
            {
              dataTwo.map((dt, index)=>{
                return(
                  <Card2 key={index} title={dt.title} heading={dt.heading} description={dt.description} avatarUrl={avtr[index]}
                  name={dt.name} publishDate={dt.publishDate}
                  />
                )
              })
            }
          </div>
        <Pagination />
        </div>
      </div>
    </section>
  )
}

export default Blog
