import React from 'react'

import { TextField, ComponentWrapper } from '@components'

const chatbot = () => {
    return (
        <ComponentWrapper>
            <div className='flex flex-col bg-gray-600'>
                <div>halo</div>
                <div>
                    <TextField
                        className='w-full'
                        placeholder='Enter a message'
                    />
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default chatbot
