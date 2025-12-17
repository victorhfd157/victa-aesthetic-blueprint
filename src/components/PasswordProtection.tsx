import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
  password?: string;
  storageKey?: string;
}

export const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  children,
  password = 'victa2024',
  storageKey = 'servicos_access'
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedAccess = sessionStorage.getItem(storageKey);
    if (savedAccess === 'granted') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (inputPassword === password) {
      sessionStorage.setItem(storageKey, 'granted');
      setIsAuthenticated(true);
    } else {
      setError('Senha incorreta. Tente novamente.');
      setInputPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-serif text-xl font-bold">
                V
              </div>
              <span className="text-2xl font-bold text-white tracking-wider">VICTA AI</span>
            </div>
          </div>

          {/* Lock icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-white text-center mb-2">
            Acesso Protegido
          </h1>
          <p className="text-slate-400 text-center text-sm mb-8">
            Digite a senha para acessar a apresentação comercial
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Digite a senha"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Acessar Apresentação
            </button>
          </form>

          {/* Footer */}
          <p className="text-slate-500 text-xs text-center mt-8">
            Proposta Comercial Confidencial
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;
