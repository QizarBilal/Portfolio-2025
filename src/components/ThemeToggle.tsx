import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentThemeData = themes.find(t => t.name === currentTheme);

  return (
    <div className="fixed top-8 right-8 z-[60]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-effect p-4 rounded-full text-text-primary hover:text-accent transition-colors shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Theme selector"
      >
        <Palette size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute top-full right-0 mt-2 p-4 glass-effect rounded-2xl min-w-[280px]"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Choose Theme
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  onClick={() => {
                    setTheme(theme.name);
                    setIsOpen(false);
                  }}
                  className={`
                    relative p-3 rounded-xl border-2 transition-all
                    ${currentTheme === theme.name
                      ? 'border-accent bg-accent/10'
                      : 'border-gray-600 hover:border-gray-400'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2">
                    {/* Theme Color Preview */}
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-400"
                      style={{ 
                        backgroundColor: `rgb(${theme.colors.accent})` 
                      }}
                    />
                    
                    <span className="text-sm font-medium text-text-primary">
                      {theme.displayName}
                    </span>
                    
                    {/* Check Mark */}
                    {currentTheme === theme.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-accent rounded-full p-1"
                      >
                        <Check size={12} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-600">
              <p className="text-xs text-text-secondary">
                Current: <span className="text-accent font-medium">
                  {currentThemeData?.displayName}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
