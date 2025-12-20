'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Mailchimp doesn't support CORS, so we use JSONP trick
    // Change the /post to /post-json and add &c=? for JSONP
    const url = `https://dineshappavoo.us19.list-manage.com/subscribe/post-json?u=378a03eeb2358b1416a203297&id=63d42a7294&f_id=007150e0f0&EMAIL=${encodeURIComponent(email)}&c=?`;

    try {
      // Use JSONP to bypass CORS
      const script = document.createElement('script');
      const callbackName = 'mailchimpCallback' + Date.now();
      
      // Define callback function
      (window as any)[callbackName] = (data: any) => {
        // Clean up
        delete (window as any)[callbackName];
        document.body.removeChild(script);

        if (data.result === 'success') {
          setStatus('success');
          setMessage('Thanks for subscribing!');
          setEmail('');
        } else {
          setStatus('error');
          // Clean up the error message from Mailchimp
          let errorMsg = data.msg || 'Something went wrong. Please try again.';
          // Remove HTML tags and extra info
          errorMsg = errorMsg.replace(/<[^>]*>/g, '').split('.')[0];
          
          // Handle common errors
          if (errorMsg.includes('already subscribed')) {
            errorMsg = 'This email is already subscribed!';
          }
          setMessage(errorMsg);
        }
      };

      // Add script to page
      script.src = url.replace('&c=?', `&c=${callbackName}`);
      document.body.appendChild(script);

      // Timeout after 10 seconds
      setTimeout(() => {
        if (status === 'loading') {
          setStatus('error');
          setMessage('Request timed out. Please try again.');
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          delete (window as any)[callbackName];
        }
      }, 10000);

    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="section">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-subtle text-center"
          style={{ 
            padding: '3rem 2rem',
            position: 'relative',
            border: '1px solid var(--border-light)'
          }}
        >
          {/* Subtle orange accent on top border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '3px',
            background: 'var(--orange-accent)',
            opacity: 0.5,
            borderRadius: '0 0 2px 2px'
          }}></div>

          <div className="text-5xl mb-6">✉️</div>
          <h3 className="mb-4">Stay Updated</h3>
          <p className="text-subtitle mb-8 max-w-lg mx-auto">
            Get occasional updates on rocket science, healthcare innovation, and thoughts on technology's future.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-4 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-4 py-3 rounded-full border-2 ui-font"
                style={{
                  borderColor: 'var(--border-medium)',
                  fontSize: '1rem',
                  outline: 'none',
                  background: 'white',
                  color: 'var(--text-primary)',
                  opacity: status === 'loading' || status === 'success' ? 0.6 : 1,
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn ui-font"
                style={{ 
                  whiteSpace: 'nowrap',
                  opacity: status === 'loading' || status === 'success' ? 0.6 : 1,
                  cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
                  background: 'var(--orange-accent)',
                  color: 'white',
                  border: '2px solid var(--orange-accent)',
                }}
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg mb-4"
                style={{ 
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <p className="text-small" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  ✓ {message}
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg mb-4"
                style={{ 
                  background: 'var(--orange-light)',
                  border: '1px solid var(--orange-accent)',
                  borderWidth: '1px'
                }}
              >
                <p className="text-small" style={{ color: 'var(--orange-accent)', fontWeight: 600 }}>
                  ✗ {message}
                </p>
              </motion.div>
            )}

            {status === 'idle' && (
              <p className="text-small" style={{ color: 'var(--text-tertiary)' }}>
                No spam. Unsubscribe anytime.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}