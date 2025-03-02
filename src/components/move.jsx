import { motion } from "framer-motion";

const Move = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
            <div className="text border-t-2 text border-b-2 text-white border-zinc-500 overflow-hidden flex whitespace-nowrap">
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 8 }} className="text-[18vw] leading-none uppercase pr-20 pt-10 -mt-10 font-bold tracking-tighter">We are Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 8 }} className="text-[18vw] leading-none uppercase pr-20 pt-10 -mt-10 font-bold tracking-tighter">We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Move
