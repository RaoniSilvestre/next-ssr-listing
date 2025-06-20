import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";


type Item = {
  id: number,
  name: string,
  email: string,
  role: string
  status: string,
  joinDate: string
}

export default function Tabela({ itens }: { itens: Item[] }) {
  return (
    < div className="rounded-md border" >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Join Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itens.length > 0 ? (
            itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-sm">{item.id}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.joinDate}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No users found matching your search criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div >
  )
}
