import { useState } from "react"
import { validateEmail, createUser as createUserService } from "../services/chatbotServices"

export type UserType = {
  id: string
  name: string
  email: string
  created_at: string
}

export const useUser = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(false)

  /**
   * Valida si un correo ya está registrado
   */
  const validateUser = async (email: string): Promise<boolean> => {
    setLoading(true)
      try {
        const response = await validateEmail(email)
        setLoading(false)
        if (response) {
          setUser(response as UserType)
          return true
        } else {
          setUser(null)
          return false
        }
      } catch {
        setLoading(false)
        // Si la API externa no está disponible, creamos sesión local con el correo
        const localUser: UserType = {
          id: email,
          name: email.split('@')[0],
          email,
          created_at: new Date().toISOString(),
        }
        setUser(localUser)
        return true
      }
    }

    /**
     * Crea un usuario nuevo
     */
    const createUser = async (name: string, email: string): Promise<UserType> => {
      setLoading(true)
      try {
        const response = await createUserService(name, email)
        setLoading(false)
        setUser(response as UserType)
        return response as UserType
      } catch {
        setLoading(false)
        const fallbackUser: UserType = {
          id: email,
          name,
          email,
          created_at: new Date().toISOString(),
        }
        setUser(fallbackUser)
        return fallbackUser
      }
    }

    return {
      user,
      validateUser,
      createUser,
      loading
    }
  }
