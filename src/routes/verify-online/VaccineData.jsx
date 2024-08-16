import bdLogo from '@/assets/bd-logo.png';
import ictLogo from '@/assets/ict-logo.png';
import mujib100 from '@/assets/mujib100.png';
import reverseDate from '@/utils/reverseDate';

export default function VaccineData({ data }) {
  //   const vaccineDataRef = useRef(null);
  //   const handlePrint = () => {
  //     console.log(vaccineDataRef.current);
  //     window.print(vaccineDataRef.current);
  //   };

  return (
    <div className="container">
      <div className="container">
        <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
          <div className="col-md-12 p-sm-0">
            <div className="d-flex justify-content-between">
              <div className="col-md-12 p-sm-0">
                <div className="text-right mb-2 no-print d-flex justify-content-end">
                  {/* <button
                    className="btn btn-sm btn-success"
                    onClick={handlePrint}
                  >
                    Print
                  </button> */}
                </div>
                <div>
                  <div style={{ border: '1px solid rgb(222, 226, 230)' }}>
                    <div className="text-center justify-content-center pt-2 show-mobile no-print">
                      <img src={bdLogo} width="70" />
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <img src={mujib100} width="100" />
                    </div>
                    <div className="row m-0 mt-2">
                      <div className="col-md-3 col-sm-12 text-right hide-mobile justify-content-end">
                        <img src={bdLogo} width="70" />
                      </div>
                      <div
                        className="col-md-6 col-sm-12 text-center"
                        style={{ fontSize: '16px', lineHeight: '70px' }}
                      >
                        <p
                          style={{
                            lineHeight: '18px',
                            marginBottom: '0px',
                            marginTop: '18px',
                          }}
                        >
                          {"Government of the People's Republic of Bangladesh"}
                        </p>
                        <p style={{ lineHeight: '18px' }}>
                          Ministry of Health and Family Welfare
                        </p>
                      </div>
                      <div className="col-md-3 col-sm-12 text-left hide-mobile justify-content-start">
                        <img src={mujib100} width="100" />
                      </div>
                    </div>
                    <div className="text-center mt-2 mb-2">
                      <div
                        style={{
                          fontSize: '30px',
                          color: 'green',
                          fontWeight: 'bold',
                        }}
                      >
                        Verification Successful !
                      </div>
                      <div
                        style={{
                          fontSize: '22px',
                          color: 'green',
                          fontWeight: '350',
                        }}
                      >
                        This Vaccination Certificate is Valid.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-md-5 p-0">
                        <div
                          className="text-center p-2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: 'rgb(238, 238, 238)',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            border: '1px solid rgb(222, 226, 230)',
                          }}
                        >
                          Beneficiary Details (টিকা গ্রহণকারীর বিবরণ)
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Certificate No:
                              <br />
                              সার্টিফিকেট নং:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.certificateNo}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {data?.nidNo
                                ? 'NID Number:'
                                : 'Birth Certificate No:'}
                              <br />
                              {data?.nidNo
                                ? 'জাতীয় পরিচয়পত্র নং:'
                                : 'জন্মনিবন্ধন নং:'}
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.nidNo || data?.birthCertificateNo || 'N/A'}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Passport No:
                              <br />
                              পাসপোর্ট নং:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {data?.passportNo || 'N/A'}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Country/Nationality:
                              <br />
                              দেশ/জাতীয়তা:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              Bangladeshi
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Name:
                              <br />
                              নাম:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.name}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Date of Birth:
                              <br />
                              জন্ম তারিখ:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {reverseDate(data?.dateOfBirth)}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Gender:
                              <br />
                              লিঙ্গ:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                textTransform: 'capitalize',
                              }}
                            >
                              {' '}
                              {data?.gender}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 p-0">
                        <div
                          className="text-center p-2"
                          style={{
                            textAlign: 'center',
                            backgroundColor: 'rgb(238, 238, 238)',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            border: '1px solid rgb(222, 226, 230)',
                          }}
                        >
                          Vaccination Details (টিকা প্রদানের বিবরণ)
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Date of Vaccination (Dose 1):
                              <br />
                              টিকা প্রদানের তারিখ (ডোজ ১):
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {reverseDate(data?.firstVaccinationDate)}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Name of Vaccine (Dose 1):
                              <br />
                              টিকার নাম (ডোজ ১):
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.firstVaccineName}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Date of Vaccination (Dose 2):
                              <br />
                              টিকা প্রদানের তারিখ (ডোজ ২):
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {reverseDate(data?.secondVaccinationDate)}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Name of Vaccine (Dose 2):
                              <br />
                              টিকার নাম (ডোজ ২):
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.secondVaccineName}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Vaccination Center:
                              <br />
                              টিকা প্রদানের কেন্দ্র:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              {data?.vaccinationCenter}
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Vaccinated By:
                              <br />
                              টিকা প্রদানকারী:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              Directorate General of Health Services (DGHS)
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'right',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              Total Doses Given:
                              <br />
                              মোট ডোজ সংখ্যা:
                            </div>
                          </div>
                          <div
                            className="col-6"
                            style={{ border: '1px dashed rgb(222, 226, 230)' }}
                          >
                            <div
                              className="cert-verify-content-div"
                              style={{
                                fontSize: '13px',
                                textAlign: 'left',
                                padding: '5px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {' '}
                              3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-center p-2"
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'rgb(238, 238, 238)',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      border: '1px solid rgb(222, 226, 230)',
                    }}
                  >
                    Other Doses (অন্যান্য ডোজসমূহ):
                  </div>
                  <div className="row m-0">
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'right',
                          padding: '5px',
                          fontWeight: 'bold',
                        }}
                      >
                        Dose (ডোজ):
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'center',
                          padding: '5px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Vaccine Name (টিকার নাম):
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'left',
                          padding: '5px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Date (তারিখ):
                      </div>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'right',
                          padding: '5px',
                          overflowWrap: 'break-word',
                          textTransform: 'capitalize',
                        }}
                      >
                        dose-3
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'center',
                          padding: '5px',
                          overflowWrap: 'break-word',
                        }}
                      >
                        {' '}
                        {data?.thirdVaccineName}
                      </div>
                    </div>
                    <div
                      className="col-4"
                      style={{ border: '1px dashed rgb(222, 226, 230)' }}
                    >
                      <div
                        className="cert-verify-content-div"
                        style={{
                          fontSize: '13px',
                          textAlign: 'left',
                          padding: '5px',
                          overflowWrap: 'break-word',
                        }}
                      >
                        {' '}
                        {reverseDate(data?.thirdVaccinationDate)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-2"
                    style={{
                      textAlign: 'center',
                      border: '1px solid rgb(222, 226, 230)',
                    }}
                  >
                    For any further assistance, please visit www.dghs.gov.bd or
                    e-mail: info@dghs.gov.bd <br />
                    (প্রয়োজনে www.dghs.gov.bd ওয়েব সাইটে ভিজিট করুন অথবা ইমেইল
                    করুনঃ info@dghs.gov.bd)
                  </div>
                  <div
                    className="text-center p-2"
                    style={{
                      textAlign: 'center',
                      backgroundColor: ' rgb(238, 238, 238)',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      border: '1px solid rgb(222, 226, 230)',
                    }}
                  >
                    In Cooperation With
                  </div>
                  <div
                    className="text-center d-flex justify-content-center p-2 mb-3 footer-cert-verify-img"
                    style={{ border: '1px solid rgb(222, 226, 230)' }}
                  >
                    <img
                      src={ictLogo}
                      alt="ict logo"
                      style={{ maxWidth: '80%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
