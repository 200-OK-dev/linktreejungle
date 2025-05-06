"use client";

import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      className="text-center mt-auto pt-6 text-sm text-muted-foreground"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1.2 }}
    >
      <p className="flex items-center justify-center gap-1 text-slate-200">
        Hecho con <HeartIcon size={14} className="text-green-500" /> por <a href="https://www.2000k.dev/">2000k.dev</a>
      </p>
    </motion.footer>
  );
}