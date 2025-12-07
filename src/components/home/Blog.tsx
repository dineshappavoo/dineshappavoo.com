'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Medium RSS feed
    // Note: Medium RSS URL format: https://medium.com/feed/@username
    const fetchPosts = async () => {
      try {
        // Using RSS2JSON service to convert Medium RSS to JSON
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dineshappavoo'
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 3)); // Get latest 3 posts
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getReadTime = (content: string) => {
    const words = stripHtml(content).split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <section id="blog" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-editorial">
        <div className="divider-colored"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-meta mb-6" style={{ color: 'var(--accent-purple)' }}>WRITING</p>
          <h2 className="mb-6">Thoughts & Essays</h2>
          <p className="text-subtitle">
            Exploring the intersection of technology, science, and the future of humanity.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <p style={{ color: 'var(--text-tertiary)' }}>Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p style={{ color: 'var(--text-tertiary)' }}>No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4">
                  <span className="badge badge-purple ui-font">Medium</span>
                </div>
                
                <h3 className="mb-4" style={{ fontSize: '1.75rem' }}>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    {post.title}
                  </a>
                </h3>

                <div className="flex items-center gap-4 mb-4 ui-font text-meta">
                  <span>{formatDate(post.pubDate)}</span>
                  <span>•</span>
                  <span>{getReadTime(post.description)}</span>
                </div>

                <p className="mb-6" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  {stripHtml(post.description).slice(0, 200)}...
                </p>

                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-blue ui-font"
                >
                  Read on Medium →
                </a>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Link */}
        {posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="https://medium.com/@dineshappavoo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline ui-font"
            >
              View All Posts on Medium
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}