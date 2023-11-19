import React from 'react'

function Navbar() {
  return (
    <nav className="">
    <div className="flex bg-white drop-shadow-md justify-evenly pt-2 w-screen">
      {/* Navigation Bar White with logo */}

      <div className="flex w-3/4 h-12 pl-36 p-0 mt-2">
        <img src="../img/logo.png" alt="" />
      </div>
      <div className="flex text-[#213557] pr-32 w-full">
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
            <strong>Home</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>About</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Academics</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Admission</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Placement</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Life At Sahyadri</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Activties</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Media</strong>
          </a>
        </div>
        <div className="p-0 mx-3 hover:text-green-600 py-4 border-b-8 border-transparent hover:border-green-600 cursor-pointer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong>Recruitment</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar