import React, { useState, useEffect } from 'react'

import { SendIcon } from '@assets'
import { TextField, ComponentWrapper } from '@components'

import ChatBox from './box'

const chatbot = () => {
    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([])

    const messageChangeHandler = (e) => {
        const { value } = e.target

        setMessage(value)
    }

    const sendMessageHandler = (e) => {
        e.preventDefault()

        const chat = { type: 'user', message }

        setChatHistory([...chatHistory, { ...chat }])
    }

    return (
        <ComponentWrapper>
            <div className='w-full h-full grid grid-rows-pageWrapper '>
                <div className='border-2 border-gray-800 rounded'>
                    <ChatBox chatHistory={chatHistory} />
                </div>
                <form onSubmit={sendMessageHandler} className='py-6 flex'>
                    <TextField
                        className='w-full'
                        placeholder='Enter a message'
                        onChange={messageChangeHandler}
                    />
                    <button
                        type='submit'
                        className='w-14 ml-2 grid place-items-center rounded bg-gray-800'
                    >
                        <SendIcon />
                    </button>
                </form>
            </div>
        </ComponentWrapper>
    )
}

export default chatbot
