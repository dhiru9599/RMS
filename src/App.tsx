import { useState, useEffect, useRef } from 'react';
import {
  Users, Target, Mail, Phone, MapPin, Menu, X, ChevronRight,
  TrendingUp, ShieldCheck, Award, CheckCircle, ArrowRight, BarChart3,
  Building2, ClipboardCheck, GraduationCap, Shield, Zap, Star,
  UserCheck, Calendar, Download, Linkedin, Heart, Briefcase, FileText, Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import rmsLogo from './assets/RMS Logo.png';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── Navbar ──────────────────────────────────────────── */
const Navbar = () => {
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
  return (
    <nav
      className="fixed w-full z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(8, 13, 26, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src={rmsLogo} alt="RMS Logo" className="h-10 w-auto object-contain" />
          <div>
            <div className="font-bold text-white text-base leading-tight">RMS Consultancy</div>
            <div className="text-blue-400 text-xs font-semibold">Services</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.name} href={l.href} className="text-slate-400 hover:text-white font-medium text-sm transition-colors">
              {l.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm px-5 py-2.5">Schedule Consultation</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden nav-glass border-t border-white/10 overflow-hidden">
            <div className="px-5 py-6 space-y-3">
              {links.map(l => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="block text-slate-300 font-medium py-2 border-b border-white/5">{l.name}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary block text-center mt-4">
                Schedule Consultation
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
    { v: '12+', l: 'Years Experience', icon: <Award size={18} /> },
    { v: '7,000+', l: 'Employees Managed', icon: <Users size={18} /> },
    { v: '100%', l: 'Audit Clearance', icon: <ShieldCheck size={18} /> },
    { v: '30%', l: 'Faster HR Ops', icon: <TrendingUp size={18} /> },
  ];
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden hero-bg">
      <div className="hero-glow-1" /><div className="hero-glow-2" /><div className="hero-grid" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Star size={11} fill="currentColor" /> Expert HR Solutions · Manufacturing & Apparel
          </motion.span>
          <motion.h1 variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6">
            Transforming HR for<br />
            <span className="gradient-text">Manufacturing</span> &<br />
            <span className="gradient-text">Apparel</span> Excellence
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Based in Gurugram, India — RMS Consultancy delivers comprehensive HR solutions tailored to
            manufacturing and apparel businesses. From statutory compliance to strategic workforce planning.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20">
            <a href="#contact" className="btn-primary">Schedule Consultation <ArrowRight size={17} /></a>
            <a href="#services" className="btn-secondary">Explore Services <ChevronRight size={17} /></a>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">{s.v}</div>
                <div className="stat-label">{s.l}</div>
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
    { title: 'Statutory Compliance', desc: '100% adherence to Indian Labour Laws — Factories Act, EPF, ESI, CLRA, POSH and more.', icon: <Shield size={26} />, color: 'blue', href: '#statutory' },
    { title: 'Recruitment & Payroll', desc: 'End-to-end workforce management from talent acquisition to accurate payroll processing.', icon: <Users size={26} />, color: 'purple', href: '#recruitment' },
    { title: 'Training & Development', desc: 'Building capability and competitive advantage through strategic workforce development.', icon: <GraduationCap size={26} />, color: 'green', href: '#training' },
    { title: 'Internal Audit Services', desc: 'Expert audit readiness for BSCI, SEDEX, WRAP, GOTS, and Higg Index certifications.', icon: <ClipboardCheck size={26} />, color: 'amber', href: '#audit' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'hover:border-blue-500/40', tag: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'hover:border-purple-500/40', tag: 'text-purple-400' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/40', tag: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'hover:border-amber-500/40', tag: 'text-amber-400' },
  };
  return (
    <section id="services" className="py-24 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Our Services</span>
          <h2 className="section-heading">Comprehensive HR Solutions</h2>
          <p className="section-subtext">Four pillars of excellence designed for manufacturing and apparel businesses</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.a key={i} variants={fadeUp} href={s.href} whileHover={{ y: -8 }} className={`service-card ${c[s.color].border} group`}>
              <div className={`w-14 h-14 ${c[s.color].bg} rounded-2xl flex items-center justify-center ${c[s.color].icon} mb-5 transition-transform group-hover:scale-110`}>{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c[s.color].tag}`}>Learn more <ArrowRight size={13} /></span>
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
    { title: 'Complete Legal Coverage', desc: 'Full compliance with Factories Act, EPF, ESI, CLRA, Bonus, and Gratuity regulations.', icon: <ShieldCheck size={18} /> },
    { title: 'POSH Implementation', desc: 'Prevention of Sexual Harassment policy setup, committee formation, and ongoing management.', icon: <Shield size={18} /> },
    { title: 'Risk Mitigation', desc: 'Proactive management of legal risks and industrial relations to protect business continuity.', icon: <Target size={18} /> },
    { title: 'Welfare Management', desc: 'Oversight of statutory welfare provisions and systematic grievance handling procedures.', icon: <Heart size={18} /> },
  ];
  return (
    <section id="statutory" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Legal Compliance</span>
            <h2 className="section-heading">Statutory Compliance</h2>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">Ensuring 100% adherence to Indian Labour Laws while protecting your business from legal risks.</p>
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="compliance-item">
                  <div className="compliance-icon">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="compliance-visual">
              <div className="text-6xl text-center mb-4">⚖️</div>
              <h3 className="text-2xl font-black text-white text-center mb-2">100% Compliant</h3>
              <p className="text-slate-400 text-center text-sm mb-8">Full coverage across all Indian Labour Laws</p>
              <div className="grid grid-cols-2 gap-3">
                {['EPF', 'ESI', 'CLRA', 'POSH', 'Factories Act', 'Gratuity', 'Bonus Act', 'Welfare'].map(law => (
                  <div key={law} className="compliance-tag">
                    <CheckCircle size={13} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{law}</span>
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

/* ── Recruitment & Payroll ───────────────────────────── */
const RecruitmentPayroll = () => {
  const features = [
    { title: 'End-to-End Recruitment', desc: 'Managing complete manpower planning cycles, factory-level staffing requirements, and corporate onboarding processes for seamless talent integration.', icon: <UserCheck size={22} />, color: 'blue' },
    { title: 'Payroll Excellence', desc: 'Accurate payroll processing, documentation management, and statutory deductions with zero-error compliance tracking.', icon: <BarChart3 size={22} />, color: 'purple' },
    { title: 'Digital Transformation', desc: 'Implementing HRMS and automated payroll/attendance systems that streamline operations and improve efficiency.', icon: <Zap size={22} />, color: 'green' },
    { title: 'Efficiency Gains', desc: 'Achieved 30% faster HR operations through digitization, reducing manual processing and improving data accuracy.', icon: <TrendingUp size={22} />, color: 'amber' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'border-blue-500/15' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'border-purple-500/15' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'border-emerald-500/15' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'border-amber-500/15' },
  };
  return (
    <section id="recruitment" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Workforce Management</span>
          <h2 className="section-heading">Recruitment & Payroll Services</h2>
          <p className="section-subtext">Comprehensive workforce management solutions from talent acquisition to payroll excellence</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className={`feature-card border ${c[f.color].border}`}>
              <div className={`w-12 h-12 ${c[f.color].bg} rounded-xl flex items-center justify-center ${c[f.color].icon} mb-5`}>{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
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
    { title: 'Skill Building', desc: 'Facilitating employee training sessions and monitoring workforce progress to ensure competency development.', icon: <GraduationCap size={24} />, color: 'blue' },
    { title: 'Culture Building', desc: 'Fostering performance-driven culture and inclusive workplace environment that drives engagement.', icon: <Heart size={24} />, color: 'purple' },
    { title: 'Talent Management', desc: 'Developing retention strategies and appraisal systems that identify and develop future leaders.', icon: <Star size={24} />, color: 'amber' },
    { title: 'Safety Training', desc: 'Implementing comprehensive policies and training regarding employee welfare and workplace safety.', icon: <Shield size={24} />, color: 'green' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400' },
  };
  return (
    <section id="training" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Workforce Development</span>
          <h2 className="section-heading">Training & Development</h2>
          <p className="section-subtext">Building capability, culture, and competitive advantage through strategic workforce development</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="training-card">
              <div className={`w-12 h-12 ${c[p.color].bg} rounded-xl flex items-center justify-center ${c[p.color].icon} mb-5`}>{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Internal Audit ──────────────────────────────────── */
const InternalAudit = () => {
  const audits = ['BSCI', 'SEDEX', 'WRAP', 'GOTS', 'Higg Index'];
  return (
    <section id="audit" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="audit-visual text-center">
              <div className="text-6xl mb-4">🏆</div>
              <div className="text-5xl font-black text-white mb-1">100%</div>
              <div className="text-amber-400 font-bold text-lg mb-2">Audit Clearance Rate</div>
              <p className="text-slate-400 text-sm mb-8">Achieved perfect clearance records across multiple facilities and audit types</p>
              <div className="flex flex-wrap gap-3 justify-center">{audits.map(a => <span key={a} className="audit-tag">{a}</span>)}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Audit Excellence</span>
            <h2 className="section-heading">Internal Audit Services</h2>
            <div className="space-y-5 mt-8">
              <div className="audit-feature">
                <div className="audit-feature-icon"><ClipboardCheck size={22} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Buyer Audit Readiness</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Specialized expertise in clearing global compliance audits including BSCI, SEDEX, WRAP, GOTS, and Higg Index. We partner with senior leadership to meet global sustainability and security standards.</p>
                </div>
              </div>
              <div className="audit-feature">
                <div className="audit-feature-icon"><TrendingUp size={22} /></div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Continuous Improvement</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Coordinating with auditors and management for ongoing operational excellence and sustained compliance across all facilities.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Why Choose RMS ──────────────────────────────────── */
const WhyChooseUs = () => {
  const reasons = [
    { title: 'Industry Expertise', desc: 'Specialized knowledge in Garment and Apparel export sectors with deep understanding of manufacturing challenges.', icon: <Building2 size={24} />, color: 'blue', num: '01' },
    { title: 'Proven Results', desc: 'Track record of lowering attrition rates and driving measurable productivity improvements across facilities.', icon: <Award size={24} />, color: 'amber', num: '02' },
    { title: 'Scalability', desc: 'Experience managing workforces from 3,000 to over 7,000 employees across multiple manufacturing facilities.', icon: <TrendingUp size={24} />, color: 'green', num: '03' },
    { title: 'Strategic Partnership', desc: 'Aligning HR strategies with business growth and sustainability goals for long-term operational success.', icon: <Briefcase size={24} />, color: 'purple', num: '04' },
  ];
  const c: Record<string, any> = {
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', num: 'text-blue-500/30' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', num: 'text-amber-500/30' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', num: 'text-emerald-500/30' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', num: 'text-purple-500/30' },
  };
  return (
    <section className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Why RMS</span>
          <h2 className="section-heading">Why Choose RMS Consultancy?</h2>
          <p className="section-subtext">Backed by years of hands-on experience in India's most demanding manufacturing environments</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="why-card relative overflow-hidden">
              <div className={`absolute top-4 right-4 text-5xl font-black ${c[r.color].num} leading-none select-none`}>{r.num}</div>
              <div className={`w-14 h-14 ${c[r.color].bg} rounded-2xl flex items-center justify-center ${c[r.color].icon} mb-5`}>{r.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── About Founder ───────────────────────────────────── */
const AboutFounder = () => {
  const achievements = [
    'Former Chief Human Resource Officer at IR Exports Pvt. Ltd.',
    'Managed HR operations for 7,000+ employees across multiple manufacturing facilities',
    'Implemented digital HRMS systems reducing processing time by 30%',
    'Established robust compliance frameworks for large-scale manufacturing operations',
    'Built high-performance cultures in complex manufacturing environments',
    'MBA from Sharda University — specializing in Human Resources & Finance',
  ];
  return (
    <section id="about" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-transparent to-purple-900/8 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="founder-card">
              <div className="flex justify-center mb-6">
                <div className="founder-avatar animate-pulse-glow"><span className="text-5xl">👩‍💼</span></div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white">Rakhi Mishra</h3>
                <p className="text-blue-400 font-semibold mt-1">MBA in HR & Finance | 12+ Years Experience</p>
                <p className="text-slate-500 text-sm mt-1">Founder & Principal Consultant</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[['12+', 'Years Experience'], ['7,000+', 'Employees Managed'], ['100%', 'Audit Clearance'], ['30%', 'Efficiency Gains']].map(([v, l]) => (
                  <div key={l} className="founder-stat">
                    <div className="text-xl font-black text-white">{v}</div>
                    <div className="text-xs text-slate-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">About the Founder</span>
            <h2 className="section-heading">Rakhi Mishra</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Former Chief Human Resource Officer at IR Exports Pvt. Ltd., where she successfully managed HR operations and compliance for over 7,000 employees across multiple manufacturing facilities. Her proven track record includes implementing digital HRMS systems, establishing robust compliance frameworks, and building high-performance cultures.
            </p>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="achievement-item">
                  <CheckCircle size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{a}</span>
                </motion.div>
              ))}
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
    <section id="resources" className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Value-Add Resources</span>
          <h2 className="section-heading">Free Resources for Your Business</h2>
          <p className="section-subtext">Available for immediate download or consultation. Contact us to receive these resources tailored to your facility.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((r, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="resource-card">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 ${r.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'} rounded-xl flex items-center justify-center`}>{r.icon}</div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${r.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-purple-500/10 border-purple-500/30 text-purple-400'}`}>{r.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{r.desc}</p>
              <a href="#contact" className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors group ${r.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 'text-purple-400 hover:text-purple-300'}`}>
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
      const res = await fetch('https://formsubmit.co/rakhimishra57@gmail.com', {
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
    { icon: <Phone size={18} />, label: 'Phone', value: '+91-9015248124', href: 'tel:+919015248124' },
    { icon: <Mail size={18} />, label: 'Email', value: 'rakhimishra57@gmail.com', href: 'mailto:rakhimishra57@gmail.com' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'Rakhi Mishra', href: 'https://www.linkedin.com/in/rakhi-mishra' },
  ];

  return (
    <section id="contact" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="section-subtext">Ready to transform your HR operations? Schedule a free consultation today.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="contact-info-card h-full">
              <h3 className="text-xl font-bold text-white mb-3">Ready to Transform Your HR Operations?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Whether you're facing compliance challenges, need audit support, or want to optimize your workforce management, RMS Consultancy is ready to help.</p>
              <div className="space-y-3">
                {info.map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                      {item.href ? <a href={item.href} className="text-slate-200 text-sm font-semibold hover:text-blue-400 transition-colors">{item.value}</a> : <div className="text-slate-200 text-sm font-semibold">{item.value}</div>}
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
                  <option value="Statutory Compliance">Statutory Compliance</option>
                  <option value="Recruitment & Payroll">Recruitment & Payroll</option>
                  <option value="Training & Development">Training & Development</option>
                  <option value="Internal Audit Services">Internal Audit Services</option>
                  <option value="Other / General Inquiry">Other / General Inquiry</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea rows={3} name="Message" placeholder="Tell us about your requirements..." className="form-input resize-none" />
              </div>

              {/* CV Upload — Optional */}
              <div className="mb-6">
                <label className="form-label">Upload CV / Resume <span className="text-slate-600 font-normal">(Optional — PDF, DOC, DOCX, max 5 MB)</span></label>
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
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-semibold truncate">{fileName}</div>
                        <div className="text-slate-500 text-xs">Click to change or drag a new file</div>
                      </div>
                      <button type="button" onClick={e => { e.stopPropagation(); setFileName(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="text-slate-500 hover:text-red-400 transition-colors p-1">
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500">
                        <Upload size={20} />
                      </div>
                      <div className="text-slate-400 text-sm"><span className="text-blue-400 font-semibold">Click to upload</span> or drag & drop</div>
                      <div className="text-slate-600 text-xs">PDF, DOC, DOCX up to 5 MB</div>
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
                  <>Schedule a Consultation <ArrowRight size={18} /></>
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
  <footer className="footer-bg border-t border-white/5 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={rmsLogo} alt="RMS Logo" className="h-10 w-auto object-contain" />
            <div><div className="font-bold text-white text-sm">RMS Consultancy Services</div><div className="text-blue-400 text-xs">Manufacturing & Apparel HR Excellence</div></div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">Strategic HR, Compliance, and Training Solutions for Manufacturing & Apparel businesses. Based in Gurugram, India.</p>
          <div className="flex gap-3">
            <a href="tel:+919015248124" className="footer-social-link"><Phone size={15} /></a>
            <a href="mailto:info@rmsconsultancyservices.com
" className="footer-social-link"><Mail size={15} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Services</h5>
          <ul className="space-y-2">
            {[['Statutory Compliance', '#statutory'], ['Recruitment & Payroll', '#recruitment'], ['Training & Development', '#training'], ['Internal Audit Services', '#audit']].map(([n, h]) => (
              <li key={n}><a href={h} className="text-slate-500 hover:text-blue-400 transition-colors text-sm">{n}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Contact Info</h5>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-slate-500 text-sm"><MapPin size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />Gurugram, Haryana, India</div>
            <div className="flex items-center gap-3 text-slate-500 text-sm"><Phone size={13} className="text-blue-400 flex-shrink-0" />+91-9560118227</div>
            <div className="flex items-center gap-3 text-slate-500 text-sm"><Mail size={13} className="text-blue-400 flex-shrink-0" />info@rmsconsultancyservices.com
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} RMS Consultancy Services. All rights reserved.</p>
        <p className="text-slate-600 text-sm">Gurugram, India · Manufacturing & Apparel HR Excellence</p>
      </div>
    </div>
  </footer>
);

/* ══════════════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <StatutoryCompliance />
      <RecruitmentPayroll />
      <TrainingDevelopment />
      <InternalAudit />
      <WhyChooseUs />
      <AboutFounder />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
