import {motion} from 'framer-motion';
export default function ChipStack({amount}:{amount:number}){const count=Math.min(8,Math.max(1,Math.ceil(amount/100)));return <div className="chip-stack">{Array.from({length:count},(_,i)=><motion.i key={i} initial={{y:-50,opacity:0}} animate={{y:-i*4,opacity:1}} transition={{delay:i*.05}}/> )}</div>}
