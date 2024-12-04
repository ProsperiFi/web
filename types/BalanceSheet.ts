export type BalanceSheet = {
  assets?: {
      cash_equivalents?: number,
      securities?: number
  },
  liabilities?: {
    debt?: number,
  }
}
