import { fetchClientById } from "../services/clients/fetch-client-by-id.js"
import { renderClient } from "../dom/render-client.js"

const form = document.querySelector('form')
const search = document.querySelector('.search')
const input = document.querySelector('.search input')
const button = document.querySelector('.search button')

function verifyIfButtonDisabled() {
  button.disabled = input.value.length === 0
}

input.addEventListener("focus", () => {
  search.classList.add('search-active')
})

input.addEventListener("blur", () => {
  search.classList.remove('search-active')
})

input.addEventListener("keyup", () => {
  verifyIfButtonDisabled()
})

// verify on load if button is disabled
verifyIfButtonDisabled()

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    const id = input.value
    const client = await fetchClientById({id})
    renderClient(client)
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
})