'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import Toast from '@/components/Toast';
import Link from 'next/link';

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    pin: '',
    state: 'Jharkhand',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    dispatch({ type: 'CLEAR_CART' });
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-serif mb-6" style={{ color: 'var(--foreground)' }}>Your cart is empty</h1>
          <Link href="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-12" style={{ color: 'var(--foreground)' }}>Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-2 space-y-8">
            {/* Customer Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif" style={{ color: 'var(--foreground)' }}>Customer Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
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
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field w-full"
              />
            </div>

            {/* Address */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif" style={{ color: 'var(--foreground)' }}>Delivery Address</h2>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input-field w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="Village/Town"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="district"
                  placeholder="District"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pin"
                  placeholder="PIN Code"
                  value={formData.pin}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input-field"
                  disabled
                >
                  <option>Jharkhand</option>
                </select>
              </div>
            </div>

            {/* Place Order */}
            <button type="submit" className="btn-primary w-full py-4 text-lg">
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="p-8 h-fit" style={{ backgroundColor: 'var(--light-bg)' }}>
            <h2 className="text-2xl font-serif mb-6" style={{ color: 'var(--foreground)' }}>Order Summary</h2>
            <div className="space-y-4 mb-6 pb-6" style={{ borderBottom: `1px solid var(--border)` }}>
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span style={{ color: 'var(--muted)' }}>
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 pb-6" style={{ borderBottom: `1px solid var(--border)` }}>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Subtotal</span>
                <span className="font-semibold">₹{state.total}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--muted)' }}>Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <span className="font-serif text-lg" style={{ color: 'var(--foreground)' }}>Total</span>
              <span className="font-serif text-2xl font-semibold" style={{ color: 'var(--primary-brown)' }}>
                ₹{state.total}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Order placed successfully! Redirecting..."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}

      <Footer />
    </>
  );
}
