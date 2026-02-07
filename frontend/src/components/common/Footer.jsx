function Footer() {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-center mb-4">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-gray-600 hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm">© CyberSakshar 2026</p>
      </div>
    </footer>
  )
}

export default Footer
