import React from 'react'
import Button from "../components/Button";
export const AdminLognPage = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
    <div className='w-96 h-72 border border-gray-300 p-4 flex flex-col items-center space-y-4'>
      <h1 className='text-xl font-bold'>Login</h1>
      <div className='flex flex-col w-full'>
        <label className='text-xs mb-1'>ID Admin</label>
        <input
          id='adminId'
          type='text'
          className='border rounded-xl h-8 p-2 w-full'
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='text-xs mb-1'>Password</label>
        <input
          id='adminPassword'
          type='password'
          className='border rounded-xl h-8 p-2 w-full'
        />
      </div>
      <Button isOrangeGradient className='w-full'>Masuk</Button>
    </div>
  </div>
  )
}
