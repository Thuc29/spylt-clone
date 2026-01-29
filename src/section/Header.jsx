import { ArrowDownToLine } from "lucide-react"

function Header() {
     return (
          <>
               <div className="fixed z-50 flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">

                    <nav className="">

                    </nav>

                    <div className="">
                         <button className='flex cursor-pointer bg-dark-navy gap-2 items-center text-light-beige uppercase font-bold text-lg rounded-full md:p-3 p-2 md:px-12 px-10  hover:text-dark-navy hover:bg-light-beige hover:transition-colors hover:duration-500'>
                              <ArrowDownToLine />
                              Download CV
                         </button>
                    </div>
               </div>

          </>
     )
}

export default Header