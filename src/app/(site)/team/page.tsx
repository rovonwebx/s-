// Removed unused import: import { team } from "@/data/sample";
// Removed problematic import: import TeamCard from "@/components/team/TeamCard"; 

export const metadata = { title: "Team" };

// Mock data structure for the team members (11 total)
const teamMembers = [
  {
    id: 1,
    name: 'Ch Pradeeptha',
    title: 'President',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'ch.pradeeptha@dss.in' },
  },
  {
    id: 2,
    name: 'S LN Prasanna Kumar',
    title: 'President',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'sln.prasanna@dss.in' },
  },
  {
    id: 3,
    name: 'M Laxmi Prasanna',
    title: 'Vice President',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'm.laxmi@dss.in' },
  },
  {
    id: 4,
    name: 'O Sai Krishna Swaran',
    title: 'Treasurer',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'o.sai@dss.in' },
  },
  {
    id: 5,
    name: 'D Abhishek',
    title: 'Secretary',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'd.abhishek@dss.in' },
  },
  {
    id: 6,
    name: 'S Jahnavi',
    title: 'Outreach coordinator',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 's.jahnavi@dss.in' },
  },
  {
    id: 7,
    name: 'E Sandeep',
    title: 'R&D Lead',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'e.sandeep@dss.in' },
  },
  {
    id: 8,
    name: 'P V Yashwanth',
    title: 'Projects Lead',
    imageUrl: 'https://images.unsplash.com/photo-1581093414086-7a7483733a4c?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'pv.yashwanth@dss.in' },
  },
  {
    id: 9,
    name: 'B Mahanandi',
    title: 'Technical Lead',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58f3316934c?q=80&w=2070&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'b.mahanandi@dss.in' },
  },
  {
    id: 10,
    name: 'M Tejeswini',
    title: 'Content Lead',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0f19e7a817?q=80&w=1887&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'm.tejeswini@dss.in' },
  },
  {
    id: 11,
    name: 'U Sanjay',
    title: 'Digital Marketing Lead',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', email: 'u.sanjay@dss.in' },
  },
];

// Mock data for Faculty Coordinators
const facultyCoordinators = [
    {
        id: 1,
        name: 'Ms Samala Bhavana',
        title: 'Faculty Coordinator (CSE-DS)',
        imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b57d2c12?q=80&w=1887&auto=format&fit=crop',
        socials: { linkedin: '#', email: 'john.smith@cmrit.in' },
    },
    {
        id: 2,
        name: 'Mrs Tejovathi',
        title: 'Department Head (CSE-DS)',
        imageUrl: 'https://images.unsplash.com/photo-1518779576307-558c4e40e6c2?q=80&w=1887&auto=format&fit=crop',
        socials: { linkedin: '#', email: 'jane.doe@cmrit.in' },
    },
];

const TeamCard = ({ member }) => (
    <div className="card relative p-0 overflow-hidden">
        {/* Image Section - Increased height to h-72 */}
        <div className="relative h-72 w-full"> 
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              className="w-full h-full object-cover grayscale transition-opacity duration-300 hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
        </div>
        
        {/* Info Section (Name, Role, Contact) */}
        <div className="p-4 space-y-2">
            <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
            <p className="text-sm text-[color:var(--accent)]">{member.title}</p>
            
            {/* Contact Links */}
            <div className="flex gap-3 pt-2">
              {/* LinkedIn Icon */}
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                  className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                  aria-label={`LinkedIn profile for ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                  </svg>
              </a>
              {/* Email Icon */}
              <a href={`mailto:${member.socials.email}`} 
                  className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                  aria-label={`Email ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.4 8.6 38.8 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V392c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 340.8c-20.9 15.7-47.5 15.7-68.4 0L0 176z"/>
                  </svg>
              </a>
              {/* Twitter/X Icon (Only included if member has a twitter link) */}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" 
                  className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                  aria-label={`X/Twitter profile for ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H381.5L248.8 296.7 113.1 464H41.6L201.2 284.4 21.6 48H138.1L257.4 205.1 389.2 48zM364.4 421.8h39.7L132.3 90.8H88.3L364.4 421.8z"/>
                  </svg>
                </a>
              )}
            </div>
        </div>
    </div>
);


export default function Page() {
  // Use the full 11-member list
  const teamToDisplay = teamMembers;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* HEADER: Modernized Header */}
      <header className="card p-8 bg-white/[0.05] border border-white/[0.1] text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Meet the <span className="text-[color:var(--accent)]">Data Science Society</span> Team
        </h1>
        <p className="mt-3 text-muted max-w-4xl mx-auto">
          The passionate individuals behind the Data Science Society, driving innovation and fostering 
          a vibrant community of data enthusiasts at CMRIT Hyderabad.
        </p>
      </header>

      {/* NEW SECTION: FACULTY COORDINATORS */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          <span className="text-[color:var(--accent)]">Faculty</span> Coordinators
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {facultyCoordinators.map((m) => (
            <div key={m.id} className="card p-5 flex items-center space-x-4">
                {/* Image Section (Smaller for Faculty) */}
                <div className="relative h-24 w-24 shrink-0"> 
                    <img 
                      src={m.imageUrl} 
                      alt={m.name} 
                      className="w-full h-full object-cover rounded-lg border-2 border-[color:var(--accent)]" 
                    />
                </div>
                
                {/* Info Section (Name, Role, Contact) */}
                <div className="flex-grow space-y-1">
                    <h4 className="text-xl font-bold text-foreground">{m.name}</h4>
                    <p className="text-sm text-muted">{m.title}</p>
                    
                    {/* Contact Links (Simplified) */}
                    <div className="flex gap-3 pt-2">
                        {/* LinkedIn Icon */}
                        <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`LinkedIn profile for ${m.name}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                            </svg>
                        </a>
                        {/* Email Icon */}
                        <a href={`mailto:${m.socials.email}`} 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`Email ${m.name}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.4 8.6 38.8 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V392c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 340.8c-20.9 15.7-47.5 15.7-68.4 0L0 176z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* TEAM MEMBERS GRID: Displaying 11 cards */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          <span className="text-[color:var(--accent)]">Student</span> Leadership
        </h2>
        {/* Adjusted grid to 4 columns to fit the horizontal card content well */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {/* FIX: Corrected the map to pass the full 'm' object as 'member' */}
          {teamToDisplay.map((m) => (
            // Using the custom TeamCard component defined above
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      {/* LEADERSHIP STRUCTURE */}
      <section className="mt-12">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Leadership <span className="text-[color:var(--accent)]">Structure</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Executive Board</h3>
              <p className="text-sm text-muted mt-1">President, Vice President, and core leadership team overseeing all operations.</p>
            </div>
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Event Leads</h3>
              <p className="text-sm text-muted mt-1">Coordinators for organizing and executing workshops, competitions, and community meetups.</p>
            </div>
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Technical Leads</h3>
              <p className="text-sm text-muted mt-1">Specialists in ML, data viz, and research domains providing mentorship and technical guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN OUR TEAM CTA */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">
            <span className="text-[color:var(--accent)]">Join</span> Our Team
          </h2>
          <p className="text-sm text-muted mb-4">
            We&apos;re always looking for passionate individuals to join our leadership team. 
            Help us organize events, mentor peers, and shape the future of data science at CMRIT.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="bg-[color:var(--accent)] text-gray-900 font-medium rounded-full px-5 py-3 text-sm hover:bg-green-700 transition">Contact Us</a>
            <a href="/join" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12] hover:border-[color:var(--accent)] transition">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}