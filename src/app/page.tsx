import BarraDeBusca from "@/components/barraDeBusca";
import Paginacao from "@/components/paginacao";
import Tabela from "@/components/tabela";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


// Sample data - replace with your actual data
const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2023-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'Inactive', joinDate: '2023-03-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', joinDate: '2023-04-05' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', joinDate: '2023-05-12' },
  { id: 6, name: 'Diana Martinez', email: 'diana@example.com', role: 'User', status: 'Inactive', joinDate: '2023-06-18' },
  { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'Moderator', status: 'Active', joinDate: '2023-07-22' },
  { id: 8, name: 'Fiona Garcia', email: 'fiona@example.com', role: 'User', status: 'Active', joinDate: '2023-08-30' },
  { id: 9, name: 'George Miller', email: 'george@example.com', role: 'Admin', status: 'Inactive', joinDate: '2023-09-14' },
  { id: 10, name: 'Helen Rodriguez', email: 'helen@example.com', role: 'User', status: 'Active', joinDate: '2023-10-08' },
  { id: 11, name: 'Ian Thompson', email: 'ian@example.com', role: 'Moderator', status: 'Active', joinDate: '2023-11-25' },
  { id: 12, name: 'Julia Anderson', email: 'julia@example.com', role: 'User', status: 'Inactive', joinDate: '2023-12-03' },
  { id: 13, name: 'Kevin White', email: 'kevin@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-17' },
  { id: 14, name: 'Lisa Taylor', email: 'lisa@example.com', role: 'User', status: 'Active', joinDate: '2024-02-14' },
  { id: 15, name: 'Michael Lee', email: 'michael@example.com', role: 'Moderator', status: 'Inactive', joinDate: '2024-03-21' },
  { id: 16, name: 'Nancy Clark', email: 'nancy@example.com', role: 'User', status: 'Active', joinDate: '2024-04-18' },
  { id: 17, name: 'Oscar Lewis', email: 'oscar@example.com', role: 'Admin', status: 'Inactive', joinDate: '2024-05-25' },
  { id: 18, name: 'Patricia Hall', email: 'patricia@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-06-12' },
];


export default async function Home(props: { searchParams?: Promise<{ query?: string, page?: string }> }) {
  const r = await props?.searchParams

  const { query, page } = r ?? { page: '1', query: '' }

  const currentPage = Number(page ?? '1')

  const filteredData = sampleData.filter(({ name }) => name.includes(query ?? ''))

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex)

  const totalData = Math.ceil(sampleData.length / itemsPerPage)

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">User Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <BarraDeBusca />

          <Tabela itens={currentData} />

          <div className="text-sm text-muted-foreground">
            Showing {currentData.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, sampleData.length)} of {sampleData.length} results
          </div>

          <Paginacao total={totalData} />

        </CardContent>
      </Card>
    </div>
  )
}
