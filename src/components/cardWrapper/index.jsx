import React from 'react'

import { Heading2 } from '@typography'
import { ComponentWrapper } from '@components'

const cardWrapper = ({ title, className, children }) => {
    return (
        <div>
            <ComponentWrapper>
                <Heading2>{title}</Heading2>
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
