import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Copy, ShieldCheck, QrCode, CheckCircle2, Building, Mail, Phone, Lock } from 'lucide-react';

export default function PaymentPortal() {
  const [isCopiedAcc, setIsCopiedAcc] = useState(false);
  const [isCopiedIfsc, setIsCopiedIfsc] = useState(false);

  const accNum = "39824058291";
  const ifscCode = "SBIN0003264";

  const handleCopyAcc = () => {
    navigator.clipboard.writeText(accNum);
    setIsCopiedAcc(true);
    setTimeout(() => setIsCopiedAcc(false), 2000);
  };

  const handleCopyIfsc = () => {
    navigator.clipboard.writeText(ifscCode);
    setIsCopiedIfsc(true);
    setTimeout(() => setIsCopiedIfsc(false), 2000);
  };

  return (
    <section 
      id="payment" 
      className="relative py-24 px-6 md:px-12 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <CreditCard className="h-3.5 w-3.5" />
            Direct Banking Portal
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            Online School <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Fee Gateway</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-600 text-xs md:text-sm mt-3 font-medium">
            Transfer fees directly to the official school bank account via Net Banking, NEFT, RTGS, or UPI.
          </p>
        </div>

        {/* Centered Bank Card & Instructions */}
        <div className="flex flex-col gap-8">
          {/* Credit Card Style Visual */}
          <div className="p-7 md:p-10 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-white/20">
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full filter blur-3xl" />

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-blue-200 uppercase font-bold">
                  STATE BANK OF INDIA • OFFICIAL ACCOUNT
                </span>
                <h3 className="font-display font-extrabold text-lg md:text-2xl text-white mt-1">
                  SARASWATI VIDYA MANDIR
                </h3>
              </div>
              <div className="px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold tracking-wider border border-white/30 shadow-sm flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5 text-amber-300" />
                SBI MAHARAJGANJ
              </div>
            </div>

            {/* Account Number Section */}
            <div className="mb-8 relative z-10 bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <span className="text-[10px] font-mono text-blue-200 uppercase tracking-widest block mb-1">
                ACCOUNT NUMBER (SAVINGS / CURRENT)
              </span>
              <div className="flex items-center justify-between gap-3 font-mono font-black text-2xl md:text-3xl tracking-widest text-white">
                <span>{accNum}</span>
                <button 
                  onClick={handleCopyAcc} 
                  className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-sans font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20 shadow-sm"
                  aria-label="Copy Account Number"
                >
                  {isCopiedAcc ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-green-300" />
                      <span className="text-green-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy A/C</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* IFSC and Branch */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/15 pt-5 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-widest block">
                  IFSC CODE
                </span>
                <div className="flex items-center gap-2.5 font-mono font-bold text-base md:text-lg text-white mt-0.5">
                  <span>{ifscCode}</span>
                  <button 
                    onClick={handleCopyIfsc} 
                    className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
                    aria-label="Copy IFSC Code"
                  >
                    {isCopiedIfsc ? <CheckCircle2 className="h-4 w-4 text-green-300" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-widest block">
                  BRANCH LOCATION
                </span>
                <span className="text-sm font-bold text-white">
                  Maharajganj Town, Siwan (Bihar)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Notice & Receipt Verification Details */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-900">
                  Payment Receipt Verification
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  After transferring funds, kindly email the transaction screenshot along with student's Name, Class, and Roll Number to <a href="mailto:svmmrj1@gmail.com" className="font-bold text-blue-600 underline font-mono">svmmrj1@gmail.com</a> for prompt official receipt issuance.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl text-[11px] font-mono font-bold text-slate-700">
                <Lock className="h-3.5 w-3.5 text-teal-600" />
                SSL Verified
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
