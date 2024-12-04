'use client'

import t from '@/functions/t';

export default function ProfitLossLive() {
  const year = 2025
  const month = "january"
  const monthTranslated = t("month_jan")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start text-center">
        <h1>{year} {monthTranslated} {t("title_pnl", "finance")}</h1>
      </main>
    </div>
  );
}
