import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = { name: 'User' }; // Mock user data

  const handleLogout = () => {
    navigate('/');
  };

  const features = [
    {
      title: 'Interactive Lessons',
      description: 'Learn about cyber safety through engaging content',
      icon: '📚',
      link: '/lessons',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Take Quiz',
      description: 'Test your knowledge with interactive quizzes',
      icon: '🎯',
      link: '/quiz',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Simulations',
      description: 'Practice in realistic cybersecurity scenarios',
      icon: '🎮',
      link: '/simulations',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Report Complaint',
      description: 'File a cybercrime complaint securely',
      icon: '🚨',
      link: '/complaints',
      color: 'from-rose-500 to-red-600',
    },
    {
      title: 'Get Certificate',
      description: 'Earn certificates for completed courses',
      icon: '🏆',
      link: '/certificate',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      {/* Header */}
      <header className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
            CyberSakshar
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <p className="text-sm text-slate-600">Welcome back,</p>
              <p className="font-bold text-slate-900">{user?.name || 'User'}</p>
            </div>
            <Button 
              variant="secondary" 
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Welcome Section */}
          <div className="mb-12 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-xl ring-1 ring-white/70">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Your Learning Hub
                </div>
                <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
                  Welcome to Your Dashboard
                </h1>
                <p className="mt-3 text-lg text-slate-600">
                  Continue your cyber safety journey. Choose a module below to get started.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <div className="rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-4 text-center text-white shadow-lg">
                  <p className="text-3xl font-black">0</p>
                  <p className="text-sm font-semibold">Lessons Completed</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 text-center text-white shadow-lg">
                  <p className="text-3xl font-black">0</p>
                  <p className="text-sm font-semibold">Certificates Earned</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <h2 className="mb-6 text-2xl font-black text-slate-900">Explore Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  />
                  
                  <div className="relative">
                    <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-amber-600 transition-transform duration-300 group-hover:translate-x-1">
                      Start Now
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="mt-12 rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">🔒 Quick Safety Tip</h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">
                  Always verify the sender's email address before clicking on any links. Phishing attacks often use similar-looking domains to trick you.
                </p>
              </div>
              <Link to="/lessons">
                <Button className="whitespace-nowrap px-8 py-3 text-base font-bold">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-red-50 p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-2xl text-white shadow-lg">
                🚨
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-700">National Cyber Crime Helpline</p>
                <p className="text-2xl font-black text-rose-600">1930</p>
              </div>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hidden font-bold text-rose-600 transition-colors hover:text-rose-700 sm:block"
              >
                Report Online →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t-2 border-slate-200 bg-white/80 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-slate-600">
            © 2024 CyberSakshar. Stay Safe, Stay Informed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
