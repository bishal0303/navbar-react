import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
const Navbar = ({mobileView, setMobileView}) => {
  return (
    <>
        <div className="w-screen bg-red-100 px-6 py-7">
            <div className="w-full max-w-7xl mx-auto px-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-4xl">LOGO</h1>
                    <div className="flex items-center gap-5 max-[720px]:hidden">
                    <a className="text-black/70 hover:text-black/90 font-semibold" href="#">Home</a>
                    <a className="text-black/70 hover:text-black/90 font-semibold" href="#">About</a>
                    <a className="text-black/70 hover:text-black/90 font-semibold" href="#">Service</a>
                    <a className="text-black/70 hover:text-black/90 font-semibold" href="#">Portfolio</a>
                    <a className="text-black/70 hover:text-black/90 font-semibold" href="#">Contact</a>
                    </div>

                    <div className="flex items-center gap-3 min-[720]:flex-row ">            
                    <button className="px-7 py-[10px] bg-amber-900 hover:bg-amber-700 text-white/80 font-semibold cursor-pointer rounded-3xl">Hire Me</button>
                    <CgMenuRight onClick={() => setMobileView(true)} className="min-[720px]:hidden text-3xl"/>
                    </div>
                </div>


                {/* mobile menu */}
                <div className={`flex flex-col gap-6 bg-[#373D35] w-[20rem] h-screen absolute top-0 left-0 px-5 py-7  transition-all duration-700 ease-in-out min-[720px]:hidden
                ${ mobileView ? `translate-x-0` :  `-translate-x-[100%]`}`}>
                    <div>
                    <h1 className="font-bold text-4xl text-center text-white/70 ">LOGO</h1>
                    <FaTimes onClick={() => setMobileView(false)} className="absolute top-[1rem] right-[1rem] text-2xl text-white/70 bg-[#3c4439] rounded-lg"/>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-7 ">
                    <a className="text-white/60 hover:text-white font-semibold py-3 hover:bg-[#3c4439] rounded-lg w-full text-center" href="#">Home</a>
                    <a className="text-white/60 hover:text-white font-semibold py-3 hover:bg-[#3c4439] rounded-lg w-full text-center" href="#">About</a>
                    <a className="text-white/60 hover:text-white font-semibold py-3 hover:bg-[#3c4439] rounded-lg w-full text-center" href="#">Service</a>
                    <a className="text-white/60 hover:text-white font-semibold py-3 hover:bg-[#3c4439] rounded-lg w-full text-center" href="#">Portfolio</a>
                    <a className="text-white/60 hover:text-white font-semibold py-3 hover:bg-[#3c4439] rounded-lg w-full text-center" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Navbar