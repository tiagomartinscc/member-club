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