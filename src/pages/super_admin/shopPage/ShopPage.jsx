<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
=======
import React from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
<<<<<<< HEAD
} from '@/components/ui/table';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
=======
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Eye } from "lucide-react";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
<<<<<<< HEAD
} from '@tanstack/react-table';
import { Loader } from '@/components/common/loader';
import { useGetAllShops } from '@/features/shop/hooks/useShop';
import { ROUTES } from '@/constants/routes';
=======
} from "@tanstack/react-table";
import { Loader } from "@/components/common/loader";
import { useGetAllShops } from "@/features/shop/hooks/useShop";
import { ROUTES } from "@/constants/routes";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export function ShopPage() {
  const navigate = useNavigate();
  const { data: shops = [], isLoading, error, refetch } = useGetAllShops();
  const [sorting, setSorting] = React.useState([]);
<<<<<<< HEAD
  const [globalFilter, setGlobalFilter] = React.useState('');
=======
  const [globalFilter, setGlobalFilter] = React.useState("");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

  const handleViewShop = (shopId) => {
    navigate(`/dashboard/shop/${shopId}`);
  };
  const columns = React.useMemo(
    () => [
      {
<<<<<<< HEAD
        accessorKey: '_id',
        header: 'Shop ID',
      },
      {
        accessorKey: 'name',
        header: 'Shop Name',
      },
      {
        accessorKey: 'description',
        header: 'Description',
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
      },
      {
        accessorKey: 'contactEmail',
        header: 'Email',
      },
      {
        accessorKey: 'contactPhone',
        header: 'Phone',
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Button
            variant='ghost'
            size='sm'
            className='flex items-center gap-2'
            onClick={() => navigate(`/dashboard/shops/${row.original._id}`)}
          >
            <Eye className='w-4 h-4' />
=======
        accessorKey: "_id",
        header: "Shop ID",
      },
      {
        accessorKey: "name",
        header: "Shop Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "owner",
        header: "Owner",
      },
      {
        accessorKey: "contactEmail",
        header: "Email",
      },
      {
        accessorKey: "contactPhone",
        header: "Phone",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => navigate(`/dashboard/shops/${row.original._id}`)}
          >
            <Eye className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            View
          </Button>
        ),
      },
    ],
    [navigate]
  );

  const table = useReactTable({
    data: shops,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <Loader />;
  if (error)
    return (
<<<<<<< HEAD
      <div className='text-red-500'>Error loading shops: {error.message}</div>
=======
      <div className="text-red-500">Error loading shops: {error.message}</div>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    );

  const filteredRows = table.getRowModel().rows;

  return (
<<<<<<< HEAD
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <h1 className='text-xl font-semibold'>All Shops</h1>
        <div className='relative w-full max-w-sm flex gap-x-2'>
          <Button
            className='border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white'
=======
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-xl font-semibold">All Shops</h1>
        <div className="relative w-full max-w-sm flex gap-x-2">
          <Button
            className="border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            onClick={() => navigate(ROUTES.SHOP.CREATE)}
          >
            Create a shop
          </Button>
          <Input
<<<<<<< HEAD
            placeholder='Search shop...'
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className='max-w-sm'
=======
            placeholder="Search shop..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="max-w-sm"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          />
        </div>
      </div>

      {filteredRows.length === 0 ? (
<<<<<<< HEAD
        <div className='text-center py-4'>No shops found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className='md:hidden space-y-4'>
            {filteredRows.map((row) => (
              <div key={row.id} className='bg-white rounded-lg shadow-md p-4'>
                <h3 className='font-semibold text-lg mb-2'>
                  Shop ID: {row.original._id}
                </h3>
                <p className='text-sm text-gray-600 mb-1'>
                  Shop Name: {row.original.name}
                </p>
                <p className='text-sm text-gray-600 mb-1'>
                  Owner: {row.original.owner}
                </p>
                <p className='text-sm text-gray-600 mb-1'>
                  Description: {row.original.description}
                </p>
                <div className='text-sm text-gray-600 mb-1'>
                  Email: {row.original.contactEmail}
                </div>
                <div className='text-sm text-gray-600 mb-1'>
                  Phone: {row.original.contactPhone}
                </div>
                <Button
                  className='w-full flex items-center justify-center gap-2'
                  onClick={() => handleViewShop(row.original._id)}
                >
                  <Eye className='w-4 h-4' />
=======
        <div className="text-center py-4">No shops found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {filteredRows.map((row) => (
              <div key={row.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Shop ID: {row.original._id}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Shop Name: {row.original.name}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Owner: {row.original.owner}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Description: {row.original.description}
                </p>
                <div className="text-sm text-gray-600 mb-1">
                  Email: {row.original.contactEmail}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Phone: {row.original.contactPhone}
                </div>
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleViewShop(row.original._id)}
                >
                  <Eye className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                  View Details
                </Button>
              </div>
            ))}
          </div>

          {/* Desktop view */}
<<<<<<< HEAD
          <div className='rounded-md border shadow-md overflow-hidden hidden md:block'>
            <div className='overflow-x-auto'>
=======
          <div className="rounded-md border shadow-md overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
<<<<<<< HEAD
                          className='whitespace-nowrap'
=======
                          className="whitespace-nowrap"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              className={
                                header.column.getCanSort()
<<<<<<< HEAD
                                  ? 'cursor-pointer select-none flex items-center gap-2'
                                  : ''
=======
                                  ? "cursor-pointer select-none flex items-center gap-2"
                                  : ""
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                              }
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
<<<<<<< HEAD
                              {header.column.getIsSorted() === 'asc' && (
                                <ChevronUp className='w-4 h-4' />
                              )}
                              {header.column.getIsSorted() === 'desc' && (
                                <ChevronDown className='w-4 h-4' />
=======
                              {header.column.getIsSorted() === "asc" && (
                                <ChevronUp className="w-4 h-4" />
                              )}
                              {header.column.getIsSorted() === "desc" && (
                                <ChevronDown className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                              )}
                            </div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {filteredRows.map((row) => (
<<<<<<< HEAD
                    <TableRow key={row.id} className='hover:bg-gray-50'>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className='whitespace-nowrap'>
=======
                    <TableRow key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="whitespace-nowrap">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </>
      )}

<<<<<<< HEAD
      <div className='flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground text-center sm:text-left'>
          Showing{' '}
          {table.getState().pagination.pageSize *
            table.getState().pagination.pageIndex +
            1}{' '}
          to{' '}
=======
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground text-center sm:text-left">
          Showing{" "}
          {table.getState().pagination.pageSize *
            table.getState().pagination.pageIndex +
            1}{" "}
          to{" "}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          {Math.min(
            table.getState().pagination.pageSize *
              (table.getState().pagination.pageIndex + 1),
            table.getFilteredRowModel().rows.length
<<<<<<< HEAD
          )}{' '}
          of {table.getFilteredRowModel().rows.length} shops
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
=======
          )}{" "}
          of {table.getFilteredRowModel().rows.length} shops
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
<<<<<<< HEAD
            variant='outline'
            size='sm'
=======
            variant="outline"
            size="sm"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
