//Tab
let listMenu = document.querySelectorAll('li')

listMenu.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active')
   
    if (this.classList.contains('btn-pokemonPlante')) {
        document.getElementById('pokemonPlante').classList.add('afficher-contenu')
    } 
    if (this.classList.contains('btn-pokemonFeu')) {
        document.getElementById('pokemonFeu').classList.add('afficher-contenu')
    }
    
  })
})