import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectProps {
  children: React.ReactNode;
  password?: string;
}

const PASSWORD = 'luna911';

const PasswordProtect: React.FC<PasswordProtectProps> = ({ children, password = PASSWORD }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('internal-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('internal-auth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setInputPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center">
              <Lock size={32} className="text-brand-accent" />
            </div>
          </div>

          <h1 className="text-2xl font-display font-bold text-white text-center mb-2 uppercase">
            Internal Only
          </h1>
          <p className="text-brand-muted text-sm text-center mb-6">
            This page is for Verdant Digital team members only.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-brand-muted mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="w-full bg-brand-black border border-brand-border rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent transition-colors pr-12"
                  placeholder="Enter password"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-brand-accent text-brand-black font-bold py-3 rounded-lg hover:bg-brand-accent/90 transition-colors"
            >
              Access Page
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-brand-border">
            <p className="text-xs text-brand-muted/60 text-center">
              If you need access, contact the team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;
