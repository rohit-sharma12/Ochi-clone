
const About = () => {
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className="text-[3vw] leading-[4vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
                <div className="w-1/2 m-2">
                    <h1 className="text-5xl ">Our Approach</h1>
                    <button className="flex gap-10 items-center bg-zinc-800 rounded-full px-8 py-4 mt-8 text-white text-2xl uppercase">Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>

                </div>

                <div className="w-1/2 h-[75vh]">
                    <img className="rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
