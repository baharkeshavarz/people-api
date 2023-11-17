"use client"
import { PulseLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] flex-col">
       <PulseLoader size={24} color="green"/>
    </div>
  )
}

export default Loader