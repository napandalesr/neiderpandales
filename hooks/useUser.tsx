import { useState } from "react"
import { validateEmail, createUser as createUserService } from "../services/chatbotServices" // ajusta la ruta

// Tipado del usuario
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
   * @param email correo a validar
   * @returns true si existe, false si no
   */
  const validateUser = async (email: string): Promise<boolean> => {
    setLoading(true)
    const response = await validateEmail(email)
    setLoading(false)
    if (response) {
      setUser(response as UserType) // guarda el usuario en el estado si existe
      return true
    } else {
      setUser(null)
      return false
    }
  }

  /**
   * Crea un usuario nuevo
   * @param name nombre del usuario
   * @param email correo del usuario
   * @returns el usuario creado
   */
  const createUser = async (name: string, email: string): Promise<UserType> => {
    setLoading(true)
    const response = await createUserService(name, email)
    setLoading(false)
    setUser(response as UserType) // guarda el usuario creado en el estado
    return response as UserType
  }

  return {
    user,
    validateUser,
    createUser,
    loading
  }
}
