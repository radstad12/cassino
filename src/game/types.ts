export type Suit = '♠'|'♥'|'♦'|'♣';
export type Rank = '2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'J'|'Q'|'K'|'A';
export type Card = { suit: Suit; rank: Rank; id: string };
export type Street = 'preflop'|'flop'|'turn'|'river'|'showdown';
export type ActionType = 'fold'|'check'|'call'|'raise';
export type Player = { id:string; name:string; avatar:string; chips:number; hand:Card[]; currentBet:number; folded:boolean; isHuman?:boolean; style?:'tight'|'aggressive'|'balanced'|'wild'; };
export type Action = { playerId:string; type:ActionType; amount?:number };
export type GameState = { players:Player[]; community:Card[]; deck:Card[]; pot:number; street:Street; dealerIndex:number; currentPlayerIndex:number; currentBet:number; minRaise:number; lastAction?:Action; handNumber:number; message:string; winnerIds:string[]; showdownText?:string; };
