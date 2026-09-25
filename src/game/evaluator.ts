import type {Card,Rank} from './types';
const value:Record<Rank,number>={'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,J:11,Q:12,K:13,A:14};
export type HandScore={rank:number; name:string; tiebreak:number[]};
export function evaluate(cards:Card[]):HandScore{
 const vals=cards.map(c=>value[c.rank]).sort((a,b)=>b-a); const counts=new Map<number,number>(); vals.forEach(v=>counts.set(v,(counts.get(v)||0)+1));
 const unique=[...new Set(vals)].sort((a,b)=>b-a); if(unique.includes(14)) unique.push(1);
 let straightHigh=0; for(let i=0;i<=unique.length-5;i++){const slice=unique.slice(i,i+5); if(slice[0]-slice[4]===4){straightHigh=slice[0];break;}}
 const flush=cards.every(c=>c.suit===cards[0].suit);
 if(flush&&straightHigh) return {rank:8,name:'Straight Flush',tiebreak:[straightHigh]};
 const groups=[...counts.entries()].sort((a,b)=>b[1]-a[1]||b[0]-a[0]);
 const quad=groups.find(g=>g[1]===4); if(quad){const k=vals.find(v=>v!==quad[0])!;return {rank:7,name:'Four of a Kind',tiebreak:[quad[0],k]};}
 const trips=groups.filter(g=>g[1]>=3); const pairs=groups.filter(g=>g[1]>=2);
 if(trips.length>=2) return {rank:6,name:'Full House',tiebreak:[trips[0][0],trips[1][0]]};
 if(trips.length===1&&pairs.length>=2) return {rank:6,name:'Full House',tiebreak:[trips[0][0],pairs.find(p=>p[0]!==trips[0][0])![0]]};
 if(flush) return {rank:5,name:'Flush',tiebreak:vals.slice(0,5)};
 if(straightHigh) return {rank:4,name:'Straight',tiebreak:[straightHigh]};
 if(trips.length===1){const kick=vals.filter(v=>v!==trips[0][0]).slice(0,2);return {rank:3,name:'Three of a Kind',tiebreak:[trips[0][0],...kick]};}
 const pairVals=pairs.filter(p=>p[1]===2).map(p=>p[0]).sort((a,b)=>b-a); if(pairVals.length>=2){const p=pairVals.slice(0,2);const k=vals.find(v=>!p.includes(v))!;return {rank:2,name:'Two Pair',tiebreak:[...p,k]};}
 if(pairVals.length===1){return {rank:1,name:'One Pair',tiebreak:[pairVals[0],...vals.filter(v=>v!==pairVals[0]).slice(0,3)]};}
 return {rank:0,name:'High Card',tiebreak:vals.slice(0,5)};
}
export function bestOf(cards:Card[]):HandScore{let best:HandScore|undefined; for(let a=0;a<cards.length-4;a++)for(let b=a+1;b<cards.length-3;b++)for(let c=b+1;c<cards.length-2;c++)for(let d=c+1;d<cards.length-1;d++)for(let e=d+1;e<cards.length;e++){const s=evaluate([cards[a],cards[b],cards[c],cards[d],cards[e]]); if(!best||compare(s,best)>0)best=s;} return best!;}
export function compare(a:HandScore,b:HandScore){if(a.rank!==b.rank)return a.rank-b.rank;for(let i=0;i<Math.max(a.tiebreak.length,b.tiebreak.length);i++){if((a.tiebreak[i]||0)!==(b.tiebreak[i]||0))return (a.tiebreak[i]||0)-(b.tiebreak[i]||0);}return 0;}
