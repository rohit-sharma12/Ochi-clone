import { motion, useAnimation } from "framer-motion"

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className="w-full py-20">
            <div className="w-full px-20 border-b-2 pb-20 border-zinc-400">
                <h1 className="text-6xl tracking-tight">Featured projects</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardconatiner relative w-1/2 h-[75vh]">
                        <h1 className="absolute flex overflow-hidden font-bold text-8xl left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68]">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                    key={index}>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardconatiner relative w-1/2 h-[75vh]">
                        <h1 className="absolute flex overflow-hidden font-bold text-8xl right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] uppercase">
                            {"OficeVibe".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                    key={index}>{item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardconatiner relative w-1/2 h-[75vh]">
                        <h1 className="absolute flex overflow-hidden font-bold text-8xl left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] uppercase">
                            {"FIDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                    key={index}>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="cardconatiner relative w-1/2 h-[75vh]">
                        <h1 className="absolute flex overflow-hidden font-bold text-8xl right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] uppercase">
                            {"SoftSatrt".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                    key={index}>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div >
    )
}

export default Featured
