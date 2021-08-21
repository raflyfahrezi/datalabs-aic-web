import React from 'react'

import { Paragraph } from '@typography'

const navigation = () => {
    return (
        <div>
            <div>
                <p>Logo</p>
            </div>
            <div>
                <div>
                    <Paragraph>Home</Paragraph>
                </div>
                <div>
                    <Paragraph>Log In</Paragraph>
                </div>
                <div>
                    <Paragraph>Sign Up</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default navigation
