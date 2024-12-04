import t from '@/functions/t';
import bsData from '@/data/bs/data';
import BalanceSheetView from '@/components/BalanceSheetView';

export const metadata = {
  title: `${t("title_bs", "finance")} | ${t("app_name")}`,
  description: t("app_description"),
  openGraph: {
    title: `${t("title_bs", "finance")} | ${t("app_name")}`,
  },
}

export default function BalanceSheetLive() {
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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start text-center">
        <h1>{t("title_bs", "finance")} - {monthTranslated} {year}</h1>
        <BalanceSheetView data={bsData[year][month]} />
      </main>
    </div>
  );
}
