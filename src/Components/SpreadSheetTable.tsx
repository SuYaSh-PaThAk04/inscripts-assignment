import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-3 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-3 py-2">
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
