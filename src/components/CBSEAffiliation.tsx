import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ShieldCheck, CheckCircle2, Award, Mail } from 'lucide-react';

export default function CBSEAffiliation() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      const content = `SARASWATI VIDYA MANDIR, MAHARAJGANJ\nCBSE AFFILIATION & ACCREDITATION CONFIRMATION\n\nInstitution: Saraswati Vidya Mandir, Maharajganj\nAffiliation Board: Central Board of Secondary Education (CBSE), New Delhi\nEmail: svmmrj1@gmail.com\nManagement: Lok Shiksha Samiti & Vidya Bharati\nStatus: Certified Active Institution`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SVM_CBSE_Affiliation_Summary.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  return (
    <section 
      id="cbse" 
      className="relative py-20 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            Central Board Registry
          </motion.div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight text-slate-900">
            CBSE Board <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Accreditation</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-600 text-xs md:text-sm mt-3 font-medium">
            Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, adhering to standardized national curriculum guidelines.
          </p>
        </div>

        {/* Official Certificate Card */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-md shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base md:text-lg text-slate-900">
                  Saraswati Vidya Mandir Maharajganj
                </span>
                <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                  ACTIVE CBSE
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Supervised under Lok Shiksha Samiti & Vidya Bharati school networks.
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-600">
                <Mail className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-mono font-semibold">svmmrj1@gmail.com</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? 'Exporting...' : 'Download Accreditation Brief'}
          </button>
        </div>

      </div>
    </section>
  );
}
