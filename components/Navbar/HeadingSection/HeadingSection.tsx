import React from 'react'

interface dataStruct{
  title: string;
}

function HeadingSection(data : dataStruct) {
  return (
    <div className='container my-6'>
        <h2 className='text-3xl'>{data.title}</h2>
    </div>
  )
}

export default HeadingSection