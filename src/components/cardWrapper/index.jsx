import React from 'react'

import { ComponentWrapper } from '@components'

const cardWrapper = ({ children }) => {
    return (
        <div className='w-full overflow-auto'>
            <ComponentWrapper>
                <div className='w-min grid grid-flow-col gap-4 '>
                    {children}
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default cardWrapper
