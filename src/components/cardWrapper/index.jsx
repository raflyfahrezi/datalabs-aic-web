import React from 'react'

import { Heading2 } from '@typography'
import { ComponentWrapper } from '@components'
import { NextIcon, PreviousIcon } from '@assets'

const cardWrapper = ({ title, className, children }) => {
    return (
        <div>
            <ComponentWrapper>
                <div className='flex justify-between items-center'>
                    <div>
                        <Heading2>{title}</Heading2>
                    </div>
                    <div>
                        <button className='hover:bg-gray-200 transition-all duration-500'>
                            <PreviousIcon />
                        </button>
                        <button className='hover:bg-gray-200 transition-all duration-500'>
                            <NextIcon />
                        </button>
                    </div>
                </div>
            </ComponentWrapper>
            <div
                className={`w-full py-6 overflow-auto scrollbar-hide ${
                    className ?? ''
                }`}
            >
                <ComponentWrapper>
                    <div className='w-min grid grid-flow-col gap-4 '>
                        {children}
                    </div>
                </ComponentWrapper>
            </div>
        </div>
    )
}

export default cardWrapper
