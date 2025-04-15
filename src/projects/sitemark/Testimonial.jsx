import React from 'react'
import CardTestimonial from './CardTestimonial'
import testimonialDate from './js/testimonalData'
import avatar1 from './image/avatar1.png'
import avatar2 from './image/avatar2.png'
import avatar3 from './image/avatar3.png'
import avatar5 from './image/avatar5.png'
import avatar6 from './image/avatar6.png'
import avatar7 from './image/avatar7.png'



function Testimonial() {

    let avatars = [avatar1, avatar2, avatar3, avatar5, avatar6, avatar7] 

  return (
    <section className="lg:px-14 px-6 bg-slate-950 py-32  border-b border-[#333b4d99]">
    <div className="text-center lg:w-8/12  space-y-2 tracking-wid m-auto mb-10">
        <h1 className="font-semibold text-2xl text-white">Testimonials</h1>
        <p className="text-[#909CB3]">See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support.</p>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-4">
        {
            testimonialDate.map((dt, index) => {
                return (
                    <CardTestimonial key={index}  para={dt.para}  profile={avatars[index]} name={dt.name} profession={dt.profession}/>
                )
            })
        }
    </div>
  </section>
  )
}

export default Testimonial
