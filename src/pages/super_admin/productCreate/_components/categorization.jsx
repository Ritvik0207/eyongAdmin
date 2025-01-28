<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import PropTypes from "prop-types";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
<<<<<<< HEAD
} from '@/components/ui/form';
=======
} from "@/components/ui/form";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
<<<<<<< HEAD
} from '@/components/ui/select';
import { useGetAllCategories } from '@/features/categories/hooks/useCategory';
import { useGetSubcategoryByCategoryId } from '@/features/subcategories/hooks/useSubcategory';
import { useEffect, useState } from 'react';
import {
  useGetAllShops,
  useShopBySellerId,
} from '@/features/shop/hooks/useShop';
import useAuthenticationStore from '@/store/useAuthenticationStore';
=======
} from "@/components/ui/select";
import { useGetAllCategories } from "@/features/categories/hooks/useCategory";
import { useGetSubcategoryByCategoryId } from "@/features/subcategories/hooks/useSubcategory";
import { useEffect, useState } from "react";
import {
  useGetAllShops,
  useShopBySellerId,
} from "@/features/shop/hooks/useShop";
import useAuthenticationStore from "@/store/useAuthenticationStore";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export function Categorization({ form }) {
  const { user } = useAuthenticationStore();
  const sellerId = user?.id;
<<<<<<< HEAD
  const isSuperAdmin = user?.role === 'Super_Admin';
=======
  const isSuperAdmin = user?.role === "Super_Admin";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  const { data: categories = [] } = useGetAllCategories();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    data: subcategories = [],
    isLoading,
    refetch: fetchSubcategories,
  } = useGetSubcategoryByCategoryId(selectedCategory);

  useEffect(() => {
    if (selectedCategory) {
      fetchSubcategories();
    }
  }, [selectedCategory, fetchSubcategories]);

  const { data: shops = [] } = useGetAllShops();
  const { data: shopOfSeller = [] } = useShopBySellerId(sellerId);

  return (
<<<<<<< HEAD
    <div className='space-y-4'>
      <FormField
        control={form.control}
        name='category'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Category<span className='text-red-500'>*</span>
            </FormLabel>
=======
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedCategory(value);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
<<<<<<< HEAD
                  <SelectValue placeholder='Select a category' />
=======
                  <SelectValue placeholder="Select a category" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Choose the main category for your product.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
<<<<<<< HEAD
        name='subcategory'
=======
        name="subcategory"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        render={({ field }) => (
          <FormItem>
            <FormLabel>Subcategory</FormLabel>
            <Select
              onValueChange={field.onChange}
<<<<<<< HEAD
              defaultValue={field.value || ''}
=======
              defaultValue={field.value}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
              disabled={!selectedCategory || isLoading}
            >
              <FormControl>
                <SelectTrigger>
<<<<<<< HEAD
                  <SelectValue placeholder='Select a subcategory' />
=======
                  <SelectValue placeholder="Select a subcategory" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {subcategories.map((subcategory) => (
                  <SelectItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Choose a subcategory for your product (optional).
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
<<<<<<< HEAD
        name='shop'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Shop<span className='text-red-500'>*</span>
            </FormLabel>
=======
        name="shop"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Shop</FormLabel>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            {isSuperAdmin ? (
              // Shop Selection for Super Admin
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
<<<<<<< HEAD
                    <SelectValue placeholder='Select a shop' />
=======
                    <SelectValue placeholder="Select a shop" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {shops.map((shop) => (
                    <SelectItem key={shop.id} value={shop.id}>
                      {shop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              // Pre-filled and unmodifiable Shop for Seller Admin
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
<<<<<<< HEAD
                    <SelectValue placeholder='Select a shop' />
=======
                    <SelectValue placeholder="Select a shop" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {shopOfSeller.map((shop) => (
                    <SelectItem key={shop.id} value={shop.id}>
                      {shop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <FormDescription>
<<<<<<< HEAD
              {'Choose the shop for this product.'}
=======
              {"Choose the shop for this product."}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

Categorization.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
  }).isRequired,
};
