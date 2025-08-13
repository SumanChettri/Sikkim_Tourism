import React from 'react';
import { motion } from 'framer-motion';

export const SearchInput = ({ icon: Icon, id, label, type = 'text', options, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative flex items-center w-full sm:w-auto flex-grow"
  >
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none z-10">
      <Icon className="w-5 h-5" />
    </div>
    {type === 'select' ? (
      <select
        id={id}
        {...props}
        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 appearance-none hover:border-white/40"
      >
        {options.map(option => (
          <option key={option.value} value={option.value} className="bg-slate-800 text-white">
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={id}
        type={type}
        {...props}
        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 hover:border-white/40"
      />
    )}
  </motion.div>
);