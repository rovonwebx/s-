import Link from "next/link";

export default function Footer() {
  return (
    <> {/* Used Fragment to wrap the multiple top-level elements */}
      <footer className="mt-20 border-t border-white/[0.1] pt-16 pb-10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Grid: Branding/Links/App Downloads */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Branding and Motto (Takes 4/12 columns on large screens) */}
            <div className="md:col-span-4 lg:col-span-4 space-y-4">
              <h4 className="text-3xl font-extrabold tracking-tight text-white">
                Data Science <span className="text-[color:var(--accent)]">Society</span>
              </h4>
              <p className="text-base text-gray-400 max-w-sm">
                CMRIT Hyderabad • Building a vibrant community through data and <span className="text-[color:var(--accent)]">innovation.</span>
              </p>
              
              {/* Social Links - USING SVG ICONS HERE for best look */}
              <div className="mt-6 pt-4 border-t border-white/[0.1]">
                  <h5 className="text-sm font-semibold mb-2 text-white/80">Follow Us</h5>
                  <div className="flex gap-4">
                      {/* LinkedIn Icon (Official Look SVG) */}
                      <a href="#" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                        </svg>
                      </a>
                      
                      {/* X/Twitter Icon (Official Look SVG) */}
                      <a href="#" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" aria-label="X/Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H381.5L248.8 296.7 113.1 464H41.6L201.2 284.4 21.6 48H138.1L257.4 205.1 389.2 48zM364.4 421.8h39.7L132.3 90.8H88.3L364.4 421.8z"/>
                        </svg>
                      </a>

                      {/* Instagram Icon (Placeholder for official look) */}
                      <a href="#" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                          <path d="M224.1 123.6c-48.5-9.7-91.5 6.6-117.9 33.2-26.5 26.6-33 72.8-21.7 117.8 11.3 45 46.5 82.2 96.6 96.7 50.1 14.5 97-4.3 121-31.5 24.1-27.2 30.6-70.3 19.3-115.3-11.2-45-45.9-82.3-95.3-96.7zM224 416c-37.1 0-71.1-13.8-97.4-38.3-26.3-24.5-39.7-56.9-39.7-91.7 0-34.8 13.4-67.2 39.7-91.7 26.3-24.5 60.3-38.3 97.4-38.3s71.1 13.8 97.4 38.3c26.3 24.5 39.7 56.9 39.7 91.7 0 34.8-13.4 67.2-39.7 91.7-26.3 24.5-60.3 38.3-97.4 38.3zM224 160c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/>
                        </svg>
                      </a>
                  </div>
              </div>
            </div>

            {/* Column 2: Quick Links (Takes 2/12 columns on large screens) */}
            <div className="md:col-span-1 lg:col-span-2">
              <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-[color:var(--accent)] transition">About Us</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-[color:var(--accent)] transition">Events & Workshops</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-[color:var(--accent)] transition">Our Team</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[color:var(--accent)] transition">Contact</Link></li>
              </ul>
            </div>
            
            {/* Column 3: Resources/Legal Links (Takes 2/12 columns on large screens) */}
            <div className="md:col-span-1 lg:col-span-2">
              <h5 className="text-lg font-semibold mb-4 text-white">Resources</h5>
              <ul className="space-y-3 text-sm">
                <li><Link href="/udbhav" className="text-gray-400 hover:text-[color:var(--accent)] transition">Udbhav Magazine</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-[color:var(--accent)] transition">Project Gallery</Link></li>
                <li><Link href="/join" className="text-gray-400 hover:text-[color:var(--accent)] transition">Join the Club</Link></li>
                <li><Link href="/developer-notes" className="text-gray-400 hover:text-[color:var(--accent)] transition">Developer Notes</Link></li>
              </ul>
            </div>

            {/* Column 4: App Download Block (Takes 4/12 columns on large screens) */}
            <div className="md:col-span-2 lg:col-span-4">
              <h5 className="text-lg font-semibold mb-4 text-white">Stay Connected On-The-Go</h5>
              
              <div className="p-5 rounded-xl bg-white/[0.08] border border-white/[0.15] space-y-4">
                  
                  {/* Android Card (Active) */}
                  <div className="flex items-center justify-between border-b border-white/[0.1] pb-4">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-[color:var(--accent)] flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0599L4.841 5.4077a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">Android APK</div>
                          <p className="text-xs text-gray-400">Install the latest build directly</p>
                        </div>
                      </div>
                      <Link href="#" className="bg-[color:var(--accent)] text-gray-900 font-medium rounded-full px-4 py-2 text-sm hover:bg-green-700 transition shrink-0">Download</Link>
                  </div>

                  {/* Apple Card (Coming Soon) */}
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-gray-600 flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.11-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">iOS App</div>
                          <p className="text-xs text-gray-400">Coming soon, get notified</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 border border-white/[0.1] rounded-full px-3 py-1.5 cursor-default">Notify Me</span>
                  </div>

              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Version */}
          <div className="mt-12 border-t border-white/[0.1] pt-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between lg:col-span-12">
            <div className="mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Data Science Society, CMRIT Hyderabad
            </div>
            <div className="space-x-4">
              <span className="text-gray-500">Web v0.1</span>
              <span>
                Developed by <span className="text-[color:var(--accent)] font-medium">GearupCommunity</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* REQUIRED: Large Visual Element with "Data Science Society" - FINAL MODIFIED SIZE */}
      <div className="tracking-tighter leading-none flex items-center overflow-hidden xl:mt-10 bg-[#0a0a0a] w-full justify-center">
        {/* Adjusted classes for single line: Reduced size, set to accent color */}
        <h2 className="text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-extrabold whitespace-nowrap uppercase text-[color:var(--accent)]">
          DATA SCIENCE SOCIETY
        </h2>
      </div>
    </>
  );
}