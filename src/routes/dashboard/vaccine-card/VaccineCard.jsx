/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import HelveticaBold from '../../../assets/fonts/Helvetica-Bold.ttf';
// import Helvetica from '../../../assets/fonts/Helvetica.ttf';
import { useGetVaccinee } from '../../verify-online/useGetVaccinee';

import { Button } from '@/components/ui/button';
import { Font, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import SolaimanLipiBold from '../../../assets/fonts/SolaimanLipi_Bold.ttf';
import SolaimanLipi from '../../../assets/fonts/SolaimanLipi_Normal.ttf';
import Card from './Card';

// Font.register({
//   family: 'Helvetica',
//   fonts: [
//     {
//       src: Helvetica,
//     },
//     {
//       src: HelveticaBold,
//       fontWeight: 'bold',
//     },
//   ],
// });

Font.register({
  family: 'SolaimanLipi',
  fonts: [
    {
      src: SolaimanLipi,
    },
    {
      src: SolaimanLipiBold,
      fontWeight: 'bold',
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

export default function VaccineCard() {
  const { id } = useParams();

  const { data, getVaccinee } = useGetVaccinee();

  useEffect(() => {
    getVaccinee(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="flex justify-end py-2 container">
        <PDFDownloadLink
          document={<Card data={data} />}
          fileName={data?.name?.toUpperCase()?.split(' ').join('_')}
        >
          {({ loading }) =>
            loading ? 'Loading document...' : <Button>Download</Button>
          }
        </PDFDownloadLink>
      </div>

      <div className="container mx-auto pb-10">
        <PDFViewer
          style={{
            width: '100%',
            aspectRatio: '2480/3508',
          }}
          showToolbar={false}
        >
          <Card data={data} />
        </PDFViewer>
      </div>
    </div>
  );
}
