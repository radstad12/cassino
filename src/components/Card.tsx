import {motion} from 'framer-motion';
import type {Card as CardType} from '../game/types';
export default function Card({card,hidden=false,dealDelay=0}:{card?:CardType;hidden?:boolean;dealDelay?:number}){return <motion.div className={`card ${hidden?'card-back':(card?.suit==='♥'||card?.suit==='♦'?'red':'')}`} initial={{opacity:0,y:-28,rotateY:180,scale:.8}} animate={{opacity:1,y:0,rotateY:hidden?180:0,scale:1}} transition={{duration:.38,delay:dealDelay}}>{hidden?'':<><span>{card?.rank}</span><strong>{card?.suit}</strong></>}</motion.div>}
