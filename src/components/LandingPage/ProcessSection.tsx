'use client'

const STEPS = [
  {
    label: 'Before you start',
    title: 'Plan your approach',
    description:
      'Plan stakeholder consultations and gather supporting materials.',
  },
  {
    label: 'Step 1',
    title: 'Define the scope',
    description: 'Identify the landscape or geography you want to assess.',
  },
  {
    label: 'Step 2',
    title: 'Assess key success factors',
    description:
      'Evaluate whether the key conditions for restoration are in place.',
  },
  {
    label: 'Step 3',
    title: 'Identify strategies',
    description:
      'Define actions that could address gaps and strengthen conditions for success.',
  },
]

export const ProcessSection = () => {
  return (
    <section className='bg-primary-100 py-16 lg:py-24'>
      <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4'>
            How does the diagnostic process work?
          </h2>
          <p className='text-gray-600 text-base leading-relaxed max-w-2xl mx-auto'>
            The Restoration Diagnostic follows a simple process and is best
            completed collaboratively, bringing together perspectives from
            stakeholders and experts.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {STEPS.map((step, idx) => {
            const headerColor =
              idx === 0 ? 'bg-neutral-200' : 'bg-secondary-100'
            return (
              <div
                key={step.label}
                className='bg-white rounded-lg flex flex-col border border-neutral-400 radius-lg overflow-hidden'
              >
                <div className={`text-xs font-semibold p-2 ${headerColor}`}>
                  {step.label}
                </div>
                <div className='p-3'>
                  <h3 className={`text-base font-bold leading-snug`}>
                    {step.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed flex-1'>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
