import bdLogo from '@/assets/bd-logo.png';
import health from '@/assets/health-logo.png';
import ict from '@/assets/ict-division.png';
import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
import { VaccineNameMapper } from '../vaccine-data';
import { styles } from './cardStyles';

const SecondPage = ({ data, qrCodeUrl }) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.card}>
        <View style={styles.front}>
          <View style={styles.logoWrapper}>
            <Image src={bdLogo} style={styles.logo} />
          </View>
          <Text style={styles.text}>
            {"Government of the People's Republic of Bangladesh"}
          </Text>
          <Text style={styles.text}>Ministry of Health and Family Welfare</Text>
          <View style={styles.titleBox}>
            <Text style={styles.title}>COVID-19</Text>
            <Text style={styles.subtitle}>Vaccination Certificate</Text>
          </View>
          <Text style={styles.certificate}>
            Certificate No: {data?.certificateNo}
          </Text>
          <View style={styles.qr}>
            {qrCodeUrl && <Image src={qrCodeUrl} />}
          </View>
          <Text style={styles.name}>{data?.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.field}>
              <View style={styles.label}>
                <Text>
                  {data?.nidNo ? 'NID Number' : 'Birth Certificate No'}
                </Text>
              </View>
              <View style={styles.value}>
                <Text>{data?.nidNo || data?.birthCertificateNo || 'N/A'}</Text>
              </View>
            </View>
            <View style={styles.field}>
              <View style={styles.label}>
                <Text>Passport No</Text>
              </View>
              <View style={styles.value}>
                <Text>{data?.passportNo || 'N/A'}</Text>
              </View>
            </View>
            <View style={styles.field}>
              <View style={styles.label}>
                <Text>Nationality</Text>
              </View>
              <View style={styles.value}>
                <Text>Bangladeshi</Text>
              </View>
            </View>
            <View style={styles.field}>
              <View style={styles.label}>
                <Text>Vaccine Name</Text>
              </View>
              <View style={styles.value}>
                <Text>{VaccineNameMapper[data?.firstVaccineName]}</Text>
              </View>
            </View>
            <View style={styles.field}>
              <View style={styles.label}>
                <Text>Total Doses</Text>
              </View>
              <View style={styles.value}>
                <Text>3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.back}>
          <View style={styles.blank}></View>
          <View style={styles.backInfo}>
            <View>
              <View>
                <Text>To verify this certificate please</Text>
              </View>
              <View>
                <Text>
                  visit{' '}
                  <Link
                    src="https://www.surokkha.gov.bd/verify"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      fontFamily: 'SolaimanLipi',
                      fontWeight: 'bold',
                    }}
                  >
                    www.surokkha.gov.bd/verify
                  </Link>
                </Text>
              </View>
            </View>
            <Text style={styles.text}>or</Text>
            <Text style={styles.text}>scan the QR code.</Text>
            <View style={styles.divider}></View>
            <View>
              <View>
                <Text>For any further assistance, please</Text>
              </View>
              <View>
                <Text>
                  visit{' '}
                  <Link
                    src="https://www.dghs.gov.bd"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    www.dghs.gov.bd
                  </Link>{' '}
                  or{' '}
                </Text>
              </View>
              <View>
                <Text>
                  e-mail:{' '}
                  <Link
                    src=""
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      display: 'inline',
                    }}
                  >
                    info@dghs.gov.bd
                  </Link>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.partnersContainer}>
            <View style={styles.partners}>
              <Image src={health} style={styles.partnersLogo} />
              <Image src={ict} style={styles.partnersLogo} />
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default SecondPage;
