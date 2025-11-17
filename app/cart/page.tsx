'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-12" style={{ color: 'var(--foreground)' }}>Shopping Cart</h1>

        {state.items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg mb-6" style={{ color: 'var(--muted)' }}>Your cart is empty</p>
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4" style={{ borderBottom: `1px solid var(--border)` }}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-24 h-24 object-cover"
                    style={{ backgroundColor: 'var(--light-bg)' }}
                  />
                  <div className="flex-1">
                    <h3 className="font-serif" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{item.tribe}</p>
                    <p className="font-semibold mt-2" style={{ color: 'var(--primary-brown)' }}>₹{item.price}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-2" style={{ border: `1px solid var(--border)` }}>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity - 1 },
                          })
                        }
                        className="px-2 py-1"
                        style={{ '--tw-text-opacity': '1' } as any}
                      >
                        -
                      </button>
                      <span className="px-3 py-1" style={{ borderLeft: `1px solid var(--border)`, borderRight: `1px solid var(--border)` }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                        className="px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold">₹{item.price * item.quantity}</p>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--error)' }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="p-8 h-fit" style={{ backgroundColor: 'var(--light-bg)' }}>
              <h2 className="text-2xl font-serif mb-6" style={{ color: 'var(--foreground)' }}>Order Summary</h2>
              <div className="space-y-4 mb-6 pb-6" style={{ borderBottom: `1px solid var(--border)` }}>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--muted)' }}>Subtotal</span>
                  <span className="font-semibold">₹{state.total}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--muted)' }}>Shipping</span>
                  <span className="font-semibold">₹0</span>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <span className="font-serif text-lg" style={{ color: 'var(--foreground)' }}>Total</span>
                <span className="font-serif text-2xl font-semibold" style={{ color: 'var(--primary-brown)' }}>
                  ₹{state.total}
                </span>
              </div>
              <Link href="/checkout" className="btn-primary w-full text-center block">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
