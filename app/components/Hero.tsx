import Image from 'next/image'
import React,{FC} from 'react'

interface Props{}

const Hero:FC<Props> = (props) => {
  return (
    <header className="bg-white max-w-screen-2xl mx-auto">
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Everything you need <br/> to upskill <span className="text-blue-500 ">yourself</span></h1>
                    
                    <p className="mt-3 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Login</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" width={100} height={100} alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>
</header>
  )
}

export default Hero
