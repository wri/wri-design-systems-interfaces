import CardContainer from '../CardContainer'
import BarChart from '@/components/Charts/BarChart'
import SectionTitle from '../SectionTitle'
import { getColor } from '@/utils/utils'
import CommercialInvestmentsChart from '@/components/Charts/CommercialInvestmentsChart'

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

const Investments = () => {
  return (
    <div>
      <SectionTitle title='Investments' />
      <div className='grid grid-cols-1 w-full gap-5'>
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
            useCurrencyFormat
            showLegend
          />
        </CardContainer>

        <CommercialInvestmentsChart
          title='Commercial investment raised (USD) by'
          caption='New commercial investment or concessional financing which has been secured by the partnership in the partnership period of work as a result of commercial support'
          commercialInvestmentsData={commercialInvestmentsData}
          commercialInvestmentEquityData={commercialInvestmentEquityData}
          commercialInvestmentDebtData={commercialInvestmentDebtData}
          commercialTarget={commercialTarget}
        />
      </div>
    </div>
  )
}

export default Investments
