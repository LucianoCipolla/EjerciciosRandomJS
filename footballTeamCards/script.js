const footballTeam = {team:"Argentina", year:2022, headCoach:"Lionel Scaloni", players:[{name:"Emiliano Martínez", position:"goalkeeper",isCaptain:false}, {name:"Nahuel Molina", position:"defender",isCaptain:false}, {name:"Cristian Romero", position:"defender",isCaptain:false}, {name:"Nicolás Otamendi", position:"defender",isCaptain:false}, {name:"Marcos Acuña", position:"defender",isCaptain:false}, {name:"Rodrigo De Paul", position:"midfielder",isCaptain:false}, {name:"Leandro Paredes", position:"midfielder",isCaptain:false}, {name:"Guido Rodríguez", position:"midfielder",isCaptain:false}, {name:"Ángel Di María", position:"forward",isCaptain:false}, {name:"Lautaro Martínez", position:"forward",isCaptain:false}, {name:"Lionel Messi", position:"forward",isCaptain:true}]};


const playerCardsContainer = document.getElementById("player-cards");

const playerCards = positionFilter => footballTeam.players.filter(({position})=> position === positionFilter || positionFilter === "all" ).map(({name,position,isCaptain})=>{
  return isCaptain ? `<div class="player-card">
          <h2 class="player-name">(Captain) ${name}</h2>
          <p class="player-position">Position: ${position}</p>
        </div>` : `<div class="player-card">
          <h2 class="player-name">${name}</h2>
          <p class="player-position">Position: ${position}</p>
        </div>`
}).join('')

const cardsContainer = document.getElementById('player-cards')
const selectContainer = document.querySelector("select");

selectContainer.addEventListener('change',()=> cardsContainer.innerHTML = playerCards(selectContainer.value) )