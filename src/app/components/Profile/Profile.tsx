import React from 'react'
import Avartar from './Avartar/Avartar'
import Infor from './Infor/Infor'

const Profile = () => {
  return (
    <div className=' w-[700px] h-[600px] bg-[#111214] rounded-lg'>

       <div className='bg-[#F5F5FF] w-[700px] h-[210px] px-3 py-5 rounded-t-lg'>
          <Avartar />
       </div>
       <Infor />

    </div>
  )
}

export default Profile