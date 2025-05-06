"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  label: string;
  icon: ReactNode;
  hasDropdown?: boolean;
  index: number;
  className?: string;
}

export function LinkButton({
  href,
  label,
  icon,
  hasDropdown = false,
  index,
  className
}: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "link-card group flex items-center justify-between w-full p-4 rounded-lg bg-[#1e1e1e] text-white/90 shadow-md transition-all",
        "hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 * (index + 1) + 0.5
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div className="text-white/90 transition-transform group-hover:scale-110">
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-1">
        {hasDropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-y-1"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
        {!hasDropdown && (
          <ExternalLink 
            size={16} 
            className="opacity-70 transition-transform group-hover:translate-x-1" 
          />
        )}
      </div>
    </motion.a>
  );
}