import React, {useState} from 'react'
import Project from './Project'
import Image from 'next/image'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

const Gallery = ({projects}) => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }
  return (
    <div id='gallery' className='max-w-[1240px] flex justify-center mx-auto h-screen border-4 items-center'>
      <div>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex justify-center items-center p-4'>
          <AiFillLeftCircle
            onClick={prevProject}
            size={50}
            className='mr-6'
          />
          {projects?.map((project, index) => (
            <div
              key={index}
              className={
                index === current ? 'opacity-[1] ease-in duration-1000 flex' : 'opacity-0 flex'
              }
            >
              {index === current && (
                <Project key={project._id} project={project} />
              )}
            </div>
          ))}
          <AiFillRightCircle
            onClick={nextProject}
            size={50}
            className='ml-6'
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
