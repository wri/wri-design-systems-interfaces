export type ReportItem = {
  id: string
  metric: {
    id: string
    name: string
    type: string | 'CUMULATIVE' | 'AVERAGE' | 'LATEST' | 'VALUE'
    targets: {
      value: number | null
    }[]
  }
  partnershipId: string
  valueNumber: number | null
  valueBoolean: boolean | null
  valueString: string | null
  valueFormat: string | 'INT' | 'FLOAT' | 'BOOLEAN' | 'STRING' | 'JSON_STRING'
  unit: string | null
  submissionDate: Date
  reportingPeriod: string
}
