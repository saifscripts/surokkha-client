import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import VaccineData from './VaccineData';
import { useGetVaccinee } from './useGetVaccinee';

export default function VerifyOnline() {
  const [searchParams] = useSearchParams();

  const id = Object.fromEntries([...searchParams])?.id;

  const { data, getVaccinee } = useGetVaccinee();

  useEffect(() => {
    getVaccinee(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!data?.name) {
    return;
  }

  return (
    <>
      <Header />
      <VaccineData data={data} />
    </>
  );
}
