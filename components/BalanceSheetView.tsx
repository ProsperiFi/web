import type { BalanceSheet } from "@/types/BalanceSheet";

import t from "@/functions/t";
import asCurrency from "@/functions/asCurrency";

export default function BalanceSheetView({ data }: { data: BalanceSheet }) {
  if (!data) return <h1>BS: No data</h1>
  let totalAssets = 0
  let totalLiabilities = 0
  let netValue = 0

  if (data.assets) {
    if (data.assets?.cash_equivalents) { totalAssets += data.assets.cash_equivalents }
    if (data.assets?.securities) { totalAssets += data.assets.securities }
  }

  if (data.liabilities) {
    if (data.liabilities?.debt) { totalLiabilities += data.liabilities.debt }
  }

  netValue = totalAssets - totalLiabilities

  return (
    <>
      {totalAssets > 0 && (
        <table>
          <thead>
            <tr style={{ color: "var(--theme-text-green)" }}><th colSpan={2}>Assets</th></tr>
          </thead>
          <tbody>
            <tr style={{ display: data.assets?.cash_equivalents ? "inherit" : "none" }}>
                <td style={{ color: "var(--theme-text-green)" }}>{t("title_cash_equivalents", "finance")}</td>
                <td style={{ color: "var(--theme-text-green)" }}>{asCurrency(data.assets?.cash_equivalents || 0)}</td>
            </tr>
            <tr style={{ display: data.assets?.securities ? "inherit" : "none" }}>
                <td>Securities</td>
                <td>{asCurrency(data.assets?.securities || 0)}</td>
            </tr>
          </tbody>
        </table>
      )}
      {totalAssets == 0 && (
        <table>
          <thead>
            <tr style={{ color: "var(--theme-text-green)" }}><th>Assets</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--theme-text-green)" }}>No assets currently on Balance Sheet</td>
            </tr>
          </tbody>
        </table>
      )}

      {totalLiabilities > 0 && (
        <table>
          <thead>
            <tr style={{ color: "var(--theme-text-red)" }}><th colSpan={2}>Liabilities</th></tr>
          </thead>
          <tbody>
            <tr style={{ display: data.liabilities?.debt ? "inherit" : "none" }}>
                <td style={{ color: "var(--theme-text-red)" }}>{t("title_debts", "finance")}</td>
                <td style={{ color: "var(--theme-text-red)" }}>{data.liabilities?.debt}</td>
            </tr>
          </tbody>
        </table>
      )}
      {totalLiabilities == 0 && (
        <table>
          <thead>
            <tr style={{ color: "var(--theme-text-red)" }}><th>Liabilities</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--theme-text-red)" }}>No liabilities currently on Balance Sheet</td>
            </tr>
          </tbody>
        </table>
      )}

      <table>
        <tbody>
          <tr style={{ color: "var(--theme-text-blue)" }}>
            <td>Net Value</td>
            <td>{asCurrency(netValue)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
