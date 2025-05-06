"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProfileContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ProfileContainer({ children, className }: ProfileContainerProps) {
  return (
    <motion.div 
      className={cn(
        "w-full max-w-md  px-4 py-6 flex flex-col items-center bg-slate-950/60 rounded-xl",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}