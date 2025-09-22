import React from 'react'

const Title = ({text1,text2}) => {
  return (
     <div className='inline-flex items-center gap-2 mb-3'>
      <p className='text-[#1B5E20]'>{text1} <span className='text-[#a2cea1]'>{text2}</span> </p>
      <p className='w-8 md:w-12 h-[2px] bg-[#1B5E20]'></p>
    </div>
  )
}

export default Title

