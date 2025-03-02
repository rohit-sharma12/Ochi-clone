
const Cards = () => {
    return (
        <div className="w-full h-screen flex gap-5 items-center px-10">
            <div className="container w-1/2 h-[50vh]">
                <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                    <img className="w-30" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 bottom-8 w-28 h-8 text-amber-200 border rounded-full border-amber-200">@2019-2022</button>
                </div>
            </div>
            <div className="cardcontainer  gap-5 w-1/2 h-[50vh] flex">
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-800 text-white">
                    <img className="w-33" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute left-10 bottom-8 w-30 h-8 text-gray-200 border rounded-full border-gray-200 uppercase">Rating5.0</button>
                </div>
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-800">
                    <img className="w-28" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute left-10 bottom-6 w-50 h-8 text-gray-200 border rounded-full border-gray-200 uppercase">BussinessBootcamp</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
