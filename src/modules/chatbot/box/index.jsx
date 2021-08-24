import React from 'react'
import { motion } from 'framer-motion'

import { Chat } from '@components'

const box = ({ chatHistory }) => {
    return (
        <div className='w-full flex flex-col'>
            {/* Greeting Messages */}
            <div className='py-6'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Chat type='info'>
                        Welcome to DataLabs Courses Chatbot. Ask us some
                        question and we will reply as fast as we can.
                    </Chat>
                </motion.div>
            </div>

            {/* User and Bot Messages */}
            <div className='min-h-0 p-2 flex flex-col gap-2 overflow-x-hidden'>
                {chatHistory.map((item, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={index}
                            className={`w-full flex ${
                                item.type === 'user' && 'justify-end'
                            }`}
                        >
                            <Chat type={item.type}>{item.message}</Chat>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default box
