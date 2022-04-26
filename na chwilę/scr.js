let passInput
let errorInfo
let addBtn
let ulList
let newPass
let popup
let popupInfo
let passToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDOMElement()
    prepareDOMEvent()

}


const prepareDOMElement = () => {
    passInput = document.querySelector('.pass-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.passlist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvent = () => {
    addBtn.addEventListener('click', addNewPass)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changePassText)

}

const addNewPass = () => {
    if (passInput.value !== '') {
        newPass = document.createElement('li')
        newPass.textContent = passInput.value
        createToolsArea()

        ulList.append(newPass)

        passInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'wpisz treść zadania'
    }
}
const createToolsArea = () => {

    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newPass.append(toolsPanel)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'DELETE'

    toolsPanel.append(editBtn, deleteBtn)
    
}

const checkClick = e => {
    if (e.target.matches('.edit')) {
        editPass(e)
    } else if (e.target.matches('.delete')){
        deletePass(e)
    }
}

const editPass = e => {
    passToEdit = e.target.closest('li')

    popupInput.value = passToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changePassText = () => {
    if (popupInput.value !== '') {
       passToEdit.firstChild.textContent = popupInput.value
       popup.style.display = 'none'
       popupInfo.textContent = ''
    }else{
        popupInfo.textContent = 'te pola nie mogą być puste'
    }
}

const deletePass = e => {
    e.target.closest('li').remove()

    const allTools = document.querySelectorAll('li')

    if (allTools.length === 0) {
        errorInfo.textContent = 'brak haseł'
    }
}


document.addEventListener('DOMContentLoaded', main)