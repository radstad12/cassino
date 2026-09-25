import {motion} from 'framer-motion';
export default function Dealer(){return <motion.div className="dealer" initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}}><div className="dealer-ring">♠</div><div><strong>THE DEALER</strong><small>HOUSE // NIGHT SHIFT</small></div></motion.div>}
