export interface ClubDetail{
    id: number,
    leagueId : number,
    countryId : number,
    clubImageId : number,
    clubImagePath : string,
    date : Date,
    clubName: string,
    squadSize : number,
    averageAge : number,
    nationalTeamPlayers: number,
    foreigners : number,
    stadiumName : string,
    stadiumCapacity : number,
    currentTransferRecord: number,
    clubMarketValue : number 
}