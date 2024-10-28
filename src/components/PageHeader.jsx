import React from 'react';

const PageHeader = ({titLe,path}) => {
  return (
    <div className='py-24 mt-3 bg-[#fafafa] rounded flex items-center justify-center'>
            <div>
                <h2 className='text-3xl text-blue font-medium mb-1 text-center'>{titLe}</h2>
                <p className='text-sm text-center '> <a href='/'>Home</a>/ {path}</p>
            </div>

    </div>
  )
}

export default PageHeader