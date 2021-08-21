import React from 'react'
import Link from 'next/link'

const link = ({ href, children, external }) => {
    if (external) {
        return (
            <a href={href} rel='noreferrer noopener'>
                {children}
            </a>
        )
    }

    return (
        <Link href={href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>{children}</a>
        </Link>
    )
}

link.defaultProps = {
    href: '/',
}

export default link
