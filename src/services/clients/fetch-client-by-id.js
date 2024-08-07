import { apiConfig } from "../api-config.js"
import { validateId } from "../../utils/validate-id.js"

export async function fetchClientById({id}) {
  validateId(id)
  const response = await fetch(`${apiConfig.baseURL}/clients/${id}`)
  const client = await response.json()
  if (!client) {
    throw new Error(`Client ${id} not found`)
  }
  return client
}