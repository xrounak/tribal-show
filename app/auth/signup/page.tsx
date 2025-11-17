'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { setAuth } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Mock signup
    setAuth({
      user: { id: '1', email: formData.email, name: formData.name },
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
            <h1 className="text-3xl font-serif mb-2 text-center" style={{ color: 'var(--foreground)' }}>Create Account</h1>
            <p className="text-center mb-8" style={{ color: 'var(--muted)' }}>Join us to explore tribal crafts</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field w-full"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input-field w-full"
              />

              <button type="submit" className="btn-primary w-full">
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center" style={{ color: 'var(--muted)' }}>
              Already have an account?{' '}
              <Link href="/auth/login" className="hover:underline" style={{ color: 'var(--primary-orange)' }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
