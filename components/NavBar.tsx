import Image from "next/image"
import SelectLanguage from "./SelectLanguage"

const NavBar = () => {
  return (
     <header className="relative z-10">
      <nav aria-label="Top">
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/">
                    <span className="sr-only">My Company</span>
                    <div className="h-12 w-12 relative">
                    <Image
                       src="/logo.png"
                       alt="logo"
                       fill
                    />
                    </div>
                  </a>
                </div>
                <div className="hidden h-full lg:flex">
                  <div className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      <a href="#" className="flex items-center text-sm font-medium text-white">About us</a>
                      <a href="#" className="flex items-center text-sm font-medium text-white">Company</a>
                      <a href="#" className="flex items-center text-sm font-medium text-white">Contact us</a>
                      <a href="/users" className="flex items-center text-sm font-medium text-white">Users</a>
                      <SelectLanguage/>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" className="-ml-2 p-2 text-white">
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>

                  <a href="#" className="ml-2 p-2 text-white">
                    <span className="sr-only">Search</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </a>
                </div>

                <a href="#" className="lg:hidden">
                  <span className="sr-only">My Company</span>
                  <Image 
                     src="/logo.png" 
                     alt="logo" 
                     className="h-8 w-12" 
                     fill
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
 )
}

export default NavBar
