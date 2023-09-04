export interface TransferHistory{
    id : number,
    beforeClubId : number,
    lastClubId : number,
    beforeClubName : string,
    lastClubName : string,
    season : number,
    joined : Date, 
    ContractExpires : Date,
    ContractExtension : Date,
    mv : number,
    fee : number
}