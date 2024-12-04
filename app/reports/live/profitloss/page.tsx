import t from '@/functions/t';

export const metadata = {
  title: `${t("title_pnl", "finance")} | ${t("app_name")}`,
  description: t("app_description"),
  openGraph: {
    title: `${t("title_pnl", "finance")} | ${t("app_name")}`,
  },
}

export default function ProfitLossLive() {
  const year = 2025
  const month: string = "january"
  let monthTranslated = month
  switch(month) {
    case "january": monthTranslated = t("month_jan"); break;
    case "april": monthTranslated = t("month_apr"); break;
    case "july": monthTranslated = t("month_jul"); break;
    case "october": monthTranslated = t("month_oct"); break;
    default:
      break;
  }
  //const monthTranslated = t("month_jan")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start text-center">
        <h1>{t("title_pnl", "finance")} - {monthTranslated} {year}</h1>
      </main>
    </div>
  );
}
