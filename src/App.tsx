import { useState, useEffect, useRef } from 'react';
import {
  Users, Target, Mail, Phone, MapPin, Menu, X, ChevronRight,
  TrendingUp, ShieldCheck, Award, CheckCircle, ArrowRight, BarChart3,
  Building2, ClipboardCheck, GraduationCap, Shield, Zap, Star, Laptop,
  UserCheck, Calendar, Download, Linkedin, Briefcase, FileText, Upload
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
    { v: 'Recruitment', l: 'Fast & Reliable', icon: <UserCheck size={18} /> },
    { v: 'Compliance', l: 'Payroll & Statutory Experts', icon: <ShieldCheck size={18} /> },
    { v: 'Audits', l: 'Global Support (SEDEX, BSCI)', icon: <ClipboardCheck size={18} /> },
    { v: 'Specialists', l: 'Manufacturing Industry', icon: <Building2 size={18} /> },
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
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-6">
            Transforming HR for<br />
            <span className="gradient-text">Manufacturing</span> &<br />
            <span className="gradient-text">Apparel</span> Excellence
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            We provide fast and reliable manpower solutions along with complete HR, compliance, and audit support for manufacturing and other industries.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20">
            <a href="#contact" className="btn-primary">Schedule Consultation <ArrowRight size={17} /></a>
            <a href="#services" className="btn-secondary">Explore Services <ChevronRight size={17} /></a>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="text-white font-bold text-lg leading-tight mt-3 mb-1">{s.v}</div>
                <div className="stat-label !text-xs !mt-0">{s.l}</div>
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
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'hover:border-blue-500/40', tag: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'hover:border-purple-500/40', tag: 'text-purple-400' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/40', tag: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'hover:border-amber-500/40', tag: 'text-amber-400' },
    sky: { bg: 'bg-sky-500/10', icon: 'text-sky-400', border: 'hover:border-sky-500/40', tag: 'text-sky-400' },
    rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', border: 'hover:border-rose-500/40', tag: 'text-rose-400' },
  };
  return (
    <section id="services" className="py-24 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Our Services</span>
          <h2 className="section-heading">Comprehensive HR Solutions</h2>
          <p className="section-subtext">Comprehensive suite of services designed for manufacturing and apparel businesses</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    { title: 'Labour Law Compliance', desc: 'Comprehensive adherence to EPF, ESI, CLRA, Minimum Wages, and other state/central labor laws.', icon: <ShieldCheck size={18} /> },
    { title: 'Factory Compliance', desc: 'Securing factory licenses, approvals, and managing ongoing critical factory-level compliances.', icon: <Building2 size={18} /> },
    { title: 'Registers & Documentation', desc: 'Accurate maintenance of all mandated statutory registers, formats, and returns.', icon: <FileText size={18} /> },
    { title: 'Compliance Audits', desc: 'Conducting internal routine checks to identify risks and ensure 100% legal coverage continuously.', icon: <Target size={18} /> },
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
                {['Labour Law', 'Factory', 'Registers', 'Policies', 'Inspections', 'Licenses', 'Returns', 'Audits'].map(law => (
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
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'border-blue-500/15' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'border-purple-500/15' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'border-emerald-500/15' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'border-amber-500/15' },
    sky: { bg: 'bg-sky-500/10', icon: 'text-sky-400', border: 'border-sky-500/15' },
  };
  return (
    <section id="recruitment" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Workforce Management</span>
          <h2 className="section-heading">Recruitment & Manpower Solutions</h2>
          <p className="section-subtext">Comprehensive staffing solutions from talent acquisition to full-scale manpower deployment</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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

/* ── Payroll Management & Audit ──────────────────────── */
const PayrollManagement = () => {
  const features = [
    { title: 'Salary Processing', desc: 'Secure, punctual end-to-end salary execution including PF, ESIC, Bonus, and Gratuity inputs.', icon: <BarChart3 size={22} />, color: 'sky' },
    { title: 'Payroll Audit & Error Check', desc: 'In-depth reviews guaranteeing absolute calculation accuracy and eliminating leakages.', icon: <ShieldCheck size={22} />, color: 'rose' },
    { title: 'Compliance Verification', desc: 'Meticulous cross-referencing against all statutory tax and labor deduction mandates.', icon: <ClipboardCheck size={22} />, color: 'amber' },
    { title: 'Cost Optimization', desc: 'Strategic payroll mapping to reduce administrative overhead and streamline operations.', icon: <TrendingUp size={22} />, color: 'blue' },
  ];
  const c: Record<string, any> = {
    sky: { bg: 'bg-sky-500/10', icon: 'text-sky-400', border: 'border-sky-500/15' },
    rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', border: 'border-rose-500/15' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'border-amber-500/15' },
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'border-blue-500/15' },
  };
  return (
    <section id="payroll" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Financial Accuracy</span>
          <h2 className="section-heading">Payroll Management & Audit</h2>
          <p className="section-subtext">Error-free payroll administration and comprehensive auditing for your entire workforce</p>
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
    { title: 'Compliance Training', desc: 'Empowering employees with crucial knowledge on legal frameworks, POSH, and safety standards.', icon: <Shield size={24} />, color: 'blue' },
    { title: 'Workforce Skill Development', desc: 'Targeted upskilling programs to increase production efficiency and output quality.', icon: <TrendingUp size={24} />, color: 'purple' },
    { title: 'Supervisor Training', desc: 'Leadership modules designed to help floor supervisors effectively manage teams and resolve conflicts.', icon: <Users size={24} />, color: 'amber' },
    { title: 'HR Training Programs', desc: 'Enhancing the core capabilities of internal HR teams through updated industry best practices.', icon: <GraduationCap size={24} />, color: 'green' },
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

/* ── Third-Party Audit Support ───────────────────────── */
const ThirdPartyAudit = () => {
  const audits = ['SEDEX (SMETA)', 'BSCI', 'GSV', 'GOTS', 'Higg Index'];
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
              <p className="text-slate-400 text-sm mb-8">Achieved perfect clearance records across multiple facilities for these global standards:</p>
              <div className="flex flex-wrap gap-3 justify-center">{audits.map(a => <span key={a} className="audit-tag">{a}</span>)}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Audit Excellence</span>
            <h2 className="section-heading">Third-Party Audit Support</h2>
            <div className="space-y-4 mt-8">
              {[
                { title: 'Audit Preparation', desc: 'Thorough readiness training and mock audits.' },
                { title: 'Documentation', desc: 'Organizing all necessary evidence and registers.' },
                { title: 'Gap Analysis', desc: 'Identifying risks and executing corrective actions.' },
                { title: 'Audit Closure', desc: 'Finalizing CAP responses to secure certification.' }
              ].map((item, i) => (
                <div key={i} className="audit-feature items-center py-3">
                  <div className="audit-feature-icon shrink-0 !w-10 !h-10 text-amber-400"><CheckCircle size={18} /></div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
    <section id="documentation" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Setup & Management</span>
            <h2 className="section-heading">Documentation & Compliance Setup</h2>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">Establishing robust documentation frameworks to protect your business and ensure seamless operations.</p>
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="compliance-item">
                  <div className="compliance-icon text-rose-400 bg-rose-500/15">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="compliance-visual !border-rose-500/20 px-8 py-12">
              <div className="text-6xl text-center mb-4">📑</div>
              <h3 className="text-2xl font-black text-white text-center mb-2">Organized & Compliant</h3>
              <p className="text-slate-400 text-center text-sm mb-8">We take the paperwork burden off your shoulders</p>
              <div className="grid grid-cols-2 gap-3">
                {['HR Policies', 'Employee Records', 'Registers', 'Formats', 'Audit Docs', 'Handbooks'].map(doc => (
                  <div key={doc} className="compliance-tag !bg-rose-500/10 !border-rose-500/20">
                    <CheckCircle size={13} className="text-rose-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{doc}</span>
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
    <section className="py-24 section-darker relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Our Domains</span>
          <h2 className="section-heading">Clients & Industries We Serve</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden bg-slate-800 border border-white/10 group flex flex-col items-center justify-center p-8 text-center hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 mb-4 bg-blue-500/10 p-4 rounded-full">{ind.icon}</div>
              <h3 className="font-bold text-white text-lg">{ind.title}</h3>
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
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', num: 'text-blue-500/30' },
    amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', num: 'text-amber-500/30' },
    green: { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', num: 'text-emerald-500/30' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', num: 'text-purple-500/30' },
    rose: { bg: 'bg-rose-500/10', icon: 'text-rose-400', num: 'text-rose-500/30' },
  };
  return (
    <section className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="section-tag">Why RMS</span>
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-subtext">Partnering with you to unlock your workforce potential reliably and efficiently.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className="why-card border border-white/5 relative overflow-hidden">
              <div className={`absolute top-4 right-4 text-5xl font-black ${c[r.color].num} leading-none select-none`}>{r.num}</div>
              <div className={`w-14 h-14 ${c[r.color].bg} rounded-2xl flex items-center justify-center ${c[r.color].icon} mb-5 relative z-10`}>{r.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3 relative z-10">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{r.desc}</p>
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
    <section id="about" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-transparent to-purple-900/8 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="founder-card mb-8">
              <h3 className="flex items-center gap-3 text-2xl font-black text-white mb-4"><Target className="text-blue-400" /> Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-base">To provide reliable, efficient, and compliant HR solutions that support business growth and workforce excellence.</p>
            </div>
            <div className="founder-card">
              <h3 className="flex items-center gap-3 text-2xl font-black text-white mb-4"><Star className="text-purple-400" /> Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-base">To become a trusted partner for industries in Recruitment, Compliance, and Global Audit Solutions.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Leadership</span>
            <h2 className="section-heading mt-2">Guided by Experience</h2>
            <div className="founder-card mt-8">
              <div className="flex gap-6 items-center mb-6">
                <div className="founder-avatar animate-pulse-glow shrink-0"><span className="text-4xl">👩‍💼</span></div>
                <div>
                  <h3 className="text-2xl font-black text-white">Rakhi Mishra</h3>
                  <p className="text-blue-400 font-semibold mt-1">Founder & Principal Consultant</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
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
    { icon: <Phone size={18} />, label: 'Phone', value: '+91-9560118227', href: 'tel:+919560118227' },
    { icon: <Mail size={18} />, label: 'Email', value: 'info@rmsconsultancyservices.com', href: 'mailto:info@rmsconsultancyservices.com' },
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
            {[
              ['Recruitment & Manpower Solutions', '#recruitment'],
              ['Payroll Management & Audit', '#recruitment'],
              ['Training & Development', '#training'],
              ['Statutory Compliance', '#statutory'],
              ['Third-Party Audit Support', '#audit'],
              ['Documentation & Compliance Setup', '#statutory']
            ].map(([n, h]) => (
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
    </div>
  );
}
