import { Avatar } from '@nextui-org/react'
import React from 'react'

const Testimonial = () => {
  return (
<section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 ">"This agile kanban board has revolutionized the way our team works. The ability to break down tasks into sub-tasks has significantly improved our project management efficiency. The drag-and-drop functionality is incredibly intuitive, making it easy to prioritize and organize our work. Our productivity has skyrocketed since we started using this tool. Highly recommended!."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/512px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'/>
                <div className="flex items-center divide-x-2 divide-gray-500 ">
                  <div className="pr-3 font-medium text-gray-900 ">Bill Gates</div>
                  <div className="pl-3 text-sm font-light text-gray-500 ">CEO at Google</div>
                </div>
            </figcaption>
          </figure>
        </div>
      </section>  )
}

export default Testimonial