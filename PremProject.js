const clubs = ["Arsenal", "Manchester City","Newcastle United","Manchester United","Tottenham Hotspur","Liverpool","Brentford","Fulham","Chelsea","Brighton and Hove Albion","Crystal Palace","Aston Villa","Leicester City","Leeds United","Bournemouth","Everton","West Ham United","Nottingham Forest","Wolverhampton Wanderers","Southampton"]
const leaguePosition = [ "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th"]
const badQuotes = [ "what a disaster!", "this is happening to your team.", "this season is becoming a nightmare.", "what a shocker!", "i'm so disappointed in your team.", "you're going down and there's nothing you can do about it.", "unbelievable! I never thought you'd end up here.", "can the coach please do something?", "feel like I could cry right now.", "reasons why I should give up on this team.", "this is not what I expected at all.", "what a disaster of a season.", "time to write off this season and move on.", "looks like relegation is inevitable.", "just can't get over how bad this team is playing.", "you just don't have the quality to stay up.", "watched your team go from great to dismal in no time.", "wasn't expecting your team to end up like this.", "how on earth did your team get so bad?!", "total embarrassment of a season."]
const goodQuotes = [ "go get that trophy!", "unbeeeelievable Jeff!", "they can do it.", "this is their time to shine.", "they're unstoppable!", "can you adam and eve it?", "time to celebrate.", "it's been a season to remember.", "every week they make history.", "it's getting serious now.", "we can't let this chance slip.", "anything is possible.", "what a journey!", "let's make history!", "we've made it this far.", "incredible performances lately.", "we're making headlines!", "they've proved them wrong, again.", "this is their year.", "they need to make it count!"]

const randomise = length => Math.floor(Math.random() * length) // pass in array length to get a random int between 0 and length

let rClub = randomise(clubs.length) // random int between 0 - 19
let rClubNamme = clubs[rClub] // item value of clubs array.. e.g. "Fulham"
let rleaguePosition = randomise(leaguePosition.length) // remember, zero indexed, therfore league position value is one greater
rleaguePosition = leaguePosition[rleaguePosition] // modify the variable to the item value
let indexOfRLeaguePosition = leaguePosition.indexOf(rleaguePosition) // get the index of the rLeaguePosition
let rBadQuote = randomise(badQuotes.length) // random int between 0 - 19
let rGoodQuote = randomise(goodQuotes.length) // random int between 0 - 19
let speakBad = badQuotes[rBadQuote] // item value of goodQuotes array
let speakGood = goodQuotes[rGoodQuote] // item value of badQuotes array



const getQuote = (speakBad, speakGood, indexOfRLeaguePosition) => {

    let result;
    
    if(indexOfRLeaguePosition <= 10){
        result = speakGood
    } else {
        result = speakBad
    }
    
    return result
}

const printRandomString = () => console.log(`${rClubNamme} is in ${rleaguePosition}, ${getQuote(speakBad, speakGood, indexOfRLeaguePosition)}`)



printRandomString()