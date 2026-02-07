function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Take a quick quiz',
      description: 'Test your current knowledge about cyber safety'
    },
    {
      number: 2,
      title: 'Learn & practice real-life situations',
      description: 'Experience simulated fraud scenarios safely'
    },
    {
      number: 3,
      title: 'Get certified and stay protected',
      description: 'Earn your cyber safety certificate'
    }
  ]

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h3>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
