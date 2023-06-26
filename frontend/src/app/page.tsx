import { Chart } from '@/components/Chart';
const API_ENDPOINT = 'http://127.0.0.1:5000/fetch-transactions';

export default async function Home() {
  const response = await fetch(API_ENDPOINT);

  const jsonData = await response.json();
  // console.log(jsonData);
  const initialData = jsonData.result.rows.map(
    (row: { transaction_date: 'string'; transaction_count: 'string' }) => {
      return {
        time: row.transaction_date,
        value: row.transaction_count,
      };
    }
  );
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-10">
      <h1 className="text-5xl font-bold">
        Day Wise Ethereum Transaction Count for the Last 1 year
      </h1>
      <Chart initialData={initialData} />
    </main>
  );
}
