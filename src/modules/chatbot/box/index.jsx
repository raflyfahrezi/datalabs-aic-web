import React from 'react'
import { motion } from 'framer-motion'

import { Chat } from '@components'

const box = ({ chatHistory }) => {
    return (
        <div className='w-full h-full'>
            {/* Greeting Messages */}
            <div className='py-6'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Chat type='greet'>
                        Welcome to DataLabs Courses Chatbot. Ask us some
                        question and we will reply as fast as we can.
                    </Chat>
                </motion.div>
            </div>

            {/* User and Bot Messages */}
            <div>
                {chatHistory.map((item, index) => {
                    return (
                        <Chat key={index} type='user'>
                            {item.message}
                        </Chat>
                    )
                })}
            </div>
        </div>
    )
}

export default box
