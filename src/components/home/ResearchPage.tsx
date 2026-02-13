// components/research/ResearchPage.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { getPublishedPapers, getInProgressPapers } from "@/data/papers";
import { getUtilityPatents, getProvisionalPatents } from "@/data/patents";

export function ResearchPage() {
  const publishedPapers = getPublishedPapers();
  const inProgressPapers = getInProgressPapers();
  const utilityPatents = getUtilityPatents();
  const provisionalPatents = getProvisionalPatents();

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)', paddingTop: '6rem' }}>
      <div className="container-editorial">
        <section className="section">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="divider-colored mb-10"></div>
            <p className="text-meta mb-6" style={{ color: 'var(--orange-accent)' }}>
              RESEARCH & PUBLICATIONS
            </p>
            <h1 className="mb-6">Technical Work</h1>
            <p className="text-subtitle">
              Patents, research papers, and technical contributions at the intersection of 
              aerospace propulsion and computational biology.
            </p>
          </motion.div>

          {/* Patents Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="mb-8" style={{ fontSize: '2rem' }}>Patents</h2>
            
            {/* Utility Patents (Granted/Published) */}
            {utilityPatents.length > 0 && (
              <>
                <h3 className="mb-6" style={{ 
                  fontSize: '1.25rem', 
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}>
                  Utility Patents (Published/Granted)
                </h3>
                <div className="space-y-6 mb-12">
                  {utilityPatents.map((patent) => (
                    <div key={patent.id} className="card-accent">
                      <div className="mb-4 flex items-center gap-3 flex-wrap">
                        <span className="badge badge-accent ui-font">{patent.type}</span>
                        {patent.status && (
                          <span className="badge ui-font" style={{
                            background: patent.status === 'Granted' ? 'var(--bg-success)' : 'var(--bg-tertiary)',
                            color: patent.status === 'Granted' ? 'var(--text-success)' : 'var(--text-secondary)',
                            border: '1px solid var(--border-light)'
                          }}>
                            {patent.status.toUpperCase()}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>
                        {patent.url ? (
                          <a 
                            href={patent.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                          >
                            {patent.title}
                          </a>
                        ) : (
                          patent.title
                        )}
                      </h3>

                      <p className="text-meta mb-4">
                        PUBLICATION NUMBER: {patent.number} • {patent.year}
                      </p>

                      {patent.inventors && patent.inventors.length > 0 && (
                        <p className="text-small mb-4" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                          Inventor{patent.inventors.length > 1 ? 's' : ''}: {patent.inventors.join(", ")}
                        </p>
                      )}

                      <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {patent.description}
                      </p>

                      {patent.url && (
                        <a 
                          href={patent.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent ui-font"
                        >
                          View Patent →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Provisional Patents (Filed) */}
            {provisionalPatents.length > 0 && (
              <>
                <h3 className="mb-6" style={{ 
                  fontSize: '1.25rem', 
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}>
                  Provisional Patent Applications (Filed)
                </h3>
                <div className="space-y-6">
                  {provisionalPatents.map((patent) => (
                    <div key={patent.id} className="card" style={{ 
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-secondary)'
                    }}>
                      <div className="mb-4 flex items-center gap-3 flex-wrap">
                        <span className="badge ui-font" style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-light)'
                        }}>
                          PROVISIONAL
                        </span>
                        {patent.status && (
                          <span className="badge ui-font" style={{
                            background: 'var(--orange-light)',
                            color: 'var(--orange-accent)',
                            border: '1px solid var(--orange-accent)'
                          }}>
                            {patent.status.toUpperCase()}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>
                        {patent.title}
                      </h3>

                      <p className="text-meta mb-4">
                        APPLICATION NUMBER: {patent.number}
                        {patent.filedDate && ` • Filed: ${patent.filedDate}`}
                      </p>

                      {patent.inventors && patent.inventors.length > 0 && (
                        <p className="text-small mb-4" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                          Inventor{patent.inventors.length > 1 ? 's' : ''}: {patent.inventors.join(", ")}
                        </p>
                      )}

                      <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {patent.description}
                      </p>

                      <p className="text-small" style={{ color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                        Provisional patents are not publicly searchable. This application is pending conversion to a utility patent.
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <div className="divider mb-20"></div>

          {/* Published Papers Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="mb-8" style={{ fontSize: '2rem' }}>Published Papers</h2>
            
            <div className="space-y-6">
              {publishedPapers.map((paper) => (
                <Link 
                  key={paper.id}
                  href={`/research/${paper.slug}`}
                  className="card card-interactive block"
                  style={{ position: 'relative' }}
                >
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '1.5rem',
                    bottom: '1.5rem',
                    width: '3px',
                    background: 'var(--orange-accent)',
                    opacity: 0.4,
                    borderRadius: '2px'
                  }}></div>

                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <span className="badge ui-font" style={{
                      background: 'var(--orange-light)',
                      color: 'var(--orange-accent)',
                      border: '1px solid var(--orange-accent)'
                    }}>{paper.category}</span>
                    <span className="text-meta">{paper.date}</span>
                  </div>
                  
                  <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>
                    {paper.title}
                  </h3>

                  {paper.authors && paper.authors.length > 0 && (
                    <p className="text-small mb-4" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                      {paper.authors.join(", ")}
                    </p>
                  )}

                  <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {paper.abstractPreview || paper.abstract}
                  </p>

                  <div className="flex gap-3 items-center flex-wrap ui-font">
                    <span className="link-accent">Read Paper →</span>
                    {paper.pdfUrl && (
                      <>
                        <span className="text-small" style={{ color: 'var(--text-muted)' }}>•</span>
                        <span className="text-small" style={{ color: 'var(--text-secondary)' }}>
                          Download PDF
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* In Progress Section */}
          {inProgressPapers.length > 0 && (
            <>
              <div className="divider mb-20"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="mb-8" style={{ fontSize: '2rem' }}>In Progress</h2>
                
                <div className="space-y-6">
                  {inProgressPapers.map((paper) => (
                    <div 
                      key={paper.id}
                      className="card" 
                      style={{ position: 'relative', opacity: 0.8 }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '1.5rem',
                        bottom: '1.5rem',
                        width: '3px',
                        background: 'var(--border-medium)',
                        borderRadius: '2px'
                      }}></div>

                      <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                        <span className="badge ui-font">UPCOMING</span>
                        <span className="text-meta">{paper.date}</span>
                      </div>
                      
                      <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>
                        {paper.title}
                      </h3>

                      <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                        {paper.abstract}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center pt-12"
          >
            <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
              Interested in collaboration or have questions about this research?<br />
              <a href="mailto:hello@dineshappavoo.com" className="link-accent">Get in touch</a>
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}