import { useGetVaccineesQuery } from '../../../redux/features/vaccinees/vaccineeApi';
import AddVaccineDialogue from './AddVaccineeDialog';
import { DataTable } from './DataTable';
import { columns } from './columns';

export default function Vaccinees() {
  const { data, isLoading, isError, error } = useGetVaccineesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <div className="h-full flex justify-center items-center">
        <p className="text-red-400 text-2xl">{error?.data?.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center py-2 container">
        <h1 className="font-semibold text-2xl">
          Total Vaccinee: {data?.data?.length || 0}
        </h1>
        <AddVaccineDialogue />
      </div>

      <div className="container mx-auto pb-10">
        <DataTable columns={columns} data={data?.data || []} />
      </div>
    </div>
  );
}
