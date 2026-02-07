import { useNavigate } from 'react-router-dom';

const AppFooter = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Dashboard', path: '/home' },
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
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* ================= MOBILE FOOTER ================= */}
        <div className="md:hidden text-center space-y-4">
          <h3 className="text-white text-sm font-semibold">
            CyberSakshar
          </h3>

          <p className="text-xs text-gray-400">
            Cyber safety & digital awareness platform.
          </p>

          <div className="flex justify-center gap-6 text-xs">
            <button
              onClick={() => navigate('/privacy')}
              className="text-gray-400 hover:text-white"
            >
              Privacy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-gray-400 hover:text-white"
            >
              Terms
            </button>
          </div>

          <div className="flex justify-center gap-5 text-gray-400">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775..." />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12..." />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569..." />
              </svg>
            </a>
          </div>

          <p className="text-[11px] text-gray-500">
            © {currentYear} CyberSakshar
          </p>
        </div>

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div>
              <h3 className="text-white text-base font-semibold mb-2">
                CyberSakshar
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering citizens with cybersecurity awareness and digital safety education.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-5 flex justify-between items-center">
            <p className="text-xs text-gray-500">
              © {currentYear} CyberSakshar. All rights reserved.
            </p>

            <div className="flex gap-5 text-gray-400">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default AppFooter;
