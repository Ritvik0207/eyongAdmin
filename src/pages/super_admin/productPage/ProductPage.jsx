<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '@/features/products/hooks/useProducts';
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/features/products/hooks/useProducts";
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
  getSortedRowModel,
  useReactTable,
<<<<<<< HEAD
} from '@tanstack/react-table';
import { Loader } from '@/components/common/loader';
import { ROUTES } from '@/constants/routes';
import { Badge } from '@/components/ui/badge';
=======
} from "@tanstack/react-table";
import { Loader } from "@/components/common/loader";
import { ROUTES } from "@/constants/routes";
import { Badge } from "@/components/ui/badge"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

// Custom debounce hook with cleanup
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export function ProductPage() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(() => {
<<<<<<< HEAD
    const savedPage = sessionStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [sorting, setSorting] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
=======
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [sorting, setSorting] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const searchInputRef = React.useRef(null);
  const limit = 10;

  // Save current page to session storage
  React.useEffect(() => {
<<<<<<< HEAD
    sessionStorage.setItem('currentPage', page.toString());
=======
    sessionStorage.setItem("currentPage", page.toString());
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  }, [page]);

  const {
    data = { products: [], pagination: {} },
    isLoading,
    error,
  } = useProducts({
    filter: `page=${page}&limit=${limit}${
<<<<<<< HEAD
      debouncedSearchTerm
        ? `&search=${encodeURIComponent(debouncedSearchTerm)}`
        : ''
=======
      debouncedSearchTerm ? `&search=${encodeURIComponent(debouncedSearchTerm)}` : ""
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    }`,
  });

  // Reset to first page when search term changes
  React.useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) {
      setPage(1);
    }
  }, [debouncedSearchTerm, searchTerm]);

  const { products = [], pagination = {} } = data;
<<<<<<< HEAD
  const { currentPage, totalPages, hasNextPage, hasPrevPage, totalProducts } =
    pagination;
=======
  const { currentPage, totalPages, hasNextPage, hasPrevPage, totalProducts } = pagination;
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

  const handleViewProduct = (productId) => {
    navigate(`/dashboard/products/${productId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    {
<<<<<<< HEAD
      accessorKey: 'name',
      header: 'Product Name',
    },
    {
      accessorKey: 'variants',
      header: 'Variants',
      cell: ({ row }) => row.original.variants?.length || 0,
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: ({ row }) => row.original.category?.name || 'N/A',
    },
    {
      accessorKey: 'subcategory',
      header: 'Subcategory',
      cell: ({ row }) => row.original.subcategory?.name || 'N/A',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
    },
    {
      accessorKey: 'ageGroup',
      header: 'Age Group',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.status === 'published' ? 'success' : 'destructive'
=======
      accessorKey: "name",
      header: "Product Name",
    },
    {
      accessorKey: "variants",
      header: "Variants",
      cell: ({ row }) => row.original.variants?.length || 0,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => row.original.category?.name || 'N/A',
    },
    {
      accessorKey: "subcategory",
      header: "Subcategory",
      cell: ({ row }) => row.original.subcategory?.name || 'N/A',
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "ageGroup",
      header: "Age Group",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.status === "published" ? "success" : "destructive"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          }
        >
          {row.original.status}
        </Badge>
      ),
    },
    {
<<<<<<< HEAD
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button
          variant='ghost'
          size='sm'
          className='flex items-center gap-2'
=======
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
            handleViewProduct(row.original._id);
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
  ];

  const table = useReactTable({
    data: products,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount: totalPages,
  });

  if (isLoading) return <Loader />;
  if (error)
    return (
<<<<<<< HEAD
      <div className='text-center text-red-500'>
=======
      <div className="text-center text-red-500">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        Error loading products: {error.message}
      </div>
    );

  return (
<<<<<<< HEAD
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <h1 className='text-xl font-semibold'>All Products</h1>
        <div className='relative w-full max-w-sm'>
          <div className='flex gap-x-2'>
            <Button
              className='border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white'
              onClick={() => navigate(`${ROUTES.PRODUCT.CREATE}`)}
=======
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-xl font-semibold">All Products</h1>
        <div className="relative w-full max-w-sm">
          <div className="flex gap-x-2">
            <Button
              className="border border-input bg-green-500 shadow-sm hover:bg-green-400 text-white"
              onClick={() => navigate(ROUTES.PRODUCT.CREATE)}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            >
              Create a product
            </Button>
            <Input
              ref={searchInputRef}
<<<<<<< HEAD
              placeholder='Search products...'
              value={searchTerm}
              onChange={handleSearchChange}
              className='w-full'
            />
          </div>
          {isLoading && debouncedSearchTerm && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              <Loader className='w-4 h-4' />
=======
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>
          {isLoading && debouncedSearchTerm && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Loader className="w-4 h-4" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            </div>
          )}
        </div>
      </div>

      {products.length === 0 ? (
<<<<<<< HEAD
        <div className='text-center py-4'>No products found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className='md:hidden space-y-4'>
            {products.map((product) => (
              <div
                key={product._id}
                className='bg-white rounded-lg shadow-md p-4'
              >
                <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Variants:</span>
                    <span>{product.variants?.length || 0}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Category:</span>
                    <span>{product.category?.name || 'N/A'}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Subcategory:</span>
                    <span>{product.subcategory?.name || 'N/A'}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Gender:</span>
                    <span>{product.gender}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Age Group:</span>
                    <span>{product.ageGroup}</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Status:</span>
                    <Badge
                      variant={
                        product.status === 'published'
                          ? 'success'
                          : 'destructive'
=======
        <div className="text-center py-4">No products found</div>
      ) : (
        <>
          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Variants:</span>
                    <span>{product.variants?.length || 0}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span>{product.category?.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subcategory:</span>
                    <span>{product.subcategory?.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gender:</span>
                    <span>{product.gender}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Age Group:</span>
                    <span>{product.ageGroup}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <Badge
                      variant={
                        product.status === "published" ? "success" : "destructive"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                      }
                    >
                      {product.status}
                    </Badge>
                  </div>
                </div>
                <Button
<<<<<<< HEAD
                  className='w-full mt-4 flex items-center justify-center gap-2'
                  onClick={() => handleViewProduct(product._id)}
                >
                  <Eye className='w-4 h-4' />
=======
                  className="w-full mt-4 flex items-center justify-center gap-2"
                  onClick={() => handleViewProduct(product._id)}
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
<<<<<<< HEAD
                        <TableHead
                          key={header.id}
                          className='whitespace-nowrap'
                        >
=======
                        <TableHead key={header.id} className="whitespace-nowrap">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
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
                  {table.getRowModel().rows.map((row) => (
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
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-4'>
        <div className='text-sm text-muted-foreground'>
=======
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <div className="text-sm text-muted-foreground">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          Showing {products.length} items
          {totalProducts ? ` of ${totalProducts} total products` : ''}
          {totalPages ? ` • Page ${currentPage} of ${totalPages}` : ''}
        </div>
<<<<<<< HEAD
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            size='sm'
=======
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={!hasPrevPage || page === 1}
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
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasNextPage || page >= totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ProductPage;
=======
export default ProductPage;
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
