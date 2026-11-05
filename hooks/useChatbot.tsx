import { chatBotServicesSent } from "@/services/chatbotServices";
import { useState } from "react";

type messageType = {
  text?: string;
  emisor: "user" | "chatbot";
  data?: messageDetailType[];
};

type messageDetailType = {
  text?: string;
  recipient_id?: string;
  custom?: chatbotType;
};

type chatbotType = {
  text?: string;
  title?: string;
  list?: string[];
  footer?: string;
};

export const useChatbot = () => {
  const [messages, setMessages] = useState<messageType[]>([]);
  const [loading, setLoading] = useState(false);

        const sent = async (
          message: string,
          idUser: string,
          email?: string,
          name?: string
        ) => {
          if (message.trim() !== "") {
            setLoading(true);
            try {
              const response = await chatBotServicesSent(
                message,
                idUser,
                messages,
                email,
                name
              );

                  setMessages((prev) => [
                    ...prev,
                    {
                      emisor: "user",
                      text: message,
                    },
                    {
                      emisor: "chatbot",
                      text: (response as any)[0]?.text ?? "",
                      data: (response as any) ?? [],
                    },
                  ]);

return response;
      } catch (error) {
console.error("Error al comunicarse con el chatbot:", error);
setMessages((prev) => [
  ...prev,
  {
    emisor: "user",
    text: message,
  },
  {
    emisor: "chatbot",
    text: "Ocurrió un error al procesar el mensaje. Por favor intenta nuevamente.",
    data: [
      {
        text: "Ocurrió un error al procesar el mensaje. Por favor intenta nuevamente.",
      },
    ],
  },
]);
      } finally {
  setLoading(false);
}
    }
  };

  return {
    sent,
    messages,
    loading,
  };
};
