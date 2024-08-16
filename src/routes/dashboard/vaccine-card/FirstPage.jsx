import bdLogo from '@/assets/bd-logo.png';
import partners from '@/assets/ict-logo.png';
import mujib100 from '@/assets/mujib100.png';
import surokkhaLogo from '@/assets/surokkha-logo.png';
import { Image, Page, Text, View } from '@react-pdf/renderer';
import reverseDate from '../../../utils/reverseDate';
import { styles } from './cardStyles';

const FirstPage = ({ data, qrCodeUrl }) => {
  return (
    <Page size="A4" style={styles.page}>
      {/* WaterMark */}
      <View style={styles.watermarkContainer}>
        <View style={styles.watermarkWrapper}>
          <Image src={surokkhaLogo} style={styles.watermarkImage} />
        </View>
      </View>
      <View style={styles.firstPageContainer}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* Header Top */}
          <View style={styles.headerTop}>
            <View style={styles.headerLogoWrapper}>
              <Image src={bdLogo} style={styles.headerLogoLeft} />
            </View>
            <View style={styles.headerText}>
              <Text>{"Government of the People's Republic of Bangladesh"}</Text>
              <Text>{'Ministry of Health and Family Welfare'}</Text>
            </View>
            <View style={styles.headerLogoWrapper}>
              <Image src={mujib100} style={styles.headerLogoRight} />
            </View>
          </View>
          {/* QR Code */}
          <View style={styles.headerQR}>
            {qrCodeUrl && <Image src={qrCodeUrl} />}
          </View>
        </View>

        {/* TITLE */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleEnglish}>
            {'COVID-19 Vaccination Certificate'}
          </Text>
          <Text style={styles.titleBangla}>
            {'(কোভিড-১৯ ভ্যাকসিন গ্রহণের সার্টিফিকেট))'}
          </Text>
        </View>

        {/* VACCINE DATA */}
        <View style={styles.tableHeader}>
          <View style={styles.thLeft}>
            <Text>Beneficiary Details (টিকা গ্রহণকারীর বিবরণ)</Text>
          </View>
          <View style={styles.thRight}>
            <Text>Vaccination Details (টিকা প্রদানের বিবরণ)</Text>
          </View>
        </View>
        {/* Row 1 */}
        <View style={styles.tableRow}>
          <View style={styles.td1}>
            <Text>Certificate No:</Text>
            <Text>সার্টিফিকেট নং-</Text>
          </View>
          <View style={styles.td2}>
            <Text>{data?.certificateNo}</Text>
          </View>
          <View style={styles.td3}>
            <Text>Date of Vaccination (Dose 1):</Text>
            <Text>টিকা প্রদানের তারিখ (ডোজ ১)::</Text>
          </View>
          <View style={styles.td4}>
            <Text>{reverseDate(data?.firstVaccinationDate)}</Text>
          </View>
        </View>
        {/* Row 2 */}
        <View style={styles.tableRow}>
          <View style={styles.td1}>
            <Text>{data?.nidNo ? 'NID Number:' : 'Birth Certificate No:'}</Text>
            <Text>
              {data?.nidNo ? 'জাতীয় পরিচয়পত্র নং-' : 'জন্মনিবন্ধন নং-'}
            </Text>
          </View>
          <View style={styles.td2}>
            <Text>{data?.nidNo || data?.birthCertificateNo || 'N/A'}</Text>
          </View>
          <View style={styles.td3}>
            <Text>Name of Vaccine (Dose 1):</Text>
            <Text>টিকার নাম (ডোজ ১)::</Text>
          </View>
          <View style={styles.td4}>
            <Text>{data?.firstVaccineName}</Text>
          </View>
        </View>
        {/* Row 3 */}
        <View style={styles.tableRow}>
          <View style={styles.td1}>
            <Text>Passport No:</Text>
            <Text>পাসপোর্ট নং--</Text>
          </View>
          <View style={styles.td2}>
            <Text>{data?.passportNo || 'N/A'}</Text>
          </View>
          <View style={styles.td3}>
            <Text>Date of Vaccination (Dose 2):</Text>
            <Text>টিকা প্রদানের তারিখ (ডোজ ২)::</Text>
          </View>
          <View style={styles.td4}>
            <Text>{reverseDate(data?.secondVaccinationDate)}</Text>
          </View>
        </View>
        {/* Row 4 */}
        <View style={styles.tableRow}>
          <View style={styles.td1}>
            <Text>Nationality:</Text>
            <Text>জাতীয়তাঃ</Text>
          </View>
          <View style={styles.td2}>
            <Text>Bangladeshi </Text>
          </View>
          <View style={styles.td3}>
            <Text>Name of Vaccine (Dose 2):</Text>
            <Text>টিকার নাম (ডোজ ২)::</Text>
          </View>
          <View style={styles.td4}>
            <Text>{data?.secondVaccineName}</Text>
          </View>
        </View>
        {/* Row 5-6 */}
        <View style={styles.tableRow}>
          <View style={styles.tableRowLeft}>
            <View style={styles.tableRow}>
              <View style={styles.td1lg}>
                <Text>Name:</Text>
                <Text>নামঃ</Text>
              </View>
              <View style={styles.td2lg}>
                <Text>{data?.name}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.td1lg}>
                <Text>Date of Birth:</Text>
                <Text>জন্ম তারিখঃ</Text>
              </View>
              <View style={styles.td2lg}>
                <Text>{reverseDate(data?.dateOfBirth)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableRowRight}>
            <View style={styles.td3lg}>
              <Text>Vaccination Center:</Text>
              <Text>টিকা প্রদানের কেন্দ্রঃ</Text>
            </View>
            <View style={styles.td4lg}>
              <Text>{data?.vaccinationCenter}</Text>
            </View>
          </View>
        </View>
        {/* Row 7 */}
        <View style={styles.tableRow}>
          <View style={styles.td1}>
            <Text>Gender:</Text>
            <Text>লিঙ্গঃ</Text>
          </View>
          <View style={styles.td2}>
            <Text style={styles.capitalize}>{data?.gender}</Text>
          </View>
          <View style={styles.td3}>
            <Text>Vaccinated By:</Text>
            <Text>টিকা প্রদানকারীঃ</Text>
          </View>
          <View style={styles.td4}>
            <Text>{'Directorate General of'}</Text>
            <Text>{'Health Services (DGHS)'}</Text>
          </View>
        </View>

        {/* THIRD VACCINE */}
        <View style={styles.thirdVaccineContainer}>
          <View style={styles.thirdVaccineBox}>
            <View style={styles.trThird1}>
              <Text>Other Doses(অন্যান্য ডোজসমূহ):</Text>
            </View>
            <View style={styles.trThird2}>
              <View style={styles.tdThird1}>
                <Text>Dose:</Text>
              </View>
              <View style={styles.tdThird2}>
                <Text>Vaccine Name(টিকার নাম):</Text>
              </View>
              <View style={styles.tdThird3}>
                <Text>Date(তারিখ):</Text>
              </View>
            </View>
            <View style={styles.trThird3}>
              <View style={styles.tdThird1}>
                <Text style={styles.textLeft}>Dose-3</Text>
              </View>
              <View style={styles.tdThird2}>
                <Text style={styles.textLeft}>{data?.thirdVaccineName}</Text>
              </View>
              <View style={styles.tdThird3}>
                <Text style={styles.textLeft}>
                  {reverseDate(data?.thirdVaccinationDate)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* FOOTER */}
        <View>
          {/* Footer Text 1 */}
          <View style={styles.titleContainer}>
            <Text>
              {
                'To verify this certificate please visit www.surokkha.gov.bd/verify or scan the QR code.'
              }
            </Text>
            <Text>
              {
                '(এই সার্টিফিকেট যাচাই করার জন্য www.surokkha.gov.bd/verify ভিজিট করুন অথবা QR কোডটি স্ক্যান করুন।))'
              }
            </Text>
          </View>
          {/* Footer Text 2 */}
          <View style={styles.titleContainer}>
            <Text>
              {
                'For any further assistance, please visit www.dghs.gov.bd or e-mail: info@dghs.gov.bd'
              }
            </Text>
            <Text>
              {
                '(প্রয়োজনে www.dghs.gov.bd ওয়েব সাইটটি ভিজিট করুন অথবা ইমেইল করুনঃ info@dghs.gov.bd)'
              }
            </Text>
          </View>
          {/* Partners */}
          <View style={styles.partnersTitle}>
            <Text>In cooperation with</Text>
          </View>
          <View style={styles.footerLogoWrapper}>
            <Image src={partners} style={styles.footerLogo} />
          </View>
        </View>
      </View>
    </Page>
  );
};

export default FirstPage;
