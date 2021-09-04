import axios from 'axios'

const fetchResponse = async ({ path, chatHistory }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    const body = new URLSearchParams()

    const copyOfChatHistory = [...chatHistory]
    const userMessage = copyOfChatHistory.pop()

    body.append('chat', userMessage.message)

    const { data } = await axios.post(`${BASE_URL}/${path ?? ''}`, body)

    return data
}

const getBotResponse = async ({
    chatType,
    chatHistory,
    setChatType,
    pushMessageToHistory,
}) => {
    const data = await fetchResponse({ chatHistory })

    pushMessageToHistory({ type: 'bot', message: data.res })
}

export default getBotResponse
