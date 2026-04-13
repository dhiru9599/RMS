import { useState, useEffect, useRef } from 'react';
import {
  Users, Target, Mail, Phone, MapPin, Menu, X, ChevronRight,
  TrendingUp, ShieldCheck, Award, CheckCircle, ArrowRight, BarChart3,
  Building2, ClipboardCheck, GraduationCap, Shield, Zap, Star, Laptop,
  UserCheck, Calendar, Download, Linkedin, Instagram, Briefcase, FileText, Upload,
  Sun, Moon, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import rmsLogo from './assets/rms_logo_new.png';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── Theme Hook ──────────────────────────────────────── */
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rms-theme');
      return (saved === 'dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rms-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  return { theme, toggleTheme };
};

/* ── WhatsApp Float ──────────────────────────────────── */
const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919560118227?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20RMS%20Consultancy%20Services."
    target="_blank"
    rel="noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.742 3.072 9.368L1.062 31.16l5.964-1.972A15.9 15.9 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.594c-.388 1.094-1.938 2.002-3.16 2.268-.836.178-1.928.32-5.606-1.206-4.702-1.95-7.724-6.72-7.956-7.032-.224-.312-1.87-2.494-1.87-4.756 0-2.264 1.184-3.376 1.604-3.838.388-.424.916-.614 1.216-.614.148 0 .28.008.398.014.42.018.63.042.908.706.348.83 1.196 2.918 1.3 3.13.104.214.178.464.036.746-.134.29-.202.47-.402.722-.2.252-.42.562-.6.754-.2.214-.41.448-.176.876.234.424 1.038 1.714 2.228 2.776 1.532 1.366 2.822 1.79 3.224 1.99.4.2.636.17.87-.1.24-.276 1.026-1.194 1.298-1.604.268-.41.54-.342.908-.206.372.134 2.358 1.114 2.762 1.316.4.2.67.304.77.468.098.164.098.944-.29 2.038z"/>
    </svg>
  </a>
);

/* ── Navbar ──────────────────────────────────────────── */
const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { name: 'Home', href: '#home' }, { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' }, { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        // Offset by ~80px for the fixed header
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '10px 0' : '16px 0',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px var(--shadow)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center ">
          <img src={rmsLogo} alt="RMS Logo" className="h-12 md:h-16 w-auto object-contain logo-smart" />
          <div>
            <div className="font-bold text-base md:text-lg leading-tight" style={{ color: 'var(--text-primary)' }}>Consultancy</div>
            <div className="text-xs md:text-sm font-semibold" style={{ color: 'var(--accent)' }}>Services</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.name} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="font-medium text-sm transition-colors" style={{ color: 'var(--nav-text)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--nav-text)')}>
              {l.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary text-sm px-5 py-2.5">Talk to Expert</a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2" style={{ color: 'var(--text-primary)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden nav-glass overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="px-5 py-6 space-y-3">
              {links.map(l => (
                <a key={l.name} href={l.href} onClick={(e) => handleNavClick(e, l.href)}
                  className="block font-medium py-2" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{l.name}</a>
              ))}
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn-primary flex w-full justify-center mt-4">
                Talk to Expert
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ── Hero ────────────────────────────────────────────── */
const Hero = () => {
  const stats = [
    { v: 'Recruitment', l: 'Fast & Reliable', icon: <UserCheck size={18} /> },
    { v: 'Compliance', l: 'Payroll & Statutory Experts', icon: <ShieldCheck size={18} /> },
    { v: 'Audits', l: 'Global Support (SEDEX, BSCI)', icon: <ClipboardCheck size={18} /> },
    { v: 'Specialists', l: 'Manufacturing Industry', icon: <Building2 size={18} /> },
  ];
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden hero-bg">
      <div className="hero-glow-1" /><div className="hero-glow-2" /><div className="hero-grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}
            className="hero-badge-mobile inline-flex items-center gap-2 py-1.5 px-3 sm:px-4 rounded-full sm:rounded-full text-[0.65rem] sm:text-xs font-semibold sm:font-bold tracking-wide sm:tracking-widest mb-4 sm:mb-5"
            style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>
            <Star size={11} fill="currentColor" className="flex-shrink-0" />
            <span>We support manufacturing and other industries with recruitment, HR management, compliance, and audit solutions.</span>
          </motion.div>
          <motion.h1 variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-5" style={{ color: 'var(--text-primary)' }}>
            Comprehensive Workforce &{' '}
            <span className="gradient-text">Recruitment Solutions</span> for{' '}
            <span className="gradient-text">Modern Businesses</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            We provide fast and reliable manpower solutions along with complete HR, compliance, and audit support for manufacturing and other industries.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            <a href="#contact" className="btn-primary">Talk to Expert <ArrowRight size={17} /></a>
            <a href="#services" className="btn-secondary">Explore Services <ChevronRight size={17} /></a>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="font-bold text-base sm:text-lg leading-tight mt-2 mb-1" style={{ color: 'var(--text-primary)' }}>{s.v}</div>
                <div className="stat-label !text-[0.7rem] sm:!text-xs !mt-0">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


/* ── Services Overview ───────────────────────────────── */
const ServicesOverview = () => {
  const services = [
    { title: 'Recruitment & Manpower Solutions', desc: 'End-to-end workforce management from talent acquisition to staffing operations.', icon: <Users size={26} />, color: 'purple', href: '#recruitment' },
    { title: 'Payroll Management & Audit', desc: 'Accurate payroll processing and comprehensive payroll auditing for error-free operations.', icon: <BarChart3 size={26} />, color: 'sky', href: '#payroll' },
    { title: 'Training & Development', desc: 'Building capability and competitive advantage through strategic workforce development.', icon: <GraduationCap size={26} />, color: 'green', href: '#training' },
    { title: 'Statutory Compliance', desc: '100% adherence to Indian Labour Laws — Factories Act, EPF, ESI, CLRA, POSH and more.', icon: <Shield size={26} />, color: 'blue', href: '#statutory' },
    { title: 'Third-Party Audit Support', desc: 'Expert audit readiness for BSCI, SEDEX, WRAP, GOTS, and Higg Index certifications.', icon: <ClipboardCheck size={26} />, color: 'amber', href: '#audit' },
    { title: 'Documentation & Compliance Setup', desc: 'Complete paperwork management, policy drafting, and legal documentation frameworks.', icon: <FileText size={26} />, color: 'rose', href: '#documentation' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'rgba(14,165,233,0.1)', icon: 'var(--accent)', border: 'hover:border-sky-400/40', tag: 'var(--accent)' },
    purple: { bg: 'rgba(139,92,246,0.1)', icon: '#8b5cf6', border: 'hover:border-violet-400/40', tag: '#8b5cf6' },
    green: { bg: 'rgba(16,185,129,0.1)', icon: '#10b981', border: 'hover:border-emerald-400/40', tag: '#10b981' },
    amber: { bg: 'rgba(245,158,11,0.1)', icon: '#f59e0b', border: 'hover:border-amber-400/40', tag: '#f59e0b' },
    sky: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', border: 'hover:border-sky-400/40', tag: '#0ea5e9' },
    rose: { bg: 'rgba(244,63,94,0.1)', icon: '#f43f5e', border: 'hover:border-rose-400/40', tag: '#f43f5e' },
  };
  return (
    <section id="services" className="py-12 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Our Services</span>
          <h2 className="section-heading">Comprehensive HR Solutions</h2>
          <p className="section-subtext">Comprehensive suite of services designed for manufacturing and apparel businesses</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a key={i} variants={fadeUp} href={s.href} whileHover={{ y: -8 }} className={`service-card ${c[s.color].border} group`}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: c[s.color].bg, color: c[s.color].icon }}>{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: c[s.color].tag }}>Learn more <ArrowRight size={13} /></span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Statutory Compliance ────────────────────────────── */
const StatutoryCompliance = () => {
  const items = [
    { title: 'Labour Law Compliance', desc: 'Comprehensive adherence to EPF, ESI, CLRA, Minimum Wages, and other state/central labor laws.', icon: <ShieldCheck size={18} /> },
    { title: 'Factory Compliance', desc: 'Securing factory licenses, approvals, and managing ongoing critical factory-level compliances.', icon: <Building2 size={18} /> },
    { title: 'Registers & Documentation', desc: 'Accurate maintenance of all mandated statutory registers, formats, and returns.', icon: <FileText size={18} /> },
    { title: 'Compliance Audits', desc: 'Conducting internal routine checks to identify risks and ensure 100% legal coverage continuously.', icon: <Target size={18} /> },
  ];
  return (
    <section id="statutory" className="py-12 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(14,165,233,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Legal Compliance</span>
            <h2 className="section-heading">Statutory Compliance</h2>
            <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>Ensuring 100% adherence to Indian Labour Laws while protecting your business from legal risks.</p>
            <div className="space-y-3">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="compliance-item">
                  <div className="compliance-icon">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="compliance-visual">
              <div className="text-6xl text-center mb-4">⚖️</div>
              <h3 className="text-2xl font-black text-center mb-2" style={{ color: 'var(--text-primary)' }}>100% Compliant</h3>
              <p className="text-center text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Full coverage across all Indian Labour Laws</p>
              <div className="grid grid-cols-2 gap-3">
                {['Labour Law', 'Factory', 'Registers', 'Policies', 'Inspections', 'Licenses', 'Returns', 'Audits'].map(law => (
                  <div key={law} className="compliance-tag">
                    <CheckCircle size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{law}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Recruitment & Manpower Solutions ────────────────── */
const RecruitmentManpower = () => {
  const features = [
    { title: 'Blue-Collar & White-Collar Hiring', desc: 'Expert sourcing of both executive professionals and skilled floor workers.', icon: <Users size={22} />, color: 'blue' },
    { title: 'Bulk Hiring for Factories', desc: 'Swift ramp-ups to meet large-scale seasonal production demands effortlessly.', icon: <TrendingUp size={22} />, color: 'purple' },
    { title: 'Third-Party Manpower', desc: 'Flexible contract staffing solutions allowing optimized workforce management.', icon: <CheckCircle size={22} />, color: 'green' },
    { title: 'Quick Joining Support', desc: 'Accelerated placement processes that minimize your operational downtime.', icon: <Zap size={22} />, color: 'amber' },
    { title: 'Quality Candidate Screening', desc: 'Thorough background and capability verification confirming reliable hires.', icon: <ShieldCheck size={22} />, color: 'sky' }
  ];
  const c: Record<string, any> = {
    blue: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', border: 'border-sky-300/20' },
    purple: { bg: 'rgba(139,92,246,0.1)', icon: '#8b5cf6', border: 'border-violet-300/20' },
    green: { bg: 'rgba(16,185,129,0.1)', icon: '#10b981', border: 'border-emerald-300/20' },
    amber: { bg: 'rgba(245,158,11,0.1)', icon: '#f59e0b', border: 'border-amber-300/20' },
    sky: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', border: 'border-sky-300/20' },
  };
  return (
    <section id="recruitment" className="py-12 section-darker relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Workforce Management</span>
          <h2 className="section-heading">Recruitment & Manpower Solutions</h2>
          <p className="section-subtext">Comprehensive staffing solutions from talent acquisition to full-scale manpower deployment</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className={`feature-card border ${c[f.color].border}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: c[f.color].bg, color: c[f.color].icon }}>{f.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Payroll Management & Audit ──────────────────────── */
const PayrollManagement = () => {
  const features = [
    { title: 'Salary Processing', desc: 'Secure, punctual end-to-end salary execution including PF, ESIC, Bonus, and Gratuity inputs.', icon: <BarChart3 size={22} />, color: 'sky' },
    { title: 'Payroll Audit & Error Check', desc: 'In-depth reviews guaranteeing absolute calculation accuracy and eliminating leakages.', icon: <ShieldCheck size={22} />, color: 'rose' },
    { title: 'Compliance Verification', desc: 'Meticulous cross-referencing against all statutory tax and labor deduction mandates.', icon: <ClipboardCheck size={22} />, color: 'amber' },
    { title: 'Cost Optimization', desc: 'Strategic payroll mapping to reduce administrative overhead and streamline operations.', icon: <TrendingUp size={22} />, color: 'blue' },
  ];
  const c: Record<string, any> = {
    sky: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', border: 'border-sky-300/20' },
    rose: { bg: 'rgba(244,63,94,0.1)', icon: '#f43f5e', border: 'border-rose-300/20' },
    amber: { bg: 'rgba(245,158,11,0.1)', icon: '#f59e0b', border: 'border-amber-300/20' },
    blue: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', border: 'border-sky-300/20' },
  };
  return (
    <section id="payroll" className="py-12 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(14,165,233,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Financial Accuracy</span>
          <h2 className="section-heading">Payroll Management & Audit</h2>
          <p className="section-subtext">Error-free payroll administration and comprehensive auditing for your entire workforce</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className={`feature-card border ${c[f.color].border}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: c[f.color].bg, color: c[f.color].icon }}>{f.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Training & Development ──────────────────────────── */
const TrainingDevelopment = () => {
  const programs = [
    { title: 'Compliance Training', desc: 'Empowering employees with crucial knowledge on legal frameworks, POSH, and safety standards.', icon: <Shield size={24} />, color: 'blue' },
    { title: 'Workforce Skill Development', desc: 'Targeted upskilling programs to increase production efficiency and output quality.', icon: <TrendingUp size={24} />, color: 'purple' },
    { title: 'Supervisor Training', desc: 'Leadership modules designed to help floor supervisors effectively manage teams and resolve conflicts.', icon: <Users size={24} />, color: 'amber' },
    { title: 'HR Training Programs', desc: 'Enhancing the core capabilities of internal HR teams through updated industry best practices.', icon: <GraduationCap size={24} />, color: 'green' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9' },
    purple: { bg: 'rgba(139,92,246,0.1)', icon: '#8b5cf6' },
    amber: { bg: 'rgba(245,158,11,0.1)', icon: '#f59e0b' },
    green: { bg: 'rgba(16,185,129,0.1)', icon: '#10b981' },
  };
  return (
    <section id="training" className="py-12 section-dark relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(99,102,241,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Workforce Development</span>
          <h2 className="section-heading">Training & Development</h2>
          <p className="section-subtext">Building capability, culture, and competitive advantage through strategic workforce development</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="training-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: c[p.color].bg, color: c[p.color].icon }}>{p.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Third-Party Audit Support ───────────────────────── */
const ThirdPartyAudit = () => {
  const audits = ['SEDEX (SMETA)', 'BSCI', 'GSV', 'GOTS', 'Higg Index'];
  return (
    <section id="audit" className="py-12 section-darker relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(245,158,11,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="audit-visual text-center">
              <div className="text-6xl mb-4">🏆</div>
              <div className="text-5xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>100%</div>
              <div className="font-bold text-lg mb-2" style={{ color: '#f59e0b' }}>Audit Clearance Rate</div>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Achieved perfect clearance records across multiple facilities for these global standards:</p>
              <div className="flex flex-wrap gap-3 justify-center">{audits.map(a => <span key={a} className="audit-tag">{a}</span>)}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Audit Excellence</span>
            <h2 className="section-heading">Third-Party Audit Support</h2>
            <div className="space-y-3 mt-6">
              {[
                { title: 'Audit Preparation', desc: 'Thorough readiness training and mock audits.' },
                { title: 'Documentation', desc: 'Organizing all necessary evidence and registers.' },
                { title: 'Gap Analysis', desc: 'Identifying risks and executing corrective actions.' },
                { title: 'Audit Closure', desc: 'Finalizing CAP responses to secure certification.' }
              ].map((item, i) => (
                <div key={i} className="audit-feature items-center py-3">
                  <div className="audit-feature-icon shrink-0 !w-10 !h-10" style={{ color: '#f59e0b' }}><CheckCircle size={18} /></div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Documentation & Compliance Setup ────────────────── */
const DocumentationSetup = () => {
  const items = [
    { title: 'HR Policies', desc: 'Drafting structured employee handbooks, leave policies, and organizational frameworks.', icon: <FileText size={18} /> },
    { title: 'Employee Records', desc: 'Systematic maintenance of personnel files and electronic employee lifecycle documentation.', icon: <Users size={18} /> },
    { title: 'Registers & Formats', desc: 'Generation of legal statutory registers standardized according to regional labor authorities.', icon: <ClipboardCheck size={18} /> },
    { title: 'Audit Documentation', desc: 'Maintaining organized paper trails critical for passing buyer and factory inspections.', icon: <Target size={18} /> },
  ];
  return (
    <section id="documentation" className="py-12 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(244,63,94,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Setup & Management</span>
            <h2 className="section-heading">Documentation & Compliance Setup</h2>
            <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>Establishing robust documentation frameworks to protect your business and ensure seamless operations.</p>
            <div className="space-y-3">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="compliance-item">
                  <div className="compliance-icon" style={{ color: '#f43f5e', background: 'rgba(244,63,94,0.12)' }}>{item.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="compliance-visual px-8 py-10" style={{ borderColor: 'rgba(244,63,94,0.2)' }}>
              <div className="text-6xl text-center mb-4">📑</div>
              <h3 className="text-2xl font-black text-center mb-2" style={{ color: 'var(--text-primary)' }}>Organized & Compliant</h3>
              <p className="text-center text-sm mb-6" style={{ color: 'var(--text-muted)' }}>We take the paperwork burden off your shoulders</p>
              <div className="grid grid-cols-2 gap-3">
                {['HR Policies', 'Employee Records', 'Registers', 'Formats', 'Audit Docs', 'Handbooks'].map(doc => (
                  <div key={doc} className="compliance-tag" style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.2)' }}>
                    <CheckCircle size={13} style={{ color: '#f43f5e', flexShrink: 0 }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Industries & Why Choose Us ──────────────────────── */
const ClientsIndustries = () => {
  const industries = [
    { title: 'Garment & Textile Industry', icon: <Building2 size={28} /> },
    { title: 'Manufacturing Units', icon: <Target size={28} /> },
    { title: 'Export Houses', icon: <Briefcase size={28} /> },
    { title: 'Factories & Industrial Units', icon: <Zap size={28} /> },
    { title: 'IT Companies', icon: <Laptop size={28} /> },
  ];
  return (
    <section className="py-12 section-darker relative" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Our Domains</span>
          <h2 className="section-heading">Clients & Industries We Serve</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group flex flex-col items-center justify-center p-6 text-center transition-all duration-300"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: '0 2px 12px var(--shadow)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.boxShadow = '0 8px 30px var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '0 2px 12px var(--shadow)'; }}>
              <div className="mb-3 p-3 rounded-full" style={{ color: 'var(--accent)', background: 'var(--accent-bg)' }}>{ind.icon}</div>
              <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Why Choose RMS ──────────────────────────────────── */
const WhyChooseUs = () => {
  const reasons = [
    { title: 'Manufacturing Industry Experience', desc: 'Decades of granular operational understanding inside factory floors.', icon: <Building2 size={24} />, color: 'blue', num: '01' },
    { title: 'Fast Recruitment Turnaround', desc: 'Extensive talent networks enabling unmatched speed-to-hire.', icon: <Zap size={24} />, color: 'amber', num: '02' },
    { title: '100% Compliance Focus', desc: 'A zero-compromise approach ensuring total protection from liabilities.', icon: <ShieldCheck size={24} />, color: 'green', num: '03' },
    { title: 'Practical & Result-Oriented', desc: 'Solutions designed for real-world manufacturing constraints.', icon: <Target size={24} />, color: 'purple', num: '04' },
    { title: 'Reliable & Professional Service', desc: 'Trustworthy, transparent, and dedicated HR partnership.', icon: <Award size={24} />, color: 'rose', num: '05' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'rgba(14,165,233,0.1)', icon: '#0ea5e9', num: 'rgba(14,165,233,0.12)' },
    amber: { bg: 'rgba(245,158,11,0.1)', icon: '#f59e0b', num: 'rgba(245,158,11,0.12)' },
    green: { bg: 'rgba(16,185,129,0.1)', icon: '#10b981', num: 'rgba(16,185,129,0.12)' },
    purple: { bg: 'rgba(139,92,246,0.1)', icon: '#8b5cf6', num: 'rgba(139,92,246,0.12)' },
    rose: { bg: 'rgba(244,63,94,0.1)', icon: '#f43f5e', num: 'rgba(244,63,94,0.12)' },
  };
  return (
    <section className="py-12 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Why RMS</span>
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-subtext">Partnering with you to unlock your workforce potential reliably and efficiently.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="why-card relative overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <div className="absolute top-4 right-4 text-5xl font-black leading-none select-none" style={{ color: c[r.color].num }}>{r.num}</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                style={{ background: c[r.color].bg, color: c[r.color].icon }}>{r.icon}</div>
              <h3 className="font-bold text-lg mb-2 relative z-10" style={{ color: 'var(--text-primary)' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: 'var(--text-muted)' }}>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── About Us (Mission, Vision, Founder) ─────────────── */
const AboutFounder = () => {
  return (
    <section id="about" className="py-12 section-darker relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(14,165,233,0.04) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="founder-card mb-6">
              <h3 className="flex items-center gap-3 text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}><Target style={{ color: 'var(--accent)' }} /> Our Mission</h3>
              <p className="leading-relaxed text-base" style={{ color: 'var(--text-muted)' }}>To provide reliable, efficient, and compliant HR solutions that support business growth and workforce excellence.</p>
            </div>
            <div className="founder-card">
              <h3 className="flex items-center gap-3 text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}><Star style={{ color: '#8b5cf6' }} /> Our Vision</h3>
              <p className="leading-relaxed text-base" style={{ color: 'var(--text-muted)' }}>To become a trusted partner for industries in Recruitment, Compliance, and Global Audit Solutions.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Leadership</span>
            <h2 className="section-heading mt-2">Guided by Experience</h2>
            <div className="founder-card mt-6">
              <div className="flex gap-5 items-center mb-5">
                <div className="founder-avatar animate-pulse-glow shrink-0"><span className="text-4xl">👩‍💼</span></div>
                <div>
                  <h3 className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>Rakhi Mishra</h3>
                  <p className="font-semibold mt-1" style={{ color: 'var(--accent)' }}>Founder & Principal Consultant</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Former Chief Human Resource Officer at IR Exports Pvt. Ltd., managing HR and compliance for 7,000+ employees across manufacturing facilities. Rakhi holds an MBA in Human Resources & Finance and brings over 12 years of specialized operational expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Resources ───────────────────────────────────────── */
const Resources = () => {
  const resources = [
    { title: 'Audit Readiness Checklist', desc: 'Comprehensive buyer audit preparation guide covering BSCI, SEDEX, WRAP, GOTS, and Higg Index requirements — tailored to your facility\'s specific needs.', icon: <ClipboardCheck size={24} />, tag: 'Free Resource', color: 'blue' },
    { title: 'Statutory Compliance Calendar', desc: 'Year-round compliance tracking with key deadlines for EPF, ESI, Bonus, Gratuity, and other statutory requirements. Never miss a critical deadline.', icon: <Calendar size={24} />, tag: 'Free Resource', color: 'purple' },
  ];
  return (
    <section id="resources" className="py-12 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Value-Add Resources</span>
          <h2 className="section-heading">Free Resources for Your Business</h2>
          <p className="section-subtext">Available for immediate download or consultation. Contact us to receive these resources tailored to your facility.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((r, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="resource-card">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: r.color === 'blue' ? 'rgba(14,165,233,0.1)' : 'rgba(139,92,246,0.1)', color: r.color === 'blue' ? '#0ea5e9' : '#8b5cf6' }}>{r.icon}</div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: r.color === 'blue' ? 'rgba(14,165,233,0.1)' : 'rgba(139,92,246,0.1)', border: `1px solid ${r.color === 'blue' ? 'rgba(14,165,233,0.3)' : 'rgba(139,92,246,0.3)'}`, color: r.color === 'blue' ? '#0ea5e9' : '#8b5cf6' }}>{r.tag}</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{r.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-sm transition-colors group"
                style={{ color: r.color === 'blue' ? '#0ea5e9' : '#8b5cf6' }}>
                <Download size={15} /> Request Resource <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Contact ─────────────────────────────────────────── */
const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [fileName, setFileName] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) { setFileName(''); return; }
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) { alert('Please upload a PDF or DOC/DOCX file.'); return; }
    if (file.size > 5 * 1024 * 1024) { alert('File size must be under 5 MB.'); return; }
    setFileName(file.name);
    // Set the file on the hidden file input for FormSubmit
    const dt = new DataTransfer();
    dt.items.add(file);
    if (fileInputRef.current) fileInputRef.current.files = dt.files;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch('https://formsubmit.co/info@rmsconsultancyservices.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });
      if (res.ok) {
        setStatus('sent');
        (e.target as HTMLFormElement).reset();
        setFileName('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const info = [
    { icon: <MapPin size={18} />, label: 'Location', value: 'Gurugram, Haryana, India', href: null },
    { icon: <Phone size={18} />, label: 'Phone', value: '+91-9560118227', href: 'tel:+919560118227' },
    { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+91-9560118227', href: 'https://wa.me/919560118227' },
    { icon: <Mail size={18} />, label: 'Email', value: 'info@rmsconsultancyservices.com', href: 'mailto:info@rmsconsultancyservices.com' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'RMS Consultancy Services', href: 'https://www.linkedin.com/in/rms-consultancy-services-07a236401?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { icon: <Instagram size={18} />, label: 'Instagram', value: '@rmsconsultancyservices', href: 'https://www.instagram.com/rmsconsultancyservices?utm_source=qr&igsh=MWdtd3p3ZG55bXZlbQ==' },
  ];

  return (
    <section id="contact" className="py-12 section-darker relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(14,165,233,0.04)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="section-subtext">Ready to transform your HR operations? Talk to an expert today.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="contact-info-card h-full">
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Ready to Transform Your HR Operations?</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>Whether you're facing compliance challenges, need audit support, or want to optimize your workforce management, RMS Consultancy is ready to help.</p>
              <div className="space-y-3">
                {info.map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-light)' }}>{item.label}</div>
                      {item.href ? <a href={item.href} target={['WhatsApp', 'LinkedIn', 'Instagram'].includes(item.label) ? '_blank' : undefined} rel="noreferrer" className="text-sm font-semibold transition-colors" style={{ color: 'var(--text-secondary)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>{item.value}</a> : <div className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{item.value}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={submit} encType="multipart/form-data" className="contact-form">
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New Inquiry — RMS Consultancy Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="Name" required placeholder="Your full name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="Email" required placeholder="your@email.com" className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="Phone" placeholder="+91 XXXXX XXXXX" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Company Name</label>
                  <input type="text" name="Company" placeholder="Your company" className="form-input" />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Service Interested In</label>
                <select className="form-input" name="Service">
                  <option value="">Select a service...</option>
                  <option value="Recruitment & Manpower Solutions">Recruitment & Manpower Solutions</option>
                  <option value="Payroll Management & Audit">Payroll Management & Audit</option>
                  <option value="Training & Development">Training & Development</option>
                  <option value="Statutory Compliance">Statutory Compliance</option>
                  <option value="Third-Party Audit Support">Third-Party Audit Support</option>
                  <option value="Documentation & Compliance Setup">Documentation & Compliance Setup</option>
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea rows={3} name="Message" placeholder="Tell us about your requirements..." className="form-input resize-none" />
              </div>

              {/* Docs Upload — Optional */}
              <div className="mb-5">
                <label className="form-label">Upload Docs <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>(Optional — PDF, DOC, DOCX, max 5 MB)</span></label>
                <div
                  className={`cv-upload-area ${dragActive ? 'cv-upload-active' : ''} ${fileName ? 'cv-upload-has-file' : ''}`}
                  onDragOver={e => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={e => handleFile(e.target.files?.[0] || null)}
                  />
                  {fileName ? (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
                        <FileText size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{fileName}</div>
                        <div className="text-xs" style={{ color: 'var(--text-light)' }}>Click to change or drag a new file</div>
                      </div>
                      <button type="button" onClick={e => { e.stopPropagation(); setFileName(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="p-1 transition-colors" style={{ color: 'var(--text-light)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#f43f5e')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}>
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-light)' }}>
                        <Upload size={20} />
                      </div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}><span className="font-semibold" style={{ color: 'var(--accent)' }}>Click to upload</span> or drag & drop</div>
                      <div className="text-xs" style={{ color: 'var(--text-light)' }}>PDF, DOC, DOCX up to 5 MB</div>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" disabled={status === 'sending'}
                className={`btn-primary w-full justify-center text-base transition-all ${status === 'sent' ? '!bg-emerald-600 !shadow-emerald-500/30' :
                  status === 'error' ? '!bg-red-600 !shadow-red-500/30' : ''
                  }`}>
                {status === 'sending' ? (
                  <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : status === 'sent' ? (
                  <><CheckCircle size={18} /> Message Sent! We'll contact you shortly.</>
                ) : status === 'error' ? (
                  <><X size={18} /> Failed to send. Please try again.</>
                ) : (
                  <>Talk to Expert <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Footer ──────────────────────────────────────────── */
const Footer = () => (
  <footer className="footer-bg pt-12 pb-6" style={{ borderTop: '1px solid var(--border)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={rmsLogo} alt="RMS Logo" className="h-12 md:h-14 w-auto object-contain logo-smart" />
            <div><div className="font-bold text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>RMS Consultancy Services</div><div className="text-xs" style={{ color: 'var(--accent)' }}>Workforce & Recruitment Excellence</div></div>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>Strategic HR, Compliance, and Training Solutions for Manufacturing & other businesses. Based in Gurugram, India.</p>
          <div className="flex gap-3">
            <a href="tel:+919560118227" className="footer-social-link"><Phone size={15} /></a>
            <a href="https://wa.me/919560118227" target="_blank" rel="noreferrer" className="footer-social-link"><MessageCircle size={15} /></a>
            <a href="mailto:info@rmsconsultancyservices.com" className="footer-social-link"><Mail size={15} /></a>
            <a href="https://www.linkedin.com/in/rms-consultancy-services-07a236401?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="footer-social-link">
              <Linkedin size={15} />
            </a>
            <a href="https://www.instagram.com/rmsconsultancyservices?utm_source=qr&igsh=MWdtd3p3ZG55bXZlbQ==" target="_blank" rel="noreferrer" className="footer-social-link">
              <Instagram size={15} />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>Services</h5>
          <ul className="space-y-2">
            {[
              ['Recruitment & Manpower Solutions', '#recruitment'],
              ['Payroll Management & Audit', '#recruitment'],
              ['Training & Development', '#training'],
              ['Statutory Compliance', '#statutory'],
              ['Third-Party Audit Support', '#audit'],
              ['Documentation & Compliance Setup', '#statutory']
            ].map(([n, h]) => (
              <li key={n}><a href={h} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{n}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>Contact Info</h5>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}><MapPin size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />Gurugram, Haryana, India</div>
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}><Phone size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />+91-9560118227</div>
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}><Mail size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />info@rmsconsultancyservices.com</div>
            <div className="flex items-center gap-3 text-sm"><a href="https://rmsconsultancyservices.com" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: 'var(--accent)' }}>🌐 rmsconsultancyservices.com</a></div>
          </div>
        </div>
      </div>
      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-sm" style={{ color: 'var(--text-light)' }}>© {new Date().getFullYear()} RMS Consultancy Services. All rights reserved.</p>
        <p className="text-sm" style={{ color: 'var(--text-light)' }}>Gurugram, India · Workforce & Recruitment Excellence</p>
      </div>
    </div>
  </footer>
);

/* ══════════════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════════════ */
export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <ServicesOverview />
      <RecruitmentManpower />
      <PayrollManagement />
      <TrainingDevelopment />
      <StatutoryCompliance />
      <ThirdPartyAudit />
      <DocumentationSetup />
      <ClientsIndustries />
      <WhyChooseUs />
      <AboutFounder />
      <Resources />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
