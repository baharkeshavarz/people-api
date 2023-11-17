import Image from "next/image"

const Hero = () => {
  return (
       <>
         <div className="absolute inset-0 overflow-hidden">
              <Image 
                src="/home-page-01-feature-section-01.jpg"
                alt="hero"
                fill
                className="h-full w-full object-cover object-center"
          />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
       </>
 )
}

export default Hero
