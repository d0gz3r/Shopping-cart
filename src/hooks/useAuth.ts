import { useContext } from "react"
import { LoginContext } from "../providers/LoginProvider"

export const useAuth = () => {
  const value = useContext(LoginContext);
  return value;
}