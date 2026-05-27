'use client'

import BarChart from '@/components/Charts/BarChart'
import BarChartWithDetailedValue from '@/components/Charts/BarChartWithDetailedValue'
import BarListChart from '@/components/Charts/BarListChart'
import CardContainer from '@/components/Charts/CardContainer'
import CommercialInvestmentsChart from '@/components/Charts/CommercialInvestmentsChart'
import CumulativeChart from '@/components/Charts/CumulativeChart'
import PieChart from '@/components/Charts/PieChart'
import SectionTitle from '@/components/Charts/SectionTitle'
import { getColor } from '@/utils/utils'
import { getThemedColor } from '@worldresources/wri-design-systems'

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

const commercialInvestmentsData = [
  {
    id: '7fa0a363-b888-4e20-a899-1819ac05c2b8',
    reportingPeriod: '1st April- 30th June 2024',
    submissionDate: new Date('2024-07-31T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '1166ad30-53d4-4cc4-b00b-8255d2541f29',
      name: 'Commercial investments',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 3000000,
        },
      ],
    },
  },
  {
    id: '46b23cb1-3190-4fa3-9006-6052f1ca8756',
    reportingPeriod: '1st July- 31st December 2024',
    submissionDate: new Date('2025-01-24T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '1166ad30-53d4-4cc4-b00b-8255d2541f29',
      name: 'Commercial investments',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 3000000,
        },
      ],
    },
  },
  {
    id: 'fe5d2db9-d106-4a98-a6c7-cbda59b664e5',
    reportingPeriod: '1st January- June 30th 2025',
    submissionDate: new Date('2025-07-29T00:00:00.000Z'),
    unit: '$',
    valueNumber: 3500000,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '1166ad30-53d4-4cc4-b00b-8255d2541f29',
      name: 'Commercial investments',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 3000000,
        },
      ],
    },
  },
  {
    id: '07ba88df-eb9f-4b27-ba27-f724b77c7241',
    reportingPeriod: '1st July- 31st December 2025',
    submissionDate: new Date('2026-01-28T00:00:00.000Z'),
    unit: '$',
    valueNumber: 5000000,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '1166ad30-53d4-4cc4-b00b-8255d2541f29',
      name: 'Commercial investments',
      type: 'CUMULATIVE',
      targets: [
        {
          value: 3000000,
        },
      ],
    },
  },
]

const commercialInvestmentEquityData = [
  {
    id: '678ed308-cd33-4434-809a-d38d1453f794',
    reportingPeriod: '1st April- 30th June 2024',
    submissionDate: new Date('2024-07-31T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '848ca17e-4e4f-4dbb-b9ae-ff2b5c459d47',
      name: 'Commercial Investment - Equity',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '0d3449ec-87ce-4f0c-9740-4741527282eb',
    reportingPeriod: '1st July- 31st December 2024',
    submissionDate: new Date('2025-01-24T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '848ca17e-4e4f-4dbb-b9ae-ff2b5c459d47',
      name: 'Commercial Investment - Equity',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '681fa972-26d3-4280-a00d-2018c413906f',
    reportingPeriod: '1st January- June 30th 2025',
    submissionDate: new Date('2025-07-29T00:00:00.000Z'),
    unit: '$',
    valueNumber: 3500000,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '848ca17e-4e4f-4dbb-b9ae-ff2b5c459d47',
      name: 'Commercial Investment - Equity',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '74ca9a63-11ce-47a9-b75f-fc7677eb7ac0',
    reportingPeriod: '1st July- 31st December 2025',
    submissionDate: new Date('2026-01-28T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: '848ca17e-4e4f-4dbb-b9ae-ff2b5c459d47',
      name: 'Commercial Investment - Equity',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
]

const commercialInvestmentDebtData = [
  {
    id: 'edff300e-0468-42ac-9a3a-36063461f17b',
    reportingPeriod: '1st April- 30th June 2024',
    submissionDate: new Date('2024-07-31T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: 'aab32167-4db2-4189-a0d5-158a23596435',
      name: 'Commercial Investment - Debt',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '205c170d-841b-4cda-8cbc-9376832400bd',
    reportingPeriod: '1st July- 31st December 2024',
    submissionDate: new Date('2025-01-24T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: 'aab32167-4db2-4189-a0d5-158a23596435',
      name: 'Commercial Investment - Debt',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '44b27ff2-3d41-454d-b9fb-dbd75af5e131',
    reportingPeriod: '1st January- June 30th 2025',
    submissionDate: new Date('2025-07-29T00:00:00.000Z'),
    unit: '$',
    valueNumber: 0,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: 'aab32167-4db2-4189-a0d5-158a23596435',
      name: 'Commercial Investment - Debt',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
  {
    id: '35db6ed1-6ddf-4e0c-a709-0e63aa000a69',
    reportingPeriod: '1st July- 31st December 2025',
    submissionDate: new Date('2026-01-28T00:00:00.000Z'),
    unit: '$',
    valueNumber: 5000000,
    valueBoolean: null,
    valueString: null,
    valueFormat: 'INT',
    partnershipId: '0383b8c4-16d0-4471-88a9-cbd7751f61dd',
    metric: {
      id: 'aab32167-4db2-4189-a0d5-158a23596435',
      name: 'Commercial Investment - Debt',
      type: 'CUMULATIVE',
      targets: [],
    },
  },
]

const commercialTarget = 3000000

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

const commercialInvestmentsPerCountryAndSectorData = [
  {
    x: 'Colombia',
    'Climate smart agriculture': 765000,
    'Food loss and waste': 889000,
    'Renewable energy': 250000,
    'Water resilience': 0,
    'Zero emissions mobility': 20000,
  },
  {
    x: 'Ethiopia',
    'Climate smart agriculture': 8400000,
    'Food loss and waste': 96684,
    'Renewable energy': 0,
    'Water resilience': 0,
    'Zero emissions mobility': 0,
  },
  {
    x: 'Indonesia',
    'Climate smart agriculture': 964227,
    'Food loss and waste': 219375,
    'Renewable energy': 0,
    'Water resilience': 9555,
    'Zero emissions mobility': 0,
  },
  {
    x: 'Kenya',
    'Climate smart agriculture': 2524000,
    'Food loss and waste': 233127,
    'Renewable energy': 370127,
    'Water resilience': 167000,
    'Zero emissions mobility': 19482002,
  },
  {
    x: 'South Africa',
    'Climate smart agriculture': 839331,
    'Food loss and waste': 0,
    'Renewable energy': 1254171,
    'Water resilience': 0,
    'Zero emissions mobility': 556000,
  },
  {
    x: 'Vietnam',
    'Climate smart agriculture': 2200000,
    'Food loss and waste': 0,
    'Renewable energy': 10700000,
    'Water resilience': 0,
    'Zero emissions mobility': 600000,
  },
]

const commercialInvestmentsPerCountryAndSectorKeys = [
  'Climate smart agriculture',
  'Food loss and waste',
  'Renewable energy',
  'Water resilience',
  'Zero emissions mobility',
]

const Charts = () => {
  return (
    <div className='py-10 px-5 bg-neutral-200'>
      <SectionTitle title='Portfolio Composition' />
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 w-full'>
        <CardContainer title='Startups by country'>
          <PieChart data={perCountryData} />
        </CardContainer>
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
            xlabel='Countries'
          />
        </CardContainer>
        <CardContainer title='Commercial Investments'>
          <BarChart
            data={commercialInvestmentsPerCountryAndSectorData}
            series={commercialInvestmentsPerCountryAndSectorKeys.map(
              (item, idx) => ({
                name: item,
                label: item,
                stackId: 'investments',
                color: getColor(idx),
              }),
            )}
            xlabel='Countries'
            useCurrencyFormat
          />
        </CardContainer>
        <CardContainer title='Gross Revenue'>
          <CumulativeChart
            title='Gross revenue by'
            caption='Gross revenue since working with P4G in the partnership period of work as a result of P4G support'
            data={grossRevenueData}
            cumulativeLabel='Cumulative Revenue'
            customChartLegend='Cumulative reported total'
            useCurrencyFormat
          />
        </CardContainer>
        <CardContainer title='Percentage Revenue Change'>
          <BarChartWithDetailedValue
            title='Percentage revenue change year on year by'
            caption='Revenue change for the organization since working with P4G, which is defined as the percentage change in an annualized metric over two comparable periods, most often the current and prior period'
            data={percentageRevenueChange}
            averageLabel='Average change'
            chartKey='Percentage revenue change year on year'
            referenceLineLabel='Average'
            usePercentageFormat
          />
        </CardContainer>
        <CommercialInvestmentsChart
          title='Commercial investment raised (USD) by'
          caption='New commercial investment or concessional financing which has been secured by the partnership in the partnership period of work as a result of P4G support'
          commercialInvestmentsData={commercialInvestmentsData}
          commercialInvestmentEquityData={commercialInvestmentEquityData}
          commercialInvestmentDebtData={commercialInvestmentDebtData}
          commercialTarget={commercialTarget}
        />
      </div>
    </div>
  )
}

export default Charts
