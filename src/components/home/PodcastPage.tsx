// components/podcast/PodcastPage.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { episodes, getLatestEpisode } from "@/data/episodes";

export function PodcastPage() {
  const latestEpisode = getLatestEpisode();
  const allEpisodes = episodes;

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
              PODCAST
            </p>
            <h1 className="mb-6">Civilization Beyond Gravity</h1>
            <p className="text-subtitle">
              Exploring the long-term future of humanity — from rockets and spaceflight to 
              existential challenges and how we make decisions at scale. Hosted by Dinesh Appavoo.
            </p>

            {/* Subscribe Links */}
            <div className="flex gap-4 mt-8 flex-wrap ui-font">
              <a 
                href="https://open.spotify.com/show/your-show-id" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a 
                href="https://podcasts.apple.com/podcast/your-podcast-id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.601c-5.29 0-9.601-4.311-9.601-9.601S6.71 2.399 12 2.399s9.601 4.311 9.601 9.601-4.311 9.601-9.601 9.601zm-.001-15.844c-2.283 0-4.136 1.853-4.136 4.136v.01c0 1.807 1.161 3.346 2.781 3.915v4.031c0 .747.608 1.355 1.355 1.355s1.355-.608 1.355-1.355v-4.031c1.62-.569 2.781-2.108 2.781-3.915v-.01c0-2.283-1.853-4.136-4.136-4.136zm0 6.534c-1.323 0-2.398-1.075-2.398-2.398s1.075-2.398 2.398-2.398 2.398 1.075 2.398 2.398-1.075 2.398-2.398 2.398z"/>
                </svg>
                Apple Podcasts
              </a>
              <a 
                href="https://youtube.com/@yourchannelname"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </motion.div>

          {/* Featured Episode (Latest) */}
          {latestEpisode && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-20"
            >
              <h2 className="mb-8" style={{ fontSize: '2rem' }}>Latest Episode</h2>
              
              <Link 
                href={`/podcast/${latestEpisode.slug}`}
                className="card-accent block"
                style={{ padding: '3rem 2rem' }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Episode Cover */}
                  <div className="md:col-span-1">
                    <div 
                      className="w-full rounded-lg"
                      style={{ 
                        aspectRatio: '1/1',
                        background: 'linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%)',
                        border: '2px solid var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem'
                      }}
                    >
                      {latestEpisode.coverEmoji || '🎙️'}
                    </div>
                  </div>

                  {/* Episode Info */}
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <span className="badge badge-accent ui-font">EPISODE {latestEpisode.episodeNumber}</span>
                    </div>

                    <h3 className="mb-4" style={{ fontSize: '2rem' }}>
                      {latestEpisode.title}
                    </h3>

                    <p className="text-meta mb-4">{latestEpisode.duration} • {latestEpisode.date}</p>

                    <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      {latestEpisode.description}
                    </p>

                    <div className="flex gap-3 items-center ui-font">
                      <span className="link-accent">Listen & Read Transcript →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="divider mb-20"></div>

          {/* All Episodes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="mb-8" style={{ fontSize: '2rem' }}>All Episodes</h2>
            
            <div className="space-y-6">
              {allEpisodes.map((episode, index) => {
                const isPublished = episode.transcript.length > 0;
                
                return (
                  <div 
                    key={episode.slug}
                    className="card block"
                    style={{ position: 'relative', opacity: isPublished ? 1 : 0.7 }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '1.5rem',
                      bottom: '1.5rem',
                      width: '3px',
                      background: isPublished ? 'var(--orange-accent)' : 'var(--border-medium)',
                      opacity: isPublished ? 0.4 : 1,
                      borderRadius: '2px'
                    }}></div>

                    <Link 
                      href={isPublished ? `/podcast/${episode.slug}` : '#'}
                      className={`block ${isPublished ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={(e) => {
                        if (!isPublished) e.preventDefault();
                      }}
                    >
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <div 
                            className="w-full rounded-lg"
                            style={{ 
                              aspectRatio: '1/1',
                              background: isPublished 
                                ? 'linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%)' 
                                : 'var(--bg-secondary)',
                              border: isPublished ? '2px solid var(--border-medium)' : '1px solid var(--border-light)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '3rem'
                            }}
                          >
                            {episode.coverEmoji || '🎙️'}
                          </div>
                        </div>

                        <div className="md:col-span-3">
                          <div className="mb-3">
                            <span className="badge ui-font" style={
                              isPublished 
                                ? {
                                    background: 'var(--orange-light)',
                                    color: 'var(--orange-accent)',
                                    border: '1px solid var(--orange-accent)'
                                  }
                                : {}
                            }>
                              EPISODE {episode.episodeNumber} {!isPublished && '• COMING SOON'}
                            </span>
                          </div>
                          
                          <h3 className="mb-2" style={{ fontSize: '1.5rem' }}>
                            {episode.title}
                          </h3>

                          <p className="text-meta mb-3">{isPublished ? episode.duration : 'UPCOMING'} • {episode.date}</p>

                          <p className="text-small mb-4" style={{ color: 'var(--text-secondary)' }}>
                            {episode.description}
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Spotify Player & Platform Links (not part of clickable card) */}
                    {isPublished && episode.spotifyEmbedUrl && (
                      <div 
                        className="mt-6 pt-6" 
                        style={{ borderTop: '1px solid var(--border-light)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Spotify Player */}
                        <iframe 
                          src={episode.spotifyEmbedUrl}
                          width="100%" 
                          height="152" 
                          frameBorder="0" 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                          loading="lazy"
                          style={{ 
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            border: '1px solid var(--border-light)'
                          }}
                        ></iframe>

                        {/* Platform Links */}
                        <div className="flex items-center gap-4 flex-wrap ui-font text-small">
                          <span style={{ color: 'var(--text-tertiary)', fontWeight: 500 }}>
                            Listen on:
                          </span>
                          
                          <a
                            href={`/podcast/${episode.slug}#players`}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
                            style={{
                              background: 'rgba(123, 139, 123, 0.08)',
                              border: '1px solid rgba(123, 139, 123, 0.2)',
                              color: '#5a6d5a',
                              fontWeight: 500
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(123, 139, 123, 0.12)';
                              e.currentTarget.style.borderColor = 'rgba(123, 139, 123, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(123, 139, 123, 0.08)';
                              e.currentTarget.style.borderColor = 'rgba(123, 139, 123, 0.2)';
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            Spotify
                          </a>

                          {episode.appleEmbedUrl && (
                            <a
                              href={`/podcast/${episode.slug}#players`}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
                              style={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-light)',
                                color: 'var(--text-secondary)',
                                fontWeight: 500
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--bg-secondary)';
                                e.currentTarget.style.borderColor = 'var(--border-medium)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--bg-tertiary)';
                                e.currentTarget.style.borderColor = 'var(--border-light)';
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.601c-5.29 0-9.601-4.311-9.601-9.601S6.71 2.399 12 2.399s9.601 4.311 9.601 9.601-4.311 9.601-9.601 9.601zm-.001-15.844c-2.283 0-4.136 1.853-4.136 4.136v.01c0 1.807 1.161 3.346 2.781 3.915v4.031c0 .747.608 1.355 1.355 1.355s1.355-.608 1.355-1.355v-4.031c1.62-.569 2.781-2.108 2.781-3.915v-.01c0-2.283-1.853-4.136-4.136-4.136zm0 6.534c-1.323 0-2.398-1.075-2.398-2.398s1.075-2.398 2.398-2.398 2.398 1.075 2.398 2.398-1.075 2.398-2.398 2.398z"/>
                              </svg>
                              Apple
                            </a>
                          )}

                          {episode.youtubeEmbedUrl && (
                            <a
                              href={`/podcast/${episode.slug}#players`}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
                              style={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-light)',
                                color: 'var(--text-secondary)',
                                fontWeight: 500
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--bg-secondary)';
                                e.currentTarget.style.borderColor = 'var(--border-medium)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--bg-tertiary)';
                                e.currentTarget.style.borderColor = 'var(--border-light)';
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              YouTube
                            </a>
                          )}

                          <span style={{ color: 'var(--text-muted)' }}>•</span>

                          <a
                            href={`/podcast/${episode.slug}`}
                            className="link-accent"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Read Full Transcript →
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Coming Soon Episodes - just show transcript link */}
                    {isPublished && !episode.spotifyEmbedUrl && (
                      <div 
                        className="mt-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={`/podcast/${episode.slug}`}
                          className="link-accent ui-font"
                        >
                          Read Full Transcript →
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center pt-12"
          >
            <div className="card-subtle" style={{ padding: '2rem' }}>
              <p className="text-small mb-4" style={{ fontWeight: 600 }}>
                Get notified when new episodes drop
              </p>
              <Link href="/#newsletter" className="btn btn-outline ui-font">
                Subscribe to Newsletter
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}