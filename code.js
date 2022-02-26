const d = document;
d.addEventListener('DOMContentLoaded', (e)=>{
    showNet('.picture', '.send')
})

function showNet(picture, send){
    const d = document;
    d.addEventListener('click', (e) =>{
        if(e.target.matches(picture) || e.target.matches(send)){
              const show = document.getElementById('show')
              show.classList.toggle('is-active')
        }
        
    })
}
