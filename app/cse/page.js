"use client";
import React, { useState } from "react";
import "./cse.css"; // Custom styles for the page
import { FiMenu, FiX } from "react-icons/fi";

// ⭐ Function to Render Stars Correctly
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {"⭐".repeat(fullStars)}
      {halfStar ? "⭐" : ""}
      {"☆".repeat(emptyStars)}
    </>
  );
};

const sections = [
  {
    name: "Introduction",
    content: (
      <div className="content-box">
        <h2>Computer Organisation</h2>
        <p>
          Computer science is all about providing abstractions and their efficient implementation.
          An abstraction provides a logical view of a certain service or a resource by giving a
          well-defined black-box model, its associated properties, and hides the internal details
          of the black-box.
        </p>
        <p>
          For example, the design and implementation of a processor are abstracted away through
          the Instruction Set Architecture (ISA) of the processor. Further, high-level programming
          languages like C, C++ abstract away the ISA of a processor by allowing programmers to
          express their intent using constructs like for-loops, while-loops, etc.
        </p>
        <p>
          In this lab, the first two experiments deal with two primitive data abstractions:
          integers and floating-point numbers. We look at various approaches for representing
          integers and floating-point numbers in binary and their pros and cons.
        </p>
        <p>
          The next four experiments involve writing assembly language programs using MIPS and ARM
          ISA. In these experiments, we learn how to map high-level language constructs to a
          sequence of assembly language instructions.
        </p>
        <p>
          In the last experiment, we study how to design a processor for a subset of MIPS ISA
          using the Single Cycle Per Instruction approach. This helps us understand how high-level
          language constructs map to assembly programs, followed by realizing assembly instructions
          using logic gates.
        </p>
        <p>
          Processor, Memory, and I/O Devices are three major subsystems in a computer. Cache
          memory plays a crucial role in bridging the speed mismatch between a processor and the
          associated main memory module.
        </p>
        <p>
          We have three experiments on cache memories illustrating various possible cache
          organizations and their impact on program performance. Additionally, one experiment
          covers the concept of Virtual Memory.
        </p>

        <h3>Software Dependencies</h3>
        <ul>
          <li>Browsers - Firefox 50 and lower versions, Internet Explorer</li>
          <li>Adobe Flash Plugin</li>
          <li>Java 1.7</li>
          <li>Java3D-1.5.2</li>
          <li>IcedTea Plugin</li>
        </ul>

        <h3>Recommendation</h3>
        <p>
          We recommend using our customized VirtualBox for smooth simulation execution.
          Install VirtualBox from Virtual Labs to ensure compatibility with required dependencies.
        </p>
      </div>
    ),
  },
  {
    name: "Objective",
    content: (
      <div className="content-box">
        <h2>Objective</h2>
        <p>Computer Organisation</p>
        <p>To determine the various courses of computer organization.</p>
      </div>
    ),
  },
  {
    name: "List of Experiments",
    content: (
      <div className="content-box">
        <h2>List of Experiments</h2>
        <h3>Computer Organisation</h3>
        <ul className="experiments-list">
          <li>Representation of Integers and their Arithmetic - {renderStars(4)}</li>
          <li>Representation of Floating Point Numbers and their Arithmetic - {renderStars(4.5)}</li>
          <li>Virtual Memory - {renderStars(4)}</li>
          <li>MIPS Assembly Language Programming - 1 - {renderStars(0)}</li>
          <li>ARM Assembly Language Programming - 1 - {renderStars(4.5)}</li>
          <li>ARM Assembly Language Programming - 2 - {renderStars(0)}</li>
          <li>Single Cycle MIPS CPU - {renderStars(4.5)}</li>
        </ul>
      </div>
    ),
  },
  {
    name: "Target Audience",
    content: (
      <div className="content-box target-audience">
        <h2>🎯 Target Audience</h2>
        <div className="audience-category">
          <h3>📌 UG</h3>
          <ul>
            <li>💻 <span>B. Tech. / B.E in Computer Science & Information Technology</span></li>
          </ul>
        </div>
        <div className="audience-category">
          <h3>📌 PG</h3>
          <ul>
            <li>🖥️ <span>M. Tech in Computer Science</span></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    name: "Course Alignment",
    content: (
      <div className="content-box course-alignment">
        <h2>📚 Course Alignment</h2>
        <h3>Computer Organisation</h3>
        <p>
          Introductory-level courses on <strong>digital logic</strong> and <strong>programming</strong>  
          are essential prerequisites for this course. No prior experience with data structures is required.
        </p>
      </div>
    ),
  },

  {
    name: "Feedback",
    content: (
      <div className="content-box feedback-section">
        <h2>💬 Feedback</h2>
        <h3>🖥️ Computer Organisation</h3>
        <p className="feedback-text">
          Dear User,
          <br />
          <br />
          Thanks for using <strong>Virtual Labs</strong>. Your opinion is valuable to us. To help us improve, 
          we'd like to ask you a few questions about your experience. It will only take <strong>3 minutes</strong>, 
          and your answers will help us make Virtual Labs better for you and other users.
        </p>
  
        <button className="feedback-button">🚀 Submit Your Feedback</button>
  
        <p className="feedback-footer">
          <br />
          Thanks for your time! <br />
          <strong>— The Virtual Labs Team</strong>
        </p>
      </div>
    ),
  },
];

const CSEPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility state

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible); // Toggle function

  return (
    <div className="cse-page">
      {/* Button to Toggle Sidebar */}
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
  {isSidebarVisible ? <FiX size={24} /> : <FiMenu size={24} />}
</button>

      {/* Left Vertical Navbar */}
      <nav
        className={`side-navbar ${isSidebarVisible ? "visible" : ""}`}
        onClick={toggleSidebar}
      >
        {sections.map((section, index) => (
          <button
            key={index}
            className={`nav-item ${activeSection.name === section.name ? "active" : ""}`}
            onClick={() => setActiveSection(section)}
          >
            {section.name}
          </button>
        ))}
      </nav>

      {/* Right Content Area */}
      <div className={`content-area shifted`}>
        {activeSection.content}
      </div>
    </div>
  );
};

export default CSEPage;


