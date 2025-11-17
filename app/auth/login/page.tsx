'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setAuth({
      user: { id: '1', email, name: email.split('@')[0] },
      isLoggedIn: true,
    });
    window.location.href = '/';
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="w-full max-w-md">
          <div className="bg-white p-8" style={{ border: `1px solid var(--border)` }}>
            <h1 className="text-3xl font-serif mb-2 text-center" style={{ color: 'var(--foreground)' }}>Welcome Back</h1>
            <p className="text-center mb-8" style={{ color: 'var(--muted)' }}>Sign in to your account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field w-full"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field w-full"
              />

              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <p style={{ color: 'var(--muted)' }}>
                Don't have an account?{' '}
                <Link href="/auth/signup" className="hover:underline" style={{ color: 'var(--primary-orange)' }}>
                  Sign up
                </Link>
              </p>
              <p style={{ color: 'var(--muted)' }}>
                <Link href="/auth/forgot-password" className="hover:underline" style={{ color: 'var(--primary-orange)' }}>
                  Forgot your password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
