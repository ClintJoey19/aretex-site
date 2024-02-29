import React from 'react'
import { images } from '../constants'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <section className='w-full h-screen grid grid-cols-2 overflow-hidden'>
        <div className="w-full h-full bg-blue-gradient p-5 grid grid-cols-2 gap-4">
            {images.map((image, i) => (
                <div key={i} className={`${i === 0 ? `row-span-2` : ""} rounded-2xl relative overflow-hidden`}>
                    <img src={image.path} alt={image.name} className={`h-full `} />
                    <div className='absolute w-full h-full bg-black z-10'></div>
                </div>
            ))}
        </div>
        <LoginForm />
    </section>
  )
}

export default Login