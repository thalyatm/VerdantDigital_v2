import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, AlertCircle, Send, User } from 'lucide-react';

const IntakeFormPage: React.FC = () => {
  // Get URL params for prefilling
  const [urlParams, setUrlParams] = useState<{
    email?: string;
    name?: string;
    sessionId?: string;
  }>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email') || '';
    const name = params.get('name') || '';
    const sessionId = params.get('session_id') || '';

    setUrlParams({ email, name, sessionId });

    // Prefill form data from URL params
    if (email || name) {
      setFormData(prev => ({
        ...prev,
        contactName: name,
        contactEmail: email,
      }));
    }
  }, []);

  const [formData, setFormData] = useState({
    // Your Details (links to payment)
    contactName: '',
    contactEmail: '',
    // Business Details
    businessName: '',
    abn: '',
    serviceArea: '',
    phone: '',
    websiteEmail: '',
    websiteEmailOption: '',  // 'same' or 'different'
    businessDescription: '',
    service1: '',
    service2: '',
    service3: '',
    // Fifth page choice
    fifthPageChoice: '',
    hasLogo: '',
    colourPreference: '',
    preferredColours: '',
    hasContent: '',
    existingContentLink: '',
    competitor1: '',
    competitor2: '',
    competitor3: '',
    hasPhotos: '',
    // Contact form destination (multiple allowed)
    formToWebsiteEmail: false,
    formToContactEmail: false,
    formToOther: false,
    formOtherEmails: '',
    // Additional fields
    domainName: '',
    hasDomain: '',
    licenseNumber: '',
    yearsInBusiness: '',
    socialFacebook: '',
    socialInstagram: '',
    googleBusinessLink: '',
    preferredContact: '',
    tradingHours: '',
    // Trust signals
    responseTime: '',
    freeQuotes: '',
    guarantee: '',
    fullyInsured: '',
    emergencyService: '',
    paymentCash: false,
    paymentCard: false,
    paymentBankTransfer: false,
    paymentAfterpay: false,
    paymentOther: '',
    accreditations: '',
    additionalComments: '',
  });

  const [logoFiles, setLogoFiles] = useState<FileList | null>(null);
  const [photoFiles, setPhotoFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // Sync websiteEmail if "use same" is selected and contactEmail changes
      if (name === 'contactEmail' && prev.websiteEmailOption === 'same') {
        updated.websiteEmail = value;
      }
      return updated;
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.contactName || !formData.contactEmail || !formData.businessName || !formData.phone || !formData.websiteEmail || !formData.businessDescription) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // For now, we'll send the form data to the contact form API
      // In production, you'd want a dedicated intake form handler with file upload support
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.contactName,
          lastName: '(Express Build Intake)',
          email: formData.contactEmail,
          phone: formData.phone,
          preferredContact: 'email',
          helpWith: `EXPRESS BUILD INTAKE FORM
${urlParams.sessionId ? `\nSTRIPE SESSION: ${urlParams.sessionId}` : ''}

YOUR DETAILS (Person who paid)
Name: ${formData.contactName}
Email: ${formData.contactEmail}

BUSINESS BASICS
Business Name: ${formData.businessName}
ABN: ${formData.abn || 'Not provided'}
Service Area: ${formData.serviceArea}
Phone (for website): ${formData.phone}
Email (for website): ${formData.websiteEmail}
Form Enquiries To: ${[
  formData.formToWebsiteEmail ? formData.websiteEmail : null,
  formData.formToContactEmail ? formData.contactEmail : null,
  formData.formToOther ? formData.formOtherEmails : null
].filter(Boolean).join(', ') || 'Not specified'}

SERVICES
Description: ${formData.businessDescription}
Top Services:
1. ${formData.service1}
2. ${formData.service2}
3. ${formData.service3}

FIFTH PAGE CHOICE
${formData.fifthPageChoice === 'gallery' ? 'Option A: Gallery / Our Work' :
  formData.fifthPageChoice === 'areas' ? 'Option B: Service Areas / Locations' :
  formData.fifthPageChoice === 'reviews' ? 'Option C: Reviews / Testimonials' :
  formData.fifthPageChoice === 'recommend' ? 'Not sure - recommend one for me' : 'Not selected'}

BRANDING
Has Logo: ${formData.hasLogo}
Colour Preference: ${formData.colourPreference}
Preferred Colours: ${formData.preferredColours || 'N/A'}

CONTENT
Has Existing Content: ${formData.hasContent}
Content Link: ${formData.existingContentLink || 'N/A'}

COMPETITORS
1. ${formData.competitor1 || 'N/A'}
2. ${formData.competitor2 || 'N/A'}
3. ${formData.competitor3 || 'N/A'}

PHOTOS
Has Job Photos: ${formData.hasPhotos}

DOMAIN & ONLINE PRESENCE
Has Domain: ${formData.hasDomain}
Domain Name: ${formData.domainName || 'N/A'}
Facebook: ${formData.socialFacebook || 'N/A'}
Instagram: ${formData.socialInstagram || 'N/A'}
Google Business: ${formData.googleBusinessLink || 'N/A'}

BUSINESS CREDIBILITY
License Number: ${formData.licenseNumber || 'N/A'}
Years in Business: ${formData.yearsInBusiness || 'N/A'}
Trading Hours: ${formData.tradingHours || 'N/A'}
Preferred Contact Method: ${formData.preferredContact || 'N/A'}

TRUST SIGNALS & PROMISES
Response Time: ${formData.responseTime || 'N/A'}
Free Quotes: ${formData.freeQuotes || 'N/A'}
Guarantee: ${formData.guarantee || 'N/A'}
Fully Insured: ${formData.fullyInsured || 'N/A'}
Emergency/24-7 Service: ${formData.emergencyService || 'N/A'}
Payment Methods: ${[
  formData.paymentCash ? 'Cash' : null,
  formData.paymentCard ? 'Card/EFTPOS' : null,
  formData.paymentBankTransfer ? 'Bank Transfer' : null,
  formData.paymentAfterpay ? 'Afterpay/Zip' : null,
  formData.paymentOther || null
].filter(Boolean).join(', ') || 'N/A'}
Accreditations: ${formData.accreditations || 'N/A'}

ADDITIONAL COMMENTS
${formData.additionalComments || 'None provided'}

Note: Any uploaded files will need to be sent separately or via a file sharing service.`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at hello@verdantdigital.com.au');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center">
          <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-brand-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
            Form Submitted
          </h1>
          <p className="text-brand-muted text-lg mb-6">
            That's it. We'll take it from here and send your site through for review before launch.
          </p>
          <p className="text-brand-accent text-sm font-semibold mb-8">
            If you have files to upload (logo or photos), please email them to hello@verdantdigital.com.au
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent text-sm transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <div className="fixed inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <h1 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase">
              Express Build <span className="text-brand-accent">Intake Form</span>
            </h1>
            <p className="text-brand-muted text-base leading-relaxed mb-2">
              Thanks for getting started with your Tradie Express Build.
            </p>
            <p className="text-brand-muted text-base leading-relaxed mb-2">
              This form is all we need to build your website.
            </p>
            <p className="text-white text-base font-semibold">
              Please answer clearly - we'll take it from here.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Section 0: Your Details */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center">
                  <User size={16} />
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Your Details</h2>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-lg p-5 mb-4">
                <p className="text-brand-muted text-sm">
                  Please confirm your details so we can match this form to your order.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Your full name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="The name you used when paying"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Your email address <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="The email you used when paying"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 1: Business Basics */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Business Basics</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Business name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    ABN <span className="text-brand-muted text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="abn"
                    value={formData.abn}
                    onChange={handleChange}
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Primary service area <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    value={formData.serviceArea}
                    onChange={handleChange}
                    placeholder="e.g. Brisbane North, Gold Coast, Logan"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Phone number to display on the website <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Email address to display on the website <span className="text-brand-accent">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="websiteEmailOption"
                        checked={formData.websiteEmailOption === 'same'}
                        onChange={() => setFormData(prev => ({ ...prev, websiteEmailOption: 'same', websiteEmail: prev.contactEmail }))}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">
                        Use same as above {formData.contactEmail && <span className="text-brand-accent">({formData.contactEmail})</span>}
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="websiteEmailOption"
                        checked={formData.websiteEmailOption === 'different'}
                        onChange={() => setFormData(prev => ({ ...prev, websiteEmailOption: 'different', websiteEmail: '' }))}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Use a different email</span>
                    </label>
                    {formData.websiteEmailOption === 'different' && (
                      <input
                        type="email"
                        name="websiteEmail"
                        value={formData.websiteEmail}
                        onChange={handleChange}
                        placeholder="e.g. info@mybusiness.com.au"
                        className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Where should contact form enquiries be sent?
                  </label>
                  <p className="text-brand-muted text-xs mb-3">Select all that apply - we'll configure your contact form to send to these addresses</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.formToWebsiteEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, formToWebsiteEmail: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">
                        Website email {formData.websiteEmail && <span className="text-brand-accent">({formData.websiteEmail})</span>}
                      </span>
                    </label>
                    {formData.websiteEmail !== formData.contactEmail && (
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.formToContactEmail}
                          onChange={(e) => setFormData(prev => ({ ...prev, formToContactEmail: e.target.checked }))}
                          className="w-4 h-4 accent-brand-accent rounded"
                        />
                        <span className="text-brand-muted group-hover:text-white transition-colors">
                          My personal email {formData.contactEmail && <span className="text-brand-accent">({formData.contactEmail})</span>}
                        </span>
                      </label>
                    )}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.formToOther}
                        onChange={(e) => setFormData(prev => ({ ...prev, formToOther: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Other email(s)</span>
                    </label>
                    {formData.formToOther && (
                      <div className="pl-7">
                        <input
                          type="text"
                          name="formOtherEmails"
                          value={formData.formOtherEmails}
                          onChange={handleChange}
                          placeholder="e.g. partner@email.com, office@mybusiness.com.au"
                          className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                        />
                        <p className="text-brand-muted/60 text-xs mt-1">Separate multiple emails with commas</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Services */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Services</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Briefly describe what your business does <span className="text-brand-accent">*</span>
                  </label>
                  <p className="text-brand-muted text-xs mb-2">1-3 sentences is plenty</p>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    What are the TOP 3 services you want highlighted on the site?
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-accent font-bold text-sm w-4">1.</span>
                      <input
                        type="text"
                        name="service1"
                        value={formData.service1}
                        onChange={handleChange}
                        className="flex-1 bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-accent font-bold text-sm w-4">2.</span>
                      <input
                        type="text"
                        name="service2"
                        value={formData.service2}
                        onChange={handleChange}
                        className="flex-1 bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-accent font-bold text-sm w-4">3.</span>
                      <input
                        type="text"
                        name="service3"
                        value={formData.service3}
                        onChange={handleChange}
                        className="flex-1 bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Fifth Page Choice */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  3
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Your Fifth Page</h2>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-lg p-5 mb-6">
                <p className="text-white text-sm font-semibold mb-2">Your site includes 4 core pages:</p>
                <p className="text-brand-muted text-sm">Home, Services, About & Contact</p>
                <p className="text-white text-sm font-semibold mt-4 mb-1">Plus ONE optional fifth page of your choice:</p>
              </div>

              <div className="space-y-4">
                {/* Option A - Gallery */}
                <label className={`block cursor-pointer group rounded-xl border-2 transition-all ${formData.fifthPageChoice === 'gallery' ? 'border-brand-accent bg-brand-accent/10' : 'border-brand-border/50 hover:border-brand-accent/50'}`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="fifthPageChoice"
                        value="gallery"
                        checked={formData.fifthPageChoice === 'gallery'}
                        onChange={() => handleRadioChange('fifthPageChoice', 'gallery')}
                        className="w-5 h-5 accent-brand-accent mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-brand-accent font-bold text-sm">OPTION A</span>
                          <span className="text-white font-semibold">Gallery / Our Work</span>
                        </div>
                        <p className="text-brand-muted text-sm mb-2">
                          Shows real examples of your completed jobs. Helps customers visualise the quality you deliver.
                        </p>
                        <p className="text-brand-muted/70 text-xs">
                          Best if: You have quality photos of completed work
                        </p>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Option B - Service Areas */}
                <label className={`block cursor-pointer group rounded-xl border-2 transition-all ${formData.fifthPageChoice === 'areas' ? 'border-brand-accent bg-brand-accent/10' : 'border-brand-border/50 hover:border-brand-accent/50'}`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="fifthPageChoice"
                        value="areas"
                        checked={formData.fifthPageChoice === 'areas'}
                        onChange={() => handleRadioChange('fifthPageChoice', 'areas')}
                        className="w-5 h-5 accent-brand-accent mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-brand-accent font-bold text-sm">OPTION B</span>
                          <span className="text-white font-semibold">Service Areas / Locations</span>
                        </div>
                        <p className="text-brand-muted text-sm mb-2">
                          Clearly shows where you operate. Helps you appear in local search results.
                        </p>
                        <p className="text-brand-muted/70 text-xs">
                          Best if: You service multiple suburbs or regions and local SEO matters
                        </p>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Option C - Reviews */}
                <label className={`block cursor-pointer group rounded-xl border-2 transition-all ${formData.fifthPageChoice === 'reviews' ? 'border-brand-accent bg-brand-accent/10' : 'border-brand-border/50 hover:border-brand-accent/50'}`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="fifthPageChoice"
                        value="reviews"
                        checked={formData.fifthPageChoice === 'reviews'}
                        onChange={() => handleRadioChange('fifthPageChoice', 'reviews')}
                        className="w-5 h-5 accent-brand-accent mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-brand-accent font-bold text-sm">OPTION C</span>
                          <span className="text-white font-semibold">Reviews / Testimonials</span>
                        </div>
                        <p className="text-brand-muted text-sm mb-2">
                          Builds social proof and trust. Reassures first-time visitors before they enquire.
                        </p>
                        <p className="text-brand-muted/70 text-xs">
                          Best if: You have real, verifiable customer reviews to highlight
                        </p>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Option D - Not sure */}
                <label className={`block cursor-pointer group rounded-xl border-2 transition-all ${formData.fifthPageChoice === 'recommend' ? 'border-brand-accent bg-brand-accent/10' : 'border-brand-border/50 hover:border-brand-accent/50'}`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="fifthPageChoice"
                        value="recommend"
                        checked={formData.fifthPageChoice === 'recommend'}
                        onChange={() => handleRadioChange('fifthPageChoice', 'recommend')}
                        className="w-5 h-5 accent-brand-accent mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white font-semibold">Not sure — recommend one for me</span>
                        </div>
                        <p className="text-brand-muted text-sm">
                          We'll recommend the best option based on your business and goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </section>

            {/* Section 4: Branding */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  4
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Branding</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you have a logo?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasLogo"
                        checked={formData.hasLogo === 'yes'}
                        onChange={() => handleRadioChange('hasLogo', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes - upload below</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasLogo"
                        checked={formData.hasLogo === 'no'}
                        onChange={() => handleRadioChange('hasLogo', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No - please proceed without one</span>
                    </label>
                  </div>
                </div>

                {formData.hasLogo === 'yes' && (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Upload your logo <span className="text-brand-muted text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*,.pdf,.ai,.eps,.svg"
                        onChange={(e) => setLogoFiles(e.target.files)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="bg-brand-surface/30 border border-dashed border-brand-border/50 rounded-lg px-4 py-6 text-center hover:border-brand-accent/50 transition-colors">
                        <Upload size={24} className="text-brand-muted mx-auto mb-2" />
                        <p className="text-brand-muted text-sm">
                          {logoFiles ? `${logoFiles.length} file(s) selected` : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-brand-muted/60 text-xs mt-1">PNG, JPG, SVG, PDF, AI, EPS</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Colour preference
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="colourPreference"
                        checked={formData.colourPreference === 'your-judgement'}
                        onChange={() => handleRadioChange('colourPreference', 'your-judgement')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Use your judgement</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="colourPreference"
                        checked={formData.colourPreference === 'preferred'}
                        onChange={() => handleRadioChange('colourPreference', 'preferred')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">I have preferred colours (list below)</span>
                    </label>
                  </div>
                </div>

                {formData.colourPreference === 'preferred' && (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      If you have preferred colours, list them here <span className="text-brand-muted text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="preferredColours"
                      value={formData.preferredColours}
                      onChange={handleChange}
                      placeholder="e.g. Navy blue, white, gold accents"
                      className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    />
                    <p className="text-brand-muted/60 text-xs mt-2">
                      Tip: <a href="/tradie/style-guide" target="_blank" className="text-brand-accent hover:underline">View our style guide</a> for colour direction options
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 5: Content */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  5
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Content</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you already have website content we can use?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasContent"
                        checked={formData.hasContent === 'yes'}
                        onChange={() => handleRadioChange('hasContent', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes - link below</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasContent"
                        checked={formData.hasContent === 'no'}
                        onChange={() => handleRadioChange('hasContent', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No - please write it for me</span>
                    </label>
                  </div>
                </div>

                {formData.hasContent === 'yes' && (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Paste the link to your existing website or content <span className="text-brand-muted text-xs">(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="existingContentLink"
                      value={formData.existingContentLink}
                      onChange={handleChange}
                      placeholder="https://"
                      className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Section 6: Competitors */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  6
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">
                  Competitors <span className="text-brand-muted text-sm font-normal">(Optional)</span>
                </h2>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  List up to 3 competitor websites you like
                </label>
                <p className="text-brand-muted text-xs mb-3">These help us understand your industry and preferences</p>
                <div className="space-y-3">
                  <input
                    type="url"
                    name="competitor1"
                    value={formData.competitor1}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                  <input
                    type="url"
                    name="competitor2"
                    value={formData.competitor2}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                  <input
                    type="url"
                    name="competitor3"
                    value={formData.competitor3}
                    onChange={handleChange}
                    placeholder="https://"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Section 7: Domain & Online Presence */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  7
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Domain & Online Presence</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you already have a domain name (web address)?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasDomain"
                        checked={formData.hasDomain === 'yes'}
                        onChange={() => handleRadioChange('hasDomain', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes - I own a domain</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasDomain"
                        checked={formData.hasDomain === 'no'}
                        onChange={() => handleRadioChange('hasDomain', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No - I need help with this</span>
                    </label>
                  </div>
                </div>

                {formData.hasDomain === 'yes' && (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      What is your domain name?
                    </label>
                    <input
                      type="text"
                      name="domainName"
                      value={formData.domainName}
                      onChange={handleChange}
                      placeholder="e.g. mybusiness.com.au"
                      className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Facebook page URL <span className="text-brand-muted text-xs">(optional)</span>
                  </label>
                  <input
                    type="url"
                    name="socialFacebook"
                    value={formData.socialFacebook}
                    onChange={handleChange}
                    placeholder="https://facebook.com/yourbusiness"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Instagram handle <span className="text-brand-muted text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="socialInstagram"
                    value={formData.socialInstagram}
                    onChange={handleChange}
                    placeholder="@yourbusiness"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Google Business Profile link <span className="text-brand-muted text-xs">(optional - for reviews)</span>
                  </label>
                  <input
                    type="url"
                    name="googleBusinessLink"
                    value={formData.googleBusinessLink}
                    onChange={handleChange}
                    placeholder="https://g.page/yourbusiness"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Section 8: Business Credibility */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  8
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">
                  Business Credibility <span className="text-brand-muted text-sm font-normal">(Optional)</span>
                </h2>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-lg p-5 mb-4">
                <p className="text-brand-muted text-sm">
                  These details help build trust with potential customers on your website.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    License number <span className="text-brand-muted text-xs">(e.g. QBCC, electrical license)</span>
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder="e.g. QBCC 12345678"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    How long have you been in business?
                  </label>
                  <input
                    type="text"
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                    placeholder="e.g. 10 years, Since 2015"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Trading hours
                  </label>
                  <input
                    type="text"
                    name="tradingHours"
                    value={formData.tradingHours}
                    onChange={handleChange}
                    placeholder="e.g. Mon-Fri 7am-5pm, 24/7 Emergency"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    How do you prefer customers to contact you?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === 'phone'}
                        onChange={() => handleRadioChange('preferredContact', 'phone')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Phone calls (best for urgent jobs)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === 'form'}
                        onChange={() => handleRadioChange('preferredContact', 'form')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Contact form (for quote requests)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === 'both'}
                        onChange={() => handleRadioChange('preferredContact', 'both')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Both - phone and form prominently displayed</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Trust Signals & Promises */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  9
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">
                  Trust Signals & Promises <span className="text-brand-muted text-sm font-normal">(Optional)</span>
                </h2>
              </div>

              <div className="bg-brand-surface/20 border border-brand-accent/30 rounded-lg p-5 mb-4">
                <p className="text-brand-muted text-sm">
                  These help convert visitors into customers. We'll feature them prominently on your site.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Response time promise
                  </label>
                  <input
                    type="text"
                    name="responseTime"
                    value={formData.responseTime}
                    onChange={handleChange}
                    placeholder="e.g. We respond within 2 hours, Same-day quotes"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you offer free quotes?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="freeQuotes"
                        checked={formData.freeQuotes === 'yes'}
                        onChange={() => handleRadioChange('freeQuotes', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="freeQuotes"
                        checked={formData.freeQuotes === 'no'}
                        onChange={() => handleRadioChange('freeQuotes', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Guarantee or warranty offered
                  </label>
                  <input
                    type="text"
                    name="guarantee"
                    value={formData.guarantee}
                    onChange={handleChange}
                    placeholder="e.g. 5-year workmanship guarantee, 100% satisfaction guarantee"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Are you fully insured?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="fullyInsured"
                        checked={formData.fullyInsured === 'yes'}
                        onChange={() => handleRadioChange('fullyInsured', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="fullyInsured"
                        checked={formData.fullyInsured === 'no'}
                        onChange={() => handleRadioChange('fullyInsured', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you offer 24/7 or emergency services?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="emergencyService"
                        checked={formData.emergencyService === 'yes'}
                        onChange={() => handleRadioChange('emergencyService', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="emergencyService"
                        checked={formData.emergencyService === 'no'}
                        onChange={() => handleRadioChange('emergencyService', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Payment methods accepted
                  </label>
                  <p className="text-brand-muted text-xs mb-3">Select all that apply</p>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.paymentCash}
                        onChange={(e) => setFormData(prev => ({ ...prev, paymentCash: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Cash</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.paymentCard}
                        onChange={(e) => setFormData(prev => ({ ...prev, paymentCard: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Card / EFTPOS</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.paymentBankTransfer}
                        onChange={(e) => setFormData(prev => ({ ...prev, paymentBankTransfer: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Bank Transfer</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.paymentAfterpay}
                        onChange={(e) => setFormData(prev => ({ ...prev, paymentAfterpay: e.target.checked }))}
                        className="w-4 h-4 accent-brand-accent rounded"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Afterpay / Zip</span>
                    </label>
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="paymentOther"
                      value={formData.paymentOther}
                      onChange={handleChange}
                      placeholder="Other payment methods..."
                      className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    Accreditations or memberships
                  </label>
                  <input
                    type="text"
                    name="accreditations"
                    value={formData.accreditations}
                    onChange={handleChange}
                    placeholder="e.g. Master Builders, HIA, manufacturer certifications"
                    className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Section 10: Photos */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  10
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">Photos</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-3">
                    Do you have job photos you'd like us to use?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasPhotos"
                        checked={formData.hasPhotos === 'yes'}
                        onChange={() => handleRadioChange('hasPhotos', 'yes')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">Yes - upload photos</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasPhotos"
                        checked={formData.hasPhotos === 'no'}
                        onChange={() => handleRadioChange('hasPhotos', 'no')}
                        className="w-4 h-4 accent-brand-accent"
                      />
                      <span className="text-brand-muted group-hover:text-white transition-colors">No - please use stock images for now</span>
                    </label>
                  </div>
                </div>

                {formData.hasPhotos === 'yes' && (
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Upload photos <span className="text-brand-muted text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => setPhotoFiles(e.target.files)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="bg-brand-surface/30 border border-dashed border-brand-border/50 rounded-lg px-4 py-6 text-center hover:border-brand-accent/50 transition-colors">
                        <Upload size={24} className="text-brand-muted mx-auto mb-2" />
                        <p className="text-brand-muted text-sm">
                          {photoFiles ? `${photoFiles.length} file(s) selected` : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-brand-muted/60 text-xs mt-1">PNG, JPG - you can select multiple files</p>
                      </div>
                    </div>
                    <p className="text-brand-muted/60 text-xs mt-2">
                      Tip: You can also email photos to hello@verdantdigital.com.au after submitting
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 11: Additional Comments */}
            <section className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent text-brand-black rounded-lg flex items-center justify-center font-display font-bold text-sm">
                  11
                </div>
                <h2 className="text-xl font-display font-bold text-white uppercase">
                  Anything Else? <span className="text-brand-muted text-sm font-normal">(Optional)</span>
                </h2>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Is there anything else you'd like us to know?
                </label>
                <p className="text-brand-muted text-xs mb-3">
                  Special requests, specific features you want, things you definitely don't want, or anything else that would help us build your perfect site.
                </p>
                <textarea
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. I want a dark/moody design, I need a gallery section for before/after photos, Please don't use stock photos of people..."
                  className="w-full bg-brand-surface/30 border border-brand-border/50 rounded-lg px-4 py-3 text-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"
                />
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit */}
            <div className="pt-6 border-t border-brand-border/30">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-3 bg-brand-accent hover:bg-white text-brand-black font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Intake Form
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-brand-muted/60 text-xs text-center mt-4">
                By submitting, you confirm the information provided is accurate and ready to use.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntakeFormPage;
