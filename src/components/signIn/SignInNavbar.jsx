import React from 'react'

const SignInNavbar = () => {
  return (
    <div className='md:text-xl sm:text-l text-white flex justify-between p-4'>
        <div className='p-2'>
            <span className='font-bold text-[#FF0000]'>H</span><span className='font-bold text-[#0000FF]'>QC</span><span className='text-[#1f2558] font-bold pl-2'>Hephkeji</span><span className='text-[#FF0000] font-bold'>CONSULT</span> 
        </div>

        <button className='text-white bg-[#1f2558] py-2 px-4 rounded-full font-[16px]'>
            Login into account
        </button>

    </div>
  )
}

export default SignInNavbar