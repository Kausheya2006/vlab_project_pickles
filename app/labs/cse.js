"use client";
import React, { useState } from "react";
import "./cse.css"; // Custom styles for the page

const sections = [
  { name: "Introduction", content: "This is the introduction section." },
  { name: "Objective", content: "Objectives of the CSE Labs are..." },
  { name: "List of Experiments", content: "Here are the experiments available." },
  { name: "Target Audience", content: "This lab is meant for..." },
  { name: "Course Alignment", content: "Courses aligned with this lab are..." },
  { name: "Feedback", content: "Submit your feedback here." }
];

const CSEPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="cse-page">
      {/* Left Vertical Navbar */}
      <nav className="side-navbar">
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
      <div className="content-area">
        <h2>{activeSection.name}</h2>
        <p>{activeSection.content}</p>
      </div>
    </div>
  );
};

export default CSEPage;
