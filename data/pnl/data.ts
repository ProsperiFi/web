import type { ProfitAndLoss } from "@/types/ProfitAndLoss"

const pnlData: {
    [year: number]: {
        [month: string]: ProfitAndLoss
    }
} = {
    [2025]: {
        "january": {
            revenues: {
                income: 0
            }
        }
    }
}

export default pnlData
