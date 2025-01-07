import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { FormNavigation } from './_components/form-navigation'
import { BasicDetails } from './_components/basic-details'
import { Categorization } from './_components/categorization'
import { Specifications } from './_components/specifications'
import { TargetAudience } from './_components/target-audience'
import { StatusVisibility } from './_components/status-visibility'
import { SEO } from './_components/seo'
import { ImageUpload } from './_components/image-upload'

const formSchema = z.object({
  // Basic Details
  name: z.string().min(1).max(100),
  description: z.string().min(1),
  shortDescription: z.string().max(200).optional(),

  // Categorization
  category: z.string(),
  subcategory: z.string().optional(),
  shop: z.string(),

  // Specifications
  specifications: z.object({
    material: z.string(),
    weaveType: z.string().optional(),
    craftTechnique: z.string().optional(),
    careInstructions: z.string().optional(),
    fabricCount: z.string().optional(),
    borderType: z.string().optional(),
    borderWidth: z.string().optional(),
    palluDetails: z.string().optional(),
    threadCount: z.number().optional(),
    zariType: z.string().optional(),
  }),

  // Target Audience
  gender: z.enum(['Male', 'Female', 'Unisex']),
  ageGroup: z.enum(['Adult', 'Kids', 'All']),

  // Status and Visibility
  status: z.enum(['draft', 'published', 'archived']),
  isVisible: z.boolean(),

  // SEO
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  keywords: z.array(z.string()),

  // Images will be handled separately
})

export function ProductCreate() {
  const [images, setImages] = useState([])
  const [currentStep, setCurrentStep] = useState('basic')

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: 'Unisex',
      ageGroup: 'Adult',
      status: 'draft',
      isVisible: true,
      keywords: [],
    },
  })

  async function onSubmit(values) {
    try {
        // todo implement api endpoint
        console.log(values, images)
      toast({
        title: "Product created",
        description: "Your product has been successfully created.",
      })
    } catch (error) {
      console.error('Failed to create product:', error)
      toast({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive",
      })
    }
  }

  const steps = [
    { id: 'basic', component: <BasicDetails form={form} /> },
    { id: 'categorization', component: <Categorization form={form} /> },
    { id: 'specifications', component: <Specifications form={form} /> },
    { id: 'audience', component: <TargetAudience form={form} /> },
    { id: 'status', component: <StatusVisibility form={form} /> },
    { id: 'seo', component: <SEO form={form} /> },
    { id: 'images', component: <ImageUpload images={images} setImages={setImages} /> },
  ]

  const currentStepIndex = steps.findIndex(step => step.id === currentStep)
  const isLastStep = currentStepIndex === steps.length - 1
  const isFirstStep = currentStepIndex === 0

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(steps[currentStepIndex + 1].id)
    }
  }

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentStepIndex - 1].id)
    }
  }

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
      <FormNavigation currentStep={currentStep} onStepChange={setCurrentStep} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {steps.find(step => step.id === currentStep)?.component}
          <div className="flex justify-between mt-8">
            {!isFirstStep && (
              <Button type="button" variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {!isLastStep && (
              <Button type="button" onClick={handleNext} className="ml-auto">
                Next
              </Button>
            )}
            {isLastStep && (
              <Button type="submit" className="ml-auto">
                Create Product
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ProductCreate

