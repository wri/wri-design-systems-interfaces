import { cn } from '@/utils/styles'

const SectionTitle = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => {
  return (
    <div className={cn('mb-5 flex items-center gap-4', className)}>
      <h2 className='text-accessible-text-on-primary-mids text-2xl font-bold'>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
