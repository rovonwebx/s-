// This metadata object is a feature of the Next.js App Router.
// It sets the title of the browser tab for this specific page.
export const metadata = { title: "Developer Notes" };

// This is the main React component for the "Developer Notes" page.
// It serves as a comprehensive technical documentation hub for developers
// working on the Data Science Society website.
export default function Page() {
  return (
    <div>
      {/*
        Header Section:
        This section introduces the page with a main heading and a brief
        description of its content, providing context for the user.
      */}
      <header className="card p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Developer Notes</h1>
        <p className="mt-3 text-muted max-w-2xl">
          Technical documentation, development guidelines, and implementation details for the Data Science Society website.
        </p>
      </header>

      {/*
        Official Project Documentation (THV1):
        This section contains the complete, formal GearUp Developer Document,
        covering the scope, technologies, deployment, and policies for both
        the DSS App and Web Portal.
      */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Official Project Documentation (THV1)</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              The <strong>Data Science Society (DSS) App and Web Portal</strong> for <strong>CMR Institute of Technology, Hyderabad</strong> have been officially developed and deployed by <strong>GearUp Technologies Pvt. Ltd.</strong> as part of an institutional digital initiative to centralize and modernize the activities of the Data Science Society. This project serves as an integrated digital ecosystem — consisting of a <strong>mobile application</strong> and an <strong>interactive webpage</strong> — both designed to provide easy access to DSS announcements, events, projects, research content, and resources for students and faculty. The complete ecosystem runs on <strong>GearUp’s THV1 version</strong>, ensuring stable, secure, and high-performance functionality across all platforms. Both the app and webpage are <strong>deployed and hosted on Cloudflare</strong>, providing global CDN delivery, SSL protection, and optimization for speed and availability.
            </p>
            <p>
              The <strong>DSS App</strong> has been built using <strong>React Native</strong>, allowing for seamless Android compatibility and a smooth cross-platform user experience. The application follows a <strong>static feed architecture</strong>, meaning it operates without a connected database, instead utilizing curated content files managed directly through GearUp’s repository. The app’s structure consists of a modular layout including folders for assets, components, screens, constants, and navigation files, following best practices in scalability and maintainability. The user interface was developed using <strong>React Native Paper</strong> and custom GearUp UI components. The entire app was visually designed and prototyped in <strong>Figma</strong>, ensuring design precision and visual consistency with the web platform. Development was handled through <strong>Expo CLI</strong>, while version control and collaboration were maintained via a <strong>private GitHub repository</strong> under the GearUp organization.
            </p>
            <p>
              Parallelly, the <strong>DSS Webpage</strong> has been built using <strong>React.js</strong> and <strong>Next.js</strong> frameworks, ensuring a modern and responsive design for both desktop and mobile browsers. The webpage serves as the public digital identity of the Data Science Society, providing structured access to the same categories of content found in the mobile app — namely <strong>Home, About Us, Events, Projects, Resources, Gallery, Team, and Contact Us</strong>. The web design adheres to responsive standards with optimized loading speeds, mobile-friendly layouts, and interactive sections. Custom animations and UI styling were implemented using <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong> to provide a smooth visual experience. Like the app, the webpage also operates on a static data model, with all content updated via static JSON files curated by authorized administrators from the DSS and GearUp teams.
            </p>
            <p>
              The deployment and delivery of both the app and the webpage are managed entirely through <strong>Cloudflare</strong>, which handles hosting, DNS management, CDN caching, and SSL encryption. Cloudflare’s high-speed edge network ensures instant content loading, high uptime, and DDoS protection, making it a secure and scalable choice for institutional hosting. The webpage is accessible globally through its dedicated domain link provided by GearUp, while the mobile application (Android APK) is hosted via Cloudflare’s deployment storage and shared internally with CMRIT through authorized GearUp channels. Version <strong>THV1</strong> marks the initial official release for both platforms, ensuring unified design, data synchronization, and consistent brand identity.
            </p>
            <p>
              In terms of privacy and security, both the DSS app and webpage are fully compliant with GearUp’s data protection principles. The project does not collect, process, or share any personal or sensitive data from users. As a static ecosystem, there are no login, signup, or data entry modules. The app and website may request minimal permissions such as Internet access (for resource loading) and media viewing (for gallery content). They do not use cookies, tracking systems, or analytics software. All content displayed on these platforms is publicly available and approved by the <strong>Data Science Society, CMRIT Hyderabad</strong>. Any future versions that include interactive or database-enabled modules will follow GearUp’s standard privacy compliance and institutional review process before deployment.
            </p>
            <p>
              By using the DSS app and webpage, users agree to the <strong>Terms of Use</strong> set forth by GearUp Technologies and the Data Science Society. The content within these digital products is provided for educational, informational, and community purposes only. All intellectual property, logos, and designs belong to <strong>CMR Institute of Technology (Hyderabad)</strong> and <strong>GearUp Technologies Pvt. Ltd.</strong> Unauthorized reproduction, modification, or redistribution of app or webpage content is strictly prohibited. GearUp reserves full rights to modify, enhance, or remove any sections of the app or website as part of version upgrades. Both platforms are provided “as is” without any guarantees of uninterrupted availability, and GearUp shall not be held liable for any indirect or incidental damages arising from their use.
            </p>
            <p>
              The <strong>application and webpage specifications</strong> are as follows:
              The app is titled <em>“DSS – CMRIT Hyderabad”</em>, with the package name <em>com.gearup.dsscmrit</em>, and is currently at version <em>THV1.0</em>. The web version shares the same naming convention, titled <em>“DSS Web Portal – CMRIT Hyderabad”</em>, accessible under the official GearUp-managed domain. Both are optimized for Android (version 8.0 and above) and all major browsers. The app size is approximately 45 MB, while the webpage’s optimized build size is under 20 MB. Both are classified under the <strong>Educational / Institutional</strong> category and are actively managed under GearUp’s internal maintenance cycle. The initial release and deployment date for both the app and website were completed in <strong>October 2025</strong>, under the supervision of the GearUp DevOps team.
            </p>
            <p>
              The <strong>development and deployment team</strong> include members from the GearUp Developer Division, GearUp Creative Team (for UI/UX), and the Faculty Coordinator and Core Members of the <strong>Data Science Society, CMR Institute of Technology</strong>. The project’s lead developer from GearUp oversaw the implementation, integration, and deployment cycles, while the creative division handled visual design, responsive layouts, and testing. The DSS Faculty Coordinator guided the technical direction, reviewed app content, and ensured institutional compliance, while the DSS student core team provided project information, images, and event updates used in the static content files.
            </p>
            <p>
              For communication, support, or future collaborations, GearUp Technologies Pvt. Ltd. can be contacted through <a href="mailto:gearupofficial@gmail.com" className="text-[color:var(--accent)]">gearupofficial@gmail.com</a> or via official channels from <strong>Hyderabad, Telangana</strong>. All technical maintenance and updates will continue to be managed through GearUp’s internal DevOps schedule. This document has been reviewed and approved by the <strong>GearUp Development Head</strong> and officially marks the deployment of both the DSS App and Web Portal under version <strong>THV1</strong>, hosted securely on Cloudflare as of <strong>October 2025</strong>.
            </p>
          </div>
        </div>
      </section>
      
      {/* This grid layout holds the "Tech Stack" and "Project Structure" sections side-by-side on medium screens and larger. */}
      <section className="mt-8 grid md:grid-cols-2 gap-6">
        {/*
          Tech Stack Card:
          This card lists the core technologies used to build the website,
          providing a quick technical overview.
        */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Framework</span>
              <span className="text-[color:var(--accent)]">Next.js 14</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Language</span>
              <span className="text-[color:var(--accent)]">TypeScript</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Styling</span>
              <span className="text-[color:var(--accent)]">Tailwind CSS</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-white/[0.12]">
              <span>Deployment</span>
              <span className="text-[color:var(--accent)]">Vercel</span>
            </div>
          </div>
        </div>

        {/*
          Project Structure Card:
          This card displays a simplified visual representation of the project's
          directory structure, helping developers navigate the codebase efficiently.
        */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Project Structure</h2>
          <div className="space-y-2 text-sm font-mono">
            <div>src/</div>
            <div className="ml-4">app/</div>
            <div className="ml-8">(site)/</div>
            <div className="ml-12">about/</div>
            <div className="ml-12">contact/</div>
            <div className="ml-12">events/</div>
            <div className="ml-12">join/</div>
            <div className="ml-12">team/</div>
            <div className="ml-12">gallery/</div>
            <div className="ml-8">globals.css</div>
            <div className="ml-8">layout.tsx</div>
            <div className="ml-8">page.tsx</div>
            <div className="ml-4">components/</div>
            <div className="ml-8">layout/</div>
            <div className="ml-8">ui/</div>
            <div className="ml-8">theme/</div>
            <div className="ml-4">data/</div>
          </div>
        </div>
      </section>

      {/*
        Development Guidelines Section:
        This section outlines the coding standards and best practices that
        developers are expected to follow to maintain code quality and consistency.
      */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Development Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-[color:var(--accent)] mb-3">Code Standards</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use TypeScript for type safety</li>
                <li>• Follow Next.js App Router patterns</li>
                <li>• Use Tailwind for consistent styling</li>
                <li>• Implement responsive design</li>
                <li>• Follow accessibility guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[color:var(--accent)] mb-3">Component Guidelines</h3>
              <ul className="space-y-2 text-sm">
                <li>• Create reusable UI components</li>
                <li>• Use proper prop typing</li>
                <li>• Implement dark theme support</li>
                <li>• Follow naming conventions</li>
                <li>• Add proper documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*
        Environment Setup Section:
        Provides clear instructions for setting up a local development environment,
        including prerequisites and installation commands.
      */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Environment Setup</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Prerequisites</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>Node.js 18+</div>
                <div>npm or yarn</div>
                <div>Git</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Installation</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>npm install</div>
                <div>npm run dev</div>
                <div># Open http://localhost:3000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Deployment Section:
        Contains crucial information for deploying the application, including
        build commands and a list of required environment variables.
      */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Deployment</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Build Commands</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>npm run build</div>
                <div>npm start</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Environment Variables</h3>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                <div>NEXT_PUBLIC_SITE_URL=</div>
                <div>GOOGLE_FORM_CONTACT_ID=</div>
                <div>GOOGLE_FORM_JOIN_ID=</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Contributing Section:
        Informs users about the maintenance team and provides clear calls-to-action
        for getting in touch or viewing the source code.
      */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Contributing</h2>
          <p className="text-sm text-muted mb-4">
            This website is maintained by the Gearup development team.
            For contributions or issues, please contact the technical lead.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="btn-primary rounded-full px-5 py-3 text-sm font-medium">Contact GearUp Dev Team</a>
            <a href="https://github.com" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12]">View Source</a>
          </div>
        </div>
      </section>
    </div>
  );
}