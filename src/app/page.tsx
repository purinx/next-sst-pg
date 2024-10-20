import { db } from '@/db';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const data = await db.query.messageTable.findMany({
    columns: {
      id: true,
      from: true,
      body: true,
    },
  });

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <main className="flex flex-col flex-grow w-full justify-center py-8 md:px-8 items-center">
        <h1 className="text-3xl font-bold mb-8">Next PG App</h1>
        <div className="flex flex-col max-w-screen w-full md:w-[800px] p-4 flex-grow ">
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          <div className="flex-grow rounded border border-slate-600">
            <table className="h-full table-auto w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left border-slate-600 border-b">
                    ID
                  </th>
                  <th className="p-4 text-left border-slate-600 border-b">
                    From
                  </th>
                  <th className="p-4 text-left border-slate-600 border-b">
                    Body
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((message) => (
                  <tr key={message.id}>
                    <td className="px-4 py-2">{message.id}</td>
                    <td className="px-4 py-2">{message.from}</td>
                    <td className="px-4 py-2">{message.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer className="font-bold flex items-center justify-center bg-gray-900 w-full p-4 md:p-8">
        <a className="underline" href="">
          Github
        </a>
      </footer>
    </div>
  );
}
