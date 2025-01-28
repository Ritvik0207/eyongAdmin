<<<<<<< HEAD
import PropTypes from "prop-types";
=======
import PropTypes from 'prop-types'
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
<<<<<<< HEAD
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
=======
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d

export function BasicDetails({ form }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
<<<<<<< HEAD
            <FormLabel>
              Product Name<span className="text-red-500">*</span>
            </FormLabel>
=======
            <FormLabel>Product Name</FormLabel>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            <FormControl>
              <Input placeholder="Enter product name" {...field} />
            </FormControl>
            <FormDescription>Maximum 100 characters</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
<<<<<<< HEAD
            <FormLabel>
              Description<span className="text-red-500">*</span>
            </FormLabel>
=======
            <FormLabel>Description</FormLabel>
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            <FormControl>
              <Textarea
                placeholder="Enter product description"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="shortDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter short description"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>Maximum 200 characters</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
}

BasicDetails.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.object.isRequired,
  }).isRequired,
<<<<<<< HEAD
};
=======
}

  
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
