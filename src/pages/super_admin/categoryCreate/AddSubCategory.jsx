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
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useCreateSubCategory } from '@/features/subcategories/hooks/useSubcategory';
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ROUTES } from "@/constants/routes";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useCreateSubCategory } from "@/features/subcategories/hooks/useSubcategory";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

const subCategorySchema = z.object({
  subCategories: z
    .array(
      z.object({
        name: z
          .string()
<<<<<<< HEAD
          .min(1, 'Subcategory name is required')
          .max(50, 'Cannot exceed 50 characters'),
        description: z
          .string()
          .max(200, 'Cannot exceed 200 characters')
=======
          .min(1, "Subcategory name is required")
          .max(50, "Cannot exceed 50 characters"),
        description: z
          .string()
          .max(200, "Cannot exceed 200 characters")
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
          .optional(),
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
      })
    )
<<<<<<< HEAD
    .nonempty('At least one subcategory is required.'),
=======
    .nonempty("At least one subcategory is required."),
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
});

export function AddSubCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { mutate: createSubCategory } = useCreateSubCategory();

  const form = useForm({
    resolver: zodResolver(subCategorySchema),
    defaultValues: {
      subCategories: [
        {
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
      ],
    },
  });

  const addSubCategory = async (data) => {
    const isValid = await form.trigger();
    if (!isValid) {
      toast({
<<<<<<< HEAD
        title: 'Validation Error',
        description: 'Please fill all mandatory fields before submitting.',
        variant: 'destructive',
=======
        title: "Validation Error",
        description: "Please fill all mandatory fields before submitting.",
        variant: "destructive",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      });
      return;
    }
    try {
      for (const subCategory of data.subCategories) {
        await createSubCategory({
          ...subCategory,
          category: categoryId,
        });
      }
<<<<<<< HEAD
      navigate(`${ROUTES.SPECIFICCATEGORY.replace(':categoryId', categoryId)}`);
    } catch (error) {
      console.error('Error adding subcategories:', error);
      alert('Failed to add subcategories.');
    }
  };

  const subCategories = form.watch('subCategories');
  const [newKeywords, setNewKeywords] = useState(subCategories.map(() => ''));

  const addSubCategoryField = () => {
    form.setValue('subCategories', [
      ...subCategories,
      {
        name: '',
        description: '',
        isActive: true,
        displayOrder: 0,
        slug: '',
        metaTitle: '',
        metaDescription: '',
        keywords: [],
      },
    ]);
    setNewKeywords([...newKeywords, '']);
=======
      navigate(ROUTES.SPECIFICCATEGORY.replace(":categoryId", categoryId));
    } catch (error) {
      console.error("Error adding subcategories:", error);
      alert("Failed to add subcategories.");
    }
  };

  const subCategories = form.watch("subCategories");
  const [newKeywords, setNewKeywords] = useState(subCategories.map(() => ""));

  const addSubCategoryField = () => {
    form.setValue("subCategories", [
      ...subCategories,
      {
        name: "",
        description: "",
        isActive: true,
        displayOrder: 0,
        slug: "",
        metaTitle: "",
        metaDescription: "",
        keywords: [],
      },
    ]);
    setNewKeywords([...newKeywords, ""]);
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  };

  const removeSubCategory = (index) => {
    const updated = [...subCategories];
    updated.splice(index, 1);
<<<<<<< HEAD
    form.setValue('subCategories', updated);
=======
    form.setValue("subCategories", updated);
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    setNewKeywords(newKeywords.filter((_, i) => i !== index));
  };

  const addKeyword = (index, keyword) => {
    const updated = [...subCategories];
    updated[index].keywords.push(keyword);
<<<<<<< HEAD
    form.setValue('subCategories', updated);
    setNewKeywords(newKeywords.map((kw, i) => (i === index ? '' : kw)));
=======
    form.setValue("subCategories", updated);
    setNewKeywords(newKeywords.map((kw, i) => (i === index ? "" : kw)));
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  };

  const removeKeyword = (index, keywordIndex) => {
    const updated = [...subCategories];
    updated[index].keywords.splice(keywordIndex, 1);
<<<<<<< HEAD
    form.setValue('subCategories', updated);
=======
    form.setValue("subCategories", updated);
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  };

  const parseNumber = (value) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed;
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
          <CardTitle className='text-2xl'>Add Subcategories</CardTitle>
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
          <CardTitle className="text-2xl">Add Subcategories</CardTitle>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(addSubCategory)}
<<<<<<< HEAD
              className='space-y-6'
            >
              {subCategories.map((_, index) => (
                <div key={index} className='p-4 border rounded-md space-y-4'>
=======
              className="space-y-6"
            >
              {subCategories.map((_, index) => (
                <div key={index} className="p-4 border rounded-md space-y-4">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                  <FormField
                    control={form.control}
                    name={`subCategories.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Subcategory Name
<<<<<<< HEAD
                          <span className='text-red-500'>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter subcategory name'
=======
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter subcategory name"
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
                    name={`subCategories.${index}.description`}
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
                    name={`subCategories.${index}.slug`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
<<<<<<< HEAD
                          Slug<span className='text-red-500'>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder='Enter slug' {...field} />
=======
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
                    name={`subCategories.${index}.metaTitle`}
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
                    name={`subCategories.${index}.metaDescription`}
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
                    name={`subCategories.${index}.keywords`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <div className='space-y-2'>
                            <div className='flex flex-wrap gap-2'>
                              {field.value.map((keyword, keywordIndex) => (
                                <div
                                  key={keywordIndex}
                                  className='flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded-md'
                                >
                                  <span>{keyword}</span>
                                  <X
                                    className='cursor-pointer'
=======
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                              {field.value.map((keyword, keywordIndex) => (
                                <div
                                  key={keywordIndex}
                                  className="flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded-md"
                                >
                                  <span>{keyword}</span>
                                  <X
                                    className="cursor-pointer"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                                    size={16}
                                    onClick={() =>
                                      removeKeyword(index, keywordIndex)
                                    }
                                  />
                                </div>
                              ))}
                            </div>
<<<<<<< HEAD
                            <div className='flex space-x-2 mt-2'>
                              <Input
                                placeholder='Enter keyword'
=======
                            <div className="flex space-x-2 mt-2">
                              <Input
                                placeholder="Enter keyword"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                                value={newKeywords[index]}
                                onChange={(e) =>
                                  setNewKeywords(
                                    newKeywords.map((kw, i) =>
                                      i === index ? e.target.value : kw
                                    )
                                  )
                                }
                              />
                              <Button
<<<<<<< HEAD
                                size='sm'
                                type='button' // Change type to "button" to prevent form submission
=======
                                size="sm"
                                type="button" // Change type to "button" to prevent form submission
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                                onClick={() => {
                                  addKeyword(index, newKeywords[index]);
                                }}
                              >
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
                    name={`subCategories.${index}.isActive`}
                    render={({ field }) => (
<<<<<<< HEAD
                      <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                        <div className='space-y-0.5'>
                          <FormLabel className='text-base font-medium'>
=======
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
                    name={`subCategories.${index}.displayOrder`}
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
                              field.onChange(parseNumber(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
<<<<<<< HEAD
                    variant='destructive'
=======
                    variant="destructive"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    onClick={() => removeSubCategory(index)}
                  >
                    Remove Subcategory
                  </Button>
                </div>
              ))}
              <Button
                onClick={addSubCategoryField}
<<<<<<< HEAD
                className='mt-4 bg-blue-500 text-white hover:bg-blue-600'
                type='button'
=======
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
                type="button"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
              >
                Add Subcategory
              </Button>

<<<<<<< HEAD
              <div className='absolute bottom-4 right-4'>
                <Button
                  size='lg'
                  type='submit'
                  className='bg-black text-white hover:bg-gray-800'
=======
              <div className="absolute bottom-4 right-4">
                <Button
                  size="lg"
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddSubCategory;
