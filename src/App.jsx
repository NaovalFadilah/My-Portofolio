import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // =========================
  // ASSET PATH
  // =========================
  const asset = (filename) =>
    `${import.meta.env.BASE_URL}assets/${filename}`;

  // =========================
  // OPEN PROJECT
  // =========================
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // =========================
  // CLOSE PROJECT
  // =========================
  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // =========================
  // NEXT IMAGE
  // =========================
  const nextImage = () => {
    if (!selectedProject?.images?.length) return;

    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  // =========================
  // PREVIOUS IMAGE
  // =========================
  const prevImage = () => {
    if (!selectedProject?.images?.length) return;

    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // =========================
  // SKILLS
  // =========================
  const skills = [
    {
      title: "Quality Assurance",
      items: [
        "Manual Testing",
        "Test Case Design",
        "Test Scenario",
        "Bug Reporting",
        "Regression Testing",
        "JIRA",
        "Postman",
      ],
    },
    {
      title: "Web Development",
      items: [
        "HTML / CSS",
        "JavaScript",
        "PHP",
        "Laravel",
        "React",
        "Tailwind CSS",
        "MySQL",
      ],
    },
    {
      title: "Hardware",
      items: [
        "Laptop Repair",
        "Hardware Diagnostics",
        "Troubleshooting",
        "Maintenance",
        "OS Installation",
        "Printer Installation",
      ],
    },
    {
      title: "IT Support",
      items: [
        "Technical Support",
        "LAN / Wi-Fi",
        "System Setup",
        "Backup & Recovery",
        "DVR / NVR",
        "Documentation",
      ],
    },
  ];

  // =========================
  // EXPERIENCES
  // =========================
  const experiences = [
    {
      role: "Technician & Admin Kasir",
      company: "PT Teknisigo",
      period: "Mar 2025 — Apr 2026",
      skills:
        "Laptop Repair, Hardware Diagnostics, Troubleshooting, OS Installation, Printer Installation, Customer Service",
      responsibilities: [
        "Diagnosed and troubleshot laptop hardware and software issues.",
        "Performed laptop maintenance and component replacement, including keyboards, displays, batteries, and charging components.",
        "Installed and configured operating systems, applications, printers, and basic network connections.",
        "Assisted customers with product selection and provided technical recommendations based on their needs.",
        "Handled cashier transactions, service administration, and customer documentation.",
        "Supported daily store operations and maintained effective communication with customers.",
      ],
    },
    {
      role: "Quality Assurance",
      company: "NAT Indonesia",
      period: "Jul 2024 — Mar 2025",
      skills:
        "Manual Testing, Test Case Design, Test Scenario, Bug Reporting, Regression Testing, JIRA, Postman",
      responsibilities: [
        "Conducted manual testing on applications to ensure system quality, functionality, and stability.",
        "Designed and executed comprehensive test cases and test scenarios aligned with application requirements.",
        "Documented test results using structured spreadsheets and produced detailed testing reports.",
        "Identified, tracked, and reported software bugs, collaborating closely with the development team to ensure timely resolution.",
        "Contributed to the Pakarangan Project, supporting efficient IT infrastructure management.",
        "Successfully completed 145 test cases on the LP360 application with zero test failures, identifying 3 critical bugs.",
      ],
    },
    {
      role: "Quality Assurance",
      company: "InKanteen",
      period: "Jan 2024 — May 2024",
      skills:
        "Quality Assurance, Manual Testing, Merchant Evaluation, Quality Monitoring, Process Evaluation, Compliance, Problem Identification, Continuous Improvement",
      responsibilities: [
        "Responsible for ensuring merchant product quality and compliance with company standards through regular evaluation, operational monitoring, and collaboration with internal teams to support continuous improvement.",
        "Served as a Quality Assurance Merchant Intern at InKanteen, based in Cempaka Putih, Jakarta.",
        "Ensured merchant product quality and compliance with established company standards.",
        "Conducted regular evaluations and monitoring of merchant operational processes.",
        "Identified quality gaps and provided actionable recommendations to improve service quality and consistency.",
        "Collaborated with internal teams to support continuous improvement initiatives across merchant operations.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Phiraka Sinergi Indonesia",
      period: "Sep 2023 — Nov 2023",
      skills:
        "Laravel, PHP, JQuery, HTML, CSS, JavaScript, REST API, Database Management, Debugging",
      responsibilities: [
        "Worked on web application development using Laravel, PHP, SQL Server, HTML, CSS, and JQuery.",
        "Developed and maintained web applications end-to-end, including system design, back-end development, and user interface implementation.",
        "Built and maintained server-side logic and integrated internal and external APIs to support application functionality.",
        "Managed, optimized, and maintained database consistency to support system performance, reliability, and security.",
        "Conducted testing, debugging, and troubleshooting to ensure application stability and adherence to quality standards.",
        "Collaborated closely with the development team throughout planning, development, and deployment phases to deliver solutions that met user and business requirements.",
      ],
    },
  ];

  // =========================
  // PROJECTS
  // =========================
  const projects = [
    {
      title: "Starbhak Canteen",
      desc: "A canteen management and food ordering system developed as a web and mobile application.",
      tech: "Laravel • Flutter • MySQL",
      images: [
        asset("Login-Starbhak.jpeg"),
        asset("Starbhak-Kanteen-Web.jpeg"),
        asset("Dashboard-Starbhak-Kanteen.jpeg"),
      ],
    },
    {
      title: "O-PAY",
      desc: "A digital payment application developed using Laravel with a MySQL database.",
      tech: "Laravel • PHP • MySQL",
      images: [
        asset("Splash-Screen-O-PAY.jpeg"),
        asset("Login-Page-OPAY.jpeg"),
        asset("O-PAY-SIGN-UP.jpeg"),
        asset("Success-CreateAcount.jpeg"),
      ],
    },
    {
      title: "MitraCare",
      desc: "A hospital-related web application developed to support information and operational processes.",
      tech: "Laravel • Bootstrap • MySQL",
      images: [
        asset("MitraCare2.jpeg"),
        asset("MitraCare1.jpeg"),
        asset("MitraCare.jpeg"),
      ],
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* =====================
          HERO
      ===================== */}
      <section className="min-h-screen flex items-center px-6 lg:px-20">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-lg mb-4 text-gray-500">
              Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Naoval
              <br />
              Fadilah
            </h1>

            <p className="text-xl mt-6 text-gray-600">
              Quality Assurance & IT Professional
            </p>

            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              I specialize in manual testing, web development,
              hardware troubleshooting, and IT technical support.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                View My Work
              </a>

              <a
                href={`${import.meta.env.BASE_URL}assets/CV/CV-and-Portfolio-of-Naoval-Fadilah.pdf`}
                download
                className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square">
              <img
                src={asset("profile-remove-bg-io.png")}
                alt="Naoval Fadilah"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =====================
          ABOUT
      ===================== */}
      <section
        id="about"
        className="px-6 lg:px-20 py-24 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              About
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              A bit about me
            </h2>
          </div>

          <div className="lg:col-span-2 text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              I'm Naoval, a Quality Assurance and IT professional
              with a strong interest in making software reliable
              and systems run smoothly.
            </p>

            <p>
              I have experience in manual testing, creating test
              cases and scenarios, documenting testing results,
              and reporting bugs.
            </p>

            <p>
              Beyond testing, I also build web applications,
              troubleshoot hardware issues, install operating
              systems, maintain laptops, and provide IT technical
              support.
            </p>
          </div>

        </div>
      </section>

      {/* =====================
          SKILLS
      ===================== */}
      <section
        id="skills"
        className="px-6 lg:px-20 py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Skills
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-12">
            What I work with
          </h2>

          {skills.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {skills.map((group) => (
                <div
                  key={group.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-black transition"
                >
                  <h3 className="font-semibold text-lg mb-4">
                    {group.title}
                  </h3>

                  <ul className="space-y-2 text-gray-500 text-sm">
                    {group.items.map((item) => (
                      <li key={item}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          ) : (
            <p className="text-gray-400">
              Skills data is not available yet.
            </p>
          )}

        </div>
      </section>

      {/* =====================
          EXPERIENCE
      ===================== */}
      <section
        id="experience"
        className="px-6 lg:px-20 py-24 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Experience
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-12">
            Where I've worked
          </h2>

          <div className="space-y-12">

            {experiences.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="border-b border-gray-200 pb-10"
              >

                {/* DATE */}
                <p className="text-gray-400 text-sm mb-4">
                  {job.period}
                </p>

                {/* POSITION */}
                <h3 className="font-semibold text-xl text-gray-900">
                  {job.role}
                </h3>

                {/* COMPANY */}
                <p className="text-gray-500 text-sm mt-1 mb-6">
                  {job.company}
                </p>

                {/* SKILLS */}
                <div className="grid grid-cols-[70px_1fr] gap-6 mb-5">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Skills
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    {job.skills}
                  </p>
                </div>

                {/* TASK */}
                <div className="grid grid-cols-[70px_1fr] gap-6">
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Task
                  </p>

                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================
          PROJECTS
      ===================== */}
      <section
        id="projects"
        className="px-6 lg:px-20 py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Projects
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-12">
            Selected work
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition"
              >

                <p className="text-sm text-gray-400 mb-4">
                  {project.tech}
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {project.desc}
                </p>

                {project.images.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="mt-6 text-sm font-medium underline hover:no-underline cursor-pointer"
                  >
                    View Project →
                  </button>
                ) : (
                  <p className="mt-6 text-sm text-gray-400">
                    Project preview unavailable
                  </p>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================
          PROJECT MODAL
      ===================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-neutral-900 flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b border-white/10">

            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {selectedProject.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={closeProject}
              className="text-white/70 hover:text-white text-3xl leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>

          </div>

          {/* IMAGE AREA */}
          <div className="flex-1 flex items-center justify-center px-6 sm:px-16 overflow-hidden">

            {selectedProject.images?.length > 0 && (
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain rounded-lg select-none"
              />
            )}

          </div>

          {/* BOTTOM BAR */}
          {selectedProject.images?.length > 1 && (
            <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-t border-white/10 text-sm">

              <button
                type="button"
                onClick={prevImage}
                className="text-white/80 hover:text-white font-medium cursor-pointer"
              >
                ‹ Previous
              </button>

              <span className="text-white/50">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </span>

              <button
                type="button"
                onClick={nextImage}
                className="text-white/80 hover:text-white font-medium cursor-pointer"
              >
                Next ›
              </button>

            </div>
          )}

        </div>
      )}

      {/* =====================
          CONTACT
      ===================== */}
      <section
        id="contact"
        className="px-6 lg:px-20 py-24 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contact
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">
            Let's work together
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Have a project or job opportunity in mind?
            I'd love to hear about it. Feel free to reach out
            and I'll get back to you as soon as possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/62881026858439"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              WhatsApp
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/naoval-fadilah-1540a128/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              LinkedIn
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/NaovalFadilah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>

          </div>
        </div>
      </section>

      {/* =====================
          FOOTER
      ===================== */}
      <footer className="px-6 lg:px-20 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Naoval Fadilah.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="https://www.linkedin.com/in/naoval-fadilah-1540a128/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/NaovalFadilah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="mailto:naoval.fadilah@example.com"
              className="hover:text-black transition"
            >
              Email
            </a>

          </div>
        </div>
      </footer>

    </main>
  );
}

export default App;
