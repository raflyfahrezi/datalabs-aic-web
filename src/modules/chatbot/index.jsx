import React, { useRef, useState, useEffect } from 'react'

import { SendIcon } from '@assets'
import { Heading1 } from '@typography'
import { getBotResponse } from '@utils'
import { TextField, ComponentWrapper } from '@components'

import ChatBox from './box'

const chatbot = () => {
    const chatBoxRef = useRef()
    const isFirstRender = useRef(false)

    const [message, setMessage] = useState('')
    const [chatType, setChatType] = useState(null)
    const [chatHistory, setChatHistory] = useState([])
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

        pushMessageToHistory({ type: 'user', message: message })
        setMessage('')
    }

    useEffect(async () => {
        if (isFirstRender.current === false) {
            setTimeout(() => {
                pushMessageToHistory({
                    type: 'bot',
                    message:
                        'Halo, ada yang bisa RAKA bantu mengenai masalah seputar karir di dunia IT ?',
                })
            }, 1000)

            isFirstRender.current = true

            return
        }

        if (chatHistory[chatHistory.length - 1].type !== 'user') {
            return
        }

        try {
            getBotResponse({
                chatType: chatType,
                chatHistory: chatHistory,
                setChatType: setChatType,
                pushMessageToHistory: pushMessageToHistory,
            })
        } catch (e) {
            pushMessageToHistory({
                type: 'bot',
                message: 'Oops! Something went wrong',
            })
        }
    }, [chatHistory])

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }, [chatHistory])

    return (
        <ComponentWrapper>
            <div className='text-center pb-6 pt-8'>
                <Heading1>RAKA (Robot Analisis Karir IT)</Heading1>
            </div>
            <div className='w-full grid grid-rows-pageWrapper pt-4'>
                <div
                    ref={chatBoxRef}
                    className='h-96 border-2 border-gray-800 rounded overflow-auto'
                >
                    <ChatBox chatHistory={chatHistory} />
                </div>
                <form onSubmit={sendMessageHandler} className='pt-3 pb-6 flex'>
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
