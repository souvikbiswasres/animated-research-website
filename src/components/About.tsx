
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center animate-on-scroll">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4 text-research">
              My Research Journey
            </h3>
            <p className="text-gray-700 mb-4">
              I am actively engaged in applying the knowledge of signal processing to human assistance in the form of assistive technology. My current research focuses on developing algorithms for real-time object detection and recognition to aid visually impaired individuals.
            </p>
            <p className="text-gray-700 mb-4">
              With a background in both theoretical and applied research, I strive to bridge the gap between academic research and practical applications that can improve people's lives.
            </p>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4 text-research">
              Education & Expertise
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-gray-800">Ph.D. in Computer Science</h4>
              <p className="text-gray-600">University of Illinois, 2015-2020</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-gray-800">M.S. in Electrical Engineering</h4>
              <p className="text-gray-600">Georgia Tech, 2012-2014</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">B.Tech in Electronics</h4>
              <p className="text-gray-600">Indian Institute of Technology, 2008-2012</p>
            </div>
          </div>
        </div>
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-research text-center">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Computer Vision",
                description:
                  "Object detection, scene understanding, and visual recognition",
              },
              {
                title: "Deep Learning",
                description:
                  "Neural networks for image processing and pattern recognition",
              },
              {
                title: "Assistive Technology",
                description:
                  "Creating tools to help visually impaired individuals navigate daily life",
              },
              {
                title: "Signal Processing",
                description:
                  "Time-frequency analysis and adaptive filtering",
              },
              {
                title: "Human-Computer Interaction",
                description:
                  "Designing intuitive interfaces for assistive devices",
              },
              {
                title: "Mobile Computing",
                description:
                  "Developing efficient algorithms for resource-constrained devices",
              },
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-medium mb-2 text-research">
                  {interest.title}
                </h4>
                <p className="text-gray-700">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
