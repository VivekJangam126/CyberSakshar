function TrustSection() {
  const benefits = [
    'Free for citizens',
    'Works offline',
    'Multilingual support'
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Trust & Safety</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-blue-300 rounded-lg p-4 mb-4">
            <p className="text-lg font-bold text-gray-900 mb-1">Cyber Crime Helpline</p>
            <a href="tel:1930" className="text-3xl font-bold text-blue-600">1930</a>
          </div>

          <div className="space-y-2">
            <a href="#" className="text-blue-600 underline block">Official Cyber Crime Portal</a>
            <a href="#" className="text-blue-600 underline block">CERT-In</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
