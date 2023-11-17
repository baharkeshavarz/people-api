import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

interface LayoutProps {
  children:React.ReactNode,
}

const Layout = async({
  children,
 }: LayoutProps) => {

 return (
    <div className="bg-white">
        <div className="relative bg-gray-900">
          <Hero/>
          <NavBar/>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-white lg:text-6xl">
                What is Lorem Ipsum?
              </h1>
              <p className="mt-4 text-xl text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
              </p>
              <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">Shop New Arrivals</a>
            </div>
         </div>

        <main>
           <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
              {children}
            </section>
        </main>
        <Footer/>
    </div>
 );
}

export default Layout