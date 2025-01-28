<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
=======
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
<<<<<<< HEAD
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
=======
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
<<<<<<< HEAD
} from '@/components/ui/select';
import { useGetAllAdmins } from '@/features/admin/hooks/useAdmin';
import { ImageUpload } from './_components/image-uploads';
import { useCreateShopPost } from '@/features/shop/hooks/useShop';
import { useNavigate } from 'react-router-dom';
import useAuthenticationStore from '@/store/useAuthenticationStore';
import { useGetSellerById } from '@/features/seller/hooks/useSeller';
import { ROUTES } from '@/constants/routes';
import React from 'react';

const formSchema = z.object({
  name: z.string().min(1, 'Shop name is required').max(100),
  description: z.string().min(1, 'Description is required'),
  owner: z.string().min(1, 'Owner selection is required'),
  contactEmail: z.string().email('Invalid email address'),
  contactPhone: z.string().min(1, 'Contact phone is required'),
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  pincode: z.string().min(1, 'Pincode is required'),
  country: z.string().default('India'),
  status: z.enum(['active', 'inactive', 'suspended']).default('active'),
=======
} from "@/components/ui/select";
import { useGetAllAdmins } from "@/features/admin/hooks/useAdmin";
import { ImageUpload } from "./_components/image-uploads";
import { useCreateShopPost } from "@/features/shop/hooks/useShop";
import { useNavigate } from "react-router-dom";
import useAuthenticationStore from "@/store/useAuthenticationStore";
import { useGetSellerById } from "@/features/seller/hooks/useSeller";
import { ROUTES } from "@/constants/routes";

const formSchema = z.object({
  name: z.string().min(1, "Shop name is required").max(100),
  description: z.string().min(1, "Description is required"),
  owner: z.string().min(1, "Owner selection is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(1, "Contact phone is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(1, "Pincode is required"),
  country: z.string().default("India"),
  status: z.enum(["active", "inactive", "suspended"]).default("active"),
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
  logoAltText: z.string().optional(),
  bannerImageAltText: z.string().optional(),
});

export function ShopCreate() {
  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const [currentTab, setCurrentTab] = useState('basic');
=======
  const [currentTab, setCurrentTab] = useState("basic");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  const { toast } = useToast();
  const createShopMutation = useCreateShopPost();
  const navigate = useNavigate();

  const { user } = useAuthenticationStore();
<<<<<<< HEAD
  const isSuperAdmin = 'Super_Admin';
  const sellerId = user?.id;
  console.log(sellerId);
  const { data: seller } = useGetSellerById(sellerId);

  const { data: admins = [], isLoading: isLoadingAdmins } = useGetAllAdmins();
  console.log(seller, 'seller');
=======
  const isSuperAdmin = user.role === "Super_Admin";
  const sellerId = user?.id;
  const { data: seller } = useGetSellerById(sellerId);

  const { data: admins = [], isLoading: isLoadingAdmins } = useGetAllAdmins();
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
<<<<<<< HEAD
      status: 'active',
      country: 'India',
=======
      status: "active",
      country: "India",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
    },
  });

  useEffect(() => {
<<<<<<< HEAD
    if (!isSuperAdmin && seller?.sellerAdmin) {
      form.setValue('owner', sellerId);
    }
  }, [seller, isSuperAdmin, sellerId, form]);

  const goToNextTab = () => {
    switch (currentTab) {
      case 'basic':
        setCurrentTab('address');
        break;
      case 'address':
        setCurrentTab('social');
        break;
      case 'social':
        setCurrentTab('images');
=======
    if(!isSuperAdmin && seller?.sellerAdmin) {
      form.setValue('owner', sellerId);
    }
  }, [seller, isSuperAdmin, sellerId, form])

  const goToNextTab = () => {
    switch (currentTab) {
      case "basic":
        setCurrentTab("address");
        break;
      case "address":
        setCurrentTab("social");
        break;
      case "social":
        setCurrentTab("images");
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
        break;
      default:
        break;
    }
  };

<<<<<<< HEAD
  const goToPreviousTab = () => {
    switch (currentTab) {
      case 'address':
        setCurrentTab('basic');
        break;
      case 'social':
        setCurrentTab('address');
        break;
      case 'images':
        setCurrentTab('social');
        break;
      default:
        break;
    }
  };

  const handleTabChange = async (tab) => {
    let isValid = true;
    switch (currentTab) {
      case 'basic':
        isValid = await form.trigger([
          'owner',
          'name',
          'description',
          'contactEmail',
          'contactPhone',
          'status',
        ]);
        break;
      case 'address':
        isValid = await form.trigger([
          'street',
          'city',
          'state',
          'pincode',
          'country',
        ]);
        break;
      case 'social':
        isValid = await form.trigger([
          'facebook',
          'instagram',
          'twitter',
          'website',
        ]);
        break;
      default:
        break;
    }
    if (isValid) {
      setCurrentTab(tab);
    } else {
      toast({
        title: 'Validation Error',
        description: 'Please fill all mandatory fields before proceeding.',
        variant: 'destructive',
      });
    }
  };

=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  async function onSubmit(values) {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      if (logoFile) {
<<<<<<< HEAD
        formData.append('logo', logoFile);
      }
      if (bannerFile) {
        formData.append('bannerImage', bannerFile);
=======
        formData.append("logo", logoFile);
      }
      if (bannerFile) {
        formData.append("bannerImage", bannerFile);
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      }

      const response = await createShopMutation.mutateAsync(formData);
      console.log(response);
      if (!response.success) {
<<<<<<< HEAD
        throw new Error('Failed to create shop');
      }

      toast({
        title: 'Success',
        description: 'Shop created successfully',
      });

      form.reset();
      isSuperAdmin
        ? navigate('/dashboard/shops')
        : navigate(ROUTES.SELLER_SHOP);
    } catch (error) {
      console.error('Shop creation error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create shop',
        variant: 'destructive',
=======
        throw new Error("Failed to create shop");
      }

      toast({
        title: "Success",
        description: "Shop created successfully",
      });

      form.reset();
      isSuperAdmin ? navigate("/dashboard/shops") : navigate(ROUTES.SELLER_SHOP);
    } catch (error) {
      console.error("Shop creation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create shop",
        variant: "destructive",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  // (()=>toast({title:"Test", description:"This is a test toast"}))()
  return (
<<<<<<< HEAD
    <div className='container mx-auto py-6 px-4 space-y-6'>
      <h1 className='text-3xl font-bold'>Create New Shop </h1>
      <span className='text-blue-700 text-md'>
        {' '}
        (Can be the Relief Camp area details)
      </span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <Tabs
            defaultValue='basic'
            value={currentTab}
            onValueChange={handleTabChange}
            className='space-y-4'
          >
            <TabsList>
              <TabsTrigger value='basic'>Basic Details</TabsTrigger>
              <TabsTrigger value='address'>Address</TabsTrigger>
              <TabsTrigger value='social'>Social Media</TabsTrigger>
              <TabsTrigger value='images'>Images</TabsTrigger>
            </TabsList>

            <TabsContent value='basic'>
              <Card>
                <CardContent className='pt-6 space-y-4'>
                  <FormField
                    control={form.control}
                    name='owner'
=======
    <div className="container mx-auto py-6 px-4 space-y-6">
      <h1 className="text-3xl font-bold">Create New Shop</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs
            defaultValue="basic"
            value={currentTab}
            onValueChange={setCurrentTab}
            className="space-y-4"
          >
            <TabsList>
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="owner"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shop Owner</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isLoadingAdmins || !isSuperAdmin}
<<<<<<< HEAD
                          >
                            <SelectTrigger className='w-full'>
                              <SelectValue
                                placeholder={
                                  isSuperAdmin
                                    ? 'Select shop owner'
                                    : `${seller.sellerAdmin.name} (${seller.sellerAdmin.email})`
                                }
                              />
                            </SelectTrigger>
                            {isSuperAdmin ? (
                              <SelectContent>
                                {admins.map((admin) => (
                                  <SelectItem key={admin._id} value={admin._id}>
                                    {admin.name} ({admin.email})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            ) : null}
=======
                          ><SelectTrigger className="w-full">
                                  <SelectValue placeholder={isSuperAdmin ? "Select shop owner" : `${seller.sellerAdmin.name} (${seller.sellerAdmin.email})`} />
                                </SelectTrigger>
                            {isSuperAdmin ? (
                                <SelectContent>
                                  {admins.map((admin) => (
                                    <SelectItem
                                      key={admin._id}
                                      value={admin._id}
                                    >
                                      {admin.name} ({admin.email})
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                            ): null}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='name'
=======
                    name="name"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shop Name</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter shop name' />
=======
                          <Input {...field} placeholder="Enter shop name" />
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
                            {...field}
<<<<<<< HEAD
                            placeholder='Enter shop description'
=======
                            placeholder="Enter shop description"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='contactEmail'
=======
                    name="contactEmail"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
<<<<<<< HEAD
                            type='email'
                            placeholder='Enter contact email'
=======
                            type="email"
                            placeholder="Enter contact email"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='contactPhone'
=======
                    name="contactPhone"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Phone</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter contact phone' />
=======
                          <Input {...field} placeholder="Enter contact phone" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='status'
=======
                    name="status"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
<<<<<<< HEAD
                            <SelectValue placeholder='Select status' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='active'>Active</SelectItem>
                            <SelectItem value='inactive'>Inactive</SelectItem>
                            <SelectItem value='suspended'>Suspended</SelectItem>
=======
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
<<<<<<< HEAD
              <div className='mt-4 flex justify-between'>
                <div></div>
                <Button
                  type='button'
                  onClick={async () => {
                    const result = await form.trigger([
                      'owner',
                      'name',
                      'description',
                      'contactEmail',
                      'contactPhone',
                      'status',
=======
              <div className="mt-4 flex justify-end">
                <Button
                  type="button"
                  onClick={async () => {
                    const result = await form.trigger([
                      "owner",
                      "name",
                      "description",
                      "contactEmail",
                      "contactPhone",
                      "status",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    ]);
                    if (result) {
                      goToNextTab();
                    }
                  }}
                >
                  Next
                </Button>
              </div>
            </TabsContent>

<<<<<<< HEAD
            <TabsContent value='address'>
              <Card>
                <CardContent className='pt-6 space-y-4'>
                  <FormField
                    control={form.control}
                    name='street'
=======
            <TabsContent value="address">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="street"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
<<<<<<< HEAD
                            placeholder='Enter street address'
=======
                            placeholder="Enter street address"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='city'
=======
                    name="city"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter city' />
=======
                          <Input {...field} placeholder="Enter city" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='state'
=======
                    name="state"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter state' />
=======
                          <Input {...field} placeholder="Enter state" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='pincode'
=======
                    name="pincode"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter pincode' />
=======
                          <Input {...field} placeholder="Enter pincode" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='country'
=======
                    name="country"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
<<<<<<< HEAD
                            placeholder='Enter country'
=======
                            placeholder="Enter country"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                            disabled
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
<<<<<<< HEAD
              <div className='mt-4 flex justify-between'>
                <Button type='button' onClick={goToPreviousTab}>
                  Previous
                </Button>
                <Button
                  type='button'
                  onClick={async () => {
                    const result = await form.trigger([
                      'street',
                      'city',
                      'state',
                      'pincode',
                      'country',
=======
              <div className="mt-4 flex justify-end">
                <Button
                  type="button"
                  onClick={async () => {
                    const result = await form.trigger([
                      "street",
                      "city",
                      "state",
                      "pincode",
                      "country",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    ]);
                    if (result) {
                      goToNextTab();
                    }
                  }}
                >
                  Next
                </Button>
              </div>
            </TabsContent>

<<<<<<< HEAD
            <TabsContent value='social'>
              <Card>
                <CardContent className='pt-6 space-y-4'>
                  <FormField
                    control={form.control}
                    name='facebook'
=======
            <TabsContent value="social">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="facebook"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facebook</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter Facebook URL' />
=======
                          <Input {...field} placeholder="Enter Facebook URL" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='instagram'
=======
                    name="instagram"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter Instagram URL' />
=======
                          <Input {...field} placeholder="Enter Instagram URL" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='twitter'
=======
                    name="twitter"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Twitter</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter Twitter URL' />
=======
                          <Input {...field} placeholder="Enter Twitter URL" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
<<<<<<< HEAD
                    name='website'
=======
                    name="website"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
<<<<<<< HEAD
                          <Input {...field} placeholder='Enter website URL' />
=======
                          <Input {...field} placeholder="Enter website URL" />
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
<<<<<<< HEAD
              <div className='mt-4 flex justify-between'>
                <Button type='button' onClick={goToPreviousTab}>
                  Previous
                </Button>
                <Button
                  type='button'
                  onClick={async () => {
                    const result = await form.trigger([
                      'facebook',
                      'instagram',
                      'twitter',
                      'website',
=======
              <div className="mt-4 flex justify-end">
                <Button
                  type="button"
                  onClick={async () => {
                    const result = await form.trigger([
                      "facebook",
                      "instagram",
                      "twitter",
                      "website",
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                    ]);
                    if (result) {
                      goToNextTab();
                    }
                  }}
                >
                  Next
                </Button>
              </div>
            </TabsContent>

<<<<<<< HEAD
            <TabsContent value='images'>
              <Card>
                <CardContent className='pt-6 space-y-4'>
                  <div className='space-y-4'>
                    <FormLabel>Shop Logo</FormLabel>
                    <ImageUpload
                      title='Logo'
                      description='Upload your shop logo'
                      value={logoFile}
                      onChange={setLogoFile}
                      multiple={false}
                      className='w-full max-w-md'
                    />
                    <FormField
                      control={form.control}
                      name='logoAltText'
=======
            <TabsContent value="images">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-4">
                    <FormLabel>Shop Logo</FormLabel>
                    <ImageUpload
                      title="Logo"
                      description="Upload your shop logo"
                      value={logoFile}
                      onChange={setLogoFile}
                      multiple={false}
                      className="w-full max-w-md"
                    />
                    <FormField
                      control={form.control}
                      name="logoAltText"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo Alt Text</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
<<<<<<< HEAD
                              placeholder='Describe the logo for accessibility'
=======
                              placeholder="Describe the logo for accessibility"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

<<<<<<< HEAD
                  <div className='space-y-4'>
                    <FormLabel>Banner Image</FormLabel>
                    <ImageUpload
                      title='Banner'
                      description='Upload your shop banner'
                      value={bannerFile}
                      onChange={setBannerFile}
                      multiple={false}
                      className='w-full max-w-md'
                    />
                    <FormField
                      control={form.control}
                      name='bannerImageAltText'
=======
                  <div className="space-y-4">
                    <FormLabel>Banner Image</FormLabel>
                    <ImageUpload
                      title="Banner"
                      description="Upload your shop banner"
                      value={bannerFile}
                      onChange={setBannerFile}
                      multiple={false}
                      className="w-full max-w-md"
                    />
                    <FormField
                      control={form.control}
                      name="bannerImageAltText"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Banner Alt Text</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
<<<<<<< HEAD
                              placeholder='Describe the banner for accessibility'
=======
                              placeholder="Describe the banner for accessibility"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
<<<<<<< HEAD
              <div className='mt-4 flex justify-between'>
                <Button type='button' onClick={goToPreviousTab}>
                  Previous
                </Button>
                <Button
                  type='submit'
                  disabled={isSubmitting || isLoadingAdmins}
                >
                  {isSubmitting ? 'Creating...' : 'Create Shop'}
=======
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting || isLoadingAdmins}
                >
                  {isSubmitting ? "Creating..." : "Create Shop"}
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}

export default ShopCreate;
