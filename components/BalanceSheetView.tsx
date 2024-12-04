import type { BalanceSheet } from "@/types/BalanceSheet";

import t from "@/functions/t";

export default function BalanceSheetView({ data }: { data: BalanceSheet }) {
  if (!data) return <h1>BS: No data</h1>
  let totalAssets = 0
  let totalLiabilities = 0

  if (data.assets) {
    if (data.assets?.cash_equivalents) { totalAssets += data.assets.cash_equivalents }
    if (data.assets?.securities) { totalAssets += data.assets.securities }
  }

  if (data.liabilities) {
    if (data.liabilities?.debt) { totalLiabilities += data.liabilities.debt }
  }

  return (
    <>
      <h1>Balance Sheet</h1>
      {totalAssets > 0 && (
        <table>
          <thead>
            <tr><th colSpan={2}>Assets</th></tr>
          </thead>
          <tbody>
            <tr style={{ display: data.assets?.cash_equivalents ? "inherit" : "none" }}>
                <td>{t("title_cash_equivalents", "finance")}</td>
                <td>{data.assets?.cash_equivalents}</td>
            </tr>
            <tr style={{ display: data.assets?.securities ? "inherit" : "none" }}>
                <td>Securities</td>
                <td>{data.assets?.securities}</td>
            </tr>
          </tbody>
        </table>
      )}
      {totalAssets == 0 && (
        <table>
          <thead>
            <tr><th>Assets</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>No assets currently on Balance Sheet</td>
            </tr>
          </tbody>
        </table>
      )}

      {totalLiabilities > 0 && (
        <table>
          <thead>
            <tr><th colSpan={2}>Liabilities</th></tr>
          </thead>
          <tbody>
            <tr style={{ display: data.liabilities?.debt ? "inherit" : "none" }}>
                <td>{t("title_debts", "finance")}</td>
                <td>{data.liabilities?.debt}</td>
            </tr>
          </tbody>
        </table>
      )}
      {totalLiabilities == 0 && (
        <table>
          <thead>
            <tr><th>Liabilities</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>No liabilities currently on Balance Sheet</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}
