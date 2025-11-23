import axios from "axios"


type messageType = {
  recipient_id?: string
  custom: chatbotType
  text?: string
}

type chatbotType = {
  text?: string
  title?: string
  list?: string[]
  footer?: string
  recipient_id?: string
}


export const chatBotServicesSent = async (message: string, idUser: string) => {
  const response = await axios.post("http://localhost:8051/webhooks/rest/webhook", {
    message: message,
    sender: idUser
  })

  return response.data as messageType[] | chatbotType[]

}