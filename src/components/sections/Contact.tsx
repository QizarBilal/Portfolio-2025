import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  Globe, CheckCircle, AlertCircle 
} from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bilalqizar@gmail.com',
      href: 'mailto:bilalqizar@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8925426680',
      href: 'tel:+918925426680',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirupathur, Tamil Nadu, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@QizarBilal',
      href: 'https://github.com/QizarBilal',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'mohammed-qizar-bilal',
      href: 'https://linkedin.com/in/mohammed-qizar-bilal',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'qizar-bilal.netlify.app',
      href: 'https://qizar-bilal.netlify.app',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    console.log('Form submission started with data:', formData);
    
    try {
      // Create FormData object for better Formspree compatibility
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `New contact from ${formData.name}`);

      console.log('Sending request to Formspree...');
      
      const response = await fetch('https://formspree.io/f/movlbebw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        },
      });

      console.log('Response received:', response.status, response.statusText);

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error response:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ filter: 'blur(60px)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ filter: 'blur(40px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to collaborate? Let's build something amazing together!
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-text-primary mb-8">
                Get In Touch
              </h3>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-2xl hover:bg-accent/10 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${contact.color}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="text-white" size={24} />
                    </motion.div>
                    
                    <div>
                      <p className="text-text-secondary text-sm">{contact.label}</p>
                      <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6">
                Find Me Online
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass-effect rounded-2xl hover:bg-accent/10 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="text-white" size={20} />
                    </motion.div>
                    
                    <div>
                      <p className="text-text-secondary text-sm">{social.label}</p>
                      <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="glass-effect p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <blockquote className="text-text-secondary italic">
                "The best way to predict the future is to create it with the smartest tools available today."
              </blockquote>
              <footer className="mt-3 text-accent font-medium">
                — Mohammed Qizar Bilal
              </footer>
            </motion.div>
          </motion.div>

          {/* Liquid Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              {/* Liquid Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary-500/5 rounded-3xl"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(var(--color-accent), 0.05), rgba(var(--color-primary-500), 0.05))',
                    'linear-gradient(135deg, rgba(var(--color-primary-500), 0.05), rgba(var(--color-accent), 0.05))',
                    'linear-gradient(225deg, rgba(var(--color-accent), 0.05), rgba(var(--color-primary-500), 0.05))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      maxLength={50}
                      className="w-full p-4 bg-bg-secondary/50 border-2 border-transparent rounded-2xl text-text-primary placeholder-text-secondary focus:border-accent focus:bg-bg-secondary/80 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-accent/0 pointer-events-none"
                      whileFocus={{ borderColor: 'rgba(var(--color-accent), 1)' }}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-bg-secondary/50 border-2 border-transparent rounded-2xl text-text-primary placeholder-text-secondary focus:border-accent focus:bg-bg-secondary/80 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Email"
                      autoComplete="email"
                    />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      minLength={5}
                      maxLength={100}
                      className="w-full p-4 bg-bg-secondary/50 border-2 border-transparent rounded-2xl text-text-primary placeholder-text-secondary focus:border-accent focus:bg-bg-secondary/80 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Subject"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      minLength={10}
                      maxLength={1000}
                      rows={5}
                      className="w-full p-4 bg-bg-secondary/50 border-2 border-transparent rounded-2xl text-text-primary placeholder-text-secondary focus:border-accent focus:bg-bg-secondary/80 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Your Message"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full p-4 rounded-2xl font-semibold text-white transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-accent to-primary-500 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]'
                      }
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-xl"
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-xl"
                    >
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-text-secondary/20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-text-secondary">
            © 2025 Mohammed Qizar Bilal. Crafted with ❤️ and AI.
          </p>
          <motion.p
            className="text-accent mt-2 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Building the future, one line of code at a time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
