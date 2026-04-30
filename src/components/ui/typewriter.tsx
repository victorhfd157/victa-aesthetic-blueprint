import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  /** J. Oscillate font-weight 500↔700 while idle for "living text" feel. */
  animateWeight?: boolean;
}

export const Typewriter = ({
  words,
  className = '',
  cursorClassName = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  animateWeight = true,
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={cn('inline-flex items-center', className)}>
      <motion.span
        className="min-w-0 will-change-[font-weight]"
        animate={
          animateWeight
            ? { fontWeight: [500, 700, 500] }
            : undefined
        }
        transition={
          animateWeight
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      >
        {currentText}
      </motion.span>
      <motion.span
        className={cn('ml-1 inline-block h-[1em] w-[3px] bg-primary', cursorClassName)}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </span>
  );
};
