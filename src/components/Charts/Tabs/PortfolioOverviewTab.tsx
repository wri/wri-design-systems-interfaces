import CardContainer from '../CardContainer'
import PieChart from '../PieChart'
import SectionTitle from '../SectionTitle'

const perCountryData = [
  {
    name: 'Kenya',
    value: 11,
    color: '#7485F7',
  },
  {
    name: 'South Africa',
    value: 10,
    color: '#18CD49',
  },
  {
    name: 'Vietnam',
    value: 10,
    color: '#FFC506',
  },
  {
    name: 'Indonesia',
    value: 11,
    color: '#E72828',
  },
  {
    name: 'Colombia',
    value: 10,
    color: '#C9C9C9',
  },
  {
    name: 'Ethiopia',
    value: 11,
    color: '#9333ea',
  },
]

const PortfolioOverviewTab = () => {
  return (
    <div>
      <SectionTitle title='Portfolio Composition' />
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 w-full'>
        <CardContainer title='Startups by country'>
          <PieChart data={perCountryData} />
        </CardContainer>
      </div>
    </div>
  )
}

export default PortfolioOverviewTab
