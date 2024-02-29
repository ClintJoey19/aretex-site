import React from 'react'
import { Aretex } from '../assets'
import { TextField } from '@mui/material'
import { styles } from '../style'
import Button from '../components/Button'

const LoginForm = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <main className='w-[80%] flex flex-col items-center'>
            <img src={Aretex} alt="aretex-logo" className='h-[5rem] w-[25rem] mb-20' />
            <h2 className={`${styles.heading2} mb-1`}>Login</h2>
            <p className={`${styles.paragraph} mb-10`}>Welcome to Aretex</p>
            <form action="" className='w-[80%] flex flex-col gap-3'>
                <TextField label="Email"/>
                <TextField label="Password"/>
                <Button name="Login"/>
            </form>
        </main>
    </div>
  )
}

export default LoginForm