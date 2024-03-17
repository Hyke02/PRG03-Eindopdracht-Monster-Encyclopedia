window.addEventListener('load', init);

const apiUrl = 'https://hyke02.github.io/PRG03-Eindopdracht-Monster-Encyclopedia/webservice-start';
let monsterOverview

let favMonster = JSON.parse(localStorage.getItem(`favMonster`)) || []

let detailModal
let detailModalContent
let detailModalClose

let monster = {}

function init()
{
    monsterOverview = document.getElementById('monster-overview')
    ajaxFetchRequest(apiUrl, getMonsterSuccessHandler)

    detailModal = document.getElementById('monster-detail')
    detailModalContent = detailModal.querySelector('.modal-content')
    detailModalClose = detailModal.querySelector('.modal-close')

    monsterOverview.addEventListener('click', modalMonsterClickHandler)
    detailModal.addEventListener('click', closeModalClickHandler)

    monsterOverview.addEventListener('click', favoriteMonsterClickHandler)
}

function ajaxFetchRequest(url, succesHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(succesHandler)
        .catch(getMonsterErrorHandler)
}

function getMonsterSuccessHandler(data)
{
    createMonsterCards(data)
}

function createMonsterCards(data)
{
    for (const monsterData of data)
    {
        let monsterCard = document.createElement('div')
        monsterCard.classList.add('monster-card')
        monsterCard.dataset.name = monsterData.name

        monsterOverview.appendChild(monsterCard)

        createCardThumbnail(monsterData)
    }

    applyFavorite()
}

function createCardThumbnail(monsterData)
{
    let monsterDataName = document.querySelector(`[data-name="${monsterData.name}"]`)

    let monsterCardName = document.createElement('h2')
    monsterCardName.classList.add('card-title')
    monsterCardName.innerHTML = monsterData.name
    monsterDataName.appendChild(monsterCardName)

    let monsterSpeciesName = document.createElement('h3')
    monsterSpeciesName.classList.add('card-species-subtitle')
    monsterSpeciesName.innerHTML = monsterData.species
    monsterDataName.appendChild(monsterSpeciesName)

    let monsterCardIcon = document.createElement('img')
    monsterCardIcon.classList.add('monster-icon')
    monsterCardIcon.src = monsterData.icon
    monsterDataName.appendChild(monsterCardIcon)

    let favButton = document.createElement('img')
    favButton.classList.add('favorite-button')
    favButton.id = monsterData.id
    favButton.src = "./images/css/favorite_star.png"
    monsterDataName.appendChild(favButton)

    let monsterDetailButton = document.createElement('button')
    monsterDetailButton.classList.add('modal-detail-button')
    monsterDetailButton.dataset.id = monsterData.id
    monsterDetailButton.innerHTML = " 🞁 "
    monsterDataName.appendChild(monsterDetailButton)

    monster[monsterData.id] = monsterData
}

function modalMonsterClickHandler(e)
{
    const clickedElement = e.target

    if (clickedElement.tagName === 'BUTTON' && clickedElement.classList.contains('modal-detail-button'))
    {
        ajaxFetchRequest(`${apiUrl}?id=${clickedElement.dataset.id}`, getDetailedMonsterDataSuccessHandler)

        const monsterData = monster[clickedElement.dataset.id]

        let detailModalContentName = document.createElement('div')
        detailModalContentName.classList.add('modal-content-name')
        detailModalContent.appendChild(detailModalContentName)

        let modalMonsterIcon = document.createElement('img')
        modalMonsterIcon.classList.add('modal-icon')
        modalMonsterIcon.id = 'modal-monster-icon'
        modalMonsterIcon.src = monsterData.icon
        detailModalContentName.appendChild(modalMonsterIcon)

        let  detailModalTitle  = document.createElement('div')
        detailModalTitle.classList.add('modal-name-species')
        detailModalContentName.appendChild(detailModalTitle)

        let modalMonsterName = document.createElement('h2')
        modalMonsterName.classList.add('modal-title')
        modalMonsterName.innerHTML = monsterData.name
        detailModalTitle.appendChild(modalMonsterName)

        let modalMonsterSpecies = document.createElement('h3')
        modalMonsterSpecies.classList.add('modal-subtitle')
        modalMonsterSpecies.innerHTML = monsterData.species
        detailModalTitle.appendChild(modalMonsterSpecies)

        if (monsterData.element !== ""){
            let modalMonsterElement = document.createElement('img')
            modalMonsterElement.classList.add(monsterData.element)
            modalMonsterElement.id = 'element-icon'
            modalMonsterElement.src = `./images/elements/${monsterData.element}.png`
            detailModalContent.appendChild(modalMonsterElement)
        }

        let modalGameTitle = document.createElement('img')
        modalGameTitle.classList.add('game-title')
        modalGameTitle.id = 'game-title'
        modalGameTitle.src = './images/css/game_logo.png'
        detailModal.appendChild(modalGameTitle)

        detailModal.showModal()

        spinImg('element-icon')
        spinImg('modal-monster-icon')
    }

}

function getDetailedMonsterDataSuccessHandler(data)
{
    let modalMonsterDescription = document.createElement('p')
    modalMonsterDescription.innerHTML = data.description
    detailModalContent.appendChild(modalMonsterDescription)

    let modalMonsterImg = document.createElement('img')
    modalMonsterImg.classList.add('modal-full-art')
    modalMonsterImg.src = data.art
    detailModalContent.appendChild(modalMonsterImg)
}

function closeModalClickHandler(e)
{
    const clickedElement =e.target

    if (clickedElement.tagName === 'DIALOG' || clickedElement.tagName === 'BUTTON')
    {
        const gameTitle = document.getElementById('game-title')

        detailModal.close()

        detailModalContent.innerHTML = ""
        gameTitle.remove()
    }
}

function applyFavorite()
{
    favMonster.forEach(favoriteMonster => {
        document.getElementById(favoriteMonster).classList = 'unfavorite-button'
    })
}

function favoriteMonsterClickHandler(e)
{
    e.preventDefault()

    const clickedElementId = e.target.id
    const clickedElement = e.target
    const index = favMonster.indexOf(clickedElementId)

    if (clickedElement.tagName === 'IMG' && clickedElement.classList.contains("favorite-button"))
    {
        if (index === -1)
        {
            favMonster.push(clickedElementId)
            clickedElement.className = 'unfavorite-button'
        }
    }

    if (clickedElement.tagName === 'IMG' && clickedElement.classList.contains("unfavorite-button"))
    {
        if (index !== -1)
        {
            favMonster.splice(index, 1)
            clickedElement.className = 'favorite-button'
        }
    }

    localStorage.setItem('favMonster', JSON.stringify(favMonster))
}

function spinImg(imgId)
{
    const targetImg = document.getElementById(imgId)

    targetImg.style.transition = 'transform 0.5s ease-in'
    targetImg.style.cursor = 'wait'

    targetImg.addEventListener('mouseenter', () => {
        targetImg.style.transform = 'rotate(360deg)'
        targetImg.style.borderRadius = '16px'
    })

    targetImg.addEventListener('mouseleave', () => {
        targetImg.style.transform = 'rotate(0deg)'
        targetImg.style.borderRadius = '16px 0px 0px 16px'
    })

}

function getMonsterErrorHandler(data)
{
    console.log(`Something went wrong! ${data}`)
}
