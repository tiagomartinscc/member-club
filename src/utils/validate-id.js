//124-537-835-230
export function validateId(id) {
  const mask = /^\d{3}-\d{3}-\d{3}-\d{3}$/
  if (!mask.test(id)) {
    throw new Error("invalid id")
  }
}