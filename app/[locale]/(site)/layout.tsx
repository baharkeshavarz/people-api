import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import NavBar from "@/app/components/NavBar";

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
           <Banner/>
         </div>
        <main>
           <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              {children}
            </section>
        </main>
        <Footer/>
    </div>
 );
}

export default Layout