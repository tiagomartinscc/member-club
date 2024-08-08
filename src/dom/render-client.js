const modal = document.querySelector('dialog')
const buttonModal = document.querySelector('dialog button')
buttonModal.onclick = function () {
  modal.close()
}

export function renderClient(client) {
  const name = document.getElementById('name')
  const clientSince = document.getElementById('client-since')
  const id = document.getElementById('id')
  const appointmentHistory = document.querySelector('.history')

  name.innerHTML = client.name
  clientSince.innerHTML = `cliente desde ${client.clientSince}`
  id.innerHTML = `ID: ${client.id}`
  createAppointmentHistory(client.appointmentHistory, appointmentHistory)
  createCards(client.loyaltyCard)
}

function createAppointmentHistory(appointmentHistory, componentHtml) {
  componentHtml.innerHTML = ''
  const header = document.createElement('header')
  const h3 = document.createElement('h3')
  h3.innerHTML = "Histórico"
  const span = document.createElement('span')
  span.innerHTML = `${appointmentHistory.length} cortes`
  const divHistoryList = document.createElement('div')
  divHistoryList.setAttribute('class', 'history-list')

  header.append(h3)
  header.append(span)
  componentHtml.append(header)
  componentHtml.append(divHistoryList)

  appointmentHistory.forEach(appointment => {
    const divRow = document.createElement('div')
    divRow.setAttribute('class', 'row')
    const divInternal = document.createElement('div')
    const strongDate = document.createElement('strong')
    strongDate.innerHTML = appointment.date
    const span = document.createElement('span')
    span.innerHTML = appointment.time
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.setAttribute('src', 'assets/icons/seal-check.svg')
    img.setAttribute('alt', 'ícone de confirmação')

    divRow.append(divInternal)
    divInternal.append(strongDate)
    divInternal.append(span)
    divRow.append(figure)
    figure.append(img)

    divHistoryList.append(divRow)
  });
}

function createCards({totalCuts, cutsNeeded, cutsRemaining}) {

  const cutsRemainingElement = document.querySelector('.progress strong')
  cutsRemainingElement.innerHTML = cutsRemaining

  const totalsElement = document.querySelector('#totals')
  totalsElement.innerHTML = `${totalCuts} de ${cutsNeeded}`

  // modal
  if (totalCuts === cutsNeeded) {
    modal.showModal()
  }

  // percentage
  const progressBarElement = document.getElementById('progress-bar')
  const percentage = Math.floor(Number(totalCuts) / Number(cutsNeeded) * 100)
  progressBarElement.style.width = `${percentage}%`

  const slots = document.querySelector('.slots')
  slots.innerHTML = ''
    
  for (let i = 0; i < cutsNeeded; i++) {
    if (i <= totalCuts) {
      const div = document.createElement('div')
      const img = document.createElement('img')
      img.setAttribute('src', 'assets/icons/pin-check.png')
      img.setAttribute('alt', 'selo de confirmação de corte de cabelo')
      div.append(img)
      slots.append(div)
    } else {
      if (i == (cutsNeeded - 1)) {
        const divGift = document.createElement('div')
        const imgGift = document.createElement('img')
        divGift.append(imgGift)
        imgGift.setAttribute('src', 'assets/icons/gift.svg')
        imgGift.setAttribute('alt', 'meta a ser alcançada')      
        slots.append(divGift)
      } else {
        const divEmpty = document.createElement('div')
        slots.append(divEmpty)
      }
    }
  }
}