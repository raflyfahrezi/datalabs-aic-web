import React from 'react'
import { motion } from 'framer-motion'

import { coursesList } from '@assets'
import { Chat, CourseCard } from '@components'

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
                        Konsultasikan karir IT mu disini yaaa.
                    </Chat>
                </motion.div>
            </div>

            {/* User and Bot Messages */}
            <div className='min-h-0 p-2 flex flex-col gap-2 overflow-x-hidden'>
                {chatHistory.map((item, index) => {
                    const courseList = item.courses
                        ? coursesList.filter(
                              (itemCourses) =>
                                  itemCourses.id === item.courses[0]
                          )
                        : []

                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={index}
                            className={`w-full flex  ${
                                item.type === 'user' && 'justify-end'
                            }`}
                        >
                            <div className='flex flex-col'>
                                <Chat type={item.type}>{item.message}</Chat>

                                <div className='flex mt-2 gap-4'>
                                    {courseList.length > 0 &&
                                        courseList.map((item3, index) => {
                                            const {
                                                course_title,
                                                course_rating,
                                                course_image,
                                                course_organization,
                                                course_students_enrolled,
                                            } = item3

                                            return (
                                                <CourseCard
                                                    key={index}
                                                    title={course_title}
                                                    image={course_image}
                                                    rating={course_rating}
                                                    subTitle={
                                                        course_organization
                                                    }
                                                    students={
                                                        course_students_enrolled
                                                    }
                                                />
                                            )
                                        })}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default box
