import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    display: 'block',
    paddingTop: '45px',
    paddingLeft: '40px',
    paddingRight: '40px',
    backgroundColor: '#ffffff',
    fontSize: '9px',
    lineHeight: 1.2,
    textAlign: 'center',
    position: 'relative',
    fontFamily: 'SolaimanLipi',
  },
  firstPageContainer: {
    border: '1px solid #dddddd',
    width: '100%',
    position: 'relative',
  },
  watermarkContainer: {
    position: 'absolute',
    top: -80,
    left: 0,
    right: 0,
    bottom: 0,
    width: '595px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
  },
  waterMarkWrapper: {
    width: '430px',
    marginLeft: 'auto',
  },
  watermarkImage: {
    opacity: 0.1,
    width: '430px',
    marginLeft: 'auto',
  },
  header: {
    paddingTop: '10px',
    borderBottom: '1px solid #dddddd',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  },
  headerLogoWrapper: {
    display: 'block',
    width: '50px',
  },
  headerLogoLeft: {
    width: '100%',
  },
  headerLogoRight: {
    width: '120%',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '11px',
  },
  headerQR: {
    width: '24.12%',
    margin: '0 auto 10px auto',
  },
  titleContainer: {
    fontSize: '11px',
    padding: '4px',
    borderBottom: '1px solid #dddddd',
  },
  titleEnglish: {
    fontFamily: 'SolaimanLipi',
    fontWeight: 'heavy',
  },
  titleBangla: {
    fontFamily: 'SolaimanLipi',
    fontWeight: 'normal',
  },
  tableHeader: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  thLeft: {
    width: '47.75%',
    padding: '4px',
    borderRight: '1px solid #dddddd',
    textAlign: 'left',
  },
  thRight: {
    width: '52.25%',
    padding: '4px',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableRowLeft: {
    width: '47.75%',
  },
  tableRowRight: {
    width: '52.25%',
    flexDirection: 'row',
  },
  td1: {
    width: '24.02%',
    height: 30,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'right',
    justifyContent: 'center',
  },
  td2: {
    width: '23.73%',
    height: 30,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'left',
    justifyContent: 'center',
  },
  td3: {
    width: '28.52%',
    height: 30,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'right',
    justifyContent: 'center',
  },
  td4: {
    width: '23.73%',
    height: 30,
    padding: '4px',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'left',
    justifyContent: 'center',
  },
  td1lg: {
    width: '50.31%',
    height: 30,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'right',
    justifyContent: 'center',
  },
  td2lg: {
    width: '49.69%',
    height: 30,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'left',
    justifyContent: 'center',
  },
  td3lg: {
    width: '54.60%',
    height: 60,
    padding: '4px',
    borderRight: '1px dashed #dddddd',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'right',
    justifyContent: 'center',
  },
  td4lg: {
    width: '45.40%',
    height: 60,
    padding: '4px',
    borderBottom: '1px dashed #dddddd',
    textAlign: 'left',
    justifyContent: 'center',
  },
  thirdVaccineContainer: {
    borderBottom: '1px dashed #dddddd',
    padding: '5px',
    alignItems: 'center',
    marginBottom: '15px',
  },
  thirdVaccineBox: {
    border: '1px solid #dddddd',
    width: '31.53%',
    padding: '2px',
    gap: '2px',
  },
  trThird1: {
    border: '1px dashed #dddddd',
    padding: '3px',
    fontSize: '8px',
    fontFamily: 'SolaimanLipi',
    fontWeight: 'bold',
  },
  trThird2: {
    flexDirection: 'row',
    gap: '2px',
    fontSize: '6.5px',
    fontFamily: 'SolaimanLipi',
    fontWeight: 'bold',
  },
  trThird3: {
    flexDirection: 'row',
    gap: '2px',
    fontSize: '6px',
  },
  //   17.61-54.01-26.81-0.78-0.78
  tdThird1: {
    width: '17.61%',
    padding: '0.78%',
    border: '1px dashed #dddddd',
  },
  tdThird2: {
    width: '54.01%',
    padding: '0.78%',
    border: '1px dashed #dddddd',
  },
  tdThird3: {
    width: '26.81%',
    padding: '0.78%',
    border: '1px dashed #dddddd',
  },
  partnersTitle: {
    backgroundColor: '#eeeeee',
    padding: '4px',
    fontWeight: 'bold',
    fontSize: '12px',
    borderBottom: '1px dashed #dddddd',
  },
  footerLogoWrapper: {
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLogo: {
    width: '70%',
  },
  card: {
    border: '1px solid #008000',
    width: '363.305px',
    height: '281.236px',
    padding: '1px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  front: {
    display: 'block',
    height: '100%',
    width: '48.75%',
    padding: '1.5px',
    borderRight: '1px solid #008000',
  },
  logoWrapper: {
    display: 'block',
    width: '17.4%',
    margin: '4px auto',
  },
  logo: {
    width: '100%',
  },
  titleBox: {
    backgroundColor: '#008000',
    color: 'white',
    border: '1px solid #dddddd',
    marginTop: '3.5px',
    height: '30.53px',
  },
  title: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '12px',
  },
  certificate: {
    margin: '2px 0',
  },
  qr: {
    width: '34%',
    margin: '0 auto 10px auto',
  },
  name: {
    marginBottom: '1px',
    fontFamily: 'SolaimanLipi',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'column',
    gap: '1.1px',
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '1.7px',
  },
  label: {
    padding: '1.5px 2px',
    backgroundColor: '#008000',
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'right',
    lineHeight: 1,
  },
  value: {
    padding: '1.5px 2px',
    backgroundColor: '#008000',
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    lineHeight: 1,
  },
  back: {
    display: 'block',
    height: '100%',
    width: '48.75%',
    padding: '1.5px',
    borderLeft: '1px solid #008000',
  },
  blank: {
    borderBottom: '1px solid #008000',
    height: '41.5px',
    width: '100%',
  },
  backInfo: {
    borderBottom: '1px solid #008000',
    padding: '14px 0 16px',
    fontSize: '11.5px',
  },
  divider: {
    backgroundColor: 'black',
    width: '29px',
    height: '1px',
    margin: '8px auto 16px',
  },
  partnersContainer: {
    width: '100%',
    padding: '16px 0',
  },
  partners: {
    height: '24px',
    width: '79px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //   gap: '8px',
  },
  partnersLogo: {
    height: '100%',
  },
  textLeft: { textAlign: 'left' },
  textCenter: { textAlign: 'center' },
  capitalize: { textTransform: 'capitalize' },
});
