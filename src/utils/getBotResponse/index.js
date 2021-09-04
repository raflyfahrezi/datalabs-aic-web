import axios from 'axios'

const getBotResponse = async ({ chatHistory, pushMessageToHistory }) => {
    const body = new URLSearchParams()

    const copyOfChatHistory = [...chatHistory]
    const userMessage = copyOfChatHistory.pop()

    body.append('chat', userMessage.message)

    const { data } = await axios.post(
        'https://chatbot-datalabs.et.r.appspot.com/',
        body
    )

    pushMessageToHistory({ type: 'bot', message: data.res })
}

export default getBotResponse
