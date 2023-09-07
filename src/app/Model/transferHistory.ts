export interface TransferHistory{
    id : number,
    currentClubId : number,
    lastClubId : number,
    season : number,
    joined : Date, 
    contractExpires : Date,
    fee : number
}