import t from '@/functions/t';
import Head from 'next/head';

export const metadata = {
  title: t("app_name"),
  description: t("app_description"),
  openGraph: {
    title: t("app_name"),
  },
}

export default function Home() {
  const name = t("app_name");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>{name}</title>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start text-center">
        <h1>{name}</h1>
        <p>{t("tagline")}</p>
      </main>
    </div>
  );
}
