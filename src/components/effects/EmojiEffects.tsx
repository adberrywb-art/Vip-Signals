import React, { useEffect, useState } from 'react';
import { usePayment } from '@/context/PaymentContext';

interface FloatingEmoji {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  size: number;
}

const EMOJIS = ['🍀', '💎', '📊', '💰', '🚀', '💵', '📈', '✨'];

export const EmojiEffects: React.FC = () => {
  const { showEmojiEffect } = usePayment();
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    if (showEmojiEffect) {
      const newEmojis: FloatingEmoji[] = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: 20 + Math.random() * 30,
      }));
      setEmojis(newEmojis);

      setTimeout(() => {
        setEmojis([]);
      }, 2500);
    }
  }, [showEmojiEffect]);

  if (emojis.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-emoji-float"
          style={{
            left: `${emoji.x}%`,
            bottom: '20%',
            animationDelay: `${emoji.delay}s`,
            fontSize: `${emoji.size}px`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

export default EmojiEffects;
