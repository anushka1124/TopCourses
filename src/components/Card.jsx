// import React from 'react'
import {FcLike , FcLikePlaceholder} from 'react-icons/fc';


import React from 'react'
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;


  function clickHandler() {
    if(likedCourses.includes(course.id)){
      //pehle se like h
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("like removed");
    }
    else {
      //if not pehle se present then insert it in array
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) => [...prev , course.id]);
      }
      toast.warning("liked successfully");
    }
  }


  return (
    <div className='w-[300px] bg-black bg-opacity-50 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="Images" />

        <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-3 grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? 
              (<FcLike fontSize="1.4rem"/>) :
              (<FcLikePlaceholder fontSize="1.4rem"/>)
            }
          </button>
        </div>
    </div>

    <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>
          {
            course.description.length > 100 ? 
            (course.description.substr(0,100)) +'...' : 
            (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card