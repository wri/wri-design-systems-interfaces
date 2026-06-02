import BarChartWithDetailedValue from '@/components/Charts/BarChartWithDetailedValue'
import CumulativeChart from '@/components/Charts/CumulativeChart'
import SectionTitle from '../SectionTitle'

const grossRevenueData = [
  {
    id: 'c9230586-7239-4cca-baab-cf427da23c34',
    reportingPeriod: '1st April- 30th June 2024',
    submissionDate: new Date('2024-07-31T00:00:00.000Z'),
    unit: '$',
    valueNumber: 843715,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '2341ceab-3b32-4831-8118-85c04353271c',
      name: 'Gross revenue',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 5659244,
        },
      ],
    },
  },
  {
    id: '860719a6-00c2-4208-bf23-3558d65a2ecf',
    reportingPeriod: '1st July- 31st December 2024',
    submissionDate: new Date('2025-01-24T00:00:00.000Z'),
    unit: '$',
    valueNumber: 716936,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '2341ceab-3b32-4831-8118-85c04353271c',
      name: 'Gross revenue',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 5659244,
        },
      ],
    },
  },
  {
    id: '6f330af4-0f91-419a-85a2-34cc85fb27dd',
    reportingPeriod: '1st January- June 30th 2025',
    submissionDate: new Date('2025-07-29T00:00:00.000Z'),
    unit: '$',
    valueNumber: 2509998,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '2341ceab-3b32-4831-8118-85c04353271c',
      name: 'Gross revenue',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 5659244,
        },
      ],
    },
  },
  {
    id: 'e374b93a-2a2d-4c60-94f4-800d7f9f2b39',
    reportingPeriod: '1st July- 31st December 2025',
    submissionDate: new Date('2026-01-28T00:00:00.000Z'),
    unit: '$',
    valueNumber: 4172551,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '2341ceab-3b32-4831-8118-85c04353271c',
      name: 'Gross revenue',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 5659244,
        },
      ],
    },
  },
]

const percentageRevenueChange = [
  {
    id: '5d639df0-d126-4b84-8c83-5396afc46385',
    reportingPeriod: '1st April- 30th June 2024',
    submissionDate: new Date('2024-07-30T00:00:00.000Z'),
    unit: '%',
    valueNumber: 0.875,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'FLOAT',
    partnershipId: 'd08c8285-578f-42cd-81f3-13c056f7a26a',
    metric: {
      id: 'f56fd628-ca80-46ab-8f74-7ff7e6cd4563',
      name: 'Percentage revenue change year on year',
      type: 'AVERAGE',
      targets: [
        {
          value: 200,
        },
      ],
    },
  },
  {
    id: 'f0203387-95c2-4de6-ad58-e4cd9a813520',
    reportingPeriod: '1st July- 31st December 2024',
    submissionDate: new Date('2025-01-31T00:00:00.000Z'),
    unit: '%',
    valueNumber: -1.25,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'FLOAT',
    partnershipId: 'd08c8285-578f-42cd-81f3-13c056f7a26a',
    metric: {
      id: 'f56fd628-ca80-46ab-8f74-7ff7e6cd4563',
      name: 'Percentage revenue change year on year',
      type: 'AVERAGE',
      targets: [
        {
          value: 200,
        },
      ],
    },
  },
  {
    id: '3e11c6e7-4839-473f-ae72-58efaf58dd4b',
    reportingPeriod: '1st January- June 30th 2025',
    submissionDate: new Date('2025-07-31T00:00:00.000Z'),
    unit: '%',
    valueNumber: -0.31,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'FLOAT',
    partnershipId: 'd08c8285-578f-42cd-81f3-13c056f7a26a',
    metric: {
      id: 'f56fd628-ca80-46ab-8f74-7ff7e6cd4563',
      name: 'Percentage revenue change year on year',
      type: 'AVERAGE',
      targets: [
        {
          value: 200,
        },
      ],
    },
  },
  {
    id: '9a0d66bb-8b7e-4b44-bfc0-9e0a88c594b7',
    reportingPeriod: '1st July- 31st December 2025',
    submissionDate: new Date('2026-01-30T00:00:00.000Z'),
    unit: '%',
    valueNumber: -0.17,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'FLOAT',
    partnershipId: 'd08c8285-578f-42cd-81f3-13c056f7a26a',
    metric: {
      id: 'f56fd628-ca80-46ab-8f74-7ff7e6cd4563',
      name: 'Percentage revenue change year on year',
      type: 'AVERAGE',
      targets: [
        {
          value: 200,
        },
      ],
    },
  },
]

const Revenues = () => {
  return (
    <div>
      <SectionTitle title='Revenues' />
      <div className='grid grid-cols-1 w-full gap-5'>
        <CumulativeChart
          title='Gross revenue by'
          caption='Gross revenue since working with the company in the partnership period of work as a result of commercial support'
          data={grossRevenueData}
          cumulativeLabel='Cumulative Revenue'
          customChartLegend='Cumulative reported total'
          useCurrencyFormat
        />
        <BarChartWithDetailedValue
          title='Percentage revenue change year on year by'
          caption='Revenue change for the organization since working with the company, which is defined as the percentage change in an annualized metric over two comparable periods, most often the current and prior period'
          data={percentageRevenueChange}
          averageLabel='Average change'
          chartKey='Percentage revenue change year on year'
          referenceLineLabel='Average'
          usePercentageFormat
        />
      </div>
    </div>
  )
}

export default Revenues
