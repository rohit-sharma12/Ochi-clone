import { MdOutlineArrowOutward } from "react-icons/md";

const Landing = () => {
    return (
        <div className="h-screen w-full pt-1">
            <div className="px-20 mt-40 textstructure">
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                    <div className="mr-[1vw] w-[8vw] h-[6vw] top-[1.2vw] rounded-md relative bg-green-500"></div>
                                )}
                                <h1 key={index} className="text-[7vw] text-zinc-900 uppercase font-bold leading-[5.8vw] tracking-tighter">{item}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-1 border-zinc-400 mt-35 flex justify-between items-center py-5 px-20">
                {["For public", "From the first pitch to ipo"].map((item, index) =>
                    <p key={index} className="text-lg font-semilight leading-none tracking-tight">{item}</p>
                )}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 rounded-full border-[1px] border-gray-900 font-semilight text-sm uppercase">Start the project</div>
                    <div className="w-8 h-8 border-[1px] border-gray-900 rounded-full flex items-center justify-center"><MdOutlineArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default Landing
