import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          'g-recaptcha-response': window.grecaptcha ? window.grecaptcha.getResponse() : '',
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error.text || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left side: Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
                Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Something</span> Great.
              </h2>
              <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                Whether you need a streamlined operation or a high-converting digital presence, I'm here to engineer the solution.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <img src="/Images/Logo/gmail.png" alt="Gmail" className="w-5 h-5 object-contain" />, label: 'Gmail', value: 'kimjosephinoc@gmail.com', href: 'mailto:kimjosephinoc@gmail.com' },
                  { icon: <img src="/Images/Logo/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />, label: 'WhatsApp', value: '+63 965 744 9089', href: 'https://wa.me/639657449089' },
                  { icon: <img src="/Images/Logo/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/kim-joseph-inoc-b4a34a436', href: 'https://www.linkedin.com/in/kim-joseph-inoc-b4a34a436' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer interactive"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-text-secondary text-xs uppercase tracking-widest">{item.label}</div>
                      <div className="text-text-primary font-bold">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-surface border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                    placeholder="Kim Inoc"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                    placeholder="username@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                  placeholder="Systems Optimization"
                />
              </div>

              <div className="space-y-2">
                <label className="text-text-secondary text-xs uppercase tracking-widest font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-text-primary focus:border-accent-blue outline-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div >

              <div className="flex justify-center mb-4">
                <div
                  className="g-recaptcha"
                  data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ></div>
              </div>

              <div className="relative">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="interactive w-full py-4 bg-accent-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-16 left-0 right-0 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2 justify-center"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-16 left-0 right-0 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 justify-center"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
