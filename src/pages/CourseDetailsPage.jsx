import React, { useState } from 'react'
import CourseDetails from '../components/CourseDetails'
import SideCourseMaterial from '../components/SideCourseMaterial'

const CourseDetailsPage = () => {
  const [noVideo, setNoVideo] = useState(0)


  return (
    <div className='flex flex-col lg:flex-row pt-24 px-5 lg:px-24 bg-softGrey pb-5 gap-10 lg:gap-20'>
        <CourseDetails noVideo={noVideo}/>
        <SideCourseMaterial/>
    </div>
  )
}

export default CourseDetailsPage