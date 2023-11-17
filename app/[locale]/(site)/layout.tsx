import Banner from "@/components/Banner";
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