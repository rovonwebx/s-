import Link from "next/link";
import React from 'react'; // Added React import for JSX fragments and structuring

export const metadata = { title: "About" };

export default function Page() {
  
  const eventTypes = [
    { type: "Workshops", description: "Hands-on sessions covering essential data science tools and techniques (e.g., Python for Data Science, Machine Learning Algorithms, Data Visualization with Power BI/Tableau, Deep Learning Frameworks)." },
    { type: "Guest Lectures", description: "Inviting industry experts and academics to share their insights on emerging trends, real-world applications, and career paths in data science." },
    { type: "National Level Hackathon", description: "Challenging event where participants work in teams to solve real-world data problems using their skills." },
    { type: "Project Weeks", description: "Members will have dedicated time for collaborative data science and other projects. This includes everything from initial ideas to full implementation. Opportunities will be provided to showcase research and research papers, with guidance from senior members and faculty." },
    { type: "Mentorship", description: "Structured programs connecting junior members with senior students and industry professionals for guidance and support." },
    { type: "Content Creation", description: "To set ourselves apart and elevate our college's standing, we will encourage members to create and disseminate succinct, informative content, such as tutorials and articles, on data science and other topics. This initiative will bolster our social presence and position us as a leader." },
  ];

  const activityOutline = [
    {
      pillar: "Learning & Development",
      id: "I",
      activities: [
        { name: "Workshops & Training Sessions", details: ["Introduction to Python/R for Data Science", "Machine Learning Fundamentals", "Deep Learning & Neural Networks", "Data Visualization & Storytelling", "Big Data Technologies (e.g., Apache Spark, Hadoop)", "Cloud Platforms for Data Science (e.g., AWS, GCP, Azure)"] },
        { name: "Guest Lectures & Seminars", details: ["Industry insights from data scientists", "Academic research presentations", "Panel discussions on trending topics"] },
        { name: "Study Groups & Discussion Forums", details: ["Collaborative learning sessions for advanced topics", "Preparation for data science competitions", "Book clubs on data science literature"] },
        { name: "Content Creation", details: ["Developing tutorials, articles, and blog posts", "Creating video lectures and educational resources"] },
      ],
    },
    {
      pillar: "Practical Application & Innovation",
      id: "II",
      activities: [
        { name: "Hackathons & Datathons", details: ["Solving real-world problems with data", "Team-based competitive coding challenges"] },
        { name: "Project Weeks & Capstone Projects", details: ["Mentored projects from ideation to deployment", "Showcasing student work and innovations"] },
        { name: "Competitions & Challenges", details: ["Participation in national and international data science competitions", "Internal coding challenges to test skills"] },
      ],
    },
    {
      pillar: "Community & Networking",
      id: "III",
      activities: [
        { name: "Networking Events", details: ["Meet-and-greet sessions with faculty and alumni", "Industry interaction programs"] },
        { name: "Mentorship Program", details: ["Connecting junior members with senior students and industry professionals", "Career guidance and personal development support"] },
        { name: "Career Development", details: ["Resume building workshops", "Interview preparation sessions", "Access to internship and job opportunities"] },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* HEADER: Vision & Motto */}
      <header className="card p-8 bg-white/[0.05] border border-white/[0.1]">
        <h1 className="text-4xl font-extrabold tracking-tight">
          About the <span className="text-[color:var(--accent)]">Data Science Society</span>
        </h1>
        <p className="mt-3 text-muted max-w-4xl">
          The Data Science Society at CMRIT Hyderabad is a student-led organization dedicated to fostering 
          innovation, learning, and collaboration in the field of data science and artificial intelligence.
        </p>

        <div className="mt-8 pt-4 border-t border-white/[0.1] grid md:grid-cols-2 gap-6">
          {/* Our Vision */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Our <span className="text-[color:var(--accent)]">Vision</span> & Agenda
            </h2>
            <h3 className="text-sm font-medium mb-2 text-foreground">
              The Data Science Society: A Departmental Initiative by CSE(DS)
            </h3>
            <p className="text-sm text-muted">
              The Data Science Society (DSS) is a departmental initiative by the Computer Science and
              Engineering (Data Science) department. Our vision is to cultivate a thriving community
              within the department, empowering students with a passion for data science to excel. We
              aim to create an environment that fosters learning, innovation, and collaboration,
              equipping students for successful careers in the dynamic field of data science and related
              domains. Through diverse opportunities for skill development and networking, we strive
              to bridge the gap between academic knowledge and practical application, positioning our
              students as leaders in the field.
            </p>
          </div>
          
          {/* Our Motto */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Our <span className="text-[color:var(--accent)]">Motto</span>
            </h2>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              "Innovate. Analyze. <span className="text-[color:var(--accent)]">Lead.</span>"
            </div>
            <p className="mt-1 text-sm font-medium text-muted">
              “WHERE <span className="text-[color:var(--accent)]">IDEAS</span> MEET <span className="text-[color:var(--accent)]">ACTION</span>”
            </p>
            <p className="mt-3 text-sm text-muted">
              Our motto reflects our core values: to inspire innovative thinking, encourage rigorous data
              analysis, and empower students to become leaders in the data science and other domains.
            </p>
          </div>
        </div>
      </header>
      
      {/* SECTION: Why Join Us? (Combined with Mission/Benefits) */}
      <section className="mt-8">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Why <span className="text-[color:var(--accent)]">Join Us</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            
            {/* Mission & Core Values */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Our Core Mission</h3>
              <p className="text-sm text-muted mb-4">
                To create an inclusive community where students can explore, learn, and apply data science 
                concepts through hands-on projects, competitions, and peer collaboration.
              </p>
              <ul className="text-sm space-y-2 text-muted">
                <li>• Bridge the gap between academic learning and industry practice</li>
                <li>• Foster innovation through collaborative projects</li>
                <li>• Build a strong network of data science enthusiasts</li>
                <li>• Promote ethical and responsible use of AI and data</li>
              </ul>
            </div>
            
            {/* Join Benefits */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Membership Benefits</h3>
              <ul className="space-y-3">
                <li className="text-sm text-muted">
                  <span className="font-medium text-foreground">Skill Enhancement:</span> Gain hands-on experience with cutting-edge tools and technologies through workshops and projects.
                </li>
                <li className="text-sm text-muted">
                  <span className="font-medium text-foreground">Networking Opportunities:</span> Connect with peers, faculty, and industry professionals, expanding your professional network.
                </li>
                <li className="text-sm text-muted">
                  <span className="font-medium text-foreground">Career Development:</span> Access resources and guidance for internships, placements, and further studies in data science.
                </li>
                <li className="text-sm text-muted">
                  <span className="font-medium text-foreground">Community Building:</span> Be part of a supportive and collaborative community that shares your passion for data.
                </li>
                <li className="text-sm text-muted">
                  <span className="font-medium text-foreground">Knowledge Sharing:</span> Participate in discussions, seminars, and hackathons to deepen your understanding and share insights.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Outline of Our Activities (Detailed Pillars) */}
      <section className="mt-8">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Outline of Our <span className="text-[color:var(--accent)]">Activities</span>
          </h2>
          <p className="text-sm text-muted mb-6">
            Our activities will be structured around three core pillars: <span className='text-[color:var(--accent)] font-medium'>Learning</span>, <span className='text-[color:var(--accent)] font-medium'>Application</span>, and <span className='text-[color:var(--accent)] font-medium'>Community</span>.
          </p>
          
          {activityOutline.map((pillar) => (
            <div key={pillar.id} className="pt-6 mt-6 border-t border-white/[0.1]">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {pillar.id}. <span className='text-[color:var(--accent)]'>{pillar.pillar}</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.activities.map((activity, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground text-base">
                      • {activity.name}
                    </h4>
                    <ul className="text-sm text-muted ml-4 space-y-1">
                      {activity.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="list-disc">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <p className="pt-6 mt-6 text-sm text-muted border-t border-white/[0.1]">
            We look forward to welcoming you to the Data Science Society and embarking on an
            enriching journey of data discovery and innovation!
          </p>
        </div>
      </section>

      {/* SECTION: Events We Will Be Conducting (Table format) */}
      <section className="mt-8">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Events We Will Be <span className="text-[color:var(--accent)]">Conducting</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/[0.12] text-sm">
              <thead>
                <tr className="text-left text-foreground uppercase tracking-wider bg-white/[0.05]">
                  <th className="px-4 py-3 font-medium w-1/4">Event Type</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {eventTypes.map((event, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 font-medium text-[color:var(--accent)] whitespace-nowrap">{event.type}</td>
                    <td className="px-4 py-3 text-muted">{event.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-sm text-muted">
            We will regularly update our event schedule and communicate details through our official
            channels. Stay tuned for exciting opportunities to learn and grow with the Data Science
            Society!
          </p>
        </div>
      </section>

      {/* SECTION: Events Planned (Upcoming Big Events) */}
      <section className="mt-8">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Upcoming Key <span className="text-[color:var(--accent)]">Events</span> Planned
          </h2>
          <div className="space-y-6">
            
            {/* Guest Lectures */}
            <div className="border border-white/[0.1] p-4 rounded-lg bg-white/[0.03]">
              <h3 className="text-lg font-semibold text-foreground">Guest Lectures by Industry Influencers</h3>
              <ul className="text-sm text-muted mt-2 space-y-1">
                <li>• Inviting prominent figures from the data science industry (e.g., Swaroop from "Swaroop Talks," Harsha from "Harsha Verse") to share their experiences, insights, and career advice.</li>
                <li className="font-medium text-[color:var(--accent)] mt-2">Action Item: Begin outreach to potential speakers to confirm availability and topics.</li>
              </ul>
            </div>
            
            {/* National Hackathon */}
            <div className="border border-white/[0.1] p-4 rounded-lg bg-white/[0.03]">
              <h3 className="text-lg font-semibold text-foreground">National Level 24-Hour Hackathon</h3>
              <ul className="text-sm text-muted mt-2 space-y-1">
                <li>• Organize a first-of-its-kind 24-hour hackathon at CMRIT, attracting young talent from across India. This event will serve as a platform to position our college on a national level.</li>
                <li className="font-medium text-[color:var(--accent)] mt-2">Action Item: Develop a sponsorship proposal and actively seek sponsors to cover event logistics and prizes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Our Impact */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">
            Our <span className="text-[color:var(--accent)]">Impact</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">150+</div>
              <div className="text-sm text-muted">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">2+</div>
              <div className="text-sm text-muted">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[color:var(--accent)]">1+</div>
              <div className="text-sm text-muted">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Join Community */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">
            <span className="text-[color:var(--accent)]">Join</span> Our Community
          </h2>
          <p className="text-sm text-muted mb-4">
            Whether you&apos;re a beginner or an expert, there&apos;s a place for you in our society. 
            We welcome students from all backgrounds who share our passion for data science.
          </p>
          <div className="flex gap-3">
            <a href="/join" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Join Now</a>
            <a href="/events" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">View Events</a>
          </div>
        </div>
      </section>
    </div>
  );
}