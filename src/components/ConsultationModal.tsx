import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Shield, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { PRACTICE_INFO, WISE_SELF_SERVICES } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Couples Therapy',
}) => {
  const [service, setService] = useState(defaultService);
  const [format, setFormat] = useState<'in-person' | 'online'>('online');
  const [preferredDay, setPreferredDay] = useState('Any weekday');
  const [preferredTime, setPreferredTime] = useState('Morning (9am - 12pm)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState<'details' | 'success'>('details');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetAndClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-3xl border border-[#E0D9CE] shadow-2xl z-10 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#F4F0EA] border-b border-[#E5DFD6] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8E2D8] text-[11px] font-semibold text-[#8E4A3B] uppercase tracking-wider mb-2">
              <Clock className="w-3 h-3" />
              <span>Free 15-Minute Consultation</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#1E1C1A]">
              Connect with Behnam
            </h3>
            <p className="text-xs sm:text-sm text-[#665F56] mt-1">
              A private introductory conversation to discuss your goals and see if we are a good fit.
            </p>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-[#6B645C] hover:text-[#1E1C1A] hover:bg-[#EAE4DC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 'success' ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E8F0E9] text-[#2E7D32] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl text-[#1E1C1A] mb-2">
                Consultation Request Received
              </h4>
              <p className="text-sm text-[#5A544C] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[#1E1C1A]">{name}</span>. Behnam Abdevand has received your request for <span className="font-semibold text-[#1E1C1A]">{service}</span> ({format}). You will receive a personal confirmation email at <span className="font-medium text-[#1E1C1A]">{email}</span> within 24 hours with scheduled call options.
              </p>

              <div className="p-4 rounded-xl bg-[#F4EFE8] text-xs text-[#615A52] max-w-md mx-auto mb-8 text-left space-y-1">
                <div className="flex items-center gap-2 text-[#2C2926] font-semibold mb-1">
                  <Shield className="w-3.5 h-3.5 text-[#8E4A3B]" />
                  <span>Clinical Discretion Assured</span>
                </div>
                <p>All inquiries are completely confidential under MBACP code of ethics.</p>
              </div>

              <button
                onClick={resetAndClose}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2C2926] text-[#FAF8F5] text-xs font-semibold hover:bg-[#433E3A] transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736B62] mb-2">
                  1. Select Area of Focus
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {WISE_SELF_SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.title)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        service === s.title
                          ? 'border-[#2C2926] bg-[#2C2926] text-[#FAF8F5] font-semibold'
                          : 'border-[#DDD6CC] bg-white text-[#4A443E] hover:bg-[#F6F2EB]'
                      }`}
                    >
                      <span className="block font-medium">{s.title}</span>
                      <span className={`block text-[10px] mt-0.5 opacity-80`}>{s.subtitle}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736B62] mb-2">
                  2. Preferred Setting
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormat('online')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      format === 'online'
                        ? 'border-[#2C2926] bg-[#2C2926] text-[#FAF8F5]'
                        : 'border-[#DDD6CC] bg-white text-[#4A443E] hover:bg-[#F6F2EB]'
                    }`}
                  >
                    Online Video (UK-wide)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('in-person')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      format === 'in-person'
                        ? 'border-[#2C2926] bg-[#2C2926] text-[#FAF8F5]'
                        : 'border-[#DDD6CC] bg-white text-[#4A443E] hover:bg-[#F6F2EB]'
                    }`}
                  >
                    In-Person (Chorlton, M21)
                  </button>
                </div>
              </div>

              {/* Time preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A443E] mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A]"
                  >
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (12pm - 5pm)</option>
                    <option>Evening (5pm - 8pm)</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A443E] mb-1">
                    Day Preference
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A]"
                  >
                    <option>Any weekday</option>
                    <option>Monday / Wednesday</option>
                    <option>Tuesday / Thursday</option>
                    <option>Friday</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-2 border-t border-[#EAE4DC] space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736B62]">
                  3. Your Details
                </label>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A] placeholder:text-[#999083]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A] placeholder:text-[#999083]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A] placeholder:text-[#999083]"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe what brings you to therapy (optional)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#DDD6CC] text-xs text-[#1E1C1A] placeholder:text-[#999083] resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="modal-submit-consultation-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2C2926] text-[#FAF8F5] text-xs font-semibold py-3.5 px-6 rounded-full hover:bg-[#433E3A] transition-colors cursor-pointer shadow-sm"
              >
                <span>Confirm 15-Minute Consultation Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#787168]">
                <Shield className="w-3 h-3 text-[#8E4A3B]" />
                <span>Strictly confidential. No payment required for introductory call.</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
