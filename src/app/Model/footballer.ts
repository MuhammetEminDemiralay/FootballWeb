export interface Footballer{
    id : number, 
    clubId : number, 
    leagueId : number,
    countryId : number, 
    cityId : number,
    positionId : number,
    careerStatId? : number,
    outfitterId? : number,
    footId : number,
    name : string,
    dateOfBirth : Date,
    age : number,
    height : number,
    footballerValue : number,
    playerNumber : number,
    nationalTeamPlayerActive : boolean,
    nationalTeamLevel : number
}



// {
//     "id": 1,
//     "clubId": 1,
//     "countryId": 1,
//     "cityId": 1,
//     "transferHistoryId": 1,
//     "careerStatId": 1,
//     "positionId": 1,
//     "currentClubId": 1,
//     "outfitterId": 1,
//     "nationalTeamId": 1,
//     "name": "Mauro Icardi",
//     "dateOfBirth": "1994-04-30T00:00:00",
//     "age": 30,
//     "height": 184,
//     "footballerValue": 12000000
//   }