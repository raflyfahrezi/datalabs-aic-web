/* eslint-disable react/react-in-jsx-scope */

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body className='scrollbar scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
