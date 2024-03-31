export interface TransferHistory {
    id: number,
    footballerId: number,
    currentClubId: number,
    lastClubId: number,
    season: number,
    joined: Date,
    contractExpires: Date,
    fee: number
}