import axios from "axios";

type messageType = {
  recipient_id?: string;
  custom?: chatbotType;
  text?: string;
};

type chatbotType = {
  text?: string;
  title?: string;
  list?: string[];
  footer?: string;
  recipient_id?: string;
};

const api = "https://api.neidercode.com";

  export const chatBotServicesSent = async (
    message: string,
    idUser: string,
    history?: { emisor: "user" | "chatbot"; text?: string }[],
    email?: string,
    name?: string
  ) => {
    const response = await axios.post(`/api/chat`, {
      message,
      idUser,
      email,
      name,
      history,
    });

    return (response.data.data ?? [{ text: response.data.text }]) as (messageType | chatbotType)[];
  };

  export const validateEmail = async (email: string) => {
    try {
      const response = await axios.get(
        `${api}/users/by-email/?email=${encodeURIComponent(email)}`
      );
      return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
          return null;
        }
        throw error;
      }
  };

  export const createUser = async (name: string, email: string) => {
    const response = await axios.post(`${api}/users`, {
      name,
      email,
    });
    return response.data;
  };
