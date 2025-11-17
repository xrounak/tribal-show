'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="w-full max-w-md">
          <div className="bg-white p-8" style={{ border: `1px solid var(--border)` }}>
            <h1 className="text-3xl font-serif mb-2 text-center" style={{ color: 'var(--foreground)' }}>Reset Password</h1>
            <p className="text-center mb-8" style={{ color: 'var(--muted)' }}>
              {submitted ? 'Check your email for reset instructions' : 'Enter your email to receive reset instructions'}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field w-full"
                />

                <button type="submit" className="btn-primary w-full">
                  Send Reset Link
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <p style={{ color: 'var(--muted)' }}>
                  We've sent a password reset link to {email}
                </p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  If you don't see it in your inbox, check your spam folder.
                </p>
              </div>
            )}

            <p className="mt-6 text-center" style={{ color: 'var(--muted)' }}>
              <Link href="/auth/login" className="hover:underline" style={{ color: 'var(--primary-orange)' }}>
                Back to Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
