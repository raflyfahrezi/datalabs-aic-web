import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'

import { SendIcon } from '@assets'
import { TextField, ComponentWrapper } from '@components'

import ChatBox from './box'
import { async } from 'regenerator-runtime'

const chatbot = () => {
    const isFirstRender = useRef(false)

    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([])
    const [requestResponse, setRequestResponse] = useState(false)
    const [isWaitingResponse, setIsWaitingResponse] = useState(false)

    const messageChangeHandler = (e) => {
        const { value } = e.target

        setMessage(value)
    }

    const pushMessageToHistory = ({ type, message }) => {
        const chat = { type, message }

        setChatHistory([...chatHistory, { ...chat }])
    }

    const sendMessageHandler = (e) => {
        e.preventDefault()

        setMessage('')
        pushMessageToHistory({ type: 'user', message: message })
        setRequestResponse(true)
    }

    useEffect(async () => {
        if (isFirstRender.current === false) {
            isFirstRender.current = true

            return
        }

        if (requestResponse === false) {
            return
        }

        try {
            const { data } = await axios.post(
                'https://chatbot-datalabs.et.r.appspot.com',
                { chat: message }
            )

            pushMessageToHistory({ type: 'bot', message: data.res })
        } catch (e) {
            pushMessageToHistory({
                type: 'bot',
                message: 'Oops! Something went wrong',
            })
        }

        setRequestResponse(false)
    }, [requestResponse])

    return (
        <ComponentWrapper>
            <div className='w-full h-full grid grid-rows-pageWrapper'>
                <div className='max-h-96 border-2 border-gray-800 rounded overflow-auto'>
                    <ChatBox chatHistory={chatHistory} />
                </div>
                <form onSubmit={sendMessageHandler} className='py-6 flex'>
                    <TextField
                        value={message}
                        className='w-full'
                        disabled={isWaitingResponse}
                        placeholder='Enter a message'
                        onChange={messageChangeHandler}
                    />
                    <button
                        type='submit'
                        disabled={isWaitingResponse}
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
