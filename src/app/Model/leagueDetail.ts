export interface LeagueDetail {
    id: number,
    countryId: number,
    leagueImagePath: string,
    countryName: string
    countryImagePath: string,
    leagueName: string,
    date: Date,
    numberOfTeams: number,
    totalMarketValue: number,
    players: number,
    leagueLevel: number,
    reigningChampion: number,
    foreigners?: number,
    age: number[],
    mostValuablePlayer: any
}