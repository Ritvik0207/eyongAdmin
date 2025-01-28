<<<<<<< HEAD
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
=======
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
<<<<<<< HEAD
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ROUTES } from '@/constants/routes';
import { ArrowLeft, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import {
  useGetSubcategoryByCategoryId,
  useUpdateSubCategory,
} from '@/features/subcategories/hooks/useSubcategory';
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ROUTES } from "@/constants/routes";
import { ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import {
  useGetSubcategoryByCategoryId,
  useUpdateSubCategory,
} from "@/features/subcategories/hooks/useSubcategory";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

const subCategorySchema = z.object({
  name: z
    .string()
<<<<<<< HEAD
    .min(1, 'Subcategory name is required')
    .max(50, 'Cannot exceed 50 characters'),
  description: z.string().max(200, 'Cannot exceed 200 characters').optional(),
=======
    .min(1, "Subcategory name is required")
    .max(50, "Cannot exceed 50 characters"),
  description: z.string().max(200, "Cannot exceed 200 characters").optional(),
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  isActive: z.boolean().default(true),
  displayOrder: z.number().default(0).optional(),
  slug: z.string(),
  metaTitle: z
    .string()
<<<<<<< HEAD
    .max(60, 'Meta title cannot exceed 60 characters')
    .optional(),
  metaDescription: z
    .string()
    .max(160, 'Meta description cannot exceed 160 characters')
=======
    .max(60, "Meta title cannot exceed 60 characters")
    .optional(),
  metaDescription: z
    .string()
    .max(160, "Meta description cannot exceed 160 characters")
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    .optional(),
  keywords: z.array(z.string()).optional(),
});

export function EditSubCategory() {
  const { categoryId, subCategoryId } = useParams();
  const navigate = useNavigate();
  const { data: subCategories = [] } =
    useGetSubcategoryByCategoryId(categoryId);
  const { mutate: updateSubCategory } = useUpdateSubCategory();

  const subCategory = subCategories.find((sub) => sub._id === subCategoryId);

  const form = useForm({
    resolver: zodResolver(subCategorySchema),
    defaultValues: subCategory || {
<<<<<<< HEAD
      name: '',
      description: '',
      isActive: true,
      displayOrder: 0,
      slug: '',
      metaTitle: '',
      metaDescription: '',
=======
      name: "",
      description: "",
      isActive: true,
      displayOrder: 0,
      slug: "",
      metaTitle: "",
      metaDescription: "",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      keywords: [],
    },
  });

  useEffect(() => {
    if (subCategory) {
      form.reset(subCategory);
    }
  }, [subCategory, form]);

  const handleUpdateSubCategory = async (data) => {
    try {
      await updateSubCategory({ ...data, subCategoryId });
      toast({
<<<<<<< HEAD
        title: 'Success',
        description: 'Subcategory updated successfully',
      });
      navigate(`${ROUTES.SPECIFICCATEGORY.replace(':categoryId', categoryId)}`);
    } catch (error) {
      console.error('Error updating subcategory:', error);
      toast({
        title: 'Error',
        description: 'Failed to update subcategory',
        variant: 'destructive',
=======
        title: "Success",
        description: "Subcategory updated successfully",
      });
      navigate(ROUTES.SPECIFICCATEGORY.replace(":categoryId", categoryId));
    } catch (error) {
      console.error("Error updating subcategory:", error);
      toast({
        title: "Error",
        description: "Failed to update subcategory",
        variant: "destructive",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      });
    }
  };

<<<<<<< HEAD
  const subCategoriesData = form.watch('keywords');
  const [newKeyword, setNewKeyword] = useState('');

  const addKeyword = () => {
    form.setValue('keywords', [...subCategoriesData, newKeyword]);
    setNewKeyword('');
=======
  const subCategoriesData = form.watch("keywords");
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = () => {
    form.setValue("keywords", [...subCategoriesData, newKeyword]);
    setNewKeyword("");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  };

  const removeKeyword = (index) => {
    form.setValue(
<<<<<<< HEAD
      'keywords',
=======
      "keywords",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      subCategoriesData.filter((_, i) => i !== index)
    );
  };

  return (
<<<<<<< HEAD
    <div className='container mx-auto px-4 py-2 space-y-8'>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6'
      >
        <ArrowLeft className='w-8 h-8' />{' '}
        <span className='text-lg'>Back to Category Details</span>
      </Button>
      <Card className='drop-shadow-2xl shadow-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl'>Edit Subcategory</CardTitle>
=======
    <div className="container mx-auto px-4 py-2 space-y-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6"
      >
        <ArrowLeft className="w-8 h-8" />{" "}
        <span className="text-lg">Back to Category Details</span>
      </Button>
      <Card className="drop-shadow-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Edit Subcategory</CardTitle>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleUpdateSubCategory)}
<<<<<<< HEAD
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='name'
=======
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Subcategory Name
<<<<<<< HEAD
                      <span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='Enter subcategory name' {...field} />
=======
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter subcategory name" {...field} />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='description'
=======
                name="description"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
<<<<<<< HEAD
                        placeholder='Enter description'
                        className='resize-none'
=======
                        placeholder="Enter description"
                        className="resize-none"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='slug'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Slug<span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='Enter slug' {...field} />
=======
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Slug<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter slug" {...field} />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='metaTitle'
=======
                name="metaTitle"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl>
<<<<<<< HEAD
                      <Input placeholder='Enter meta title' {...field} />
=======
                      <Input placeholder="Enter meta title" {...field} />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='metaDescription'
=======
                name="metaDescription"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea
<<<<<<< HEAD
                        placeholder='Enter meta description'
                        className='resize-none'
=======
                        placeholder="Enter meta description"
                        className="resize-none"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='keywords'
=======
                name="keywords"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
<<<<<<< HEAD
                      <div className='space-y-2'>
                        <div className='flex flex-wrap gap-2'>
                          {field.value.map((keyword, index) => (
                            <div
                              key={index}
                              className='flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded-md'
                            >
                              <span>{keyword}</span>
                              <X
                                className='cursor-pointer'
=======
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {field.value.map((keyword, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded-md"
                            >
                              <span>{keyword}</span>
                              <X
                                className="cursor-pointer"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                                size={16}
                                onClick={() => removeKeyword(index)}
                              />
                            </div>
                          ))}
                        </div>
<<<<<<< HEAD
                        <div className='flex space-x-2 mt-2'>
                          <Input
                            placeholder='Enter keyword'
                            value={newKeyword}
                            onChange={(e) => setNewKeyword(e.target.value)}
                          />
                          <Button size='sm' type='button' onClick={addKeyword}>
=======
                        <div className="flex space-x-2 mt-2">
                          <Input
                            placeholder="Enter keyword"
                            value={newKeyword}
                            onChange={(e) => setNewKeyword(e.target.value)}
                          />
                          <Button size="sm" type="button" onClick={addKeyword}>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                            Add
                          </Button>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='isActive'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                    <div className='space-y-0.5'>
                      <FormLabel className='text-base font-medium'>
=======
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base font-medium">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        Active Status
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='displayOrder'
=======
                name="displayOrder"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Order</FormLabel>
                    <FormControl>
                      <Input
<<<<<<< HEAD
                        type='number'
                        placeholder='Enter display order'
=======
                        type="number"
                        placeholder="Enter display order"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        value={field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
<<<<<<< HEAD
              <div className='flex justify-between'>
                <Button variant='destructive' onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='bg-black text-white hover:bg-gray-800'
=======
              <div className="flex justify-between">
                <Button variant="destructive" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                >
                  Update Subcategory
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditSubCategory;
