import { Link } from "react-router";
import {
  Globe2Icon,
  ShieldCheckIcon,
  ZapIcon,
  LanguagesIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  UsersIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  StarIcon,
  PlayIcon,
  SparklesIcon,
  RocketIcon,
  HeartIcon,
  ClockIcon,
  LockIcon
} from "lucide-react";
import ConversationDemo from "../components/ConversationDemo";
import ScrollProgress from "../components/ScrollProgress";
import TranslatePlayground from "../components/TranslatePlayground";
import useInView from "../hooks/useInView";
import TestimonialCarousel from "../components/TestimonialCarousel";
import MobileMenu from "../components/MobileMenu";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import { useState, useEffect } from "react";
import { useLandingI18n } from "../i18n/landing";
import LangSwitcher from "../components/LangSwitcher";
import EnhancedFeatureCard from "../components/EnhancedFeatureCard";

function LandingPage() {
  const hero = useInView();
  const features = useInView();
  const stats = useInView();
  const how = useInView();
  const testimonials = useInView();
  const faq = useInView();
  const { lang, setLang, t, options } = useLandingI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(0);

  useLockBodyScroll(menuOpen);

  // Enhanced typing animation for hero
  const languages = ["English", "Español", "Français", "日本語", "العربية"];
  const phrases = [
    "Hello! How are you?",
    "¡Hola! ¿Cómo estás?",
    "Salut! Comment allez-vous?",
    "こんにちは！元気ですか？",
    "مرحبا! كيف حالك؟"
  ];

  useEffect(() => {
    const phrase = phrases[currentLanguage];
    let i = 0;
    const timer = setInterval(() => {
      if (i <= phrase.length) {
        setTypedText(phrase.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentLanguage((prev) => (prev + 1) % languages.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentLanguage]);
  return (
    <div className="w-full">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-1 rounded">Skip to content</a>
      <ScrollProgress />
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-2 sm:px-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Lingualink Favicons/Lingualinklogo.png"
            alt="Lingua Link logo"
            className="h-8 w-auto rounded-md"
            loading="eager"
          />
          <span className="text-lg sm:text-xl font-semibold text-slate-100">Lingua Link</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">{t("nav.features")}</a>
          <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">{t("nav.how")}</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition-colors">{t("nav.faq")}</a>
          <LangSwitcher value={lang} onChange={setLang} options={options} />
        </nav>

        <nav className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => setMenuOpen(true)} className="md:hidden px-3 py-2 rounded-md border border-slate-700/60 text-slate-200">Menu</button>
          <Link
            to="/login"
            className="px-3 py-2 rounded-md text-slate-200/90 hover:text-white hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-700/60"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-medium shadow hover:opacity-95 transition-opacity"
          >
            Get started
          </Link>
        </nav>
      </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-200 font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="px-2 py-1 rounded border border-slate-700/60">Close</button>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <a href="#features" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-slate-800/60">{t("nav.features")}</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-slate-800/60">{t("nav.how")}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="px-2 py-2 rounded hover:bg-slate-800/60">{t("nav.faq")}</a>
          <div className="pt-2 border-t border-slate-700/60">
            <LangSwitcher value={lang} onChange={setLang} options={options} />
          </div>
          <div className="pt-2 border-t border-slate-700/60 flex gap-2">
            <Link to="/login" className="flex-1 px-3 py-2 rounded-md border border-slate-700/60 text-slate-200 text-center">Log in</Link>
            <Link to="/signup" className="flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-center">Get started</Link>
          </div>
        </nav>
      </MobileMenu>

      {/* HERO */}
      <section id="main" ref={hero.ref} className="w-full hero-wrap" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden>
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-10 sm:py-16">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center reveal ${hero.inView ? "is-visible" : ""}`}>
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-[11px] sm:text-xs text-slate-300/90 mb-6 animate-pulse">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                <SparklesIcon className="w-3 h-3 text-cyan-400" />
                {t("hero.badge")}
              </div>

              <h1 id="hero-heading" className="text-balance leading-tight text-[clamp(2rem,5vw,3.6rem)] sm:text-[clamp(2.3rem,5vw,4.1rem)] font-bold tracking-tight text-slate-50 mb-6">
                {t("hero.title_prefix")}
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">{t("hero.title_suffix")}</span>
              </h1>

              {/* Dynamic typing demo */}
              <div className="mb-6 p-4 rounded-xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-slate-400">Live translation: {languages[currentLanguage]}</span>
                </div>
                <div className="font-mono text-cyan-300 text-lg">
                  {typedText}<span className="animate-pulse">|</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-prose mb-6">
                {t("hero.subtitle")} Real‑time auto‑translate is on our roadmap.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <Link to="/signup" className="btn-primary group" aria-label="Sign up">
                  <RocketIcon className="w-4 h-4 group-hover:animate-bounce" />
                  {t("hero.cta_primary")}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/login" className="btn-outline group" aria-label="Log in">
                  {t("hero.cta_secondary")}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Enhanced trust indicators */}
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                <div className="flex items-center gap-1">
                  <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-1">
                  <LockIcon className="w-4 h-4 text-cyan-400" />
                  <span>Secure & private</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4 text-pink-400" />
                  <span>Setup in 30 seconds</span>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="card p-3 hover:bg-slate-700/40 transition-colors">
                  <p className="text-slate-200 text-base font-semibold">50+</p>
                  <p className="text-[11px] text-slate-400">Languages</p>
                </div>
                <div className="card p-3 hover:bg-slate-700/40 transition-colors">
                  <p className="text-slate-200 text-base font-semibold">Real-time</p>
                  <p className="text-[11px] text-slate-400">Bidirectional</p>
                </div>
                <div className="card p-3 hover:bg-slate-700/40 transition-colors">
                  <p className="text-slate-200 text-base font-semibold">Privacy</p>
                  <p className="text-[11px] text-slate-400">End-to-end UX</p>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 blur-2xl rounded-3xl" />
              <ConversationDemo />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section ref={features.ref} id="features" className="w-full py-10 sm:py-16" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              <HeartIcon className="w-4 h-4" />
              Connect with anyone, anywhere
            </div>
            <h2 id="features-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              Why language should never be a
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">barrier to friendship</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Imagine chatting with your <strong className="text-slate-200">Japanese friend</strong>, your <strong className="text-slate-200">Spanish grandmother</strong>,
              or that <strong className="text-slate-200">cool person you met while traveling</strong> - all in your own language, while they read it in theirs.
              That's the magic of <strong className="text-cyan-300">Lingua Link</strong>.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>Always free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>50+ languages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>Real-time translation</span>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${features.inView ? "is-visible" : ""}`}>
            <EnhancedFeatureCard
              icon={<Globe2Icon className="w-6 h-6 text-cyan-400" />}
              title="Chat in Any Language"
              description="Connect with friends, family, and new people from around the world. Language is no longer a barrier to making meaningful connections."
              features={[
                "50+ languages supported",
                "Auto-detect what language they're speaking",
                "Type in your language, they read in theirs",
                "Perfect for international friendships"
              ]}
            />
            <EnhancedFeatureCard
              icon={<ShieldCheckIcon className="w-6 h-6 text-pink-400" />}
              title="Your Privacy Matters"
              description="Your personal conversations stay private. We use secure encryption and never store your messages permanently."
              features={[
                "End-to-end encryption",
                "No message storage",
                "Secure authentication",
                "Your data stays yours"
              ]}
            />
            <EnhancedFeatureCard
              icon={<ZapIcon className="w-6 h-6 text-yellow-400" />}
              title="Instant Translation"
              description="Get real-time translations as you chat. No waiting, no copying and pasting - just natural conversation flow."
              features={[
                "Real-time translation",
                "Context-aware accuracy",
                "Natural conversation flow",
                "Works with any device"
              ]}
            />
            <EnhancedFeatureCard
              icon={<UsersIcon className="w-6 h-6 text-purple-400" />}
              title="Build Global Friendships"
              description="Meet people from different cultures and backgrounds. Share stories, learn about new places, and make friends across the globe."
              features={[
                "Connect with people worldwide",
                "Learn about different cultures",
                "Share experiences and stories",
                "Make lasting international friendships"
              ]}
            />
            <EnhancedFeatureCard
              icon={<HeartIcon className="w-6 h-6 text-red-400" />}
              title="Stay Close to Family"
              description="Keep in touch with family members who speak different languages. Grandparents, cousins, relatives abroad - everyone can join the conversation."
              features={[
                "Include everyone in family chats",
                "Bridge generational language gaps",
                "Share photos and memories",
                "Keep family bonds strong"
              ]}
            />
            <EnhancedFeatureCard
              icon={<RocketIcon className="w-6 h-6 text-orange-400" />}
              title="Easy to Get Started"
              description="Sign up in seconds and start chatting immediately. No complicated setup, no learning curve - just pure communication."
              features={[
                "Quick and easy signup",
                "Intuitive interface",
                "Works on any device",
                "Start chatting right away"
              ]}
            />
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section ref={stats.ref} className="w-full py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" aria-labelledby="stats-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300 mb-6">
              <HeartIcon className="w-4 h-4" />
              Bringing people together worldwide
            </div>
            <h2 id="stats-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              Real connections happening
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">every single day</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              People from all over the world are using Lingua Link to <strong className="text-slate-200">connect, share, and build friendships</strong>
              that transcend language barriers. Here's what's happening right now.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal ${stats.inView ? "is-visible" : ""}`}>
            <StatCard
              icon={<MessageSquareIcon className="w-6 h-6 text-cyan-400" />}
              number="50+"
              label="Languages Supported"
              description="From Arabic to Zulu"
            />
            <StatCard
              icon={<UsersIcon className="w-6 h-6 text-purple-400" />}
              number="1,000+"
              label="Daily Conversations"
              description="People connecting worldwide"
            />
            <StatCard
              icon={<Globe2Icon className="w-6 h-6 text-green-400" />}
              number="120+"
              label="Countries Connected"
              description="Friendships across borders"
            />
            <StatCard
              icon={<HeartIcon className="w-6 h-6 text-pink-400" />}
              number="95%"
              label="Translation Accuracy"
              description="Natural, human-like results"
            />
          </div>

          {/* Community highlights */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-6">Popular conversation topics happening now</p>
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-70">
              <div className="px-3 py-2 bg-slate-800/60 rounded-full text-slate-300 text-sm">
                🍕 Food & Recipes
              </div>
              <div className="px-3 py-2 bg-slate-800/60 rounded-full text-slate-300 text-sm">
                ✈️ Travel Stories
              </div>
              <div className="px-3 py-2 bg-slate-800/60 rounded-full text-slate-300 text-sm">
                🎵 Music & Culture
              </div>
              <div className="px-3 py-2 bg-slate-800/60 rounded-full text-slate-300 text-sm">
                📚 Language Learning
              </div>
              <div className="px-3 py-2 bg-slate-800/60 rounded-full text-slate-300 text-sm">
                👨‍👩‍👧‍👦 Family Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section ref={how.ref} id="how-it-works" className="w-full py-16 sm:py-20" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
              <RocketIcon className="w-4 h-4" />
              Start chatting in minutes
            </div>
            <h2 id="how-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              From sign-up to your first
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">translated conversation</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              It's incredibly simple to get started. <strong className="text-slate-200">No downloads, no setup, no learning curve</strong> -
              just sign up and start connecting with people from around the world.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 reveal ${how.inView ? "is-visible" : ""}`}>
            <ProcessStep
              number="01"
              title="Create Your Account"
              description="Sign up with your email and choose your preferred language. It's completely free to start."
              features={[
                "Choose from 50+ languages",
                "Set your preferred language",
                "Create your profile",
                "No credit card required"
              ]}
              icon={<UsersIcon className="w-6 h-6 text-blue-400" />}
            />
            <ProcessStep
              number="02"
              title="Start a Conversation"
              description="Find friends, family, or meet new people. Start chatting and watch the magic happen."
              features={[
                "Find people to chat with",
                "Type in your language",
                "Instant translation appears",
                "Natural conversation flow"
              ]}
              icon={<MessageSquareIcon className="w-6 h-6 text-purple-400" />}
            />
            <ProcessStep
              number="03"
              title="Build Global Connections"
              description="Make friends across the world, stay close to family, and discover new cultures through conversation."
              features={[
                "Connect with anyone, anywhere",
                "Share stories and experiences",
                "Learn about different cultures",
                "Build lasting friendships"
              ]}
              icon={<HeartIcon className="w-6 h-6 text-green-400" />}
            />
          </div>

          {/* Community promise */}
          <div className="text-center bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-2xl border border-slate-700/60 p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HeartIcon className="w-6 h-6 text-pink-400" />
              <span className="text-pink-400 font-semibold">Our Promise</span>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Connect with your first international friend today</h3>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Join thousands of people who have discovered the joy of connecting across cultures.
              Your next best friend might be speaking a different language right now.
            </p>
          </div>
        </div>
      </section>

      {/* PLAYGROUND */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" aria-labelledby="playground-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300 mb-6">
              <PlayIcon className="w-4 h-4" />
              Try it now
            </div>
            <h2 id="playground-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              Test our translation
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">right here, right now</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Type any message and see how accurately we translate it. <strong className="text-slate-200">No signup required</strong> - 
              just pure translation power at your fingertips.
            </p>
          </div>

          <TranslatePlayground />

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>Instant results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="w-4 h-4 text-green-400" />
                <span>95%+ accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full py-10" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="cta-heading" className="sr-only">Get started</h2>
          <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-8 sm:p-12 w-full">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-100 mb-4">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">connect with the world</span>?
              </h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of people who are building friendships and staying close to family across language barriers.
                <strong className="text-slate-200">Start chatting today</strong> - it's completely free to begin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Chatting - It's Free!
              </Link>
              <div className="text-sm text-slate-400">
                ✓ No credit card required ✓ Works in your browser ✓ 50+ languages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonials.ref} className="w-full py-16 sm:py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 mb-6">
              <StarIcon className="w-4 h-4 fill-current" />
              Real stories from real people
            </div>
            <h2 id="testimonials-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              Stories that warm the heart
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Connection beyond language</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-slate-300 text-base font-medium">Loved by people worldwide</span>
            </div>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Every day, people use Lingua Link to <strong className="text-slate-200">reconnect with family</strong>,
              <strong className="text-cyan-300">make new friends</strong>, and <strong className="text-purple-300">discover new cultures</strong>.
              Here are some of their stories.
            </p>
          </div>

          <div className={`reveal ${testimonials.inView ? "is-visible" : ""}`}>
            <TestimonialCarousel
              items={[
                {
                  quote: "I finally got to have a real conversation with my grandmother in Italy! She speaks no English, I speak no Italian, but with Lingua Link we chat every day now. It's brought our family so much closer.",
                  author: "Maria Santos, College Student",
                  avatar: "👩‍🎓"
                },
                {
                  quote: "Met my best friend through Lingua Link! He's from Japan, I'm from Brazil. We've been chatting for 6 months and planning to meet in person. Language was never a barrier to our friendship.",
                  author: "Carlos Rodriguez, Graphic Designer",
                  avatar: "👨‍🎨"
                },
                {
                  quote: "As someone learning Korean, Lingua Link helps me practice with native speakers. I can ask questions in English and understand their Korean responses. It's like having a personal tutor!",
                  author: "Emma Johnson, Language Learner",
                  avatar: "👩‍�"
                },
                {
                  quote: "My daughter married someone from France. Now I can chat with my son-in-law and really get to know him, even though we don't share a language. Family dinners are so much more fun now!",
                  author: "Robert Kim, Retired Teacher",
                  avatar: "👨‍🏫"
                },
                {
                  quote: "I travel a lot for work and always felt isolated. Now I can connect with locals wherever I go. I've made friends in 12 different countries just by being able to chat naturally.",
                  author: "Aisha Patel, Travel Photographer",
                  avatar: "👩‍�"
                },
                {
                  quote: "My gaming group has players from all over the world. Lingua Link lets us coordinate strategies and just hang out together, even though we all speak different languages. Gaming is so much more fun now!",
                  author: "Alex Chen, Software Developer",
                  avatar: "👨‍�"
                },
              ]}
            />
          </div>

          {/* Company logos and social proof */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-slate-400 text-sm mb-6">Trusted by industry leaders across 67 countries</p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-70">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">GT</div>
                  <span className="text-slate-400 text-xs font-medium">GlobalTech</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">SP</div>
                  <span className="text-slate-400 text-xs font-medium">SupportPro</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">IA</div>
                  <span className="text-slate-400 text-xs font-medium">InnovateAI</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">TF</div>
                  <span className="text-slate-400 text-xs font-medium">TechFlow</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">QS</div>
                  <span className="text-slate-400 text-xs font-medium">QuickStart</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">SB</div>
                  <span className="text-slate-400 text-xs font-medium">SecureBank</span>
                </div>
              </div>
            </div>

            {/* Additional social proof */}
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 rounded-2xl border border-slate-700/60 p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">$2.4M+</div>
                  <div className="text-slate-300 text-sm">Additional revenue generated</div>
                  <div className="text-slate-500 text-xs">for our customers this month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">47 sec</div>
                  <div className="text-slate-300 text-sm">Average setup time</div>
                  <div className="text-slate-500 text-xs">from signup to first translation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-slate-300 text-sm">Customer support</div>
                  <div className="text-slate-500 text-xs">with 2-minute response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faq.ref} id="faq" className="w-full py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6">
              <MessageSquareIcon className="w-4 h-4" />
              Got questions? We have answers
            </div>
            <h2 id="faq-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,4vw,3rem)] font-bold text-slate-100 mb-6">
              Everything you need to know
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">before you get started</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Still have questions? Our support team responds in under 2 minutes.
              <strong className="text-slate-200">Chat with us anytime</strong> - we speak your language!
            </p>
          </div>
          <div className={`mt-6 grid md:grid-cols-2 gap-4 md:gap-6 reveal ${faq.inView ? "is-visible" : ""}`}>
            <FaqItem
              q="Is Lingua Link really free to use?"
              a="Yes! You can start chatting and translating messages completely free. We offer a generous free tier that's perfect for staying in touch with family and friends. Premium features are available for heavy users."
            />
            <FaqItem
              q="Do I need to download anything?"
              a="Nope! Lingua Link works directly in your web browser on any device - phone, tablet, or computer. No downloads, no installations, just visit our website and start chatting."
            />
            <FaqItem
              q="What if the person I want to chat with doesn't have Lingua Link?"
              a="That's totally fine! You can use Lingua Link to translate messages and then share them however you normally communicate - text, email, other messaging apps. The translation works for you regardless of what they use."
            />
            <FaqItem
              q="How accurate are the translations?"
              a="Our translations are about 95% accurate and understand context really well. They're not perfect, but they're good enough for natural conversations. Most people are amazed at how well they can communicate!"
            />
            <FaqItem
              q="Which languages can I use?"
              a="We support over 50 languages including Spanish, French, German, Japanese, Chinese, Arabic, Korean, Portuguese, and many more! The app automatically detects what language someone is typing and can translate to any other supported language."
            />
            <FaqItem
              q="Can I use this to learn a new language?"
              a="Absolutely! Many people use Lingua Link to practice with native speakers. You can see both the original message and the translation, which helps you learn naturally through real conversations."
            />
            <FaqItem
              q="Is my privacy protected?"
              a="Yes! We use secure encryption and don't store your personal conversations. Your chats are private and stay between you and the people you're talking with. We take privacy seriously."
            />
            <FaqItem
              q="What if I have problems or need help?"
              a="We're here to help! You can reach out through our support chat, and we'll get back to you quickly. Most questions are answered within a few hours, and we're always happy to help you connect with people around the world."
            />
          </div>
        </div>

      {/* FOOTER */}
      <footer className="w-full py-12 bg-slate-900/80 border-t border-slate-700/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-medium mb-1">© {new Date().getFullYear()} Lingua Link</p>
              <p className="text-slate-500 text-sm">Breaking down language barriers worldwide</p>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <Link
                to="/privacy"
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 font-medium cursor-pointer relative z-20"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 font-medium cursor-pointer relative z-20"
              >
                Terms of Service
              </Link>
              <Link
                to="/features"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-200 font-medium cursor-pointer relative z-20"
              >
                Features
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-lg bg-slate-900 grid place-items-center border border-slate-700/60">
          {icon}
        </div>
        <h3 className="text-slate-100 font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function HowItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-slate-300"><CheckCircle2Icon className="w-4 h-4 mt-1 text-cyan-400" /> {text}</li>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <p className="text-slate-100 font-medium">{title}</p>
      <p className="text-slate-400 text-xs mt-1">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
      <p className="text-slate-200">“{quote}”</p>
      <p className="text-slate-400 text-sm mt-3">— {author}</p>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:bg-slate-700/40 transition-colors">
      <p className="text-slate-100 font-semibold">{q}</p>
      <p className="text-slate-400 text-sm mt-2 leading-relaxed">{a}</p>
    </div>
  );
}

function StatCard({ icon, number, label, description }) {
  return (
    <div className="text-center p-6 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">{number}</div>
      <div className="text-slate-300 font-medium mb-1">{label}</div>
      <div className="text-xs text-slate-400">{description}</div>
    </div>
  );
}

function ProcessStep({ number, title, description, features, icon }) {
  return (
    <div className="relative group">
      {/* Step number */}
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg mr-4">
          {number}
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 group-hover:border-cyan-500/30 transition-colors">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2Icon className="w-3 h-3 text-green-400 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Connector line (except for last item) */}
      {number !== "03" && (
        <div className="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform translate-x-4" />
      )}
    </div>
  );
}

export default LandingPage;
