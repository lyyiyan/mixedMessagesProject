const club = ["Man City", "Man United", "Leicester City", "Chelsea", "West Ham", "Everton", "Tottenham", "Liverpool", "Aston Villa", "Arsenal", "Leeds United", "Wolves", "Crystal Palace", "Southampton", "Burnley", "Newcastle", "Brighton", "Fulham", "West Brom", "Sheffield United"]
const assistant = ['Pep Guardiola', 'Ole Gunnar Solsjkaer', 'Brendan Rodgers', 'Thomas Tuchel', 'David Moyes', 'Carlo Ancelotti', 'Jose Mourinho', 'Jurgen Klopp', 'Dean Smith', 'Mikel Arteta', 'Marco Bielsa', 'Nuno Santo', 'Roy Hodgson', 'Ralph Hasenhuttl', 'Sean Dyche', 'Steve Bruce', 'Graham Potter', 'Scott Parker', 'Sam Allardyce', 'Chris Wilde']
const signing = ['Lionel Messi', 'Cristiano Ronaldo', 'Erling Haaland', 'Robert Lewandowski', 'Kylian Mbappe', 'Mohammed Salah', 'Bukayo Saka', 'Phil Foden', 'Jadon Sancho', 'Harry Kane']

const randomCategory = arr => {
    i = Math.floor(Math.random()*arr.length)
    return arr[i]
}

const generate = () => {
    let newClub = randomCategory(club)
    let newAssistant = randomCategory(assistant)
    let newSigning = randomCategory(signing)
    console.log(`If you were to manage a team in the Premier League, your team will be ${newClub}.`)
    console.log(`Your assistant will be the experienced ${newAssistant}.`)
    console.log(`Be excited because the board will support you with funds to purchase ${newSigning}!`)
}