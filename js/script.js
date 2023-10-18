document.addEventListener('click', (e) =>{
    e.preventDefault()
})

const btn = document.getElementById('bars')
let listas = document.querySelector('#global')

function toggleMenu(){
    let listas = document.querySelector('#global')
    listas.classList.toggle('active')
}
btn.addEventListener('click',toggleMenu)


const closeBtn = document.querySelector('#xzinho')

closeBtn.addEventListener('click', function(){
    listas.classList.remove('active')
})


