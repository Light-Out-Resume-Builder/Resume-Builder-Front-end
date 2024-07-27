import React from 'react'
import Portfolio from '/src/assets/images/portfolio.png'
import Google from '/src/assets/images/Google.png'

const signup = () => {
  return (
    <div className='min-h-screen px-32 flex flex-row gap-20 bg-[#BFDBFE]'>
      <div>
        <h2 className='text-3xl text-blue-700 font-bold mb-6'>Creating Perfect <br /> Resume Made Easy</h2>
        <img src={Portfolio} alt="" className='' />
      </div>

      <div>
        <h2 className='text-3xl font-semibold'>Sign Up To Light-Out</h2>
        <form action="">
          <div className='mb-4 mt-24'>
            <label htmlFor="full name" className='block text-xl font-medium '>Full Name</label>
            <input type="email" id='email' placeholder='Enter Full Name' className='mt-1 block w-[30rem] px-3 py-4 border border-blue-700 rounded-md bg-transparent text-xl placeholder-grey-500' />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-xl font-medium '>Email</label>
            <input type="email" id='email' placeholder='Enter Email Address' className='mt-1 block w-[30rem] px-3 py-4 border border-blue-700 rounded-md bg-transparent text-xl placeholder-grey-500' />
          </div>

          <div className='mb-4'>
            <label htmlFor="Password" className='block text-xl font-medium '>Password</label>
            <input type="password" id='email' placeholder='Enter Password' className='mt-1 block w-[30rem] px-3 py-4 border border-blue-700 rounded-md bg-transparent text-xl placeholder-grey-500' />
          </div>

          <div className='flex'>
            <input type="checkbox" className='w-10' />
            <p className='ml-2 text-sm font-medium'>I agree to the Terms and Conditions and Privacy Policy</p></div>

          <button type='Signin' className='text-white bg-blue-700 w-[30rem] px-3 py-4 rounded-md mt-12'>Sign Up</button>

          <div className='mt-8 text-center font-medium'><p>Or</p></div>

          <button type='Signin' className='text-white bg-blue-700 w-[30rem] px-3 py-4 rounded-md mt-8 flex items-center justify-center gap-2'><img src={Google} alt="" className='w-4' /> Sign Up With Google</button>

          <div className='text-center mt-10'><p>Already have an account? Sign In</p></div>
        </form>
      </div>
    </div>
  )
}

export default signup

