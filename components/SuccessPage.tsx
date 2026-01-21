import React, { useEffect, useState } from 'react';
import { Check, FileText, Mail, Rocket } from 'lucide-react';

const SuccessPage: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Get session ID from URL params
    const params = new URLSearchParams(window.location.search);
    const id = params.get('session_id');
    setSessionId(id);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Check size={48} className="text-brand-black" strokeWidth={3} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase">
            Payment Successful!
          </h1>
          <p className="text-xl text-brand-accent font-bold">
            Your Express Build has started
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-brand-surface border border-brand-accent/30 rounded-2xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase">What Happens Next?</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={24} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Check Your Email</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  You'll receive a confirmation email with your payment receipt and a link to your intake form.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText size={24} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Complete the Intake Form</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Fill in your business details, services, and upload any photos or logo you have. This locks in your scope.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Rocket size={24} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">We Start Building</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Once your form is submitted, we get to work. Your site will be live within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-brand-black border border-brand-border rounded-xl p-6 text-center">
          <p className="text-brand-muted text-sm mb-4">
            Questions? Need immediate assistance?
          </p>
          <a
            href="mailto:hello@verdantdigital.com.au"
            className="text-brand-accent hover:text-white font-bold text-sm transition-colors"
          >
            hello@verdantdigital.com.au
          </a>
        </div>

        {/* Session ID for reference */}
        {sessionId && (
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Reference: {sessionId.substring(0, 20)}...
            </p>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-brand-muted hover:text-brand-accent text-sm transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
