"use client";

import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";
import { timelineStyles as s } from "@/public/dummyStyles";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Frontend Engineer - Broscode Digital Services
              </h3>
              <p className={s.contentTitle}>
                Building Copilot for Insurance Industry
              </p>
              <p className={s.contentSubtitle}>Series A Startup - Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Leading UI/UX for Copilot to automate insurance workflow
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Build Admin App, Clent App, and Agent App for Insurance Copilot
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Experimenting with emerging AI models and UX paradigms
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Python</span>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerGreen}>
              <Users className={s.iconGreen} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Frontend Engineer - Broscode Digital Services
              </h3>
              <p className={s.contentTitle}>
                Building Copilot for Insurance Industry
              </p>
              <p className={s.contentSubtitle}>Series A Startup - Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Leading UI/UX for Copilot to automate insurance workflow
            </li>

            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Build Admin App, Clent App, and Agent App for Insurance Copilot
            </li>

            <li className={s.listItem}>
              <span className={s.bulletGreen}></span>
              Experimenting with emerging AI models and UX paradigms
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Python</span>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerRose}>
              <Users className={s.iconRose} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Frontend Engineer - Broscode Digital Services
              </h3>
              <p className={s.contentTitle}>
                Building Copilot for Insurance Industry
              </p>
              <p className={s.contentSubtitle}>Series A Startup - Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Leading UI/UX for Copilot to automate insurance workflow
            </li>

            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Build Admin App, Clent App, and Agent App for Insurance Copilot
            </li>

            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Experimenting with emerging AI models and UX paradigms
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Python</span>
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
            It&apos;s been working at Kay.ai for the past 1.5 years.
            <br />
            Here&apos;s a timeline of my journey across multiple startups and
            projects.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}>Current Role</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-purple-500`}></div>
              <span className={s.legendText}>AI Startup</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-green-500`}></div>
              <span className={s.legendText}>Growth Startup</span>
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
              <div className={`${s.techCardTitle} ${s.textEmerald}`}>Backend</div>
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
              <div className={s.techCardContent}>
                AWS, Azure, Google Cloud
              </div>
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
