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

    try {
      // Mailchimp form action URL
      // Format: https://[your-domain].us[X].list-manage.com/subscribe/post?u=[USER_ID]&id=[LIST_ID]
      // Replace these with your actual Mailchimp values
      const MAILCHIMP_URL = 'YOUR_MAILCHIMP_FORM_ACTION_URL';
      
      // Create form data
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('b_YOUR_BOT_FIELD', ''); // Bot field, leave empty

      // Submit to Mailchimp
      const response = await fetch(MAILCHIMP_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Mailchimp doesn't support CORS, so we use no-cors
      });

      // Since we're using no-cors, we can't read the response
      // Assume success if no error is thrown
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email to confirm.');
      setEmail('');
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
          className="card-purple text-center"
          style={{ padding: '3rem 2rem' }}
        >
          <div className="text-5xl mb-6">✉️</div>
          <h3 className="mb-4">Stay Updated</h3>
          <p className="text-subtitle mb-8 max-w-lg mx-auto">
            Get occasional updates on rocket science, healthcare innovation, and thoughts on technology's future.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-4">
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
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn btn-blue ui-font"
                style={{ whiteSpace: 'nowrap' }}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-small" style={{ color: 'var(--accent-green)' }}>
                {message}
              </p>
            )}

            {status === 'error' && (
              <p className="text-small" style={{ color: 'var(--accent-orange)' }}>
                {message}
              </p>
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