
import React, { useEffect } from "react";

const Publications = () => {
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

  const publications = [
    {
      title:
        "Vision-language pre-trained models for multi-modal scene understanding: A survey",
      authors: "Biswas S, Zhou Q, Aneja D",
      journal: "Neural Computing and Applications",
      year: 2022,
      link: "#",
    },
    {
      title:
        "Image dehazing using texture classification-based segmentation and radiative transfer model",
      authors: "Biswas S, Sen S, Chakraborty S",
      journal: "IEEE Transactions on Image Processing",
      year: 2020,
      link: "#",
    },
    {
      title:
        "Improved blind image deblurring using spectral constraints and nonlocal regularization",
      authors: "Biswas S, Halder A, Sarkar P",
      journal: "IEEE Signal Processing Letters",
      year: 2019,
      link: "#",
    },
    {
      title:
        "Real-time object detection system for visually impaired using mobile devices",
      authors: "Biswas S, Kumar M, Ray KS",
      journal: "International Conference on Computer Vision and Pattern Recognition",
      year: 2018,
      link: "#",
    },
    {
      title:
        "Audio-visual scene understanding for assistive technologies",
      authors: "Biswas S, Das S, Roy R",
      journal: "IEEE Conference on Applied Signal Processing",
      year: 2017,
      link: "#",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center animate-on-scroll">
          Publications
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-on-scroll">
          A selection of my recent academic publications in the fields of computer vision,
          deep learning, and assistive technologies.
        </p>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="publication-card animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2 text-research">
                {pub.title}
              </h3>
              <p className="text-gray-700 mb-2">{pub.authors}</p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">{pub.journal}</span>, {pub.year}
              </p>
              <a
                href={pub.link}
                className="text-research hover:text-research-dark transition-colors inline-flex items-center"
              >
                <span>Read Paper</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
