// app/research/[slug]/page.tsx
import { getPaperBySlug, papers } from "@/data/papers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// Generate static paths for all papers
export async function generateStaticParams() {
  return papers
    .filter(p => p.status === "published")
    .map((paper) => ({
      slug: paper.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const paper = getPaperBySlug(params.slug);
  
  if (!paper) {
    return {
      title: "Paper Not Found | Dinesh Appavoo",
    };
  }
  
  return {
    title: `${paper.title} | Dinesh Appavoo`,
    description: paper.abstractPreview || paper.abstract,
  };
}

export default function PaperPage({ params }: { params: { slug: string } }) {
  const paper = getPaperBySlug(params.slug);
  
  if (!paper || paper.status !== "published") {
    notFound();
  }
  
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)', paddingTop: '6rem' }}>
      <div className="container-editorial">
        <section className="section">
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              href="/research"
              className="inline-flex items-center gap-2 text-small ui-font hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Research
            </Link>
          </div>

          {/* Paper Header */}
          <div className="mb-12">
            <div className="mb-4">
              <span className="badge ui-font" style={{
                background: 'var(--orange-light)',
                color: 'var(--orange-accent)',
                border: '1px solid var(--orange-accent)'
              }}>
                {paper.category}
              </span>
            </div>

            <h1 className="mb-6">{paper.title}</h1>
            
            {paper.authors && paper.authors.length > 0 && (
              <p className="text-subtitle mb-6" style={{ fontStyle: 'italic' }}>
                {paper.authors.join(", ")} • {paper.date}
              </p>
            )}
          </div>

          <div className="divider-colored mb-12"></div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="mb-6" style={{ fontSize: '1.75rem' }}>Abstract</h2>
            <p className="text-subtitle" style={{ lineHeight: '1.8' }}>
              {paper.abstract}
            </p>
          </div>

          {/* PDF Viewer with Kindle Colors */}
          {paper.pdfUrl && (
            <>
              <div className="divider mb-12"></div>
              
              <div className="mb-12">
                {/* Header with buttons */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Full Paper</h2>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-font"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        background: 'transparent',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Open in New Tab
                    </a>
                  </div>
                </div>
                
                {/* Kindle-styled PDF wrapper */}
                <div 
                  style={{
                    background: '#F4F1EA',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #D4D1C6',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <iframe 
                    src={paper.pdfUrl}
                    width="100%"
                    height="800px"
                    style={{ 
                      border: 'none',
                      borderRadius: '8px',
                      background: '#FFFFFF'
                    }}
                    title={`${paper.title} PDF`}
                  />
                </div>

                {/* Download Section */}
                <div className="text-center mt-8">
                  <a 
                    href={paper.pdfUrl}
                    download
                    className="btn btn-primary ui-font inline-flex items-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download PDF
                  </a>
                  <p className="text-small mt-3" style={{ color: 'var(--text-tertiary)' }}>
                    Save for offline reading
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Back Link */}
          <div className="text-center pt-12">
            <Link href="/research" className="btn btn-outline ui-font">
              ← Back to All Research
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}