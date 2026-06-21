import { useState } from "react";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { profileCertificates } from "../../data/profileEducation";
import { personalInfo } from "../../data/personal";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import type { Certificate } from "../../types";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="section-container relative bg-surface-50/50 dark:bg-surface-900/50 border-y border-surface-200 dark:border-surface-800"
    >
      <SectionHeading title="Certifications" subtitle="Continuous learning" />

      {profileCertificates.length === 0 ? (
        <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-surface-300 bg-white p-8 text-center shadow-sm dark:border-surface-700 dark:bg-surface-800">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FaAward className="text-2xl" />
          </div>

          <h3 className="mb-3 text-2xl font-display font-bold text-surface-900 dark:text-white">
            Certificates will be added soon.
          </h3>

          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-surface-600 dark:text-surface-400">
            For now, please refer to my education, projects, and resume.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={personalInfo.resumeLink} download>
              Download Resume
            </Button>
            <Button href={`mailto:${personalInfo.email}`} variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {profileCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-sm hover:shadow-md hover:border-primary-400/50 transition-all flex flex-col h-full group cursor-pointer"
            >
              <div onClick={() => setSelectedCert(cert)} className="flex-1">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaAward className="text-xl" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2">
                  {cert.category}
                </div>

                <h3 className="text-[15px] font-bold font-display text-surface-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-surface-500 dark:text-surface-400 text-xs mb-4">
                  Issued by {cert.issuer}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-surface-100 dark:border-surface-700 flex items-center justify-between">
                <span className="text-xs font-medium text-surface-400">
                  {cert.date}
                </span>

                <button
                  type="button"
                  aria-label={`View certificate ${cert.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  className="text-primary-600 dark:text-primary-400 text-xs font-semibold hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedCert(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-lg bg-white dark:bg-surface-800 rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 mx-auto">
              <FaAward className="text-3xl" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold font-display text-surface-900 dark:text-white mb-2">
                {selectedCert.title}
              </h3>

              <p className="text-surface-600 dark:text-surface-300 text-sm mb-6">
                Issued by{" "}
                <span className="font-semibold text-surface-900 dark:text-white">
                  {selectedCert.issuer}
                </span>{" "}
                on {selectedCert.date}
              </p>

              {selectedCert.credentialId && (
                <div className="mb-6 flex flex-col items-center rounded-xl border border-surface-200 bg-surface-50 p-4 dark:border-surface-700 dark:bg-surface-900">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-surface-500">
                    Credential ID
                  </p>
                  <p className="font-mono font-bold text-surface-900 dark:text-white">
                    {selectedCert.credentialId}
                  </p>
                </div>
              )}

              {selectedCert.link ? (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Verify Credential <FaExternalLinkAlt className="text-sm" />
                </a>
              ) : (
                <p className="text-sm text-surface-500">
                  No verification link available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}