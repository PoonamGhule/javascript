let ul = document.querySelector('ul')
let input = document.querySelector('input')
let button = document.querySelector('#one')

button.addEventListener('click', function () {
    let text = input.value
    let newli = document.createElement('li')
    newli.textContent = text
    createbutton(newli)
    ul.appendChild(newli)
    input.value = ""
})

ul.addEventListener('click', function (event) {

    if (event.target.tagName === 'BUTTON') {

        if (event.target.className == 'remove') {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if (event.target.className == 'down') {
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling
            if (nextli) {
                ul.insertBefore(nextli, li)
            }
        }
        else if (event.target.className == 'up') {
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevli = li.previousElementSibling
            if (prevli) {
                ul.insertBefore(li, prevli)
            }
        }
    }
})

function createbutton(li) {
    let remove = document.createElement('button')
    remove.textContent = 'remove'
    remove.className = 'remove'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = 'up'
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'down'
    down.className = 'down'
    li.appendChild(down)
}
