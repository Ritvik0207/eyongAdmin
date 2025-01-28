<<<<<<< HEAD
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
=======
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
<<<<<<< HEAD
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
=======
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
<<<<<<< HEAD
} from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';
import {
  useGetAllCategories,
  useUpdateCategory,
} from '@/features/categories/hooks/useCategory';
import { ROUTES } from '@/constants/routes';
import { toast } from '@/hooks/use-toast';
=======
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import {
  useGetAllCategories,
  useUpdateCategory,
} from "@/features/categories/hooks/useCategory";
import { ROUTES } from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export function CategoryUpdate() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { data: categories = [], isLoading, error } = useGetAllCategories();
  const { mutateAsync: updateCategory } = useUpdateCategory();

  const category = categories.find((category) => category._id === categoryId);

  const [formData, setFormData] = useState({
<<<<<<< HEAD
    name: category?.name || '',
    displayOrder: category?.displayOrder || 1,
    isActive: category?.isActive || false,
    isProductForKids: category?.isProductForKids || false,
    gender: category?.gender || 'Unisex',
=======
    name: category?.name || "",
    displayOrder: category?.displayOrder || 1,
    isActive: category?.isActive || false,
    isProductForKids: category?.isProductForKids || false,
    gender: category?.gender || "Unisex",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  });

  if (isLoading)
    return (
<<<<<<< HEAD
      <div className='flex justify-center items-center h-screen'>
=======
      <div className="flex justify-center items-center h-screen">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        Loading category details...
      </div>
    );
  if (error)
    return (
<<<<<<< HEAD
      <div className='flex justify-center items-center h-screen text-destructive'>
=======
      <div className="flex justify-center items-center h-screen text-destructive">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        Error loading category: {error.message}
      </div>
    );
  if (!category)
    return (
<<<<<<< HEAD
      <div className='flex justify-center items-center h-screen'>
=======
      <div className="flex justify-center items-center h-screen">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        Category not found
      </div>
    );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
<<<<<<< HEAD
      [name]: type === 'checkbox' ? checked : value,
=======
      [name]: type === "checkbox" ? checked : value,
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateCategory({ categoryId, ...formData });
      if (response.success) {
        toast({
<<<<<<< HEAD
          title: 'Success',
          description: 'Category updated successfully',
        });
        navigate(
          `${ROUTES.SPECIFICCATEGORY.replace(':categoryId', categoryId)}`
        );
      } else {
        toast({
          title: 'Error',
          description: response?.message || 'Failed to update category',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Failed to update category:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while updating the category',
        variant: 'destructive',
=======
          title: "Success",
          description: "Category updated successfully",
        });
        navigate(
          `${ROUTES.SPECIFICCATEGORY.replace(":categoryId", categoryId)}`
        );
      } else {
        toast({
          title: "Error",
          description: response?.message || "Failed to update category",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to update category:", error);
      toast({
        title: "Error",
        description: "An error occurred while updating the category",
        variant: "destructive",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      });
    }
  };

  return (
<<<<<<< HEAD
    <div className='container mx-auto px-4 py-8 space-y-8'>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6'
      >
        <ArrowLeft className='w-8 h-8' />{' '}
        <span className='text-lg'>Back to Category Details</span>
      </Button>

      <Card className='max-w-2xl mx-auto shadow-2xl drop-shadow-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl'>
=======
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6"
      >
        <ArrowLeft className="w-8 h-8" />{" "}
        <span className="text-lg">Back to Category Details</span>
      </Button>

      <Card className="max-w-2xl mx-auto shadow-2xl drop-shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            Edit Category: {category.name}
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Category Name</Label>
              <Input
                id='name'
                name='name'
=======
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Category Name</Label>
              <Input
                id="name"
                name="name"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
<<<<<<< HEAD
            <div className='space-y-2'>
              <Label htmlFor='displayOrder'>Display Order</Label>
              <Input
                id='displayOrder'
                name='displayOrder'
                type='number'
=======
            <div className="space-y-2">
              <Label htmlFor="displayOrder">Display Order</Label>
              <Input
                id="displayOrder"
                name="displayOrder"
                type="number"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                value={formData.displayOrder}
                onChange={handleInputChange}
                required
              />
            </div>
<<<<<<< HEAD
            <div className='space-y-2'>
              <Label htmlFor='gender'>Gender</Label>
=======
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
              <Select
                value={formData.gender}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
<<<<<<< HEAD
                  <SelectValue placeholder='Select gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Male'>Male</SelectItem>
                  <SelectItem value='Female'>Female</SelectItem>
                  <SelectItem value='Unisex'>Unisex</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch
                id='isActive'
                name='isActive'
=======
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Unisex">Unisex</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                name="isActive"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                checked={formData.isActive}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isActive: checked }))
                }
              />
<<<<<<< HEAD
              <Label htmlFor='isActive'>Active</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Switch
                id='isProductForKids'
                name='isProductForKids'
=======
              <Label htmlFor="isActive">Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isProductForKids"
                name="isProductForKids"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                checked={formData.isProductForKids}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    isProductForKids: checked,
                  }))
                }
              />
<<<<<<< HEAD
              <Label htmlFor='isProductForKids'>For Kids</Label>
=======
              <Label htmlFor="isProductForKids">For Kids</Label>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            </div>
          </CardContent>
          <CardFooter>
            <Button
<<<<<<< HEAD
              type='submit'
              className='w-full'
              disabled={updateCategory.isLoading}
            >
              {updateCategory.isLoading ? (
                'Updating...'
              ) : (
                <>
                  <Save className='w-4 h-4 mr-2' /> Save Changes
=======
              type="submit"
              className="w-full"
              disabled={updateCategory.isLoading}
            >
              {updateCategory.isLoading ? (
                "Updating..."
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" /> Save Changes
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default CategoryUpdate;
