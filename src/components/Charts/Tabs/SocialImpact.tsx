import CardContainer from '../CardContainer'
import BarChart from '@/components/Charts/BarChart'
import SectionTitle from '../SectionTitle'
import BarListChart from '@/components/Charts/BarListChart'
import { getThemedColor } from '@worldresources/wri-design-systems'

const twoXGenderCriteriaData = [
  {
    name: 'Ethiopia',
    value: 100,
  },
  {
    name: 'Indonesia',
    value: 100,
  },
  {
    name: 'Kenya',
    value: 100,
  },
  {
    name: 'Colombia',
    value: 90,
  },
  {
    name: 'South Africa',
    value: 90,
  },
  {
    name: 'Vietnam',
    value: 90,
  },
]

const positivelyAffectedData = [
  {
    x: 'Colombia',
    male: '21985',
    female: '23682',
  },
  {
    x: 'Ethiopia',
    male: '10454',
    female: '9834',
  },
  {
    x: 'Indonesia',
    male: '44047',
    female: '87594',
  },
  {
    x: 'Kenya',
    male: '39687',
    female: '48868',
  },
  {
    x: 'South Africa',
    male: '5440',
    female: '6802',
  },
  {
    x: 'Vietnam',
    male: '83916',
    female: '83638',
  },
]

const SocialImpact = () => {
  return (
    <div>
      <SectionTitle title='Social Impact' />
      <div className='grid grid-cols-1 gap-5 w-full'>
        <CardContainer
          title='2X Gender Criteria'
          caption='Percentage of partnerships per country that achieved the 2X Gender Criteria'
        >
          <BarListChart
            data={twoXGenderCriteriaData}
            series={[
              {
                name: 'name',
                label: '2X Gender Criteria',
                color: getThemedColor('primary', 400),
              },
            ]}
            sortDirection='desc'
            unit='%'
          />
        </CardContainer>
        <CardContainer title='People Positively Affected'>
          <BarChart
            data={positivelyAffectedData}
            series={[
              {
                name: 'male',
                label: 'Male',
                color: getThemedColor('secondary', 400),
              },
              {
                name: 'female',
                label: 'Female',
                color: getThemedColor('primary', 600),
              },
            ]}
            showLegend
          />
        </CardContainer>
      </div>
    </div>
  )
}

export default SocialImpact
