import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section-container relative">
      {/* Decorative BG */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-500/10 blur-[100px] -z-10 rounded-full"></div>

      <SectionHeading title="Get In Touch" subtitle="Let's build something" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-8 h-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             
             {/* Large background icon */}
             <div className="absolute -right-8 -bottom-8 text-9xl text-surface-200 dark:text-surface-700 opacity-20 pointer-events-none">
                <FaPaperPlane />
             </div>
          
             <h3 className="text-2xl font-display font-bold text-surface-900 dark:text-white mb-4">Let's talk about your next project.</h3>
             <p className="text-surface-600 dark:text-surface-400 mb-8 leading-relaxed">
               I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>

             <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-500 mb-1">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-surface-900 dark:text-white hover:text-primary-500 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
               </div>
               
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-500 mb-1">Phone</h4>
                    <a href="tel:+918601442061" className="text-lg font-medium text-surface-900 dark:text-white hover:text-primary-500 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-500 mb-1">Location</h4>
                    <p className="text-lg font-medium text-surface-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>

        <div className="rounded-3xl border border-surface-200 bg-white p-8 shadow-sm dark:border-surface-700 dark:bg-surface-800">
          <h3 className="mb-4 text-2xl font-display font-bold text-surface-900 dark:text-white">
            Quick Actions
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
            {personalInfo.availability}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${personalInfo.email}`}>
              Send Email
            </Button>
            <Button href={personalInfo.resumeLink} variant="secondary" download>
              Download Resume
            </Button>
          </div>

          <div className="mt-8 border-t border-surface-200 pt-6 dark:border-surface-700">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-500">
              Connect Online
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-surface-200 px-4 py-3 text-sm transition-colors hover:border-primary-400 hover:text-primary-500 dark:border-surface-700"
                >
                  <span className="font-medium">{link.platform}</span>
                  <span className="text-surface-500 dark:text-surface-400">{link.username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
