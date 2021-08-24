import React from 'react'

import { SendIcon } from '@assets'
import { TextField, ComponentWrapper } from '@components'

const chatbot = () => {
    return (
        <ComponentWrapper>
            <div className='w-full h-full grid grid-rows-pageWrapper '>
                <div className='border-2 border-gray-800 rounded'>halo</div>
                <div className='py-6 flex'>
                    <TextField
                        className='w-full'
                        placeholder='Enter a message'
                    />
                    <div className='w-14 ml-2 grid place-items-center rounded bg-gray-800'>
                        <SendIcon />
                    </div>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default chatbot
