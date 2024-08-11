import React from 'react'

function Home() {
  return (
    <>
      
      <div className='w-72 space-y-2'>
        <h1 className='text-2xl font-bold md:text-5xl'>Full-service for fast moving teams across the globe.</h1>
        <h2 className='md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>

      <div className='pt-6'>
        <h1 className='font-bold text-2xl	md:text-5xl'>What we offer</h1>

        <div className='space-y-10'>
          <div className='border-4 border-[#dca54c] w-52 p-3'>
            <h1 className='font-bold underline underline-offset-4 md:text-2xl'>Lorem ipsum dolor sit.</h1>
            <p className='md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vitae impedit mollitia nobis illum id, nostrum neque fuga iste! Expedita atque omnis optio debitis.</p>
          </div>


          <div className='border-4 border-[#dca54c] w-52 p-3'>
            <h1 className='font-bold underline underline-offset-4 md:text-2xl'>Lorem, ipsum dolor.</h1>
            <p className='md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi blanditiis sint ducimus laboriosam repellat. Assumenda, eligendi!</p>
          </div>


          <div className='border-4 border-[#dca54c] w-52 p-3'>
            <h1 className='font-bold underline underline-offset-4 md:text-2xl'>Lorem ipsum dolor</h1>
            <p className='md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore accusantium eligendi, delectus accusamus perspiciatis ullam?</p>
          </div>
        </div>
      </div>


      

    </>
  )
}

export default Home