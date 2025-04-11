
import React, { useEffect } from "react";

const Research = () => {
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

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const researchProjects = [
    {
      title: "Visual Field Monitoring System",
      description:
        "Development of a system to monitor the visual field of patients with degenerative eye diseases, providing real-time feedback to medical professionals.",
      image: "/placeholder.svg",
      tags: ["Computer Vision", "Medical Imaging", "Neural Networks"],
    },
    {
      title: "Low Power Computer Vision for Assistive Devices",
      description:
        "Research on optimizing computer vision algorithms for low-power devices to create portable assistive technologies for the visually impaired.",
      image: "/placeholder.svg",
      tags: ["Low-Power Computing", "Mobile Vision", "Assistive Technology"],
    },
    {
      title: "Audio-Visual Scene Understanding",
      description:
        "Integration of audio and visual cues for enhanced scene understanding, enabling more robust environment perception for assistive technologies.",
      image: "/placeholder.svg",
      tags: ["Multimodal Learning", "Audio Processing", "Scene Recognition"],
    },
  ];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center animate-on-scroll">
          Research Focus
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-on-scroll">
          My research focuses on developing computer vision and deep learning technologies
          to create assistive solutions for individuals with visual impairments.
        </p>

        <div className="space-y-20">
          {researchProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              <div 
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "animate-on-scroll" : "animate-on-scroll-right"
                }`}
              >
                <div className="bg-white p-2 rounded-xl shadow-lg">
                  <div className="bg-gradient-to-r from-research-light to-research h-64 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{project.title}</span>
                  </div>
                </div>
              </div>
              <div 
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "animate-on-scroll-right" : "animate-on-scroll"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 text-research">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-research bg-opacity-10 text-research rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
