import ProgressCircle from '../ProgressCircle'
import StatisticCard from '../StatisticCard'
import CardContainer from '../CardContainer'
import SectionTitle from '../SectionTitle'

const AboutTheBusiness = () => {
  const investmentReadinessValue = 90
  const moic = 3.94
  const crowdInRatio = 0.18
  const estimatedCommercialPartnerMarketValue = 2998155

  return (
    <div className='flex w-full flex-col'>
      <SectionTitle title='Investment Readiness' />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        <CardContainer title='Investment Readiness'>
          <ProgressCircle value={investmentReadinessValue} unit='%' />
        </CardContainer>
        <div className='flex flex-col gap-5'>
          <StatisticCard
            label='Estimated MOIC'
            value={moic}
            unit='x'
            caption='Multiple on Invested Capital pre-Company Investment'
          />
          <StatisticCard
            label='Crowd-In Ratio'
            value={crowdInRatio}
            unit='x'
            caption='Commercial investment raised to the company budget'
          />
          <StatisticCard
            label='Estimated Commercial Market Value'
            value={estimatedCommercialPartnerMarketValue}
            useFormatMoney
          />
        </div>
      </div>
    </div>
  )
}

export default AboutTheBusiness
