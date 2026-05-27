const NoActivityReported = ({
  message = 'No activity reported',
}: {
  message?: string
}) => <p className='text-sm text-neutral-600'>{message}</p>

export default NoActivityReported
