"use client";

import { motion } from 'framer-motion';
import { LinkButton } from './link-button';
import { profileLinks } from '@/lib/constants';

export function LinksContainer() {
  return (
    <motion.div 
      className="w-full space-y-4 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {profileLinks.map((link, index) => (
        <LinkButton
          key={link.label}
          href={link.href}
          label={link.label}
          icon={link.icon}
          hasDropdown={link.hasDropdown}
          index={index}
        />
      ))}
    </motion.div>
  );
}