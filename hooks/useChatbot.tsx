import { chatBotServicesSent } from "@/services/chatbotServices";
import { useState } from "react";


type messageType = {
  text?: string
  emisor: "user" | "chatbot"
  data?: messageDetailType[]
}

type messageDetailType = {
  text?: string
  recipient_id?: string
  custom?: chatbotType
}

type chatbotType = {
  text?: string
  title?: string
  list?: string[]
  footer?: string
}

export const useChatbot = () => {
  const [messages, setMeassages] = useState<messageType[]>([]);
  const [loading, setLoading] = useState(false);


  const sent = async (message: string, idUser: string) => {
    if (message !== "") {
      setLoading(true);
      try {
        const response = await chatBotServicesSent(message, idUser);

        console.log("response", response);

        setMeassages(prev => ([
          ...prev,
          {
            emisor: "user",
            text: message,
            recipient_id: idUser
          },
          {
            emisor: "chatbot",
            text: response[0]?.text ?? "",
            data: response ?? [],
          }
        ]))

        return response;
      } catch (error) {
        console.error("Error", error);

      } finally {
        setLoading(false);
      }
    }
  }

  return {
    sent,
    messages,
    loading
  }
}