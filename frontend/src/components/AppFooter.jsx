import { useNavigate } from 'react-router-dom';

const AppFooter = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Learn', path: '/learn' },
      { name: 'Quiz', path: '/quiz' },
      { name: 'Simulations', path: '/simulations' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Report Cyber Fraud', path: '/report' },
      { name: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'About CyberSakshar', path: '/about' },
    ],
  };

  return (
    <footer className="relative z-10 bg-white/95 border-t-2 border-slate-300 backdrop-blur-sm shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* ================= MOBILE FOOTER ================= */}
        <div className="md:hidden space-y-6">
          <div className="text-center pb-6 border-b-2 border-slate-300">
            <h3 className="text-xl font-black text-slate-900 mb-2">
              CyberSakshar
            </h3>
            <p className="text-sm text-slate-700 font-semibold">
              Cyber safety & digital awareness platform.
            </p>
          </div>

          <div className="flex justify-center gap-8 text-sm">
            <button
              onClick={() => navigate('/privacy')}
              className="text-slate-700 hover:text-slate-900 font-black transition-colors px-3 py-2 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-300"
            >
              Privacy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-slate-700 hover:text-slate-900 font-black transition-colors px-3 py-2 rounded-lg hover:bg-orange-50 border border-transparent hover:border-orange-300"
            >
              Terms
            </button>
          </div>

          <div className="flex justify-center gap-6 py-6 border-t-2 border-slate-300">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-slate-600 font-bold text-center">
            © {currentYear} CyberSakshar
          </p>
        </div>

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-10 mb-8 pb-8 border-b-2 border-slate-300">

            {/* Brand */}
            <div className="pr-6">
              <h3 className="text-slate-900 text-lg font-black mb-4">
                CyberSakshar
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                Empowering citizens with cybersecurity awareness and digital safety education.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-slate-900 text-sm font-black mb-5 uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-slate-700 hover:text-orange-600 transition-colors font-bold border-l-2 border-transparent hover:border-orange-500 pl-3 hover:pl-4 py-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-slate-900 text-sm font-black mb-5 uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-slate-700 hover:text-orange-600 transition-colors font-bold border-l-2 border-transparent hover:border-orange-500 pl-3 hover:pl-4 py-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-slate-900 text-sm font-black mb-5 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-slate-700 hover:text-orange-600 transition-colors font-bold border-l-2 border-transparent hover:border-orange-500 pl-3 hover:pl-4 py-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex justify-between items-center">
            <p className="text-xs text-slate-700 font-black">
              © {currentYear} CyberSakshar. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default AppFooter;
