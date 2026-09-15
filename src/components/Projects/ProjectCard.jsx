import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  ShoppingCart, 
  Search, 
  Bot, 
  Send, 
  Sparkles, 
  Activity, 
  Cpu,
  Star,
  Check
} from 'lucide-react';

const ProjectCard = ({ project, index, isRevealed, onOpenCaseStudy }) => {
  const isEven = index % 2 === 1;
  const isChatbot = project.title.toLowerCase().includes('chatbot');
  const isEcommerce = project.title.toLowerCase().includes('commerce');

  return (
    <motion.div 
      className={`project-card glass-card group relative overflow-hidden flex flex-col ${
        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-stretch w-full min-h-[440px] rounded-2xl border border-border/80 shadow-md transition-all duration-500`}
      initial={{ opacity: 0, y: 35 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      {/* Subtle Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content Column (52%) */}
      <div className="project-content w-full lg:w-[52%] p-8 sm:p-10 flex flex-col justify-between z-10">
        <div>
          {/* Project Index & Category Pill */}
          <div className="flex items-center gap-3 mb-3.5">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              0{index + 1} // {isChatbot ? 'AI & MACHINE LEARNING' : isEcommerce ? 'FULL-STACK E-COMMERCE' : 'SYSTEM ARCHITECTURE'}
            </span>
            <span className="w-10 h-[1px] bg-primary/30"></span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="project-description text-foreground/80 text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.badges.map((badge) => (
              <span 
                key={badge} 
                className="px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 transition-all hover:bg-primary/20"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Features in a Balanced 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {project.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/90 font-medium">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/60 mt-auto">
          <button 
            className="btn btn-primary group/btn shadow-md shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg cursor-pointer transition-all"
            onClick={onOpenCaseStudy}
          >
            <span>View Case Study</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2.5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-card border border-border text-muted hover:text-primary hover:border-primary hover:scale-105 transition-all shadow-xs" 
              title="View Source Code"
            >
              <Github size={18} />
            </a>
            <button 
              onClick={onOpenCaseStudy}
              className="p-2.5 rounded-lg bg-card border border-border text-muted hover:text-primary hover:border-primary hover:scale-105 transition-all shadow-xs cursor-pointer" 
              title="Case Study Architecture"
            >
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Mockup Column (48%) */}
      <div className={`project-visual w-full lg:w-[48%] bg-black/[0.02] dark:bg-white/[0.02] relative flex items-center justify-center p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 ${
        isEven ? 'lg:border-r border-border/60' : 'lg:border-l border-border/60'
      } overflow-hidden`}>
        {/* Ambient background blob */}
        <div className="absolute w-72 h-72 rounded-full bg-primary/10 filter blur-3xl -top-10 -right-10 pointer-events-none" />

        {/* Live-Feel Interactive Mockup Window with Fixed Height for Perfect Proportions */}
        <div className="mockup-window bg-card/95 backdrop-blur-xl border border-border/80 rounded-xl w-full max-w-md h-[310px] flex flex-col justify-between shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 ease-out">
          {/* Window Header */}
          <div className="mockup-header bg-border/25 px-4 py-2.5 border-b border-border/60 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/90"></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-card border border-border/70 text-[11px] font-mono text-foreground/80 font-medium">
              <Lock size={10} className="text-emerald-600" />
              <span>{isChatbot ? 'bot.nexwe.ai/chat' : 'store.nexwe.dev/catalog'}</span>
            </div>
            <div className="w-6"></div>
          </div>

          {/* Window Body: Contextual UI Mockup */}
          {isChatbot ? (
            /* AI Chatbot Mockup */
            <div className="mockup-body p-4 flex flex-col justify-between grow font-sans">
              {/* Bot Header Status */}
              <div className="flex items-center justify-between pb-2.5 border-b border-border/50 text-xs shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">
                    <Bot size={15} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground flex items-center gap-1.5 text-xs">
                      SupportBot AI
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <div className="text-[10px] text-muted">NLP Intent Engine Active</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-700 font-semibold border border-emerald-500/20">
                  99.4% Match
                </span>
              </div>

              {/* Message Thread */}
              <div className="space-y-2 py-1 my-auto">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-xs px-3 py-1.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs">
                    How do I track my order delivery?
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                  <div className="bg-card border border-border/80 text-foreground text-xs p-2.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-xs space-y-1.5">
                    <p className="leading-snug">
                      Your order <strong className="text-primary font-semibold">#NX-8821</strong> is in transit! Arriving today around 4:00 PM.
                    </p>
                    <div className="flex gap-1.5 pt-0.5">
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-semibold border border-primary/20 flex items-center gap-1">
                        <Check size={10} /> Track Courier
                      </span>
                      <span className="px-2 py-0.5 rounded bg-card border border-border text-muted text-[10px]">
                        Change Address
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Bar */}
              <div className="pt-2 border-t border-border/50 flex items-center gap-2 shrink-0">
                <div className="grow flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-lg text-xs text-muted">
                  <Search size={13} />
                  <span>Type a query...</span>
                </div>
                <div className="p-1.5 rounded-lg bg-primary text-white flex items-center justify-center">
                  <Send size={12} />
                </div>
              </div>
            </div>
          ) : (
            /* E-Commerce Platform Mockup */
            <div className="mockup-body p-4 flex flex-col justify-between grow font-sans">
              {/* Store Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-border/50 text-xs shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground text-sm tracking-tight">NEXWE<span className="text-primary">.SHOP</span></span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono font-medium">v2.4</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-foreground font-semibold bg-card px-2 py-0.5 rounded-md border border-border">
                  <ShoppingCart size={13} className="text-primary" />
                  <span>Cart (2)</span>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-2.5 my-auto py-1">
                {/* Product 1 */}
                <div className="p-2.5 rounded-lg bg-card border border-border/80 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-2xs">
                  <div className="h-14 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mb-1.5">
                    <Cpu size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground truncate">Smart Sensor Hub</div>
                    <div className="flex items-center gap-1 text-[10px] text-amber-500 mb-1">
                      <Star size={10} fill="currentColor" />
                      <span>4.9 (128)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary">$89.00</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-semibold">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="p-2.5 rounded-lg bg-card border border-border/80 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-2xs">
                  <div className="h-14 rounded-md bg-secondary/5 border border-secondary/10 flex items-center justify-center mb-1.5">
                    <Activity size={22} className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground truncate">Telemetry Controller</div>
                    <div className="flex items-center gap-1 text-[10px] text-amber-500 mb-1">
                      <Star size={10} fill="currentColor" />
                      <span>4.8 (94)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary">$149.00</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-semibold">In Stock</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted font-mono shrink-0">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Django REST API: 200 OK
                </span>
                <span className="text-foreground/70">MySQL Connected</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
