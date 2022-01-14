
let text = '',
titleDate = moment().format('dddd, MMM Do YYYY'),
currentTime = moment().hour(),
listOfDiv = document.querySelectorAll('.row')



document.querySelector('#currentDay').textContent = titleDate



listOfDiv.forEach((div)=>{
    const time = div.id.split('-')[3]

    const colorChange = ()=>{
        const militaryBlockTime = div.id.split('-')[1]
        if(currentTime > militaryBlockTime){
            div.classList.add('past')
        }else if(currentTime == militaryBlockTime){
            div.classList.add('present')
        }else {
            div.classList.add('future')
        }
    }

    const innerDiv = document.createElement('div')
    innerDiv.classList.add('col-md-1', 'hour')
    innerDiv.innerHTML= `${time} ${time <=5 ? 'PM':'AM'}`

    const textArea = document.createElement('textarea')
    textArea.classList.add('col-md-10', 'description')

    const button = document.createElement('button')
    button.classList.add('btn', 'saveBtn', 'col-md-1')
    button.setAttribute('id', `${time}`)
    button.innerHTML = '<i class="fas fa-save">'

    div.append(innerDiv)
    div.append(textArea)
    div.append(button)

    
    colorChange()

    textArea.textContent = localStorage.getItem(`${time} ${time <=5 ? 'PM':'AM'}`)
    
    textArea.addEventListener('input', (e)=>{
        text = e.target.value
        colorChange()
    })
    //start here tomorrow morning 
    button.addEventListener('click',(e)=>{
        let previoussibling = button.previousElementSibling.value
        text = previoussibling  
        colorChange()
            localStorage.setItem(innerDiv.textContent.trim(),text)
            text = ''
        
    })


})

