// app/podcast/[slug]/page.tsx
import { getEpisodeBySlug, episodes } from "@/data/episodes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EpisodePageRoute({ params }: { params: { slug: string } }) {
  const episode = getEpisodeBySlug(params.slug);
  
  if (!episode) {
    notFound();
  }
  
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)', paddingTop: '6rem' }}>
      <div className="container-editorial">
        <section className="section">
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              href="/podcast"
              className="inline-flex items-center gap-2 text-small ui-font hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Podcast
            </Link>
          </div>

          {/* Episode Header */}
          <div className="mb-12">
            <div className="mb-4">
              <span className="badge badge-accent ui-font">
                EPISODE {episode.episodeNumber}
              </span>
            </div>

            <h1 className="mb-6">{episode.title}</h1>
            
            <p className="text-meta mb-6">{episode.duration} • {episode.date}</p>

            <p className="text-subtitle">
              {episode.description}
            </p>
          </div>

          <div className="divider-colored mb-12"></div>

          {/* Player Embeds */}
          <div className="mb-16" id="players">
            <h2 className="mb-8" style={{ fontSize: '1.75rem' }}>Listen</h2>

            <div className="space-y-6">
              {/* Spotify */}
              {episode.spotifyEmbedUrl && (
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <h3 className="ui-font" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                      Spotify
                    </h3>
                  </div>
                  <iframe 
                    src={episode.spotifyEmbedUrl}
                    width="100%" 
                    height="232" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    style={{ borderRadius: '12px' }}
                  ></iframe>
                </div>
              )}

              {/* YouTube */}
              {episode.youtubeEmbedUrl && (
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <h3 className="ui-font" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                      YouTube
                    </h3>
                  </div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe 
                      src={episode.youtubeEmbedUrl}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Apple Podcasts */}
              {episode.appleEmbedUrl && (
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.601c-5.29 0-9.601-4.311-9.601-9.601S6.71 2.399 12 2.399s9.601 4.311 9.601 9.601-4.311 9.601-9.601 9.601zm-.001-15.844c-2.283 0-4.136 1.853-4.136 4.136v.01c0 1.807 1.161 3.346 2.781 3.915v4.031c0 .747.608 1.355 1.355 1.355s1.355-.608 1.355-1.355v-4.031c1.62-.569 2.781-2.108 2.781-3.915v-.01c0-2.283-1.853-4.136-4.136-4.136zm0 6.534c-1.323 0-2.398-1.075-2.398-2.398s1.075-2.398 2.398-2.398 2.398 1.075 2.398 2.398-1.075 2.398-2.398 2.398z"/>
                      </svg>
                      <h3 className="ui-font" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                        Apple Podcasts
                      </h3>
                    </div>
                    <a 
                      href={episode.appleEmbedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline ui-font"
                      style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
                    >
                      Listen on Apple
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Show Notes */}
          {episode.showNotes && episode.showNotes.length > 0 && (
            <>
              <div className="divider mb-12"></div>
              
              <div className="mb-16">
                <h2 className="mb-6" style={{ fontSize: '1.75rem' }}>Show Notes</h2>
                
                <div className="card-subtle" style={{ padding: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {episode.showNotes.map((note, index) => (
                      <li 
                        key={index}
                        style={{ 
                          marginBottom: '1rem',
                          paddingLeft: '1.5rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.5rem',
                          width: '6px',
                          height: '6px',
                          background: 'var(--orange-accent)',
                          borderRadius: '50%'
                        }}></span>
                        {note.link ? (
                          <a 
                            href={note.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-accent"
                          >
                            {note.text}
                          </a>
                        ) : (
                          <span style={{ fontSize: '1rem', lineHeight: '1.7' }}>{note.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Transcript */}
          {episode.transcript.length > 0 && (
            <>
              <div className="divider mb-12"></div>

              <div className="mb-12">
                <h2 className="mb-6" style={{ fontSize: '1.75rem' }}>Transcript</h2>
                
                <div className="card-subtle" style={{ padding: '2.5rem 2rem' }}>
                  <div className="space-y-6">
                    {episode.transcript.map((entry, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                        <div className="flex gap-4">
                          <span 
                            className="ui-font text-small" 
                            style={{ 
                              color: 'var(--text-muted)',
                              fontFamily: 'monospace',
                              minWidth: '60px',
                              fontSize: '0.875rem'
                            }}
                          >
                            {entry.timestamp}
                          </span>
                          <div style={{ flex: 1 }}>
                            <p style={{ 
                              fontSize: '1rem', 
                              lineHeight: '1.8',
                              color: 'var(--text-primary)'
                            }}>
                              <strong style={{ color: 'var(--text-secondary)' }}>
                                {entry.speaker}:
                              </strong>{' '}
                              {entry.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="text-center pt-12">
            <Link href="/podcast" className="btn btn-outline ui-font">
              ← Back to All Episodes
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

// Generate static pages for all episodes at build time
export function generateStaticParams() {
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }) {
  const episode = getEpisodeBySlug(params.slug);
  
  if (!episode) {
    return {
      title: "Episode Not Found",
    };
  }
  
  return {
    title: `Episode ${episode.episodeNumber}: ${episode.title} | Dinesh Appavoo`,
    description: episode.description,
  };
}