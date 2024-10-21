import React from 'react'

const Credits = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
        <button>Plans</button>
        <h1>Choose a plan right for you:</h1>
        <div>
          {plans.map((items, index) => (
            <div>
                <img src="" alt="" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Credits