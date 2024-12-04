import type { BalanceSheet } from "@/types/BalanceSheet"

const bsData: {
    [year: number]: {
        [month: string]: BalanceSheet
    }
} = {
    [2025]: {
        "january": {
          assets: {
            cash_equivalents: 0,
            securities: 0
          }
        }
    }
}

export default bsData
