import React from 'react'
import "../core_ui/Footer.css"
function footer() {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-item">
        <a href="/Info"><img src="img/last.png" height="80" width="70"/><h1>SAHYADRI</h1><p>College of Engineering & Management</p></a>
            <p class="text-[#ffffff] mt-4">
            "The institute promote the idea of project based learning through various activities and initiatives in association with various in-house industries, which helps the graduates to imprive their expertise."
            </p>
            <p class="text-white mt-4 text-sm">+ 91 824 2277222/333</p>
            <p class="text-white mt-1 text-sm">+ 91 94498 45959</p>
            <p class="text-white mt-1 text-sm">sahyadri@sahyadri.edu.in</p>
            <p class="text-white mt-1 text-sm">principal@sahyadri.edu.in</p>
            <p class="text-[#ffffff] mt-4">
            "Sahyadri College of Engineering & Management, Sahyadri Campus, Adyar, Mangaluru - 575007, Karnataka, India."
            </p>
        </div>
        <div className="grid-item">
          <h3>OUR COLLEGE</h3>
          <hr class="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li><a href="/Info">About College</a></li>
            <li><a href="/Info">MOU</a></li>
            <li><a href="/Info">Governing Council</a></li>
            <li><a href="/Info">The Chairman</a></li>
            <li><a href="/Info">Director</a></li>
            <li><a href="/Info">Principal</a></li>
            <li><a href="/Info">Key Foundationaries</a></li>
            <li><a href="/Info">Teaching Faculty</a></li>
            <li><a href="/Info">Non Teaching Staff</a></li>
            <li><a href="/Info">Administration Staff</a></li>
            <li><a href="/Info">Mandatory Disclosures</a></li>
          </ul>
        </div>
        <div className="grid-item">
        <h3>ACADEMICS</h3>
        <hr class="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li><a href="/Info">Courses Offered</a></li>
            <li><a href="/Info">Syllabus</a></li>
            <li><a href="/Info">Code of Conduct</a></li>
            <li><a href="/Info">Calendar of Events</a></li>
            <li><a href="/Info">Research & Publication</a></li>
            <li><a href="/Info">Results</a></li>
            <li><a href="/Info">Conference</a></li>
            <li><a href="/Info">Value Added Courses</a></li>
            <li><a href="/Info">Research Center</a></li>
            <li><a href="/Info">Useful Links</a></li>
            <li><a href="/Info">Contact Us</a></li>
          </ul>
        </div>
        <div className="grid-item">
          <h3>FACULTY</h3>
          <hr class="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li><a href="/Info">Placement</a></li>
            <li><a href="/Info">Campus</a></li>
            <li><a href="/Info">Library</a></li>
            <li><a href="/Info">Research Center</a></li>
            <li><a href="/Info">Scholarship</a></li>
            <li><a href="/Info">Hostel</a></li>
            <li><a href="/Info">Transportation</a></li>
            <li><a href="/Info">Sports & Cultures</a></li>
            <li><a href="/Info">Seminar & Workshops</a></li>
            <li><a href="/Info">VIsits & Programmers</a></li>
            <li><a href="/Info">CRS</a></li>
          </ul>
        </div>
        <div className="grid-item">
        <h3>DOWNLOADS</h3>
        <hr class="w-8 h-1 bg-webGreen mt-2"></hr>
          <ul>
            <li><a href="/Info">First Year Achievements</a></li>
            <li><a href="/Info">Press Clippings</a></li>
            <li><a href="/Info">News Letter</a></li>
            <li><a href="/Info">Internship Offered</a></li>
            <li><a href="/Info">Innovation</a></li>
            <li><a href="/Info">Campus Buzz</a></li>
            <li><a href="/Info">Associations</a></li>
            <li><a href="/Info">Downloads</a></li>
            <li><a href="/Info">Fit India</a></li>
            <li><a href="/Info">Conclave Updates</a></li>
            <li><a href="/Info">Journals</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
      Copyright &copy; {new Date().getFullYear()} Sahyadri College of Engineering & Management, Mangalore. All Rights Reserved
      </div>
    </footer>
  )
}

export default footer