'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-[#5a7c59]' : type === 'error' ? 'bg-[#c85a54]' : 'bg-[#8b6f47]';

  return (
    <div className={`${bgColor} text-white px-6 py-3 rounded-none fixed bottom-4 right-4 shadow-lg animate-fadeIn`}>
      {message}
    </div>
  );
}
