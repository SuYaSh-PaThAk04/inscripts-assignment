import  { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
type Order = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submiter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estVal: string;
};

function SpreadSheetTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
const [statusFilter] = useState<'All' | 'Pending' | 'Approved' | 'Completed'>('All');

  const data = useMemo<Order[]>(
    () => [
      {
        id: 1,
        jobRequest: 'Job 1',
        submitted: '2025-06-30',
        status: 'Pending',
        submiter: 'John Doe',
        url: 'https://example.com/job1',
        assigned: 'Jane Smith',
        priority: 'High',
        dueDate: '2025-07-15',
        estVal: '$1000',
      },
    ],
    []
  );

  const columns: ColumnDef<Order>[] = [
    { header: 'Job Request', accessorKey: 'jobRequest' },
    { header: 'Submitted', accessorKey: 'submitted' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Submiter', accessorKey: 'submiter' },
    { header: 'URL', accessorKey: 'url' },
    { header: 'Assigned', accessorKey: 'assigned' },
    { header: 'Priority', accessorKey: 'priority' },
    { header: 'Due Date', accessorKey: 'dueDate' },
    { header: 'Est. Value', accessorKey: 'estVal' },
  ];
  const filteredData = useMemo(() => {
  if (statusFilter === 'All') return data;
  return data.filter((row) => row.status === statusFilter);
}, [data, statusFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4">
   <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
  <thead className="bg-gray-100">
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th
            key={header.id}
            onClick={header.column.getToggleSortingHandler()}
            className="border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase cursor-pointer select-none"
          >
            {flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
            {
              {
                asc: ' 🔼',
                desc: ' 🔽',
              }[header.column.getIsSorted() as string] ?? ''
            }
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr key={row.id} className="hover:bg-gray-50 text-sm text-gray-800">
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} className="border border-gray-300 px-3 py-2 text-left">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default SpreadSheetTable;
