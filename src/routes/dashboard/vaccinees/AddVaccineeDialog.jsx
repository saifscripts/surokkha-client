import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { DateInput } from '../../../components/ui/date-input';
import { useCreateVaccineeMutation } from '../../../redux/features/vaccinees/vaccineeApi.js';
import {
  NameOfVaccines,
  defaultThirdVaccine,
  defaultVaccinationCenter,
  defaultVaccine,
  vaccinationCenters,
} from '../vaccine-data.jsx';

// const vaccineSchema = z.object({
//   dateOfVaccination: z.string().date(),
//   nameOfVaccine: z.string(),
// });

const formSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  gender: z.enum(['male', 'female']),
  birthCertificateNo: z.string().optional(),
  nidNo: z.string().optional(),
  passportNo: z.string().optional(),
  firstVaccineName: z.enum(NameOfVaccines),
  secondVaccineName: z.enum(NameOfVaccines),
  thirdVaccineName: z.enum(NameOfVaccines),
  firstVaccinationDate: z.string().date(),
  secondVaccinationDate: z.string().date(),
  thirdVaccinationDate: z.string().date(),
  vaccinationCenter: z.string(),
});

export default function AddVaccineDialogue() {
  const [open, setOpen] = useState(false);
  const [createVaccinee, { isLoading, error }] = useCreateVaccineeMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateOfBirth: '2023-11-02',
      firstVaccineName: defaultVaccine,
      secondVaccineName: defaultVaccine,
      thirdVaccineName: defaultThirdVaccine,
      firstVaccinationDate: '2023-06-26',
      secondVaccinationDate: '2023-07-26',
      thirdVaccinationDate: '2023-12-31',
      vaccinationCenter: defaultVaccinationCenter,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    const response = await createVaccinee(values);

    if (response?.data?.success) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded">Add Vaccinee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add A Vaccinee</DialogTitle>
          <DialogDescription>
            Make sure you enter appropriate data. Click Save to add vaccinee.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-scroll hide-scrollbar px-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Date of Birth</FormLabel>
                    <DateInput field={field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Birth Certificate */}
              <FormField
                control={form.control}
                name="birthCertificateNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Certificate</FormLabel>
                    <FormControl>
                      <Input placeholder="Birth Certificate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* NID */}
              <FormField
                control={form.control}
                name="nidNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NID</FormLabel>
                    <FormControl>
                      <Input placeholder="NID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Passport */}
              <FormField
                control={form.control}
                name="passportNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passport</FormLabel>
                    <FormControl>
                      <Input placeholder="Passport" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Name of Vaccine (Dose 1) */}
              <FormField
                control={form.control}
                name="firstVaccineName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Vaccine (Dose 1)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vaccine Name" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {NameOfVaccines?.map((vaccine) => (
                          <SelectItem key={vaccine} value={vaccine}>
                            {vaccine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Date of Vaccination (Dose 1)*/}
              <FormField
                control={form.control}
                name="firstVaccinationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Date of Vaccination (Dose 1)</FormLabel>
                    <DateInput field={field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Name of Vaccine (Dose 2) */}
              <FormField
                control={form.control}
                name="secondVaccineName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Vaccine (Dose 2)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vaccine Name" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {NameOfVaccines?.map((vaccine) => (
                          <SelectItem key={vaccine} value={vaccine}>
                            {vaccine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Date of Vaccination (Dose 2)*/}
              <FormField
                control={form.control}
                name="secondVaccinationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Date of Vaccination (Dose 2)</FormLabel>
                    <DateInput field={field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Name of Vaccine (Dose 3) */}
              <FormField
                control={form.control}
                name="thirdVaccineName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Vaccine (Dose 3)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vaccine Name" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {NameOfVaccines?.map((vaccine) => (
                          <SelectItem key={vaccine} value={vaccine}>
                            {vaccine}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Date of Vaccination (Dose 3)*/}
              <FormField
                control={form.control}
                name="thirdVaccinationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Date of Vaccination (Dose 3)</FormLabel>
                    <DateInput field={field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Vaccination Center */}
              <FormField
                control={form.control}
                name="vaccinationCenter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vaccination Center</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vaccination Center" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {vaccinationCenters?.map((center) => (
                          <SelectItem key={center} value={center}>
                            {center}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-xs text-center text-red-400">
                {error?.message}
              </p>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
