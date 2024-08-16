import { Document } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Card = ({ data }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // Generate QR code URL
    QRCode.toDataURL(`${window.location.origin}/verify-online?id=${data?.id}`)
      .then((url) => {
        setQrCodeUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  return (
    <Document>
      <FirstPage data={data} qrCodeUrl={qrCodeUrl} />
      <SecondPage data={data} qrCodeUrl={qrCodeUrl} />
    </Document>
  );
};

export default Card;
