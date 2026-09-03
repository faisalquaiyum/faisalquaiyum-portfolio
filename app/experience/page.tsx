"use client";

import { Code2, Server, Monitor } from "lucide-react";
import { timelineStyles as s } from "@/public/dummyStyles";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Sep 2025 - Mar 2026",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Server className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Backend Developer Intern - Blue Planet Info Solutions Pvt. Ltd.
              </h3>
              <p className={s.contentTitle}>
                Building scalable backend services and secure RESTful APIs for
                production applications
              </p>
              <p className={s.contentSubtitle}>
                Internship - Pune, India - Remote - Software/IT Company
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Engineered scalable backend services using Node.js and Next.js,
              supporting 5K+ users/month
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Built RESTful APIs with JWT authentication and role-based access
              control
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Optimized MySQL queries and indexing, reducing API response
              latency by 25%
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Contributed to backend system planning, debugging, and production
              deployment workflows
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>REST APIs</span>
            <span className={s.techBadge}>JWT</span>
            <span className={s.techBadge}>MySQL</span>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2023 - Aug 2023",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerRose}>
              <Monitor className={s.iconRose} />
            </div>
            <div>
              <h3 className={s.contentTitle}>App Developer Intern - FTK-CIT</h3>
              <p className={s.contentTitle}>
                Developing Python-based desktop applications with database
                integration and scalable application modules
              </p>
              <p className={s.contentSubtitle}>
                Internship - Delhi, India - Onsite
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Developed Python-based desktop applications using PyQt5 with MySQL
              integration
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Improved data processing efficiency by 20% through streamlined
              database queries
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Created user-friendly UI components and collaborated on scalable
              application modules
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Python</span>
            <span className={s.techBadge}>PyQt5</span>
            <span className={s.techBadge}>MySQL</span>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2026",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerPurple}>
              <Code2 className={s.iconPurple} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Software Developer - Broscodes</h3>
              <p className={s.contentTitle}>
                Built and developed software products as part of a self-founded
                startup with friends
              </p>
              <p className={s.contentSubtitle}>
                Founder &amp; Development Team - Delhi, India - Remote
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Designed and developed web applications and backend services for
              startup products
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Built scalable APIs, database systems, and core application
              features
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Collaborated with co-founders to plan, develop, test, and deploy
              product features
            </li>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Worked across frontend and backend development to turn ideas into
              functional products
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>PostgreSQL</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>Docker</span>
            <span className={s.techBadge}>AWS</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <div className={s.timelineBadge}>
            <span className={s.timelineBadge}>Career Timeline</span>
          </div>
          <h1 className={s.mainTitle}>Changelog from my journey</h1>
          <p className={s.mainParagraph}>
            Here&apos;s a timeline of my journey through backend and application
            development.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}>Current Role</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-purple-500`}></div>
              <span className={s.legendText}>Founder Experience</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-rose-500`}></div>
              <span className={s.legendText}>Previous Experience</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-amber-500`}></div>
              <span className={s.legendText}>Early Career</span>
            </div>
          </div>
        </div>

        <Timeline data={data} />

        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>

            <div>
              <h3 className={s.techSectionTitle}>Technologies Mastered</h3>

              <p className={s.techSectionSubtitle}>
                Full-stack expertise across modern tech stack
              </p>
            </div>
          </div>

          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Frontend</div>
              <div className={s.techCardContent}>
                React, TypeScript, Tailwind, Next.js
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textEmerald}`}>
                Backend
              </div>
              <div className={s.techCardContent}>
                Node.js, Python, SQL, MongoDB
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textPurple}`}>AI/ML</div>
              <div className={s.techCardContent}>
                Python, TensorFlow, PyTorch, scikit-learn
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textAmber}`}>DevOps</div>
              <div className={s.techCardContent}>
                Docker, Kubernetes, AWS, CI/CD
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textCyan}`}>Cloud</div>
              <div className={s.techCardContent}>AWS, Azure, Google Cloud</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textRose}`}>Tools</div>
              <div className={s.techCardContent}>
                Git, GitHub, Jira, Figma, VS Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
