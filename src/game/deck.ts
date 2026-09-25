import type {Card, Rank, Suit} from './types';
const suits:Suit[]=['♠','♥','♦','♣'];
const ranks:Rank[]=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
export function createDeck():Card[]{return suits.flatMap(s=>ranks.map(r=>({suit:s,rank:r,id:`${s}${r}`})));}
export function shuffle<T>(items:T[]):T[]{const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a;}
