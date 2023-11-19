import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    <header className="text-white text-sm position:fixed w-full m-0 p-3 bg-[#002641]">
      {/* Top blue navigation bar */}
      <div className="flex justify-between p-1 px-6">
        <div className="flex">
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">sahyadri@sahyadri.edu.in</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3"> +91 824 2277222</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">NIRF Info</a>
        </div>
        <div className="flex">
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">Mandatory Disclosures</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">ARIIA-2021</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">MBA</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3">Admission Procedure</a>
          <a href="#" className="text-white decoration-0 hover:text-[#fcff5c] p-1 px-3"><strong className="animate-pulse">ADMISSION OPEN</strong></a>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header