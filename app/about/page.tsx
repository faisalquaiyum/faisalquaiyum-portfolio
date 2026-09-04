import Link from "next/link";
import { aboutPageStyles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const interests = [
  "BACKEND DEV",
  "FULL-STACK DEV",
  "AI ENGINEER",
  "LLMS",
  "SYSTEM DESIGN",
  "TRAVEL",
  "MUSIC",
  "F1",
];

const techStack = [
  "Node.js",
  "Next.js",
  "TypeScript",
  "Python",
  "React",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
];

const email = "mdfaisalquaiyum004@gmail.com";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  email,
)}`;

export default function AboutPage() {
  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>

          <div className={aboutPageStyles.contentWrapper}>
            <h1 className={aboutPageStyles.mainHeading}>Faisal</h1>

            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}

                  {index < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={aboutPageStyles.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>

                <p className={aboutPageStyles.paragraph}>
                  Hello! I&apos;m Faisal, a backend-focused software engineer
                  passionate about building scalable systems, APIs, and
                  AI-powered applications. I enjoy solving complex problems with
                  clean architecture, strong fundamentals, and practical
                  engineering.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>

                <p className={aboutPageStyles.paragraph}>
                  I build scalable backend systems, RESTful APIs, and full-stack
                  applications, with a growing focus on AI-powered products and
                  LLM applications. I work with technologies like Node.js,
                  Next.js, Python, PostgreSQL, MongoDB, Docker, and AWS to turn
                  ideas into reliable, production-ready software.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>

                <p className={aboutPageStyles.paragraph}>
                  My journey started with a curiosity for building software and
                  solving problems through code. Along the way, I gained
                  professional experience as a Backend Developer Intern and App
                  Developer Intern, while also co-founding{" "}
                  <a
                    href="https://hanzalatafzeel.github.io/broscodes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aboutPageStyles.contentLink}
                  >
                    Broscodes
                  </a>{" "}
                  with friends. Through Broscodes, I get to turn ideas into real
                  digital products while working across development, product
                  decisions, deployment, and everything in between.
                </p>
              </section>

              {/* What I'm Building */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>
                  What I&apos;m Building
                </h2>

                <p className={aboutPageStyles.paragraph}>
                  I&apos;m particularly interested in AI engineering, LLM
                  applications, backend architecture, and developer-focused
                  products. My recent projects include an AI-powered
                  multilingual lesson generator, an industrial carbon auditing
                  platform, and a full-stack website builder.
                </p>
              </section>

              {/* Education */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Education</h2>

                <p className={aboutPageStyles.paragraph}>
                  Currently pursuing a B.Tech in Computer Science and
                  Engineering at Maharaja Agrasen Institute of Technology
                  (MAIT), with a CGPA of 9.1/10. Previously completed a Diploma
                  in Computer Science and Engineering from Jamia Millia Islamia
                  with a CGPA of 9.2/10.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Beyond Code</h2>

                <p className={aboutPageStyles.paragraph}>
                  Outside of development, I enjoy music, following Formula 1,
                  travelling, and continuously learning new technologies. I also
                  enjoy working on side projects and experimenting with ideas
                  around AI and software engineering.
                </p>
              </section>
            </div>

            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
