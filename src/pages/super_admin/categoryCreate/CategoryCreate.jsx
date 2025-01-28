<<<<<<< HEAD
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { BasicDetails } from './components/basic-details';
import { StatusVisibility } from './components/status-visibility';
import { FormNavigation } from './components/form-navigation';
import { useCreateCategory } from '@/features/categories/hooks/useCategory';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { toast } from '@/hooks/use-toast';
=======
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BasicDetails } from "./components/basic-details";
import { StatusVisibility } from "./components/status-visibility";
import { FormNavigation } from "./components/form-navigation";
import { useCreateCategory } from "@/features/categories/hooks/useCategory";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

const formSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(200).optional(),
  isProductForKids: z.boolean(),
<<<<<<< HEAD
  gender: z.enum(['Male', 'Female', 'Unisex']),
=======
  gender: z.enum(["Male", "Female", "Unisex"]),
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  isActive: z.boolean(),
  displayOrder: z.number().optional(),
  slug: z.string(),
});

export function CategoryCreate() {
<<<<<<< HEAD
  const [currentStep, setCurrentStep] = useState('basic');
=======
  const [currentStep, setCurrentStep] = useState("basic");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  const createCategoryMutation = useCreateCategory();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isProductForKids: false,
<<<<<<< HEAD
      gender: 'Unisex',
=======
      gender: "Unisex",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      isActive: true,
    },
  });

  async function onSubmit(values) {
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
      const response = await createCategoryMutation.mutateAsync(values);
      if (response.success) {
        toast({
<<<<<<< HEAD
          title: 'Success',
          description: 'Product created successfully',
        });
      } else {
        toast({
          title: 'Error',
          description: response?.message || 'Failed to create product',
          variant: 'destructive',
        });
      }
      const categoryId = response.category.id;
      navigate(`${ROUTES.SPECIFICCATEGORY.replace(':categoryId', categoryId)}`);
    } catch (error) {
      console.error('Failed to create category:', error);
=======
          title: "Success",
          description: "Product created successfully",
        });
      } else {
        toast({
          title: "Error",
          description: response?.message || "Failed to create product",
          variant: "destructive",
        });
      }
      const categoryId = response.category.id;
      navigate(`${ROUTES.SPECIFICCATEGORY.replace(":categoryId", categoryId)}`);
    } catch (error) {
      console.error("Failed to create category:", error);
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    }
  }

  const steps = [
<<<<<<< HEAD
    { id: 'basic', component: <BasicDetails form={form} /> },
    { id: 'status', component: <StatusVisibility form={form} /> },
=======
    { id: "basic", component: <BasicDetails form={form} /> },
    { id: "status", component: <StatusVisibility form={form} /> },
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  ];

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleNext = async () => {
<<<<<<< HEAD
    if (currentStep === 'basic') {
      const isValid = await form.trigger(['name', 'gender']);
      if (!isValid) {
        toast({
          title: 'Validation Error',
          description: 'Please fill all mandatory fields before proceeding.',
          variant: 'destructive',
        });
        return;
      }
    }
=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    setCurrentStep(steps[currentStepIndex + 1].id);
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

<<<<<<< HEAD
  const handleStepChange = async (step) => {
    let isValid = true;
    if (currentStep === 'basic') {
      isValid = await form.trigger(['name', 'gender']);
    }
    if (isValid) {
      setCurrentStep(step);
    } else {
      toast({
        title: 'Validation Error',
        description: 'Please fill all mandatory fields before proceeding.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='container mx-auto py-6 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-8'>Create New Category</h1>
      <FormNavigation
        currentStep={currentStep}
        onStepChange={handleStepChange}
        isBasicDetailsValid={form.getValues('name') && form.getValues('gender')}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {steps.find((step) => step.id === currentStep)?.component}
          <div className='flex justify-between mt-8'>
            {!isFirstStep && (
              <Button type='button' variant='outline' onClick={handlePrevious}>
=======
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Create New Category</h1>
      <FormNavigation currentStep={currentStep} onStepChange={setCurrentStep} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {steps.find((step) => step.id === currentStep)?.component}
          <div className="flex justify-between mt-8">
            {!isFirstStep && (
              <Button type="button" variant="outline" onClick={handlePrevious}>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                Previous
              </Button>
            )}
            {!isLastStep && (
<<<<<<< HEAD
              <Button type='button' onClick={handleNext} className='ml-auto'>
=======
              <Button type="button" onClick={handleNext} className="ml-auto">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                Next
              </Button>
            )}
            {isLastStep && (
<<<<<<< HEAD
              <Button type='submit' className='ml-auto'>
=======
              <Button type="submit" className="ml-auto">
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                Create Category
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CategoryCreate;
