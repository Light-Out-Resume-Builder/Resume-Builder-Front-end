import { useCallback } from "react"

const Home = () => {
  const onAboutTextClick = useCallback(() => {
    // Please sync "About" to the project
  }, [])

  const onServicesTextClick = useCallback(() => {
    // Please sync "Service page" to the project
  }, [])

  return (
    <div className="w-full relative bg-lightsteelblue h-[6036px] overflow-hidden text-left text-[57.81px] text-black font-resume-heading-1-62">
      <div className="absolute top-[158px] left-[2px] w-[1512px] flex flex-col items-start justify-start">
        <div className="w-[1512px] relative h-[650px]">
          <div className="absolute top-[0px] left-[0px] w-[1512px] h-[650px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(219,_234,_254,_0.7),_rgba(96,_165,_250,_0.7))] w-[1512px] h-[650px]" />
          </div>
        </div>
      </div>
      <b className="absolute top-[938px] left-[calc(50%_-_333px)] text-[48.17px] tracking-[0.01em]">
        <span>{`Build your `}</span>
        <span className="text-slateblue">{`resume `}</span>
        <span>in 4 steps</span>
      </b>
      <div className="absolute top-[77px] left-[calc(50%_-_689.5px)] flex flex-row items-center justify-start gap-[111px] text-lg font-inter">
        <b className="relative text-13xl font-integral-cf">light - out</b>
        <div className="relative text-[20px] font-semibold text-slateblue">
          Home
        </div>
        <div className="relative cursor-pointer" onClick={onAboutTextClick}>
          About
        </div>
        <div className="relative cursor-pointer" onClick={onServicesTextClick}>
          Services
        </div>
        <div className="relative">Templates</div>
        <div className="rounded-[3.58px] flex flex-row items-center justify-center py-[14.3px] px-[28.6px] text-center text-primary-m-blue border-[0.9px] border-solid border-primary-m-blue">
          <div className="relative leading-[21.49px]">Log in</div>
        </div>
        <div className="rounded-[9px] bg-btn-primary-bg-active flex flex-row items-center justify-center py-[14.4px] px-[32.4px] text-[16.2px] text-white font-resume-heading-1-62">
          <div className="relative leading-[21.6px] font-semibold">Signup</div>
        </div>
      </div>
      <div className="absolute top-[1071px] left-[162px] flex flex-row items-center justify-start gap-[55px] text-right text-slateblue font-inter">
        <img
          className="w-[250.5px] relative h-[219.7px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <div className="w-[474.1px] relative h-[106px]">
          <b className="absolute top-[11.53px] left-[0px] tracking-[-0.07em] leading-[67.44px] font-quicksand">
            1.
          </b>
          <div className="absolute top-[38px] left-[44.07px] text-base tracking-[-0.07em] leading-[67.44px]">
            select our template from a range of field tested styles and formats
          </div>
          <b className="absolute top-[0px] left-[44.07px] text-[34.04px] tracking-[-0.07em] leading-[67.44px]">
            Pick a Template
          </b>
        </div>
      </div>
      <div className="absolute top-[1649px] left-[139px] w-[719.8px] h-[280px] text-right text-slateblue font-quicksand">
        <div className="absolute top-[-26px] left-[-24px] w-[745.8px] h-[280px]">
          <div className="absolute top-[0px] left-[0px] w-[745.8px] h-[280px]">
            <div className="absolute top-[0px] left-[0px] w-[745.8px] flex flex-row items-center justify-between">
              <img
                className="w-[406px] relative h-[280px] object-cover"
                alt=""
                src="/3d-mockup-1@2x.png"
              />
              <div className="w-[400.8px] relative h-[99.8px]">
                <b className="absolute top-[8.52px] left-[0px] tracking-[-0.07em] leading-[67.44px]">
                  3.
                </b>
                <b className="absolute top-[0px] left-[55px] text-9xl-9 tracking-[-0.07em] leading-[67.44px] font-resume-heading-1-62">
                  Customize Your Layout
                </b>
                <div className="absolute top-[31.79px] left-[56.75px] text-base tracking-[-0.07em] leading-[67.44px] font-inter">
                  Give your document a professional and elegant look.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2192px] left-[calc(50%_-_759px)] w-[1537px] h-[650px] text-43xl">
        <div className="absolute top-[0px] left-[calc(50%_-_768.5px)] bg-lavender w-[1537px] h-[650px] flex flex-col items-start justify-start py-[70px] px-[72px] box-border">
          <div className="w-[1353.3px] relative h-[487px]">
            <div className="absolute top-[0px] left-[0px] w-[350px] flex flex-col items-start justify-start gap-[41px]">
              <div className="w-[350px] relative h-[81px]">
                <b className="absolute top-[0px] left-[0px] leading-[130%]">
                  Our services
                </b>
              </div>
              <div className="self-stretch relative text-[16.7px] tracking-[0.01em] leading-[25.98px] font-inter inline-block h-[237px] shrink-0">
                Choose from one of our expertly prepared resume types below, by
                using pre-established parts that have been endorsed by
                recruiters internationally, you can begin creating your resume
                in under 5 seconds, additionally, you can edit to fit your
                preferences and personality before clicking {"Download"}. Even if
                you have never created a resume before, it is that SIMPLE to
                use!
              </div>
            </div>
            <div className="absolute top-[41px] left-[530px] flex flex-row items-center justify-start gap-[43px] text-[3.18px] text-white font-manrope">
              <div className="w-[210.2px] relative bg-white h-[297.1px] overflow-hidden shrink-0 opacity-[0.5]">
                <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[79.7px] h-[297.1px]" />
                <div className="absolute top-[77.58px] left-[16.23px] font-medium">
                  example@gmail.com
                </div>
                <div className="absolute top-[87.46px] left-[16.23px] font-medium">
                  +2340718723590
                </div>
                <div className="absolute top-[99.46px] left-[16.23px] font-medium">
                  {" "}
                  LOREM STREET 123
                </div>
                <div className="absolute top-[144.97px] left-[7.41px] font-medium">
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li className="mb-0">FIGMA</li>
                  </ul>
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li className="mb-0">WEBDESIGN</li>
                  </ul>
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li className="mb-0">UI DESIGN</li>
                  </ul>
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li>ANIMATION</li>
                  </ul>
                </div>
                <div className="absolute top-[112.51px] left-[16.23px] font-medium">
                  {" "}
                  LOREM STREET 123
                </div>
                <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[209.9px] h-[58.9px]" />
                <img
                  className="absolute top-[5.3px] left-[37.04px] rounded-[50%] w-[49.4px] h-12 object-cover"
                  alt=""
                  src="/ellipse-9@2x.png"
                />
                <b className="absolute top-[10.2px] left-[95.96px] text-[8.82px] font-ubuntu">
                  Abasiodiong John
                </b>
                <div className="absolute top-[18.87px] left-[113.6px] text-[5.64px] font-medium">
                  UI/UX designer
                </div>
                <div className="absolute top-[59.27px] left-[0px] bg-mediumvioletred w-[79.7px] h-[11.6px]" />
                <div className="absolute top-[127.36px] left-[0px] bg-mediumvioletred w-[79.7px] h-[11.6px]" />
                <div className="absolute top-[181.69px] left-[0px] bg-mediumvioletred w-[79.7px] h-[11.6px]" />
                <div className="absolute top-[226.14px] left-[0px] bg-mediumvioletred w-[79.7px] h-[11.6px]" />
                <b className="absolute top-[60.88px] left-[20.11px] text-[5.64px] font-ubuntu">
                  CONTACT
                </b>
                <b className="absolute top-[128.97px] left-[20.11px] text-[5.64px] font-ubuntu">{`PRO SKILL `}</b>
                <b className="absolute top-[182.95px] left-[20.11px] text-[5.64px] font-ubuntu">
                  CERTIFICATE
                </b>
                <b className="absolute top-[227.4px] left-[20.11px] text-[5.64px] font-ubuntu">
                  SOCIAL MEDIA
                </b>
                <img
                  className="absolute top-[76.91px] left-[7.05px] w-[7.1px] h-[7.1px] overflow-hidden"
                  alt=""
                  src="/carbonemail.svg"
                />
                <img
                  className="absolute top-[87.14px] left-[7.41px] w-[7.1px] h-[7.1px] overflow-hidden"
                  alt=""
                  src="/bxphone.svg"
                />
                <img
                  className="absolute top-[99.49px] left-[7.41px] w-[7.1px] h-[7.1px] overflow-hidden"
                  alt=""
                  src="/akariconslocation.svg"
                />
                <img
                  className="absolute top-[111.13px] left-[7.76px] w-[6.6px] h-[7.1px] overflow-hidden"
                  alt=""
                  src="/faaddressbook.svg"
                />
                <div className="absolute top-[34.93px] left-[95.96px] w-[102.3px] h-[13.8px]">
                  <div className="absolute top-[1.76px] left-[10.94px] font-medium inline-block w-[91.4px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[8.1px] h-[8.1px] overflow-hidden"
                    alt=""
                    src="/elquotes.svg"
                  />
                </div>
                <img
                  className="absolute top-[77.26px] left-[110.42px] max-h-full w-[19.1px]"
                  alt=""
                  src="/vector-8.svg"
                />
                <img
                  className="absolute top-[156.64px] left-[110.42px] max-h-full w-[19.1px]"
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className="absolute top-[263.54px] left-[110.42px] max-h-full w-[19.1px]"
                  alt=""
                  src="/vector-12.svg"
                />
                <b className="absolute top-[82.21px] left-[116.42px] text-8xs-2 text-black">
                  Lorem ipsum dolor sit amet, consectetur
                </b>
                <div className="absolute top-[106.19px] left-[116.42px] text-[3.88px] font-medium text-black">
                  <span>{`Havard University `}</span>
                  <span className="text-hotpink">(Oct 2015 - 2020)</span>
                </div>
                <div className="absolute top-[123.48px] left-[118.19px] text-[3.88px] font-medium text-black">
                  <span>{`Havard University `}</span>
                  <span className="text-hotpink">(Oct 2015 - 2020)</span>
                </div>
                <b className="absolute top-[99.13px] left-[116.42px] text-8xs-2 text-black">
                  B. ENGR. In Electrical Engineering
                </b>
                <b className="absolute top-[116.42px] left-[116.42px] text-8xs-2 text-black">
                  B. ENGR. In Electrical Engineering
                </b>
                <div className="absolute top-[83.26px] left-[97.37px] font-h3 text-black">
                  2008-2013
                </div>
                <div className="absolute top-[99.84px] left-[98.08px] font-h3 text-black">
                  2015-2020
                </div>
                <div className="absolute top-[116.42px] left-[98.08px] font-h3 text-black">
                  2015-2020
                </div>
                <div className="absolute top-[171.11px] left-[96.31px] font-h3 text-black">
                  2015-2020
                </div>
                <div className="absolute top-[208.86px] left-[96.31px] font-h3 text-black">
                  2015-2020
                </div>
                <img
                  className="absolute top-[80.44px] left-[92.08px] max-w-full overflow-hidden h-[64.6px]"
                  alt=""
                  src="/vector-9.svg"
                />
                <img
                  className="absolute top-[148.53px] left-[87.49px] w-[8.8px] h-[8.8px] overflow-hidden"
                  alt=""
                  src="/icoutlinework.svg"
                />
                <img
                  className="absolute top-[159.82px] left-[92.78px] max-w-full overflow-hidden h-[89.6px]"
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className="absolute top-[254.72px] left-[88.2px] w-[8.8px] h-[8.8px] overflow-hidden"
                  alt=""
                  src="/vsfacelike.svg"
                />
                <b className="absolute top-[256.13px] left-[110.42px] text-[5.64px] font-ubuntu text-black">
                  HOBBIES AND INTEREST
                </b>
                <img
                  className="absolute top-[269.18px] left-[110.42px] w-[7.1px] h-[7.1px] overflow-hidden"
                  alt=""
                  src="/antdesigncamerafilled.svg"
                />
                <img
                  className="absolute top-[269.53px] left-[126.3px] w-[6.4px] h-[6.4px] overflow-hidden"
                  alt=""
                  src="/emojionesoccerball.svg"
                />
                <img
                  className="absolute top-[268.83px] left-[159.46px] w-[8.1px] h-[8.1px] overflow-hidden"
                  alt=""
                  src="/dashiconscar.svg"
                />
                <img
                  className="absolute top-[268.48px] left-[142.18px] w-[8.5px] h-[8.5px] overflow-hidden"
                  alt=""
                  src="/bxsplanetakeoff.svg"
                />
                <b className="absolute top-[193.7px] left-[3.17px] text-[3.88px] tracking-[-0.01em] flex items-center w-[64.9px]">
                  <span className="w-full">
                    <ul className="m-0 font-inherit text-inherit pl-[5px]">
                      <li className="mb-0">{`Red Hat certificate System `}</li>
                    </ul>
                    <p className="m-0"> Administrator</p>
                  </span>
                </b>
                <div className="absolute top-[206px] left-[9.17px] tracking-[-0.01em]">
                  October 2020-October 2022
                </div>
                <div className="absolute top-[211.29px] left-[9.17px] tracking-[-0.01em] font-medium">{`Certificate ID; 190-250-047 `}</div>
              </div>
              <div className="w-[316.9px] relative shadow-[0px_4.527700424194336px_4.53px_4.53px_rgba(0,_0,_0,_0.25)] bg-white h-[446px] overflow-hidden shrink-0 text-14xl font-h3">
                <img
                  className="absolute top-[0px] left-[198.11px] w-[119.6px] h-[446.1px]"
                  alt=""
                  src="/rectangle-1.svg"
                />
                <img
                  className="absolute top-[321.46px] left-[198.11px] w-[119.6px] h-[124.6px]"
                  alt=""
                  src="/rectangle-14.svg"
                />
                <div className="absolute top-[36.01px] left-[23.67px] w-[174.4px] h-[169.2px] text-black">
                  <div className="absolute top-[21.31px] left-[0px] w-[145.5px] h-[147.9px]">
                    <div className="absolute top-[0px] left-[0px] w-[145.5px] h-[43.5px]">
                      <b className="absolute h-[7.82%] w-[33.75%] top-[18.9%] left-[0%] tracking-[0.03em] flex items-center">
                        HR MANAGER
                      </b>
                      <div className="absolute h-[14.02%] w-full top-[71.61%] left-[0%] tracking-[0.03em] leading-[170%] font-resume-heading-1-62 text-color flex items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.
                      </div>
                      <div className="absolute h-[5.75%] w-[39.79%] top-[36.09%] left-[0%] text-9xl tracking-[0.03em] leading-[4.5%] font-resume-heading-1-62 text-b flex items-center">
                        Bethany Services, Grand Rapids, MI
                      </div>
                      <div className="absolute top-[-3.16%] left-[5.48%] text-[3.74px] tracking-[0.03em] font-semibold text-darkgray-200">
                        2015 - 2016
                      </div>
                      <div className="absolute h-[1.61%] w-[4.19%] top-[6.87%] right-[95.81%] bottom-[91.52%] left-[0%] bg-darkgray-200" />
                    </div>
                    <div className="absolute top-[52.21px] left-[0px] w-[145.5px] h-[43.5px]">
                      <b className="absolute h-[7.82%] w-[33.75%] top-[18.9%] left-[0%] tracking-[0.03em] flex items-center">
                        SR. HR CONSULTANT
                      </b>
                      <div className="absolute h-[14.02%] w-full top-[71.61%] left-[0%] tracking-[0.03em] leading-[170%] font-resume-heading-1-62 text-color flex items-center">
                        <span className="w-full">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p className="m-0">{` `}</p>
                        </span>
                      </div>
                      <div className="absolute h-[5.75%] w-[39.79%] top-[36.09%] left-[0%] text-9xl tracking-[0.03em] leading-[4.5%] font-resume-heading-1-62 text-b flex items-center">
                        Bethany Services, Grand Rapids, MI
                      </div>
                      <div className="absolute top-[-3.16%] left-[5.48%] text-[3.74px] tracking-[0.03em] font-semibold text-darkgray-200">
                        2017 - 2019
                      </div>
                      <div className="absolute h-[1.61%] w-[4.19%] top-[6.87%] right-[95.81%] bottom-[91.52%] left-[0%] bg-darkgray-200" />
                    </div>
                    <div className="absolute top-[104.41px] left-[0px] w-[145.5px] h-[43.5px]">
                      <b className="absolute h-[7.82%] w-[33.75%] top-[18.9%] left-[0%] tracking-[0.03em] flex items-center">
                        HR DIRECTOR
                      </b>
                      <div className="absolute h-[14.02%] w-full top-[71.61%] left-[0%] tracking-[0.03em] leading-[170%] font-resume-heading-1-62 text-color flex items-center">
                        <span className="w-full">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p className="m-0">{` `}</p>
                        </span>
                      </div>
                      <div className="absolute h-[5.75%] w-[39.79%] top-[36.09%] left-[0%] text-9xl tracking-[0.03em] leading-[4.5%] font-resume-heading-1-62 text-b flex items-center">
                        Bethany Services, Grand Rapids, MI
                      </div>
                      <div className="absolute top-[-3.16%] left-[5.48%] text-[3.74px] tracking-[0.03em] font-semibold text-darkgray-200">
                        2019 - 2020
                      </div>
                      <div className="absolute h-[1.61%] w-[4.19%] top-[6.87%] right-[95.81%] bottom-[91.52%] left-[0%] bg-darkgray-200" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[174.4px] h-[8.8px] text-28xl text-e">
                    <div className="absolute top-[0px] left-[0px] w-[55.1px] h-[8.8px]">
                      <div className="absolute h-[102.27%] w-[101.63%] top-[0%] right-[-1.63%] bottom-[-2.27%] left-[0%]">
                        <b className="absolute top-[0%] left-[0%] tracking-[0.01em]">
                          WORK EXPERIENCE
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[3.61px] left-[66.04px] bg-silver w-[108.4px] h-[1.2px]" />
                  </div>
                </div>
                <div className="absolute top-[39.25px] left-[278.48px] bg-silver w-[39.2px] h-[1.2px]" />
                <div className="absolute top-[37.38px] left-[208.45px] text-[4.36px] tracking-[0.01em] font-resume-heading-1-62">{`DESIGN & FONTEND DEVELOPER`}</div>
                <div className="absolute top-[58.69px] left-[208.45px] w-[77.8px] h-3 text-[9.97px] font-resume-heading-1-62">
                  <div className="absolute top-[0px] left-[0px] tracking-[0.01em] font-black">{`JUSTIN `}</div>
                  <div className="absolute top-[0px] left-[37.75px] tracking-[0.01em] font-light text-darkgray-100">
                    NGUYEN
                  </div>
                </div>
                <div className="absolute top-[82.36px] left-[207.94px] w-[73.4px] h-[41.3px] text-[4.36px] text-gray-6 font-resume-heading-1-62">
                  <div className="absolute top-[0px] left-[0.15px] w-[45.2px] h-[5px]">
                    <div className="absolute top-[0px] left-[7.25px] tracking-[0.05em]">
                      0804 - 969 - 8797
                    </div>
                    <img
                      className="absolute h-[64%] w-[6.86%] top-[19.18%] right-[93.14%] bottom-[16.82%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="absolute top-[12.08px] left-[0px] w-[66.4px] h-[5px]">
                    <div className="absolute top-[0px] left-[7.39px] tracking-[0.05em]">
                      justinnguyen23@gmail.com
                    </div>
                    <img
                      className="absolute h-[56%] w-[5.27%] top-[21.25%] right-[94.73%] bottom-[22.75%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <div className="absolute top-[24.17px] left-[0.42px] w-[73px] h-[5px]">
                    <div className="absolute top-[0px] left-[6.97px] tracking-[0.05em]">
                      No. 3 Chubb Road, Ikot Ekpene
                    </div>
                    <img
                      className="absolute h-[72%] w-[3.56%] top-[14.73%] right-[96.44%] bottom-[13.27%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <div className="absolute top-[36.26px] left-[0.49px] w-[70.9px] h-[5px]">
                    <div className="absolute top-[0px] left-[6.9px] tracking-[0.05em]">
                      Ikot Ekpene, Akwa Ibom State
                    </div>
                    <img
                      className="absolute h-[78%] w-[3.39%] top-[11.84%] right-[96.61%] bottom-[10.16%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[164.72px] left-[211.94px] rounded-[0.62px] box-border w-[58.4px] h-[58.4px] border-[0.6px] border-solid border-white" />
                <img
                  className="absolute top-[160.73px] left-[208.45px] w-[56.7px] h-[56.7px] object-cover"
                  alt=""
                  src="/group-42@2x.png"
                />
                <div className="absolute top-[233.62px] left-[208.45px] w-[89.6px] h-[65.7px] text-[4.11px] font-resume-heading-1-62">
                  <img
                    className="absolute top-[0px] left-[0px] w-[7.8px] h-[6.5px]"
                    alt=""
                    src="/.svg"
                  />
                  <div className="absolute top-[17.07px] left-[0px] tracking-[0.03em] leading-[170%] inline-block w-[89.6px] h-[48.6px]">
                    <p className="m-0">{`Lorem ipsum dolor sit amet, consecteturttt adipiscing elit, sed do eiusmod tempor uttt incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudddd exercitation ullamco laboris nisi ut aliquipt `}</p>
                    <p className="m-0">
                      ea commodo consequat. Duis aute irure do
                    </p>
                    <p className="m-0">
                      in reprehenderit in voluptate velit esseeeee
                    </p>
                  </div>
                </div>
                <div className="absolute top-[222.66px] left-[23.67px] w-[174.4px] h-[62.1px] text-[3.74px] text-gray-1">
                  <div className="absolute top-[21.31px] left-[0px] w-[157.5px] h-[40.7px]">
                    <div className="absolute top-[0px] left-[0px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        FIGMA
                      </div>
                    </div>
                    <div className="absolute top-[16.82px] left-[0px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e hidden" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e hidden" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        ILUSTRATOR
                      </div>
                    </div>
                    <div className="absolute top-[33.64px] left-[0px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e hidden" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e hidden" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        INDESIGN
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[88.84px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        PHOTOSHOP
                      </div>
                    </div>
                    <div className="absolute top-[16.82px] left-[88.84px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        HTML/CSS
                      </div>
                    </div>
                    <div className="absolute top-[33.64px] left-[88.84px] w-[68.7px] h-[4.4px]">
                      <div className="absolute h-[56.82%] w-[55.02%] top-[36.84%] right-[0%] bottom-[6.34%] left-[44.98%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
                          <div className="absolute h-full w-[77.25%] top-[0%] right-[22.75%] bottom-[0%] left-[0%] bg-e hidden" />
                          <div className="absolute h-full w-[66.67%] top-[0%] right-[33.33%] bottom-[0%] left-[0%] bg-e hidden" />
                          <div className="absolute h-full w-[72.75%] top-[0%] right-[27.25%] bottom-[0%] left-[0%] bg-e" />
                        </div>
                      </div>
                      <div className="absolute h-full w-[36.39%] top-[0%] left-[0%] tracking-[0.01em] font-medium inline-block">
                        MS-WORD
                      </div>
                    </div>
                  </div>
                  <b className="absolute top-[0px] left-[0.12px] text-[5.86px] tracking-[0.01em] text-e">
                    PRO SKILLS
                  </b>
                  <div className="absolute top-[4.73px] left-[66.04px] bg-silver w-[108.4px] h-[1.2px]" />
                </div>
                <div className="absolute top-[336.42px] left-[208.45px] w-[109.3px] h-[81.9px]">
                  <div className="absolute top-[18.94px] left-[0px] w-[102.5px] h-[29.5px]">
                    <b className="absolute h-[11.53%] w-[71.12%] top-[24.92%] left-[0%] tracking-[0.03em] flex items-center">{`A.S . IN BUSINESS MANAGEMENT `}</b>
                    <div className="absolute h-[38.98%] w-full top-[61.24%] left-[0%] text-[4.11px] tracking-[0.03em] font-resume-heading-1-62 flex items-center">
                      <span className="w-full">
                        <p className="[margin-block-start:0] [margin-block-end:1.37px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </span>
                    </div>
                    <div className="absolute h-[20.34%] w-[21.46%] top-[-8.03%] right-[69.18%] bottom-[87.7%] left-[9.36%] text-[3.74px]">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] font-semibold">
                        2015 - 2019
                      </div>
                    </div>
                    <div className="absolute h-[2.37%] w-[7.22%] top-[6.76%] right-[92.78%] bottom-[90.87%] left-[0%] bg-silver" />
                  </div>
                  <div className="absolute top-[52.33px] left-[0px] w-[102.5px] h-[29.5px]">
                    <b className="absolute h-[11.53%] w-[71.12%] top-[24.92%] left-[0%] tracking-[0.03em] flex items-center">{`A.S . IN BUSINESS MANAGEMENT `}</b>
                    <div className="absolute h-[38.98%] w-full top-[61.24%] left-[0%] text-[4.11px] tracking-[0.03em] font-resume-heading-1-62 flex items-center">
                      <span className="w-full">
                        <p className="[margin-block-start:0] [margin-block-end:1.37px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </span>
                    </div>
                    <div className="absolute h-[20.34%] w-[21.46%] top-[-8.03%] right-[69.18%] bottom-[87.7%] left-[9.36%] text-[3.74px]">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.03em] font-semibold">
                        2015 - 2019
                      </div>
                    </div>
                    <div className="absolute h-[2.37%] w-[7.22%] top-[6.76%] right-[92.78%] bottom-[90.87%] left-[0%] bg-silver" />
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[55.1px] h-[8.8px] text-[5.86px]">
                    <div className="absolute h-[102.27%] w-[61.71%] top-[0%] right-[38.29%] bottom-[-2.27%] left-[0%]">
                      <div className="absolute top-[0%] left-[0%] tracking-[0.01em]">
                        EDUCATION
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[3.86px] left-[70.02px] bg-silver w-[39.2px] h-[1.2px]" />
                </div>
                <div className="absolute top-[372.43px] left-[23.62px] w-[174.5px] h-[41.9px] text-[5.86px] text-e">
                  <div className="absolute top-[0px] left-[0.06px] w-[174.4px] h-[9px]">
                    <b className="absolute top-[0px] left-[0px] tracking-[0.01em]">
                      FOLLOW ME
                    </b>
                    <div className="absolute top-[2.99px] left-[66.04px] bg-silver w-[108.4px] h-[1.2px]" />
                  </div>
                  <div className="absolute h-[49.4%] w-[87.56%] top-[50.66%] right-[12.44%] bottom-[-0.06%] left-[0%] text-[3.74px] text-gray-1">
                    <div className="absolute h-[28.99%] w-[44.24%] top-[0%] right-[55.76%] bottom-[71.01%] left-[0%]">
                      <div className="absolute h-full w-[8.88%] top-[0%] right-[91.12%] bottom-[0%] left-[0%]">
                        <div className="absolute h-full w-full top-[-0.05%] right-[-0.03%] bottom-[0.05%] left-[0.03%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.99px] bg-e" />
                          <img
                            className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.78%] bottom-[16.67%] left-[16.55%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector4.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[1.07px] left-[16px] tracking-[0.01em] font-medium inline-block w-[51.6px] h-1">
                        dribbble.com/Justinngu
                      </div>
                    </div>
                    <div className="absolute h-[29.95%] w-[38.61%] top-[65.01%] right-[61.39%] bottom-[5.04%] left-[0%]">
                      <div className="absolute h-[96.77%] w-[10.17%] top-[0%] right-[89.83%] bottom-[3.23%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.99px] bg-e" />
                        <img
                          className="absolute h-[48.33%] w-3/5 top-[26.99%] right-[19.3%] bottom-[24.68%] left-[20.7%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/path.svg"
                        />
                      </div>
                      <div className="absolute top-[0.2px] left-[16px] tracking-[0.01em] font-medium">
                        twitter.com/Justinngu
                      </div>
                    </div>
                    <div className="absolute h-[30.43%] w-[40.71%] top-[4.82%] right-[0%] bottom-[64.74%] left-[59.3%]">
                      <div className="absolute h-[95.24%] w-[9.65%] top-[0%] right-[90.35%] bottom-[4.76%] left-[0%]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.99px] bg-e" />
                        <img
                          className="absolute h-[41.67%] w-[66.67%] top-[28.97%] right-[14.44%] bottom-[29.36%] left-[18.9%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector5.svg"
                        />
                      </div>
                      <div className="absolute top-[0.32px] left-[16.23px] tracking-[0.01em] font-medium">
                        behance.net/Justinngu
                      </div>
                    </div>
                    <div className="absolute h-[29.95%] w-[38.74%] top-[69.81%] right-[1.96%] bottom-[0.24%] left-[59.3%]">
                      <div className="absolute h-[96.77%] w-[10.14%] top-[0%] right-[89.86%] bottom-[3.23%] left-[0%]">
                        <div className="absolute h-full w-full top-[-0.03%] right-[-0.02%] bottom-[0.03%] left-[0.02%]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.99px] bg-e" />
                          <img
                            className="absolute h-[70%] w-[70%] top-[14.58%] right-[15.51%] bottom-[15.42%] left-[14.49%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[0.2px] left-[16.23px] tracking-[0.01em] font-medium">
                        https://justinngu.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[310.25px] left-[23.67px] w-[174.4px] h-[44.7px] text-28xl text-e">
                  <div className="absolute top-[0px] left-[0.37px] w-[174.1px] h-[8.8px]">
                    <div className="absolute top-[0px] left-[0px] w-[55.1px] h-[8.8px]">
                      <div className="absolute h-[102.27%] w-[47.19%] top-[0%] right-[52.81%] bottom-[-2.27%] left-[0%]">
                        <b className="absolute top-[0%] left-[0%] tracking-[0.01em]">
                          HOBBIES
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[3.86px] left-[65.66px] bg-silver w-[108.4px] h-[1.2px]" />
                  </div>
                  <div className="absolute top-[21.31px] left-[0px] text-[4.11px] tracking-[0.03em] leading-[170%] font-resume-heading-1-62 text-color text-justify flex items-center w-[139.4px] h-[23.4px]">
                    Socialising with firends and family, watching TV (BBC Clic,
                    news and documentaries), playing football on a weekly basis,
                    reading non-fiction books, solving puzzles, fishing on the
                    regular basis and computing (creating and desiging software
                    and website).
                  </div>
                </div>
                <div className="absolute top-[386.85px] left-[0px] bg-royalblue w-[317.7px] h-[59.8px]" />
                <b className="absolute top-[405.47px] left-[98.05px] text-[10.64px] tracking-[0.01em] leading-[22.6px] font-quicksand text-center">
                  Free Resume Template
                </b>
              </div>
              <div className="w-[210.2px] relative bg-white h-[297.1px] overflow-hidden shrink-0 opacity-[0.5] text-[3.14px] text-black">
                <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[80.5px] h-[293.5px]" />
                <div className="absolute top-[159.28px] left-[4.18px] rounded-[50%] bg-gray-100 box-border w-[9.4px] h-[9.4px] border-[0.3px] border-solid border-white" />
                <div className="absolute top-[173.92px] left-[4.18px] rounded-[50%] bg-gray-100 box-border w-[9.4px] h-[9.4px] border-[0.3px] border-solid border-white" />
                <div className="absolute top-[160.32px] left-[15.68px] font-medium text-white flex items-center w-[44.3px] h-[7.3px]">
                  +2347018723590
                </div>
                <div className="absolute top-[174.96px] left-[15.68px] font-medium text-white flex items-center w-[44.3px] h-[7.3px]">
                  example@gmail.com
                </div>
                <div className="absolute top-[14.99px] left-[10.11px] rounded-tl-[34.85px] rounded-tr-none rounded-br-none rounded-bl-[34.85px] bg-orangered w-[74.2px] h-[67.3px]" />
                <img
                  className="absolute top-[21.95px] left-[19.87px] rounded-[50%] w-[55.1px] h-[53.3px] object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className="absolute top-[81.9px] left-[80.51px] bg-orangered w-[3.8px] h-[211.6px]" />
                <b className="absolute top-[87.62px] left-[15.19px] text-[8.71px] font-ubuntu text-white text-center">
                  <p className="m-0">Abasiodiong</p>
                  <p className="m-0">John</p>
                </b>
                <img
                  className="absolute top-[113.97px] left-[16.03px] max-h-full w-[53.3px]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="absolute top-[115.15px] left-[24.4px] text-[5.58px] font-medium text-white">
                  UI/UX designer
                </div>
                <b className="absolute top-[141.85px] left-[6.27px] text-[5.58px] font-ubuntu text-white">
                  CONTACT
                </b>
                <b className="absolute top-[35.55px] left-[102.48px] text-[5.58px] font-ubuntu">
                  WORK EXPERIENCE
                </b>
                <b className="absolute top-[100.73px] left-[102.48px] text-[5.58px] font-ubuntu">
                  EDUCATION
                </b>
                <b className="absolute top-[132.79px] left-[102.48px] text-[5.58px] font-ubuntu">
                  CERTIFICATE
                </b>
                <b className="absolute top-[170.43px] left-[102.48px] text-[5.58px] font-ubuntu">
                  HOBBIES
                </b>
                <b className="absolute top-[195.53px] left-[102.48px] text-[5.58px] font-ubuntu">
                  SOCIAL MEDIA
                </b>
                <b className="absolute top-[199.36px] left-[5.92px] text-[5.58px] font-ubuntu text-white">
                  PRO SKILL
                </b>
                <div className="absolute top-[149.52px] left-[0.35px] w-[81.9px] h-[2.1px]">
                  <img
                    className="absolute top-[1.05px] left-[0px] max-h-full w-[48.1px]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="absolute top-[0px] left-[49.5px] rounded-tl-[6.97px] rounded-tr-none rounded-br-none rounded-bl-[6.97px] bg-orangered w-[32.4px] h-[2.1px]" />
                </div>
                <div className="absolute top-[206.33px] left-[0.35px] w-[81.9px] h-[2.1px]">
                  <img
                    className="absolute top-[1.05px] left-[0px] max-h-full w-[48.1px]"
                    alt=""
                    src="/vector-21.svg"
                  />
                  <div className="absolute top-[0px] left-[49.5px] rounded-tl-[6.97px] rounded-tr-none rounded-br-none rounded-bl-[6.97px] bg-orangered w-[32.4px] h-[2.1px]" />
                </div>
                <img
                  className="absolute top-[161.37px] left-[6.27px] w-[5.6px] h-[5.6px] overflow-hidden"
                  alt=""
                  src="/bxphone1.svg"
                />
                <img
                  className="absolute top-[176.01px] left-[6.27px] w-[5.6px] h-[5.6px] overflow-hidden"
                  alt=""
                  src="/carbonemail1.svg"
                />
                <b className="absolute top-[214.52px] left-[6.62px] text-[3.83px] tracking-[-0.01em] text-white">
                  Design Tools
                </b>
                <div className="absolute top-[218.84px] left-[6.62px] tracking-[-0.01em] text-white">
                  <p className="m-0">Figma,Adobe XD,Framer,Photoshop</p>
                  <p className="m-0">Illustrator</p>
                </div>
                <b className="absolute top-[230.91px] left-[6.62px] text-[3.83px] tracking-[-0.01em] text-white">
                  Programming
                </b>
                <b className="absolute top-[251.12px] left-[6.27px] text-[3.83px] tracking-[-0.01em] text-white">
                  Programming
                </b>
                <div className="absolute top-[236.41px] left-[6.62px] tracking-[-0.01em] text-white">
                  <p className="m-0">Javascript,HTML,CSS</p>
                  <p className="m-0">XML,Andriod</p>
                  <p className="m-0">python C,cxxxx</p>
                </div>
                <div className="absolute top-[256.62px] left-[6.27px] tracking-[-0.01em] text-white">
                  <p className="m-0">Javascript,HTML,CSS</p>
                  <p className="m-0">XML,Andriod</p>
                  <p className="m-0">python C,cxxxx</p>
                </div>
                <div className="absolute top-[14.99px] left-[102.13px] w-[101.1px] h-[13.7px]">
                  <div className="absolute top-[1.74px] left-[10.81px] font-medium inline-block w-[90.3px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
                  <img
                    className="absolute top-[0px] left-[0px] w-2 h-2 overflow-hidden"
                    alt=""
                    src="/elquotes1.svg"
                  />
                </div>
                <div className="absolute top-[41.83px] left-[102.48px] rounded-tl-none rounded-tr-[6.97px] rounded-br-[6.97px] rounded-bl-none bg-orangered w-[30.3px] h-[1.4px]" />
                <div className="absolute top-[107px] left-[102.48px] rounded-tl-none rounded-tr-[6.97px] rounded-br-[6.97px] rounded-bl-none bg-orangered w-[30.3px] h-[1.4px]" />
                <div className="absolute top-[139.06px] left-[102.48px] rounded-tl-none rounded-tr-[6.97px] rounded-br-[6.97px] rounded-bl-none bg-orangered w-[30.3px] h-[1.4px]" />
                <div className="absolute top-[176.7px] left-[102.48px] rounded-tl-none rounded-tr-[6.97px] rounded-br-[6.97px] rounded-bl-none bg-orangered w-[30.3px] h-[1.4px]" />
                <div className="absolute top-[201.8px] left-[102.48px] rounded-tl-none rounded-tr-[6.97px] rounded-br-[6.97px] rounded-bl-none bg-orangered w-[30.3px] h-[1.4px]" />
                <img
                  className="absolute top-[42.52px] left-[132.8px] max-h-full w-[60.3px]"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="absolute top-[107.7px] left-[132.8px] max-h-full w-[60.3px]"
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className="absolute top-[139.76px] left-[132.8px] max-h-full w-[60.3px]"
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className="absolute top-[177.4px] left-[132.8px] max-h-full w-[60.3px]"
                  alt=""
                  src="/vector-6.svg"
                />
                <img
                  className="absolute top-[202.5px] left-[132.8px] max-h-full w-[60.3px]"
                  alt=""
                  src="/vector-7.svg"
                />
                <div className="absolute top-[43.05px] left-[105.96px] text-[3.83px] tracking-[-0.01em]">
                  <b>Graphic Designer</b>
                  <span className="font-medium text-dimgray">
                    {" "}
                    @vidya Accademy IT Division
                  </span>
                </div>
                <div className="absolute top-[67.79px] left-[105.96px] text-[3.83px] tracking-[-0.01em]">
                  <b>Graphic Designer</b>
                  <span className="font-medium text-dimgray">
                    {" "}
                    @vidya Accademy IT Division
                  </span>
                </div>
                <div className="absolute top-[49.59px] left-[107.01px] tracking-[-0.01em]">
                  July 2021-present // thrissor, kegara,india
                </div>
                <div className="absolute top-[74.34px] left-[107.01px] tracking-[-0.01em]">
                  July 2021-present // thrissor, kegara,india
                </div>
                <div className="absolute top-[55.17px] left-[102.48px] tracking-[-0.01em]">
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li className="mb-0">
                      djjkkfkdfkfkfkflfdklfdmfmfkfkfkmfmfmkf
                    </li>
                    <li className="mb-0">cjkcvkvckvcfkfdmdfmkffkfk</li>
                    <li>fmfkfkffk,fkfkfkrlkfkfkfklfkfkfk</li>
                  </ul>
                </div>
                <div className="absolute top-[79.92px] left-[102.48px] tracking-[-0.01em]">
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li className="mb-0">
                      djjkkfkdfkfkfkflfdklfdmfmfkfkfkmfmfmkf
                    </li>
                    <li className="mb-0">cjkcvkvckvcfkfdmdfmkffkfk</li>
                    <li>fmfkfkffk,fkfkfkrlkfkfkfklfkfkfk</li>
                  </ul>
                </div>
                <div className="absolute top-[46.7px] left-[102.13px] rounded-[50%] bg-black w-[2.8px] h-[2.8px]" />
                <div className="absolute top-[71.45px] left-[102.13px] rounded-[50%] bg-black w-[2.8px] h-[2.8px]" />
                <div className="absolute top-[112.58px] left-[102.13px] rounded-[50%] bg-black w-[2.8px] h-[2.8px]" />
                <div className="absolute top-[144.99px] left-[102.13px] rounded-[50%] bg-black w-[2.8px] h-[2.8px]" />
                <b className="absolute top-[109.27px] left-[106.31px] text-[3.83px] tracking-[-0.01em]">{`Vidya Academy Science and Technology `}</b>
                <div className="absolute top-[116.16px] left-[106.66px] tracking-[-0.01em]">
                  July 2016-2021 // thrissor, kegara,india
                </div>
                <div className="absolute top-[121.39px] left-[101.43px] tracking-[-0.01em] font-medium">
                  <ul className="m-0 font-inherit text-inherit pl-1">
                    <li>
                      Bachalor of Technology in Computer science Engineering
                    </li>
                  </ul>
                </div>
                <b className="absolute top-[140.25px] left-[107.01px] text-[3.83px] tracking-[-0.01em] flex items-center w-[52.6px]">
                  <span className="w-full">
                    <p className="m-0">{`Red Hat certificate System `}</p>
                    <p className="m-0">Administrator</p>
                  </span>
                </b>
                <div className="absolute top-[153.11px] left-[107.35px] tracking-[-0.01em]">
                  October 2020-October 2022
                </div>
                <div className="absolute top-[158.34px] left-[107.35px] tracking-[-0.01em] font-medium">{`Certificate ID; 190-250-047 `}</div>
                <img
                  className="absolute top-[181.59px] left-[102.13px] w-[7px] h-[7px] overflow-hidden"
                  alt=""
                  src="/antdesigncamerafilled1.svg"
                />
                <img
                  className="absolute top-[181.93px] left-[117.81px] w-[6.3px] h-[6.3px] overflow-hidden"
                  alt=""
                  src="/emojionesoccerball1.svg"
                />
                <img
                  className="absolute top-[181.24px] left-[151.97px] w-2 h-2 overflow-hidden"
                  alt=""
                  src="/dashiconscar1.svg"
                />
                <img
                  className="absolute top-[180.89px] left-[133.49px] w-[8.4px] h-[8.4px] overflow-hidden"
                  alt=""
                  src="/bxsplanetakeoff1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3564px] left-[calc(50%_-_720px)] w-[1439px] h-[945px] overflow-hidden text-center text-[18.39px] font-inter">
        <div className="absolute top-[590.44px] left-[961.26px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
        <div className="absolute top-[590.44px] left-[121.56px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
        <div className="absolute top-[198.18px] left-[541.41px] w-[388.2px] h-[342.2px]">
          <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
          <img
            className="absolute top-[76.82px] left-[42.59px] w-[140px] h-[141px] object-cover"
            alt=""
            src="/online-security@2x.png"
          />
        </div>
        <div className="absolute top-[201.24px] left-[122.58px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
        <div className="absolute top-[590.44px] left-[541.41px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
        <div className="absolute top-[198.18px] left-[960.24px] [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] w-[388.2px] h-[342.2px]" />
        <div className="absolute top-[345px] left-[726px] tracking-[0.01em] leading-[25px] font-light inline-block w-[191px]">
          <p className="m-0">{`We respect your privacy & give you`}</p>
          <p className="m-0">{` control over your content and your `}</p>
          <p className="m-0">data with us.</p>
        </div>
        <div className="absolute top-[36px] left-[117px] w-[1261px] flex flex-col items-center justify-start gap-[41px] text-left text-43xl font-resume-heading-1-62">
          <div className="w-[812px] flex flex-col items-center justify-start gap-[15px]">
            <b className="self-stretch relative leading-[130%]">
              Benefits of using our product
            </b>
            <div className="self-stretch relative text-[24.52px] tracking-[0.01em] leading-[24.52px] font-semibold font-inter text-slateblue text-center">
              Why Choose Us?
            </div>
          </div>
          <div className="w-[1261px] relative h-[685.8px] text-[30.65px]">
            <div className="absolute top-[0px] left-[424.41px] w-[388.2px] flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative [filter:drop-shadow(0px_0px_5.11px_rgba(0,_0,_0,_0.1))] rounded-[20.43px] h-[342.2px] z-[0]" />
              <b className="w-[189px] absolute !m-[0] top-[73.82px] left-[223.59px] tracking-[0.01em] leading-[34.73px] inline-block h-[35px] shrink-0 z-[1]">
                Secure
              </b>
            </div>
            <div className="absolute top-[78.82px] left-[13px] flex flex-row items-center justify-start gap-[23px]">
              <img
                className="w-[106px] relative h-[118px] object-cover"
                alt=""
                src="/seated-man-wearing-headphones-using-laptop@2x.png"
              />
              <div className="w-[189px] flex flex-col items-start justify-start gap-[33px]">
                <b className="self-stretch relative tracking-[0.01em] leading-[34.73px]">
                  Easy to use
                </b>
                <div className="self-stretch relative text-[18.39px] tracking-[0.01em] leading-[25px] font-light font-inter text-center">
                  <p className="m-0">The process of writing a resume is</p>
                  <p className="m-0"> substantially sped up and simplified</p>
                  <p className="m-0"> by using our resume builder.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[78.82px] left-[880px] flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-[156px] relative h-32 object-cover"
                alt=""
                src="/web-design@2x.png"
              />
              <div className="w-[219px] flex flex-col items-center justify-start gap-[21px]">
                <b className="self-stretch relative tracking-[0.01em] leading-[34.73px]">
                  Cool Templates
                </b>
                <div className="w-[184px] relative text-[18.39px] tracking-[0.01em] leading-[25px] font-light font-inter text-center inline-block">
                  <p className="m-0">Our template designs help your</p>
                  <p className="m-0"> resume standout in a pool of others.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[408.82px] left-[0px] flex flex-row items-end justify-start text-center">
              <img
                className="w-[173px] relative h-[121.2px] object-cover"
                alt=""
                src="/design-process@2x.png"
              />
              <div className="w-[171px] flex flex-col items-start justify-start gap-[32px]">
                <b className="relative tracking-[0.01em] leading-[34.73px]">
                  <p className="m-0">{`Intelligent `}</p>
                  <p className="m-0">Design</p>
                </b>
                <div className="self-stretch relative text-[18.39px] tracking-[0.01em] leading-[25px] font-light font-inter">
                  <p className="m-0">With us, you {"won't"} have to bother</p>
                  <p className="m-0"> about the minute details of resume</p>
                  <p className="m-0"> development, such as font</p>
                  <p className="m-0"> choice, layout, etc.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[402.82px] left-[940px] flex flex-row items-end justify-start text-center">
              <img
                className="w-[146px] relative h-[167px] object-cover"
                alt=""
                src="/no-messages@2x.png"
              />
              <div className="w-[188px] flex flex-col items-center justify-start gap-[24px] ml-[-24px]">
                <b className="relative tracking-[0.01em] leading-[34.73px]">
                  <p className="m-0">No Hidden</p>
                  <p className="m-0"> Charges</p>
                </b>
                <div className="self-stretch relative text-[18.39px] tracking-[0.01em] leading-[25px] font-light font-inter">
                  <p className="m-0">We’ve got a free version and our</p>
                  <p className="m-0">
                    {" "}
                    premium pricing is clear. We notify you
                  </p>
                  <p className="m-0"> about any new changes in good time.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[402.82px] left-[451px] flex flex-row items-end justify-start text-center">
              <img
                className="w-[146.5px] relative h-[120px] object-cover"
                alt=""
                src="/image-12@2x.png"
              />
              <div className="w-[211px] flex flex-col items-center justify-start gap-[38px]">
                <b className="self-stretch relative tracking-[0.01em] leading-[34.73px]">
                  <p className="m-0"> HR-Approved</p>
                  <p className="m-0">{`& ATS-Friendly`}</p>
                </b>
                <div className="w-48 relative text-[18.39px] tracking-[0.01em] leading-[25px] font-light font-inter inline-block">
                  <p className="m-0">The core design of our resume</p>
                  <p className="m-0">{` templates are HR-Approved &`}</p>
                  <p className="m-0"> accepted by leading organizations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5565px] left-[21px] w-[1499px] h-[471px] text-base text-white font-quicksand">
        <div className="absolute top-[0px] left-[0px] w-[1499px] h-[471px]">
          <div className="absolute top-[0px] left-[-46px] bg-black-color w-[1545px] h-[471px]" />
          <div className="absolute top-[89px] left-[549px] w-[735px] h-[210px] text-lg">
            <div className="absolute top-[0px] left-[315px] w-[83px] flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Company
              </div>
              <div className="w-[78px] relative h-[152px]">
                <div className="absolute top-[0px] left-[0px] leading-[26px]">
                  Home
                </div>
                <div className="absolute top-[42px] left-[0px] leading-[26px]">
                  About Us
                </div>
                <div className="absolute top-[84px] left-[0px] leading-[26px]">
                  Services
                </div>
                <div className="absolute top-[126px] left-[0px] leading-[26px]">
                  Template
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[555px] w-[180px] flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Contact
              </div>
              <div className="self-stretch relative leading-[26px]">
                (+234) **********
              </div>
              <div className="self-stretch relative leading-[26px]">
                Light-out@gmail.com
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[161px] flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch relative text-[21px] leading-[124.5%] font-semibold">{`Terms & Policies`}</div>
              <div className="self-stretch relative leading-[26px]">
                Terms of Service
              </div>
              <div className="self-stretch relative leading-[26px]">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="absolute top-[325.5px] left-[134.5px] box-border w-[1171px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[378.72px] left-[592px] w-[15px] h-[15px] overflow-hidden" />
          <div className="absolute top-[360px] left-[calc(50%_-_247.5px)] w-[495px] h-6 flex flex-row items-center justify-start py-[5px] px-[81px] box-border gap-[10px] font-h3">
            <div className="w-[495px] absolute !m-[0] top-[0px] left-[0px] h-6 z-[0]">
              <div className="absolute top-[0px] left-[0px] whitespace-pre-wrap opacity-[0.8]">
                Copyright 2024, light-out Resume builder. All rights reserved.
              </div>
            </div>
            <img
              className="w-[13.5px] relative h-[13.5px] z-[1]"
              alt=""
              src="/vector7.svg"
            />
          </div>
          <div className="absolute top-[89.4px] left-[135px] w-[309px] flex flex-col items-start justify-start gap-[20px]">
            <div className="w-[309px] relative h-[111.6px]">
              <div className="absolute top-[47.6px] left-[0px] leading-[32px] font-medium">
                <p className="m-0">Create your resume in a minute, get your</p>
                <p className="m-0">dream job in a blink.</p>
              </div>
              <b className="absolute top-[0px] left-[0px] text-13xl font-integral-cf text-steelblue">
                light - out
              </b>
            </div>
            <img
              className="w-[238.4px] relative h-[31px]"
              alt=""
              src="/group-1000001959.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[289.4px] left-[calc(50%_-_563px)] flex flex-row items-start justify-start gap-[159px] text-[51.06px]">
        <div className="w-[583px] flex flex-row flex-wrap items-start justify-start gap-[13px_184px]">
          <img
            className="w-[42.7px] relative rounded-[57.68px] h-[42.7px]"
            alt=""
            src="/rectangle-923.svg"
          />
          <b className="w-[583px] relative tracking-[0.01em] inline-block shrink-0">
            <span>{`Create a `}</span>
            <span className="text-slateblue">resume</span>
            <span>{` that secures your `}</span>
            <span className="text-slateblue">dream job</span>
          </b>
          <div className="relative text-[18.56px] tracking-[0.01em] leading-[150%] font-inter">
            <p className="m-0">{`Build a resume thats piques the interest of recruiters and `}</p>
            <p className="m-0">gets you hired. It’s fast and easy to use.</p>
          </div>
          <div className="w-72 rounded-[10.06px] bg-slateblue flex flex-row items-center justify-center py-[16.1px] px-[36.2px] box-border text-[18.11px] text-white">
            <div className="relative leading-[24.15px] font-semibold">
              Create Template
            </div>
          </div>
          <div className="w-[67.7px] relative h-[81.9px]">
            <div className="absolute top-[0px] left-[0px] bg-slateblue w-[52.8px] h-[49.3px]" />
            <div className="absolute top-[32.63px] left-[14.97px] box-border w-[52.8px] h-[49.3px] border-[1.6px] border-dashed border-slateblue" />
          </div>
        </div>
        <div className="w-96 relative h-[437.7px] text-[4.57px] text-gray-6 font-h3">
          <img
            className="absolute top-[0px] left-[141.37px] w-[242.6px] h-[325.3px] object-cover"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <div className="absolute top-[91.97px] left-[89.41px] bg-gray-1 w-[231.7px] h-[325.3px] overflow-hidden">
            <div className="absolute top-[22.44px] left-[5.26px] w-[221.2px] h-[280.4px]">
              <div className="absolute top-[1.52px] left-[136.22px] w-[60.7px] h-[33.1px] text-[3.43px]">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Contact
                </div>
                <img
                  className="absolute top-[0px] left-[16.29px] w-[0.1px] h-[33.1px] object-contain"
                  alt=""
                  src="/vector-13.svg"
                />
                <div className="absolute top-[0.96px] left-[19.05px] w-[41.7px] h-[32.2px] text-[2.67px] text-blue-2">
                  <div className="absolute top-[0px] left-[0px] w-[29.5px] h-[4.8px] text-gray-6">
                    <div className="absolute top-[0.38px] left-[6.48px]">
                      +012 345 678 9101
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[4.8px] h-[4.8px] overflow-hidden"
                      alt=""
                      src="/carbonphonefilled.svg"
                    />
                  </div>
                  <div className="absolute top-[6.67px] left-[0px] w-[36.5px] h-[4.8px]">
                    <div className="absolute top-[0.38px] left-[6.48px]">
                      kurtweller@gmail.com
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[4.8px] h-[4.8px] overflow-hidden"
                      alt=""
                      src="/dashiconsemail.svg"
                    />
                  </div>
                  <div className="absolute top-[13.33px] left-[0px] w-[38.7px] h-[4.8px]">
                    <div className="absolute top-[0.38px] left-[6.67px]">
                      dribbble.com/kurtweller
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[4.8px] h-[4.8px] overflow-hidden"
                      alt=""
                      src="/whhdribbblealt.svg"
                    />
                  </div>
                  <div className="absolute top-[20px] left-[0px] w-[39.3px] h-[5.4px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-[4.8px] h-[5.4px] overflow-hidden"
                      alt=""
                      src="/fabrandsbehancesquare.svg"
                    />
                    <div className="absolute top-[0.38px] left-[6.29px]">
                      behance.com/kurtweller
                    </div>
                  </div>
                  <div className="absolute top-[27.43px] left-[0px] w-[41.7px] h-[4.8px]">
                    <div className="absolute top-[0.38px] left-[6.67px]">
                      linkedin.com/in/kurtweller
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[4.8px] h-[4.8px] overflow-hidden"
                      alt=""
                      src="/ciblinkedin.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[105.5px] h-[34.9px] text-[6.86px]">
                <div className="absolute top-[0px] left-[0px] leading-[8.92px] font-medium text-dodgerblue">
                  Kurt Weller
                </div>
                <div className="absolute top-[8.38px] left-[0px] text-[3.43px] font-semibold">
                  Product Designer
                </div>
                <div className="absolute top-[16.19px] left-[0px] w-[105.5px] h-[18.7px] text-[2.67px]">
                  <div className="absolute top-[2.86px] left-[12.95px] font-medium inline-block w-[92.6px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
                  <div className="absolute top-[10.67px] left-[0px] font-medium inline-block w-[105.5px]">
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[11px] h-[11px] overflow-hidden"
                    alt=""
                    src="/elquotes2.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[191.65px] left-[113.54px] w-[107.6px] h-[45.9px]">
                <div className="absolute top-[1.33px] left-[12.76px] font-semibold">
                  ACHIEVEMENTS AND CERTIFICATIONS
                </div>
                <img
                  className="absolute top-[0.38px] left-[12.96px] max-h-full w-[94.7px]"
                  alt=""
                  src="/vector-91.svg"
                />
                <img
                  className="absolute top-[8.76px] left-[12.96px] max-h-full w-[94.7px]"
                  alt=""
                  src="/vector-101.svg"
                />
                <img
                  className="absolute h-[20.7%] w-[8.83%] top-[0%] right-[91.17%] bottom-[79.3%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/riawardfill.svg"
                />
                <div className="absolute top-[13.53px] left-[2.29px] w-[82.6px] h-[32.4px] text-[2.67px]">
                  <img
                    className="absolute top-[1.14px] left-[8.76px] max-w-full overflow-hidden h-[7.6px] object-contain"
                    alt=""
                    src="/vector-41.svg"
                  />
                  <img
                    className="absolute top-[7.05px] left-[8.76px] max-w-full overflow-hidden h-[9.3px] object-contain"
                    alt=""
                    src="/vector-51.svg"
                  />
                  <img
                    className="absolute top-[11.05px] left-[8.76px] max-w-full overflow-hidden h-[9.3px] object-contain"
                    alt=""
                    src="/vector-61.svg"
                  />
                  <img
                    className="absolute top-[16.95px] left-[8.76px] max-w-full overflow-hidden h-[12.6px] object-contain"
                    alt=""
                    src="/vector-71.svg"
                  />
                  <div className="absolute top-[0px] left-[7.81px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  <div className="absolute top-[7.05px] left-[7.43px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  <div className="absolute top-[14.86px] left-[7.43px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  <div className="absolute top-[22.67px] left-[7.43px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  <div className="absolute top-[5.91px] left-[0px]">2019</div>
                  <div className="absolute top-[14.29px] left-[0px]">2019</div>
                  <div className="absolute top-[22.1px] left-[0px]">2020</div>
                  <img
                    className="absolute top-[27.81px] left-[6.48px] w-[4.6px] h-[4.6px] overflow-hidden object-contain"
                    alt=""
                    src="/bxbxsrightarrowalt@2x.png"
                  />
                  <div className="absolute top-[14.29px] left-[12.57px] font-medium">
                    <span>{`Best Google Intern `}</span>
                    <span className="text-dodgerblue">(April 2018)</span>
                  </div>
                  <div className="absolute top-[6.48px] left-[12.57px] font-medium">
                    <span>{`Codecamp Product Manager `}</span>
                    <span className="text-dodgerblue">
                      (Feb 2019 - July 2020)
                    </span>
                  </div>
                  <div className="absolute top-[22.1px] left-[12.57px] font-medium">
                    Figma Ambassador
                  </div>
                </div>
              </div>
              <div className="absolute top-[102.11px] left-[114.69px] w-[106.3px] h-20">
                <div className="absolute top-[0px] left-[0px] w-[106.3px] h-[9.5px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[9.5px] h-[9.5px] overflow-hidden"
                    alt=""
                    src="/icons8paralleltasks.svg"
                  />
                  <div className="absolute top-[0.38px] left-[11.81px] w-[94.5px] h-[8.4px]">
                    <div className="absolute top-[0.95px] left-[0px] font-semibold">
                      PERSONAL PROJECTS
                    </div>
                    <img
                      className="absolute top-[0px] left-[0.19px] max-h-full w-[94.3px]"
                      alt=""
                      src="/vector-92.svg"
                    />
                    <img
                      className="absolute top-[8.38px] left-[0.19px] max-h-full w-[94.3px]"
                      alt=""
                      src="/vector-102.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[14.29px] left-[11.05px] w-[65.4px] h-[65.7px] text-[3.43px]">
                  <div className="absolute top-[0px] left-[0px] w-[47.4px] h-[10.1px]">
                    <div className="absolute top-[0px] left-[4.38px] font-medium">
                      ShowBank App Redesign
                    </div>
                    <div className="absolute top-[6.1px] left-[4.38px] text-[2.67px] text-blue-2">
                      View Project
                    </div>
                    <div className="absolute top-[1.72px] left-[0px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  </div>
                  <div className="absolute top-[13.91px] left-[0px] w-[65.4px] h-[10.1px]">
                    <div className="absolute top-[0px] left-[4.38px] font-medium">
                      Success Travel Service Rebranding
                    </div>
                    <div className="absolute top-[6.1px] left-[4.38px] text-[2.67px] text-blue-2">
                      View Project
                    </div>
                    <div className="absolute top-[1.72px] left-[0px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  </div>
                  <div className="absolute top-[27.81px] left-[0px] w-[42.4px] h-[10.1px]">
                    <div className="absolute top-[0px] left-[4.38px] font-medium">
                      GeneTech App design
                    </div>
                    <div className="absolute top-[6.1px] left-[4.38px] text-[2.67px] text-blue-2">
                      View Project
                    </div>
                    <div className="absolute top-[1.72px] left-[0px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  </div>
                  <div className="absolute top-[41.72px] left-[0px] w-[58.4px] h-[10.1px]">
                    <div className="absolute top-[0px] left-[4.38px] font-medium">
                      MusicBank App Icons Redesign
                    </div>
                    <div className="absolute top-[6.1px] left-[4.38px] text-[2.67px] text-blue-2">
                      View Project
                    </div>
                    <div className="absolute top-[1.72px] left-[0px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  </div>
                  <div className="absolute top-[55.63px] left-[0px] w-[33.4px] h-[10.1px]">
                    <div className="absolute top-[0px] left-[4.38px] font-medium">
                      LogoFolio Project
                    </div>
                    <div className="absolute top-[6.1px] left-[4.38px] text-[2.67px] text-blue-2">
                      View Project
                    </div>
                    <div className="absolute top-[1.72px] left-[0px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[44.63px] left-[0px] w-[105.5px] h-[161.2px]">
                <div className="absolute top-[0px] left-[0px] w-[105.5px] h-[9.5px]">
                  <div className="absolute top-[1.33px] left-[11.05px] font-semibold">
                    WORK EXPERIENCE
                  </div>
                  <img
                    className="absolute top-[0.38px] left-[11.24px] max-h-full w-[94.3px]"
                    alt=""
                    src="/vector-22.svg"
                  />
                  <img
                    className="absolute top-[8.76px] left-[11.24px] max-h-full w-[94.3px]"
                    alt=""
                    src="/vector-31.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-[9.5px] h-[9.5px] overflow-hidden"
                    alt=""
                    src="/icoutlinework1.svg"
                  />
                </div>
                <div className="absolute top-[14.29px] left-[0px] w-[105.5px] h-[146.9px] text-[2.67px]">
                  <img
                    className="absolute top-[1.14px] left-[9.33px] max-w-full overflow-hidden h-[7.6px] object-contain"
                    alt=""
                    src="/vector-42.svg"
                  />
                  <img
                    className="absolute top-[7.05px] left-[9.33px] max-w-full overflow-hidden h-[32.2px] object-contain"
                    alt=""
                    src="/vector-52.svg"
                  />
                  <img
                    className="absolute top-[37.91px] left-[9.33px] max-w-full overflow-hidden h-[21.7px] object-contain"
                    alt=""
                    src="/vector-62.svg"
                  />
                  <img
                    className="absolute top-[59.63px] left-[9.33px] max-w-full overflow-hidden h-[24.8px] object-contain"
                    alt=""
                    src="/vector-72.svg"
                  />
                  <img
                    className="absolute top-[84.4px] left-[9.33px] max-w-full overflow-hidden h-[60.2px] object-contain"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <div className="absolute top-[0px] left-[8.38px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  <div className="absolute top-[5.33px] left-[0px] w-[105.5px] h-[31.1px]">
                    <div className="absolute top-[0px] left-[12.76px] text-[3.43px] font-medium">
                      Kurt Creative
                    </div>
                    <div className="absolute top-[5.14px] left-[12.76px] font-medium">
                      <span>Graphics Designer</span>
                      <span className="text-dodgerblue">
                        {" "}
                        (Jan 2020 - Present)
                      </span>
                    </div>
                    <div className="absolute top-[9.52px] left-[12.76px] font-medium text-blue-2">
                      instagram.com/kurtcreative
                    </div>
                    <div className="absolute top-[14.48px] left-[12.76px] inline-block w-[92.8px] h-[16.6px]">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat.
                    </div>
                    <div className="absolute top-[0.57px] left-[0px]">2020</div>
                    <div className="absolute top-[1.14px] left-[8px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  </div>
                  <div className="absolute top-[40.2px] left-[0px] w-[105.5px] h-[21.7px]">
                    <div className="absolute top-[0px] left-[12.76px] w-[92.8px] h-[21.7px]">
                      <div className="absolute top-[0px] left-[0px] text-[3.43px] font-medium">
                        Weller Coperation
                      </div>
                      <div className="absolute top-[5.14px] left-[0px] font-medium">
                        <span>Lead Graphics Designer</span>
                        <span className="text-dodgerblue">
                          {" "}
                          (Jan 2020 - Present)
                        </span>
                      </div>
                      <div className="absolute top-[10.1px] left-[0px] inline-block w-[92.8px] h-[11.6px]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="absolute top-[0.57px] left-[0px]">2020</div>
                    <div className="absolute top-[1.14px] left-[8px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  </div>
                  <div className="absolute top-[65.73px] left-[0px] w-[105.5px] h-[21.7px]">
                    <div className="absolute top-[0px] left-[12.76px] w-[92.8px] h-[21.7px]">
                      <div className="absolute top-[0px] left-[0px] text-[3.43px] font-medium">
                        ShowTip
                      </div>
                      <div className="absolute top-[5.14px] left-[0px] font-medium">
                        <span>Brand Manager</span>
                        <span className="text-dodgerblue">
                          {" "}
                          (Jan 2020 - March 2020)
                        </span>
                      </div>
                      <div className="absolute top-[10.1px] left-[0px] inline-block w-[92.8px] h-[11.6px]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="absolute top-[0.57px] left-[0px]">2020</div>
                    <div className="absolute top-[1.14px] left-[8px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  </div>
                  <div className="absolute top-[91.25px] left-[0px] w-[105.5px] h-[23.1px]">
                    <div className="absolute top-[0px] left-[12.76px] w-[92.8px] h-[23.1px]">
                      <div className="absolute top-[0px] left-[0px] text-[3.43px] font-medium">
                        StarBoard
                      </div>
                      <div className="absolute top-[5.14px] left-[0px] font-medium">
                        <span>UI/UX Design Intern</span>
                        <span className="text-dodgerblue">
                          {" "}
                          (June 2020 - August 2020)
                        </span>
                      </div>
                      <div className="absolute top-[9.52px] left-[0px] font-medium text-blue-2">
                        starboard.interns.com
                      </div>
                      <div className="absolute top-[14.48px] left-[0px] inline-block w-[92.8px] h-[8.6px]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat.
                      </div>
                    </div>
                    <div className="absolute top-[0.57px] left-[0px]">2020</div>
                    <div className="absolute top-[1.14px] left-[8px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  </div>
                  <div className="absolute top-[118.11px] left-[0px] w-[105.5px] h-[26.5px]">
                    <div className="absolute top-[0px] left-[12.76px] text-[3.43px] font-medium">
                      Intercom
                    </div>
                    <div className="absolute top-[5.14px] left-[12.76px] font-medium">
                      <span>{`Product Designer `}</span>
                      <span className="text-dodgerblue">
                        (August 2020 - Present)
                      </span>
                    </div>
                    <div className="absolute top-[9.52px] left-[12.76px] font-medium text-blue-2">
                      intercom.com
                    </div>
                    <div className="absolute top-[14.48px] left-[12.76px] inline-block w-[92.8px] h-3">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="absolute top-[0.57px] left-[0px]">2020</div>
                    <div className="absolute top-[1.14px] left-[8px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  </div>
                  <img
                    className="absolute top-[142.31px] left-[7.05px] w-[4.6px] h-[4.6px] overflow-hidden object-contain"
                    alt=""
                    src="/bxbxsrightarrowalt1@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[44.77px] left-[115.26px] w-[105.7px] h-[47.8px] text-[2.67px]">
                <div className="absolute top-[0px] left-[0px] w-[105.7px] h-[8.4px] text-[4.57px]">
                  <div className="absolute top-[0px] left-[10.29px] w-[95.4px] h-[8.4px]">
                    <div className="absolute top-[0.95px] left-[0px] font-semibold">
                      SKILLS
                    </div>
                    <img
                      className="absolute top-[0px] left-[0.19px] max-h-full w-[95.3px]"
                      alt=""
                      src="/vector-93.svg"
                    />
                    <img
                      className="absolute top-[8.38px] left-[0.19px] max-h-full w-[95.3px]"
                      alt=""
                      src="/vector-103.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[0.38px] left-[0px] w-[7.6px] h-[7.6px] overflow-hidden"
                    alt=""
                    src="/fasolidtools.svg"
                  />
                </div>
                <div className="absolute top-[13.14px] left-[10.29px] w-6 h-[34.7px]">
                  <div className="absolute top-[0px] left-[0px] font-semibold text-dodgerblue">
                    Personal
                  </div>
                  <div className="absolute top-[5.91px] left-[0px]">
                    Creative Thinking
                  </div>
                  <div className="absolute top-[10.86px] left-[0px]">
                    Communication
                  </div>
                  <div className="absolute top-[15.81px] left-[0px]">
                    Leadership
                  </div>
                  <div className="absolute top-[20.77px] left-[0px]">
                    Teamwork
                  </div>
                  <div className="absolute top-[25.72px] left-[0px]">
                    Solution Oriented
                  </div>
                  <div className="absolute top-[30.67px] left-[0px]">
                    Problem solving
                  </div>
                </div>
                <div className="absolute top-[13.14px] left-[50.29px] w-6 h-[34.7px]">
                  <div className="absolute top-[0px] left-[0px] font-semibold text-dodgerblue">
                    Technical
                  </div>
                  <div className="absolute top-[5.91px] left-[0px]">
                    Adobe Xd
                  </div>
                  <div className="absolute top-[10.86px] left-[0px]">
                    Adobe Photoshop
                  </div>
                  <div className="absolute top-[15.81px] left-[0px]">
                    Adobe Illustrator
                  </div>
                  <div className="absolute top-[20.76px] left-[0px]">Figma</div>
                  <div className="absolute top-[25.72px] left-[0px]">
                    Microsoft Office
                  </div>
                  <div className="absolute top-[30.67px] left-[0px]">
                    HTML/CSS
                  </div>
                </div>
              </div>
              <div className="absolute top-[247.09px] left-[115.26px] w-[105.9px] h-[33.3px] text-[1.91px]">
                <img
                  className="absolute top-[0.38px] left-[0px] w-[7.6px] h-[7.6px] overflow-hidden"
                  alt=""
                  src="/vsfacelike1.svg"
                />
                <div className="absolute top-[0px] left-[10.29px] w-[95.4px] h-[8.4px] text-[4.57px]">
                  <div className="absolute top-[0.95px] left-[0px] font-semibold">
                    HOBBIES AND INTEREST
                  </div>
                  <img
                    className="absolute top-[0px] left-[0.19px] max-h-full w-[95.3px]"
                    alt=""
                    src="/vector-94.svg"
                  />
                  <img
                    className="absolute top-[8.38px] left-[0.19px] max-h-full w-[95.3px]"
                    alt=""
                    src="/vector-104.svg"
                  />
                </div>
                <div className="absolute top-[13.14px] left-[10.29px] w-[20.2px] h-[20.2px]">
                  <div className="absolute top-[4.38px] left-[3.81px] w-[13px] h-[11.6px]">
                    <img
                      className="absolute top-[0px] left-[2.48px] w-[7.6px] h-[7.6px] overflow-hidden"
                      alt=""
                      src="/emojionemonotonecamera.svg"
                    />
                    <div className="absolute top-[73.92%] left-[0%]">
                      photography
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[20.2px] h-[20.2px] border-[0.6px] border-solid border-dodgerblue" />
                </div>
                <div className="absolute h-[60.66%] w-[19.07%] top-[39.47%] right-[47.46%] bottom-[-0.13%] left-[33.46%]">
                  <div className="absolute h-[14.85%] w-[64.36%] top-[64.11%] right-[16.77%] bottom-[21.03%] left-[18.87%]">
                    <div className="absolute top-[0%] left-[0%]">
                      Data Science
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[20.2px] h-[20.2px] border-[0.6px] border-solid border-dodgerblue" />
                </div>
                <div className="absolute h-[60.66%] w-[19.07%] top-[39.47%] right-[23.72%] bottom-[-0.13%] left-[57.21%]">
                  <div className="absolute h-[57.43%] w-[37.62%] top-[21.71%] right-[30.31%] bottom-[20.87%] left-[32.06%]">
                    <div className="absolute top-[73.92%] left-[10.04%]">
                      Music
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[7.6px] h-[7.6px] overflow-hidden"
                      alt=""
                      src="/icbaselinelibrarymusic.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[20.2px] h-[20.2px] border-[0.6px] border-solid border-dodgerblue" />
                </div>
                <div className="absolute h-[60.66%] w-[19.07%] top-[39.47%] right-[-0.03%] bottom-[-0.13%] left-[80.95%]">
                  <div className="absolute h-[57.43%] w-[44.55%] top-[21.7%] right-[28.09%] bottom-[20.88%] left-[27.35%]">
                    <div className="absolute top-[73.92%] left-[0%]">
                      Teaching
                    </div>
                    <img
                      className="absolute top-[0px] left-[0.76px] w-[7.6px] h-[7.6px] overflow-hidden"
                      alt=""
                      src="/mditeach.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[20.2px] h-[20.2px] border-[0.6px] border-solid border-dodgerblue" />
                </div>
                <img
                  className="absolute top-[18.1px] left-[41.72px] w-[7.6px] h-[7.6px] overflow-hidden"
                  alt=""
                  src="/claritydataclustersolidalerted.svg"
                />
              </div>
              <div className="absolute top-[215.23px] left-[0px] w-[105.9px] h-[45.9px]">
                <div className="absolute top-[1.33px] left-[11.05px] font-semibold">
                  EDUCATION
                </div>
                <img
                  className="absolute top-[0.38px] left-[11.24px] max-h-full w-[94.7px]"
                  alt=""
                  src="/vector-95.svg"
                />
                <img
                  className="absolute top-[8.76px] left-[11.24px] max-h-full w-[94.7px]"
                  alt=""
                  src="/vector-105.svg"
                />
                <img
                  className="absolute h-[20.7%] w-[8.97%] top-[0%] right-[91.03%] bottom-[79.3%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/zondiconseducation.svg"
                />
                <div className="absolute top-[13.53px] left-[0.57px] w-[67.6px] h-[32.4px] text-[2.67px]">
                  <img
                    className="absolute top-[1.14px] left-[8.76px] max-w-full overflow-hidden h-[7.6px] object-contain"
                    alt=""
                    src="/vector-43.svg"
                  />
                  <img
                    className="absolute top-[7.05px] left-[8.76px] max-w-full overflow-hidden h-[9.3px] object-contain"
                    alt=""
                    src="/vector-53.svg"
                  />
                  <img
                    className="absolute top-[11.05px] left-[8.76px] max-w-full overflow-hidden h-[9.3px] object-contain"
                    alt=""
                    src="/vector-63.svg"
                  />
                  <img
                    className="absolute top-[16.95px] left-[8.76px] max-w-full overflow-hidden h-[12.6px] object-contain"
                    alt=""
                    src="/vector-73.svg"
                  />
                  <div className="absolute top-[0px] left-[7.81px] rounded-[50%] bg-gray-6 w-[1.9px] h-[1.9px]" />
                  <div className="absolute top-[7.05px] left-[7.43px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  <div className="absolute top-[18.67px] left-[7.43px] rounded-[50%] bg-gray-6 w-[2.9px] h-[2.9px]" />
                  <div className="absolute top-[6.48px] left-[0px]">2008</div>
                  <div className="absolute top-[18.1px] left-[0px]">2020</div>
                  <img
                    className="absolute top-[27.81px] left-[6.48px] w-[4.6px] h-[4.6px] overflow-hidden object-contain"
                    alt=""
                    src="/bxbxsrightarrowalt2@2x.png"
                  />
                  <div className="absolute top-[6.48px] left-[12.57px] font-medium">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="absolute top-[10.29px] left-[12.57px]">
                    <span className="whitespace-pre-wrap">{`Prince College  `}</span>
                    <span className="text-dodgerblue">
                      (Nov 2008 - Sept 2013)
                    </span>
                  </div>
                  <div className="absolute top-[21.72px] left-[12.57px]">
                    <span>{`Havard University `}</span>
                    <span className="text-dodgerblue">
                      (Oct 2015 - present)
                    </span>
                  </div>
                  <div className="absolute top-[18.1px] left-[12.57px] font-medium">
                    B. ENGR. In Electrical Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[183.1px] left-[0px] w-[224.5px] h-[254.6px] object-cover"
            alt=""
            src="/rectangle-29@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[1914px] left-[701px] w-[650px] h-[254.3px] text-right text-slateblue font-quicksand">
        <div className="absolute top-[53.13px] left-[293.12px] w-[356.8px] h-[101.7px]">
          <b className="absolute top-[21.2px] left-[0px] tracking-[-0.07em] leading-[67.44px]">
            4.
          </b>
          <div className="absolute top-[33.72px] left-[60.84px] text-[14.45px] tracking-[-0.07em] leading-[67.44px]">
            Download your resume, apply, get more interviews.
          </div>
          <b className="absolute top-[0px] left-[58.88px] text-9xl-9 tracking-[-0.07em] leading-[67.44px]">
            Hit {'Download!'}
          </b>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[266px] h-[254.3px] object-cover"
          alt=""
          src="/cloud-archive-laptop@2x.png"
        />
      </div>
      <div className="absolute top-[1368px] left-[674px] w-[620px] h-[270px] text-right text-slateblue font-quicksand">
        <div className="absolute top-[0px] left-[0px] w-[620px] h-[270px]">
          <div className="absolute top-[0px] left-[0px] w-[620px] h-[270px]">
            <div className="absolute top-[-40px] left-[0px] flex flex-row items-start justify-start gap-[29px]">
              <div className="w-72 relative h-[230px]">
                <img
                  className="absolute top-[0px] left-[0px] w-72 h-[230px] object-cover"
                  alt=""
                  src="/back-view-of-girl-working-on-laptop@2x.png"
                />
                <img
                  className="absolute top-[48.76px] left-[83.87px] w-[47.8px] h-[32.6px] object-contain"
                  alt=""
                  src="/rectangle-291@2x.png"
                />
              </div>
              <div className="w-[435px] relative h-[108px]">
                <div className="absolute top-[0px] left-[0px] w-[303px] h-[76.5px]">
                  <b className="absolute top-[8.53px] left-[0px] tracking-[-0.07em] leading-[67.44px]">
                    2.
                  </b>
                  <b className="absolute top-[0px] left-[60px] text-9xl-9 tracking-[-0.07em] leading-[67.44px] font-resume-heading-1-62">
                    Add Your Information
                  </b>
                </div>
                <div className="absolute top-[64px] left-[60px] w-[375px] h-11 text-left text-base font-inter">
                  <div className="absolute top-[0px] left-[0px] w-[375px] h-11">
                    <div className="absolute top-[0px] left-[0px] tracking-[-0.07em] leading-[22px] inline-block w-[375px]">
                      fill in the blanks, use our pre-written phrases and
                      interactive layout to create a winning resume/cover letter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2939px] left-[calc(50%_-_553px)] w-[1007.7px] flex flex-col items-start justify-start text-43xl">
        <div className="self-stretch relative h-[500.4px]">
          <b className="absolute top-[0px] left-[calc(50%_-_341px)] leading-[130%]">
            About Light-out Resume
          </b>
          <img
            className="absolute top-[150px] left-[0px] rounded-[20.92px] w-[492.4px] h-[350.4px] object-cover"
            alt=""
            src="/rectangle-832@2x.png"
          />
          <div className="absolute top-[168.02px] left-[540.43px] w-[467.2px] flex flex-col items-start justify-start text-[16.96px] font-inter">
            <div className="self-stretch relative tracking-[0.01em] leading-[26.38px] inline-block h-[300.5px] shrink-0">{`Light-out Resume is a product of Future Labs — a global innovation & digital skill learning center. Light-out Resume was born of the need to create a new way for job-seekers to connect with recruiters. Hence, our best hands got to work with one thing in mind: to help you find a great job faster. We went even further to ensure that our Template designs meet Industry Standards and accepted by leading HR departments. With us, you can spin out an impressive resume that makes a memorable first impression!`}</div>
            <div className="w-[118px] rounded-[5.57px] bg-btn-primary-bg-default flex flex-row items-center justify-center py-[8.9px] px-[20.1px] box-border text-[10.03px] text-white font-resume-heading-1-62">
              <div className="relative leading-[13.38px] font-semibold">
                Read More
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[551.2px] relative h-[374.1px]"
          alt=""
          src="/about.svg"
        />
      </div>
      <div className="absolute top-[4518px] left-[2px] w-[1546px] flex flex-col items-start justify-start text-[24.91px]">
        <div className="w-[1546px] relative h-[1038px]">
          <div className="absolute top-[0px] left-[0px] w-[1546px] h-[1038px] overflow-hidden">
            <img
              className="absolute top-[152.45px] left-[-23.62px] w-[1546px] h-[885.7px]"
              alt=""
              src="/rectangle-911.svg"
            />
            <img
              className="absolute top-[-17.18px] left-[-26.84px] w-[1544.9px] h-[1055.4px]"
              alt=""
              src="/rectangle-912.svg"
            />
            <img
              className="absolute top-[73.01px] left-[-39.72px] w-[1557.8px] h-[959.8px]"
              alt=""
              src="/rectangle-910.svg"
            />
            <div className="absolute top-[627px] left-[149px] w-[473.2px] flex flex-col items-start justify-start text-[34.87px] font-quicksand">
              <div className="self-stretch relative shadow-[0px_3.98482346534729px_3.98px_rgba(0,_0,_0,_0.25)] rounded-[8.59px] bg-white h-[249.1px] overflow-hidden shrink-0">
                <b className="absolute top-[124.55px] left-[1.94px] tracking-[0.01em] leading-[31.88px]">
                  “
                </b>
                <b className="absolute top-[187.01px] left-[286.77px] tracking-[0.01em] leading-[31.88px]">
                  ”
                </b>
                <div className="absolute top-[15.01px] left-[14.77px] w-[448px] flex flex-col items-start justify-start py-0 px-[2.5px] box-border gap-[16px] text-[24.91px] font-resume-heading-1-62">
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-[94.5px] relative rounded-[50%] h-[94.5px] object-cover"
                      alt=""
                      src="/ellipse-94@2x.png"
                    />
                    <div className="w-[162px] flex flex-col items-start justify-start">
                      <b className="self-stretch relative tracking-[0.01em] leading-[31.88px]">
                        Sade Johnson
                      </b>
                      <b className="self-stretch relative text-[14.94px] tracking-[0.01em] leading-[31.88px] font-inter text-slateblue mt-[-3px]">
                        UI/UX Designer
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[14.94px] tracking-[0.01em] leading-[31.88px] font-medium font-quicksand">
                    <p className="m-0">
                      This is the best resume builder that I have come across so
                      far,
                    </p>
                    <p className="m-0">
                      {" "}
                      getting across, it is user friendly and also HR approved,
                    </p>
                    <p className="m-0">
                      {" "}
                      I got my first job using this template.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-[167.53px] bottom-[171.3px] shadow-[0px_3.98482346534729px_3.98px_rgba(0,_0,_0,_0.25)] rounded-[8.14px] bg-white w-[461.3px] overflow-hidden flex flex-col items-start justify-start py-[9px] px-[15px] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[89.5px] relative rounded-[50%] h-[89.5px] object-cover"
                    alt=""
                    src="/ellipse-941@2x.png"
                  />
                  <div className="w-[148px] flex flex-col items-start justify-start gap-[4px]">
                    <b className="self-stretch relative tracking-[0.01em] leading-[31.88px]">
                      Uche Ajuzie
                    </b>
                    <b className="self-stretch relative text-[14.94px] tracking-[0.01em] leading-[31.88px] font-inter text-slateblue">
                      Software Developer
                    </b>
                  </div>
                </div>
                <div className="w-[431.3px] relative h-32 text-[34.87px] font-quicksand">
                  <b className="absolute top-[0.25px] left-[0px] tracking-[0.01em] leading-[31.88px]">
                    “
                  </b>
                  <div className="absolute top-[0px] left-[15.93px] text-[14.94px] tracking-[0.01em] leading-[31.88px] font-medium inline-block w-[415.4px]">
                    <p className="m-0">
                      The experience is just smooth and adaptable,
                    </p>
                    <p className="m-0">{` I was called up for an interview I applied with using future resume and my resume was naturally commended. `}</p>
                    <p className="m-0">Thanks Future Resume.</p>
                  </div>
                  <b className="absolute top-[96px] left-[180.93px] tracking-[0.01em] leading-[31.88px]">
                    ”
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[274.95px] left-[674.54px] w-[473.2px] flex flex-col items-start justify-start">
              <div className="self-stretch relative shadow-[0px_3.98482346534729px_3.98px_rgba(0,_0,_0,_0.25)] rounded-[8.02px] bg-white h-[249.1px] overflow-hidden shrink-0">
                <div className="absolute top-[14.94px] left-[14.94px] w-[441.5px] flex flex-col items-start justify-start gap-[10px]">
                  <div className="w-[220.6px] relative h-[88.2px]">
                    <div className="absolute top-[0px] left-[0px] w-[220.6px] h-[88.2px]">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[7px]">
                        <img
                          className="w-[88.2px] relative rounded-[50%] h-[88.2px] object-cover"
                          alt=""
                          src="/ellipse-93@2x.png"
                        />
                        <div className="w-[125.3px] flex flex-col items-start justify-start">
                          <b className="self-stretch relative tracking-[0.01em] leading-[31.88px]">
                            Ann Efiong
                          </b>
                          <b className="self-stretch relative text-[14.94px] tracking-[0.01em] leading-[31.88px] font-inter text-slateblue">
                            Cyber security
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[440.8px] relative h-[131px] text-[34.87px] font-quicksand">
                    <div className="absolute top-[99px] left-[165.83px] w-4 h-8">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[31.88px]">
                        ”
                      </b>
                    </div>
                    <b className="absolute top-[1.96px] left-[0px] tracking-[0.01em] leading-[31.88px]">
                      “
                    </b>
                    <div className="absolute top-[0px] left-[15.83px] w-[425px] h-32 text-[14.94px]">
                      <div className="absolute top-[0px] left-[0px] w-[425px] h-32">
                        <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[31.88px] font-medium inline-block w-[425px]">
                          {"Light-out's"} resume/cover letter builder app was
                          crucial for landing my cyber security job. Its
                          templates and guidance helped me create a standout
                          cover letter, securing my ideal position quickly.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b className="absolute top-[339.7px] left-[119.54px] text-[49.81px] text-black-color">
              <p className="m-0">Testimonials From</p>
              <p className="m-0">Our Previous Users</p>
            </b>
            <div className="absolute top-[483.16px] left-[119.54px] tracking-[0.01em] leading-[23.91px] font-inter text-slateblue">
              What People Say About Us
            </div>
            <img
              className="absolute top-[916.51px] left-[743px] w-[59.8px] h-[19.9px]"
              alt=""
              src="/group-1000001956.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
