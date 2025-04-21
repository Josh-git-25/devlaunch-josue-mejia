/* El evento es parte de las Eliminatorias Sudamericanas para la copa del Mundo. 
En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina se enfrento al equipo visitante Brasil. 
El resultado final fue 1-0, indicando a Argentina como el equipo ganador.*/

const eventName = 'Eliminatoria Sudamericana'

const date = '22/11/23'

const hour = 20 
const minutes = 30  
const time = `${hour}:${minutes}`
const formatHour = hour-12 
const formatTime = `${formatHour}:${minutes}`

const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = 1
const awayTeamScore = 0 




console.log (`
    Torneo: ${eventName} - (${formatTime})
    Equipos: ${localTeam} VS ${awayTeam}   
    Resultado: ${localTeamScore} - ${awayTeamScore}
    `)