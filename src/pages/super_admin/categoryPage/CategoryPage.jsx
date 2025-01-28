<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
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
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
=======
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { useGetAllCategories } from '@/features/categories/hooks/useCategory';
import { Loader } from '@/components/common/loader';
=======
} from "@tanstack/react-table";
import { useGetAllCategories } from "@/features/categories/hooks/useCategory";
import { Loader } from "@/components/common/loader";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export function CategoryPage() {
  const navigate = useNavigate();
  const { data: categories = [], isLoading, error } = useGetAllCategories();
  const [sorting, setSorting] = React.useState([]);
<<<<<<< HEAD
  const [globalFilter, setGlobalFilter] = React.useState('');
=======
  const [globalFilter, setGlobalFilter] = React.useState("");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

  const handleViewCategory = (categoryId) => {
    navigate(`/dashboard/categories/${categoryId}`);
  };

  const columns = React.useMemo(
    () => [
      {
<<<<<<< HEAD
        accessorKey: 'name',
        header: 'Category Name',
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
      },
      {
        accessorKey: 'productsCount',
        header: 'Products Count',
      },
      {
        accessorKey: 'isActive',
        header: 'Status',
        cell: ({ row }) => (
          <Badge variant={row.original.isActive ? 'success' : 'secondary'}>
            {row.original.isActive ? 'Active' : 'Inactive'}
=======
        accessorKey: "name",
        header: "Category Name",
      },
      {
        accessorKey: "gender",
        header: "Gender",
      },
      {
        accessorKey: "productsCount",
        header: "Products Count",
      },
      {
        accessorKey: "isActive",
        header: "Status",
        cell: ({ row }) => (
          <Badge variant={row.original.isActive ? "success" : "secondary"}>
            {row.original.isActive ? "Active" : "Inactive"}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          </Badge>
        ),
      },
      {
<<<<<<< HEAD
        accessorKey: 'subCategories',
        header: 'Subcategories',
        cell: ({ row }) => {
          const subCategories =
            row.original.subCategories?.map((sub) => sub.subCategoryName) || [];
          return subCategories.length ? subCategories.join(', ') : '-';
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Button
            variant='ghost'
            size='sm'
            className='flex items-center gap-2'
=======
        accessorKey: "subCategories",
        header: "Subcategories",
        cell: ({ row }) => {
          const subCategories =
            row.original.subCategories?.map((sub) => sub.subCategoryName) || [];
          return subCategories.length ? subCategories.join(", ") : "-";
        },
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            onClick={(e) => {
              e.stopPropagation();
              handleViewCategory(row.original._id);
            }}
          >
<<<<<<< HEAD
            <Eye className='w-4 h-4' />
=======
            <Eye className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            View
          </Button>
        ),
      },
    ],
    [handleViewCategory]
  );

  const table = useReactTable({
    data: categories,
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
      <p className='text-center text-red-500'>
=======
      <p className="text-center text-red-500">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        Error loading categories: {error.message}
      </p>
    );

  const filteredRows = table.getRowModel().rows;

  return (
<<<<<<< HEAD
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>All Categories</h1>
        <div className='flex gap-x-2'>
          <Button
            className='border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white'
            onClick={() => navigate(`${ROUTES.CATEGORY_CREATE}`)}
=======
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">All Categories</h1>
        <div className="flex gap-x-2">
          <Button
            className="border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white"
            onClick={() => navigate(ROUTES.CATEGORY_CREATE)}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          >
            Create a category
          </Button>
          <Input
<<<<<<< HEAD
            placeholder='Search categories...'
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className='max-w-sm'
=======
            placeholder="Search categories..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="max-w-sm"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          />
        </div>
      </div>

      {filteredRows.length === 0 ? (
<<<<<<< HEAD
        <div className='text-center py-4'>No categories found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className='md:hidden space-y-4'>
            {filteredRows.map((row) => (
              <div key={row.id} className='bg-white rounded-lg shadow-md p-4'>
                <h3 className='font-semibold text-lg mb-2'>
                  {row.original.name}
                </h3>
                <p className='text-sm text-gray-600 mb-1'>
                  Gender: {row.original.gender || '-'}
                </p>
                <div className='text-sm text-gray-600 mb-1'>
                  Status:{' '}
                  <Badge
                    variant={row.original.isActive ? 'success' : 'secondary'}
                  >
                    {row.original.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className='text-sm text-gray-600 mb-1'>
                  Products: {row.original.productsCount || 0}
                </p>
                <p className='text-sm text-gray-600 mb-3'>
                  Subcategories:{' '}
                  {row.original.subCategories
                    ?.map((sub) => sub.subCategoryName)
                    .join(', ') || '-'}
                </p>
                <Button
                  className='w-full flex items-center justify-center gap-2'
                  onClick={() => handleViewCategory(row.original._id)}
                >
                  <Eye className='w-4 h-4' />
=======
        <div className="text-center py-4">No categories found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {filteredRows.map((row) => (
              <div key={row.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {row.original.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Gender: {row.original.gender || "-"}
                </p>
                <div className="text-sm text-gray-600 mb-1">
                  Status:{" "}
                  <Badge
                    variant={row.original.isActive ? "success" : "secondary"}
                  >
                    {row.original.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Products: {row.original.productsCount || 0}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Subcategories:{" "}
                  {row.original.subCategories
                    ?.map((sub) => sub.subCategoryName)
                    .join(", ") || "-"}
                </p>
                <Button
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleViewCategory(row.original._id)}
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
          <div className='rounded-md border hidden md:block'>
=======
          <div className="rounded-md border hidden md:block">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
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
                            {header.column.getIsSorted() &&
<<<<<<< HEAD
                              (header.column.getIsSorted() === 'asc' ? (
                                <ChevronUp className='w-4 h-4' />
                              ) : (
                                <ChevronDown className='w-4 h-4' />
=======
                              (header.column.getIsSorted() === "asc" ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                              ))}
                          </div>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {filteredRows.length > 0 ? (
                  filteredRows.map((row) => (
<<<<<<< HEAD
                    <TableRow key={row.id} className='hover:bg-gray-50'>
=======
                    <TableRow key={row.id} className="hover:bg-gray-50">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
<<<<<<< HEAD
                    <TableCell colSpan={columns.length} className='text-center'>
=======
                    <TableCell colSpan={columns.length} className="text-center">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                      No categories found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </>
      )}
<<<<<<< HEAD
      <div className='flex items-center justify-between space-x-2 py-4'>
        <div className='text-sm text-muted-foreground'>
          Showing {filteredRows.length} of {categories.length} categories
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
=======
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Showing {filteredRows.length} of {categories.length} categories
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

export default CategoryPage;
