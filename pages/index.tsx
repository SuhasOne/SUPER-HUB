import type { NextPage } from "next";
import { useState, useCallback } from "react";
import OverlaySignIn from "../components/overlay-sign-in";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";

const Explore: NextPage = () => {
  const [isOverlaySignInOpen, setOverlaySignInOpen] = useState(false);
  const router = useRouter();

  const openOverlaySignIn = useCallback(() => {
    setOverlaySignInOpen(true);
  }, []);

  const closeOverlaySignIn = useCallback(() => {
    setOverlaySignInOpen(false);
  }, []);

  const onMARKETPLACEClick = useCallback(() => {
    // Please sync "Marketplace" to the project
  }, []);

  const onSUBMITClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onAprojectLinkClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onAprojectLinkContainerClick = useCallback(() => {
    // Please sync "Marketplace" to the project
  }, []);

  const onAprojectLink1Click = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onAprojectLink2Click = useCallback(() => {
    router.push("/overlay-sign-in");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full h-[3158px] overflow-hidden text-left text-xl text-black font-inter">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[113px] overflow-hidden text-smi">
          <div
            className="absolute top-[calc(50%_-_11.5px)] right-[88px] rounded-13xl bg-black w-[87px] h-11 flex flex-row items-start justify-start py-[7px] pr-[17.5px] pl-[17px] box-border cursor-pointer text-center text-white"
            onClick={openOverlaySignIn}
          >
            <div className="absolute my-0 mx-[!important] top-[10px] left-[19px] tracking-[0.2px] leading-[24px] font-semibold z-[0]">
              Sign Up
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_194px)] rounded-[56px] bg-white shadow-[0px_10px_10px_-5px_rgba(0,_0,_0,_0.1)] box-border w-[387px] h-[54px] text-base border-[1px] border-solid border-gray-400">
            <img
              className="absolute right-[267.5px] bottom-[5px] rounded-[230px] w-28 h-11"
              alt=""
              src="/a.svg"
            />
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_166.5px)] leading-[20px] font-semibold text-white">
              EXPLORE
            </div>
            <a
              className="[text-decoration:none] absolute top-[calc(50%_-_10px)] left-[calc(50%_-_53.5px)] leading-[20px] font-semibold text-[inherit] cursor-pointer"
              onClick={onMARKETPLACEClick}
            >
              MARKETPLACE
            </a>
            <a
              className="[text-decoration:none] absolute top-[calc(50%_-_10px)] left-[calc(50%_+_107.5px)] leading-[20px] font-semibold text-[inherit] cursor-pointer"
              onClick={onSUBMITClick}
            >
              SUBMIT
            </a>
            <div className="absolute top-[calc(50%_-_3px)] left-[calc(50%_-_63.5px)] rounded-[7px] bg-tomato-200 w-[7px] h-[7px]" />
          </div>
          <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_+_499px)] w-[34px] h-[34px] overflow-hidden">
            <a
              className="[text-decoration:none] absolute top-[3px] left-[2px] w-[30px] h-[28.5px] overflow-hidden"
              href="https://twitter.com/suhasone"
              target="_blank"
            >
              <img
                className="absolute h-[82.86%] w-[91.67%] top-[7.93%] right-[4.17%] bottom-[9.21%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </a>
          </div>
          <div className="absolute top-[18px] left-[68px] w-[271px] h-[93px] text-11xl font-swear-display">
            <div className="absolute top-[0px] left-[77px] leading-[14px] flex items-center w-[194px] h-[93px]">
              <span className="[line-break:anywhere] w-full">
                <p className="[margin-block-start:0] [margin-block-end:10px] font-black">
                  SUPER
                </p>
                <p className="m-0 text-6xl font-gilroy">
                  <b>hub</b>
                </p>
              </span>
            </div>
            <div className="absolute top-[26px] left-[20px] w-[50px] h-[50px] text-center text-16xl">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="absolute h-[89.92%] w-[91.54%] top-[5.59%] right-[7.93%] bottom-[4.5%] left-[0.52%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="absolute h-[94.44%] w-[94.44%] top-[4.44%] right-[5.56%] bottom-[1.11%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute h-[84.22%] w-[99.65%] top-[-0.04%] right-[0.35%] bottom-[15.82%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-screen"
                alt=""
                src="/vector4.svg"
              />
              <div className="absolute top-[-1px] left-[-1px] leading-[14px] font-black flex items-center justify-center w-[53px] h-[45px]">
                S
              </div>
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-[90px] h-[90px] overflow-hidden"
              alt=""
              src="/error.svg"
            />
          </div>
        </div>
        <div className="absolute top-[130px] left-[0px] w-[1440px] h-[560px] flex flex-col items-center justify-start py-10 px-16 box-border gap-[24px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/slides-box@2x.png"
          />
          <div className="flex flex-row items-center justify-center p-2 gap-[8px]">
            <div className="flex flex-row items-start justify-start p-2">
              <img className="relative w-6 h-6" alt="" src="/arrow-left.svg" />
            </div>
            <div className="flex flex-row items-center justify-start p-2 gap-[10px]">
              <img
                className="relative w-4 h-4"
                alt=""
                src="/dot-indictaor--1.svg"
              />
              <img
                className="relative w-3 h-3 opacity-[0.5]"
                alt=""
                src="/dot-indictaor--2.svg"
              />
              <img
                className="relative w-3 h-3 hidden opacity-[0.5]"
                alt=""
                src="/dot-indictaor--3.svg"
              />
              <img
                className="relative w-3 h-3 hidden opacity-[0.5]"
                alt=""
                src="/dot-indictaor--3.svg"
              />
              <img
                className="relative w-3 h-3 opacity-[0.5]"
                alt=""
                src="/dot-indictaor--2.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start p-2">
              <img className="relative w-6 h-6" alt="" src="/arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className="absolute top-[1497px] left-[31px] rounded-13xl bg-whitesmoke w-[676px] h-[672px] overflow-hidden text-11xl">
          <a
            className="[text-decoration:none] absolute top-[calc(50%_-_300px)] left-[603px] rounded-81xl bg-gray-800 box-border w-9 h-9 overflow-hidden cursor-pointer border-[2px] border-solid border-gainsboro"
            onClick={onAprojectLinkClick}
          >
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6"
              alt=""
              src="/62ca186ae691b25b1768cbfe-arrowanglesvg.svg"
            />
          </a>
          <div className="absolute top-[33px] left-[29px] tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[592.31px]">
            <span className="[line-break:anywhere] w-full">
              <span>Challenges</span>
              <span className="text-white">{` `}</span>
              <span className="text-gray-200">- Compete for Great</span>
            </span>
          </div>
          <div className="absolute top-[calc(50%_-_219.78px)] left-[calc(50%_-_285px)] flex flex-col items-start justify-start text-xl">
            <div className="rounded-2xl bg-gray-600 shadow-[0px_15px_10px_-3px_rgba(0,_0,_0,_0.1),_0px_6px_4px_-2px_rgba(0,_0,_0,_0.05)] w-[570px] overflow-hidden flex flex-row items-start justify-start">
              <div className="rounded-2xl bg-gray-500 w-[608px] flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[58.5625px] box-border">
                <div className="relative w-[594px] h-[499px]">
                  <div className="absolute top-[-0.22px] left-[0px] w-[594px] h-[89px]">
                    <div className="absolute top-[16px] left-[24px] w-[385.7px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-341xl w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71686b9e3343b021a48d9-jameswebp@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://hacktoberfest.digitalocean.com/"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://hacktoberfest.digitalocean.com/"
                          target="_blank"
                        >
                          Hacktoberfest
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                          Month-long celebration of open source software run by
                          DigitalOcean and DEV.
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[106.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[336.25px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62c909916f6892fbf32c42dc-figmawebp@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[3.25px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://summerofcode.withgoogle.com"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://summerofcode.withgoogle.com/"
                          target="_blank"
                        >
                          Google Summer of Code
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[449px]">
                          Aims to promote open-source software development among
                          university students.
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[213.47px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[247.58px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                          alt=""
                          src="/62c90a2ef5513c8032888d54-pdf20filewebp@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://fellowship.mlh.io/"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[410px]"
                          href="https://fellowship.mlh.io/"
                          target="_blank"
                        >
                          Major League Hacking
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[413px]">
                          Global community for student developers.
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[320.16px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://imaginecup.microsoft.com"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://imaginecup.microsoft.com"
                          target="_blank"
                        >
                          Imagine Cup
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[446px]">
                          opportunities to further gain new skills, develop your
                          existing skill set, receive mentorship, and
                          collaborate with students
                        </div>
                      </a>
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <div className="absolute top-[calc(50%_-_27.38px)] left-[0px] w-14 h-14">
                          <img
                            className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                            alt=""
                            src="/62c90a2ef5513c8032888d54-pdf20filewebp1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[426.84px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://www.spaceappschallenge.org/"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://www.spaceappschallenge.org/"
                          target="_blank"
                        >
                          NASA Space Apps Challenge
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[450px]">
                          For coders, scientists, designers, storytellers,
                          innovators around the world to come together and use
                          open data from NASA
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_68px)] top-[79.5px] right-[39px] left-[29px] bg-gray-700 h-[1.39px]" />
        </div>
        <div className="absolute top-[801px] left-[31px] rounded-13xl bg-whitesmoke w-[676px] h-[672px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_219.78px)] left-[calc(50%_-_285px)] flex flex-col items-start justify-start">
            <div className="rounded-2xl bg-gray-600 shadow-[0px_15px_10px_-3px_rgba(0,_0,_0,_0.1),_0px_6px_4px_-2px_rgba(0,_0,_0,_0.05)] w-[570px] overflow-hidden flex flex-row items-start justify-start">
              <div className="rounded-2xl bg-gray-500 w-[608px] flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[58.5625px] box-border">
                <div className="relative w-[594px] h-[499px]">
                  <div className="absolute top-[-0.22px] left-[0px] w-[594px] h-[89px]">
                    <div className="absolute top-[16px] left-[24px] w-[385.7px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-341xl w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71686b9e3343b021a48d9-jameswebp1@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://github.com/oven-sh/bun"
                        target="_blank"
                      >
                        <a
                          className="[text-decoration:underline] relative tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://github.com/oven-sh/bun"
                          target="_blank"
                        >
                          Bun.sh
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                          Incredibly fast JavaScript runtime, bundler, test
                          runner, and package manager – all in one
                        </div>
                      </a>
                    </div>
                    <div className="absolute top-[calc(50%_-_4.16px)] left-[0px] rounded-341xl bg-tomato-100 w-2.5 h-2.5" />
                  </div>
                  <a
                    className="[text-decoration:none] absolute top-[88.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border text-[inherit]"
                    href="https://github.com/airbnb/javascript"
                    target="_blank"
                  >
                    <div className="relative w-[336.25px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62c909916f6892fbf32c42dc-figmawebp1@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[3.25px] pl-0 gap-[5.5px]">
                        <a
                          className="[text-decoration:underline] relative tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://github.com/airbnb/javascript"
                          target="_blank"
                        >
                          Airbnb JavaScript
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100">
                          JavaScript Style Guide
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="[text-decoration:none] absolute top-[177.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border text-[inherit]"
                    href="https://github.com/microsoft/autogen"
                    target="_blank"
                  >
                    <div className="relative w-[247.58px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                          alt=""
                          src="/62c90a2ef5513c8032888d54-pdf20filewebp1@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px]">
                        <a
                          className="[text-decoration:underline] relative tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[394px]"
                          href="https://github.com/microsoft/autogen"
                          target="_blank"
                        >
                          Microsoft Autogen
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[413px]">
                          Enable Next-Gen Large Language Model Applications.
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="absolute top-[266.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp1@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://github.com/mistralai/mistral-src"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[402px]"
                          href="https://github.com/mistralai/mistral-src"
                          target="_blank"
                        >
                          Mistral.ai
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[430px]">
                          Reference implementation of Mistral AI 7B v0.1 model.
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[355.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp2@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://github.com/modularml/mojo"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://github.com/modularml/mojo"
                          target="_blank"
                        >
                          Mojo
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[450px]">
                          New programming language that bridges the gap between
                          research and production
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[444.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp3@2x.png"
                        />
                      </div>
                      <a
                        className="[text-decoration:none] absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                        href="https://github.com/makeplane/plane"
                        target="_blank"
                      >
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                          href="https://github.com/makeplane/plane"
                          target="_blank"
                        >
                          Plane
                        </a>
                        <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[440px]">
                          Open Source JIRA, Linear and Height Alternative.
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[calc(50%_-_300px)] left-[603px] rounded-81xl bg-gray-800 box-border w-9 h-9 overflow-hidden cursor-pointer border-[2px] border-solid border-gainsboro"
            onClick={onAprojectLinkContainerClick}
          >
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6">
              <a className="[text-decoration:none] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden opacity-[0.4]">
                <img
                  className="absolute h-[49.47%] w-[49.47%] top-[25.27%] right-[25.26%] bottom-[25.26%] left-[25.27%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector5.svg"
                />
                <img
                  className="absolute h-[37.38%] w-[37.39%] top-[25.06%] right-[25.05%] bottom-[37.56%] left-[37.57%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector6.svg"
                />
              </a>
            </div>
          </div>
          <div className="absolute top-[33px] left-[29px] text-11xl tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[592.31px]">
            <span className="[line-break:anywhere] w-full">
              <span>Active Projects</span>
              <span className="text-white">{` `}</span>
              <span className="text-gray-200">- Cooking Hot rn!</span>
            </span>
          </div>
          <div className="absolute w-[calc(100%_-_68px)] top-[79.5px] right-[39px] left-[29px] bg-gray-700 h-[1.39px]" />
        </div>
        <div className="absolute top-[1844px] left-[729px] rounded-13xl bg-whitesmoke w-[676px] h-[672px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_219.78px)] left-[calc(50%_-_285px)] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-2xl bg-gray-600 shadow-[0px_15px_10px_-3px_rgba(0,_0,_0,_0.1),_0px_6px_4px_-2px_rgba(0,_0,_0,_0.05)] w-[570px] overflow-hidden flex flex-row items-start justify-start">
                <div className="rounded-2xl bg-gray-500 w-[608px] flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[58.5625px] box-border">
                  <div className="relative w-[594px] h-[499px]">
                    <div className="absolute top-[-0.22px] left-[0px] w-[594px] h-[89px]">
                      <div className="absolute top-[16px] left-[24px] w-[385.7px] h-[56.69px]">
                        <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                          <img
                            className="absolute top-[-1px] left-[-2px] rounded-341xl w-[60px] h-[60.06px] object-cover"
                            alt=""
                            src="/62d71686b9e3343b021a48d9-jameswebp2@2x.png"
                          />
                        </div>
                        <a
                          className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 gap-[5.5px] text-[inherit]"
                          href="https://course.fast.ai"
                          target="_blank"
                        >
                          <a
                            className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                            href="https://course.fast.ai/"
                            target="_blank"
                          >
                            Fast.ai
                          </a>
                          <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                            Free and practical deep learning course designed for
                            individuals with some coding experience.
                          </div>
                        </a>
                      </div>
                      <div className="absolute top-[calc(50%_-_4.16px)] left-[0px] rounded-341xl bg-tomato-100 w-2.5 h-2.5" />
                    </div>
                    <div className="absolute top-[106.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                      <div className="relative w-[336.25px] h-[56.69px]">
                        <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                          <img
                            className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                            alt=""
                            src="/62c909916f6892fbf32c42dc-figmawebp2@2x.png"
                          />
                        </div>
                        <a
                          className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[3.25px] pl-0 gap-[5.5px] text-[inherit]"
                          href="https://the-algorithms.com"
                          target="_blank"
                        >
                          <a
                            className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                            href="https://the-algorithms.com/"
                            target="_blank"
                          >
                            The Algorithms
                          </a>
                          <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[449px]">
                            Largest open-source algorithm library. Explore and
                            learn from a wide variety of algorithms and
                            implementations.
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-[213.47px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                      <div className="relative w-[247.58px] h-[56.69px]">
                        <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                          <img
                            className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                            alt=""
                            src="/62c90a2ef5513c8032888d54-pdf20filewebp2@2x.png"
                          />
                        </div>
                        <a
                          className="[text-decoration:none] absolute top-[calc(50%_-_40.84px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px] text-[inherit]"
                          href="https://github.com/Siddharth1India/Awesome-Deep-Learning"
                          target="_blank"
                        >
                          <a
                            className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                            href="https://github.com/Siddharth1India/Awesome-Deep-Learning"
                            target="_blank"
                          >
                            Awesome Deep Learning
                          </a>
                          <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[449px]">
                            A github repository that contains resources for
                            almost all deep learning topics and deep learning
                            frameworks.
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-[320.16px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                      <div className="relative w-[295.06px] h-[56.69px]">
                        <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                          <img
                            className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                            alt=""
                            src="/62d71a9e455945406acd941b-browsercompanylogowebp4@2x.png"
                          />
                        </div>
                        <a
                          className="[text-decoration:none] absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                          href="https://450dsa.com"
                          target="_blank"
                        >
                          <a
                            className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                            href="https://450dsa.com/"
                            target="_blank"
                          >
                            450 DSA
                          </a>
                          <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[446px]">
                            A curated list of 450 DSA problems categorized by
                            topic.
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-[426.84px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                      <div className="relative w-[295.06px] h-[56.69px]">
                        <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                          <img
                            className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                            alt=""
                            src="/62d71a9e455945406acd941b-browsercompanylogowebp5@2x.png"
                          />
                        </div>
                        <a
                          className="[text-decoration:none] absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px] text-[inherit]"
                          href="https://fullstackopen.com/en/"
                          target="_blank"
                        >
                          <a
                            className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                            href="https://fullstackopen.com/en/"
                            target="_blank"
                          >
                            Full Stack Open
                          </a>
                          <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[450px]">
                            Gateway to becoming a proficient full-stack
                            developer.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[33px] left-[29px] text-11xl tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[592.31px]">
            <span className="[line-break:anywhere] w-full">
              <span> Case Studies/Resources</span>
              <span className="text-gray-200"> - Coming soon</span>
            </span>
          </div>
          <div className="absolute w-[calc(100%_-_68px)] top-[79.5px] right-[39px] left-[29px] bg-gray-700 h-[1.39px]" />
        </div>
        <div className="absolute top-[3024px] left-[calc(50%_-_190px)] w-[354px] h-12">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-61xl box-border h-12 border-[2px] border-solid border-silver">
            <div className="absolute top-[14px] left-[20px] w-[291px] overflow-hidden flex flex-row items-start justify-start py-0 pr-[408.625px] pl-0 box-border">
              <input
                className="[border:none] font-inter text-mid bg-[transparent] relative text-steelblue text-left flex items-center w-[291px] shrink-0"
                placeholder="Your email"
                type="email"
              />
            </div>
            <img
              className="absolute h-[66.67%] w-[9.04%] top-[16.67%] right-[3.11%] bottom-[16.66%] left-[87.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
          </div>
        </div>
        <b className="absolute top-[2975px] left-[calc(50%_-_184px)] text-base leading-[24px] flex font-gilroy text-gray-300 text-center items-center w-[341px] h-[41px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Interested in what we are doing. `}</p>
            <p className="m-0">
              Get the best Insights, directly in your inbox.
            </p>
          </span>
        </b>
        <img
          className="absolute h-[0.5%] w-[1.11%] top-[95.25%] right-[63.19%] bottom-[4.25%] left-[35.69%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector8.svg"
        />
        <img
          className="absolute h-[0.5%] w-[1.11%] top-[94.14%] right-[39.09%] bottom-[5.35%] left-[59.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector8.svg"
        />
        <div className="absolute top-[2193px] left-[31px] flex flex-row items-start justify-start">
          <div className="relative rounded-13xl bg-whitesmoke w-[676px] h-[328px] overflow-hidden shrink-0">
            <div className="absolute top-[110px] left-[calc(50%_-_322px)] rounded-t-sm rounded-b-none bg-gray-500 shadow-[0px_0px_10px_-3px_rgba(0,_0,_0,_0.1)] box-border w-[645px] h-[331px] overflow-hidden border-[1px] border-solid border-white">
              <div className="absolute top-[15px] left-[25px] w-[319px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                <div className="relative w-[247.58px] h-[56.69px]">
                  <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                      alt=""
                      src="/62c90a2ef5513c8032888d54-pdf20filewebp3@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px]">
                    <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                      Radiant
                    </div>
                    <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100">
                      Suhasone | Building SuperHub
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[104px] left-[25px] w-[319px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                <div className="relative w-[247.58px] h-[56.69px]">
                  <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px]">
                    <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                      Musk Melon
                    </div>
                    <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100">
                      GG | Engineer @ Tesla
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%_-_29.34px)] left-[0px] w-14 h-[56.06px]">
                    <div className="absolute top-[calc(50%_-_27.38px)] left-[0px] w-14 h-14">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                        alt=""
                        src="/62c90a2ef5513c8032888d54-pdf20filewebp4@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[15px] left-[344px] w-[319px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                <div className="relative w-[247.58px] h-[56.69px]">
                  <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                      alt=""
                      src="/62c90a2ef5513c8032888d54-pdf20filewebp5@2x.png"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_35.09px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0">
                    <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                      Feyman
                    </div>
                    <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[196px] mt-[-6px]">
                      Richard | Research in Quantum electrodynamics
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[104px] left-[344px] w-[319px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                <div className="relative w-[247.58px] h-[56.69px]">
                  <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px]">
                    <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                      Contributor
                    </div>
                    <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100">
                      Open Source my life!
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%_-_29.34px)] left-[0px] w-14 h-[56.06px]">
                    <div className="absolute top-[calc(50%_-_27.38px)] left-[0px] w-14 h-14">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                        alt=""
                        src="/62c90a2ef5513c8032888d54-pdf20filewebp6@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="[text-decoration:none] absolute top-[calc(50%_-_128px)] left-[603px] rounded-81xl bg-gray-800 box-border w-9 h-9 overflow-hidden cursor-pointer border-[2px] border-solid border-gainsboro"
              onClick={onAprojectLink1Click}
            >
              <img
                className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6"
                alt=""
                src="/62ca186ae691b25b1768cbfe-arrowanglesvg.svg"
              />
            </a>
            <div className="absolute top-[33px] left-[32px] text-11xl tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[553px]">
              <span className="[line-break:anywhere] w-full">
                <span>{`Top contributors `}</span>
                <span className="text-gray-200">- Each sectors</span>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[708px] left-[calc(50%_-_177px)] w-[354px] h-12">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-61xl box-border h-12 border-[2px] border-solid border-silver">
            <div className="absolute top-[14px] left-[20px] w-[291px] overflow-hidden flex flex-row items-start justify-start py-0 pr-[408.625px] pl-0 box-border">
              <input
                className="[border:none] font-inter text-mid bg-[transparent] relative text-steelblue text-left flex items-center w-[291px] shrink-0"
                name="Email"
                placeholder="Your email"
                type="email"
              />
            </div>
            <img
              className="absolute h-[66.67%] w-[9.04%] top-[16.67%] right-[3.11%] bottom-[16.66%] left-[87.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
          </div>
        </div>
        <div className="absolute top-[801px] left-[724px] flex flex-row items-start justify-start">
          <div className="relative rounded-13xl bg-whitesmoke w-[676px] h-[328px] overflow-hidden shrink-0">
            <div className="absolute top-[110px] left-[calc(50%_-_307px)] rounded-t-sm rounded-b-none bg-gray-500 shadow-[0px_0px_10px_-3px_rgba(0,_0,_0,_0.1)] box-border w-[617px] h-[331px] overflow-hidden border-[1px] border-solid border-white">
              <div className="absolute top-[calc(50%_-_131.5px)] left-[calc(50%_-_108.08px)] bg-gray-200 w-[226px] h-[0.42px] [transform:_rotate(89.97deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_131.5px)] left-[calc(50%_+_90.92px)] bg-gray-200 w-[226px] h-[0.42px] [transform:_rotate(89.97deg)] [transform-origin:0_0]" />
              <div className="absolute top-[40.16px] left-[56px] w-24 h-[57.69px]">
                <a
                  className="[text-decoration:none] absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px] text-[inherit]"
                  href="https://openai.com/research/gpt-4"
                  target="_blank"
                >
                  <a
                    className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                    href="https://openai.com/research/gpt-4"
                    target="_blank"
                  >
                    GPT-4
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    OpenAi
                  </div>
                </a>
              </div>
              <div className="absolute top-[98.16px] left-[56px] w-24 h-[57.69px]">
                <div className="absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px]">
                  <a
                    className="[text-decoration:none] relative tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                    href="https://claude.ai"
                    target="_blank"
                  >
                    <a
                      className="text-[inherit]"
                      href="https://claude.ai"
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        Claude 2
                      </span>
                    </a>
                    <span className="text-mediumspringgreen">*</span>
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    Anthropic
                  </div>
                </div>
              </div>
              <div className="absolute top-[153px] left-[56px] w-24 h-[57.69px]">
                <div className="absolute top-[0px] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px]">
                  <a
                    className="[text-decoration:underline] relative tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                    href="https://ai.meta.com/llama/"
                    target="_blank"
                  >
                    Llama 2
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    Meta
                  </div>
                </div>
              </div>
              <div className="absolute top-[40px] left-[252px] w-24 h-[57.69px]">
                <a
                  className="[text-decoration:none] absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px] text-[inherit]"
                  href="https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/"
                  target="_blank"
                >
                  <a
                    className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit]"
                    href="https://www.microsoft.com/en-us/research/publication/orca-progressive-learning-from-complex-explanation-traces-of-gpt-4/"
                    target="_blank"
                  >
                    Orca
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    Microsoft
                  </div>
                </a>
              </div>
              <div className="absolute top-[98px] left-[250px] w-24 h-[57.69px]">
                <a
                  className="[text-decoration:none] absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px] text-[inherit]"
                  href="https://www.mosaicml.com/blog/mpt-7b"
                  target="_blank"
                >
                  <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                    <a
                      className="text-[inherit]"
                      href="https://www.mosaicml.com/blog/mpt-7b"
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        MPT-7B
                      </span>
                    </a>
                    <span className="text-mediumspringgreen">*</span>
                  </div>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    MosaicML
                  </div>
                </a>
              </div>
              <div className="absolute top-[153px] left-[252px] w-24 h-[57.69px]">
                <a
                  className="[text-decoration:none] absolute top-[0px] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px] text-[inherit]"
                  href="https://falconllm.tii.ae"
                  target="_blank"
                >
                  <div className="relative tracking-[0.2px] leading-[27.5px] font-medium">
                    <a
                      className="text-[inherit]"
                      href="https://falconllm.tii.ae/"
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        Falcon
                      </span>
                    </a>
                    <span className="text-mediumspringgreen">*</span>
                  </div>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    TII
                  </div>
                </a>
              </div>
              <div className="absolute top-[36px] left-[451px] w-24 h-[57.69px]">
                <div className="absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px]">
                  <a
                    className="[text-decoration:none] relative tracking-[0.2px] leading-[27.5px] font-medium flex items-center w-[165px] text-[inherit]"
                    href="https://lmsys.org/blog/2023-03-30-vicuna/"
                    target="_blank"
                  >
                    <span className="[line-break:anywhere] w-full">
                      <a
                        className="text-[inherit]"
                        href="https://lmsys.org/blog/2023-03-30-vicuna/"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          Vicuna-13B
                        </span>
                      </a>
                      <span className="text-mediumspringgreen">*</span>
                    </span>
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    Stanford
                  </div>
                </div>
              </div>
              <div className="absolute top-[94px] left-[451px] w-24 h-[57.69px]">
                <div className="absolute top-[calc(50%_-_28.84px)] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px]">
                  <a
                    className="[text-decoration:none] relative tracking-[0.2px] leading-[27.5px] font-medium flex items-center w-[165px] text-[inherit]"
                    href="https://huggingface.co/EleutherAI/gpt-neox-20b"
                    target="_blank"
                  >
                    <span className="[line-break:anywhere] w-full">
                      <a
                        className="text-[inherit]"
                        href="https://huggingface.co/EleutherAI/gpt-neox-20b"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          NeoX-20B
                        </span>
                      </a>
                      <span className="text-mediumspringgreen">*</span>
                    </span>
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    EleutherAI
                  </div>
                </div>
              </div>
              <div className="absolute top-[153px] left-[451px] w-24 h-[57.69px]">
                <div className="absolute top-[0px] left-[0px] w-24 flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 box-border gap-[5.5px]">
                  <a
                    className="[text-decoration:none] relative tracking-[0.2px] leading-[27.5px] font-medium flex items-center w-[154px] text-[inherit]"
                    href="https://bigscience.huggingface.co/blog/bloom"
                    target="_blank"
                  >
                    <span className="[line-break:anywhere] w-full">
                      <a
                        className="text-[inherit]"
                        href="https://bigscience.huggingface.co/blog/bloom"
                        target="_blank"
                      >
                        <span className="[text-decoration:underline]">
                          BLOOM
                        </span>
                      </a>
                      <span className="text-mediumspringgreen">*</span>
                    </span>
                  </a>
                  <div className="relative text-sm tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]">
                    BigScience
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[31px] left-[31px] text-11xl tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[561px]">
              <span className="[line-break:anywhere] w-full">
                <span>{`LLMs leaderboard `}</span>
                <span className="text-gray-200">- Breakthrough’s</span>
              </span>
            </div>
            <div className="absolute top-[89px] left-[505px] w-[117.88px] h-3.5 text-sm text-mediumspringgreen">
              <div className="absolute top-[-1px] left-[0px] tracking-[0.1px] leading-[14px] font-semibold">
                *
              </div>
              <div className="absolute top-[0px] left-[10.92px] text-smi tracking-[0.1px] leading-[14px] text-dimgray-200">
                OpenSource Models
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1151px] left-[724px] rounded-13xl bg-whitesmoke w-[676px] h-[672px] overflow-hidden text-11xl">
          <div className="absolute top-[33px] left-[29px] tracking-[-0.4px] leading-[38.75px] font-medium flex items-center w-[592.31px]">
            <span className="[line-break:anywhere] w-full">
              <span>{`Jobs `}</span>
              <span className="text-gray-200">{`- Remote & Open Source`}</span>
            </span>
          </div>
          <div className="absolute top-[calc(50%_-_219.78px)] left-[calc(50%_-_285px)] flex flex-col items-start justify-start text-xl">
            <div className="rounded-2xl bg-gray-600 shadow-[0px_15px_10px_-3px_rgba(0,_0,_0,_0.1),_0px_6px_4px_-2px_rgba(0,_0,_0,_0.05)] w-[570px] overflow-hidden flex flex-row items-start justify-start">
              <div className="rounded-2xl bg-gray-500 w-[608px] flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[58.5625px] box-border">
                <div className="relative w-[594px] h-[499px]">
                  <div className="absolute top-[-0.22px] left-[0px] w-[594px] h-[89px]">
                    <div className="absolute top-[16px] left-[24px] w-[385.7px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-341xl w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71686b9e3343b021a48d9-jameswebp3@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[0.703125px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[424px]"
                          href="https://formbricks.com/careers"
                          target="_blank"
                        >
                          (Senior) Full-Stack Engineer
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[423px]"
                          href="https://github.com/formbricks/formbricks"
                          target="_blank"
                        >
                          Formbricks
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[88.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[336.25px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62c909916f6892fbf32c42dc-figmawebp3@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[3.25px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[421px]"
                          href="https://boards.greenhouse.io/neondatabase/jobs/4974679004"
                          target="_blank"
                        >
                          Marketing Operations Specialist
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100"
                          href="https://github.com/neondatabase/neon"
                          target="_blank"
                        >
                          Neon
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[177.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[247.58px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28px)] left-[0px] w-14 h-14">
                        <img
                          className="absolute top-[0px] left-[0px] rounded-lg w-14 h-14 object-cover"
                          alt=""
                          src="/62c90a2ef5513c8032888d54-pdf20filewebp7@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.578125px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[397px]"
                          href="https://careers.weaviate.io/jobs/3013509-developer-advocate-javascript"
                          target="_blank"
                        >
                          Developer Advocate
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100"
                          href="https://github.com/weaviate/weaviate"
                          target="_blank"
                        >
                          Weaviate
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[266.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp6@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[403px]"
                          href="https://www.hanko.io/jobs/senior-full-stack-developer"
                          target="_blank"
                        >
                          (Senior) Full Stack Developer
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100"
                          href="https://github.com/teamhanko"
                          target="_blank"
                        >
                          Hanko.io
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[355.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp7@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[450px]"
                          href="https://jobs.lever.co/kong/79b2f1ff-93dd-4f27-ab36-c941f12453a4"
                          target="_blank"
                        >
                          Senior Manager of Marketing, EMEA
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[450px]"
                          href="https://github.com/kong/kong"
                          target="_blank"
                        >
                          Kong
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[444.78px] left-[0px] w-[594px] flex flex-row items-start justify-start py-4 pr-4 pl-6 box-border">
                    <div className="relative w-[295.06px] h-[56.69px]">
                      <div className="absolute top-[calc(50%_-_28.03px)] left-[0px] w-14 h-[56.06px]">
                        <img
                          className="absolute top-[-1px] left-[-2px] rounded-lg w-[60px] h-[60.06px] object-cover"
                          alt=""
                          src="/62d71a9e455945406acd941b-browsercompanylogowebp8@2x.png"
                        />
                      </div>
                      <div className="absolute top-[calc(50%_-_29.34px)] left-[72px] flex flex-col items-start justify-start pt-0 pb-[0.1875px] pr-[2.0625px] pl-0 gap-[5.5px]">
                        <a
                          className="relative [text-decoration:underline] tracking-[0.2px] leading-[27.5px] font-medium text-[inherit] flex items-center w-[440px]"
                          href="https://www.timescale.com/careers/6867355002"
                          target="_blank"
                        >
                          Sr. Director of Product Marketing
                        </a>
                        <a
                          className="relative text-sm [text-decoration:underline] tracking-[0.2px] leading-[23.2px] text-dimgray-100 flex items-center w-[440px]"
                          href="https://github.com/timescale/timescaledb"
                          target="_blank"
                        >
                          Timescale
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_68px)] top-[79.5px] right-[39px] left-[29px] bg-gray-700 h-[1.39px]" />
        </div>
        <b className="absolute top-[659px] left-[calc(50%_-_171px)] text-base leading-[24px] flex font-gilroy text-gray-300 text-center items-center w-[341px] h-[41px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Interested in what we are doing. `}</p>
            <p className="m-0">
              Get the best Insights, directly in your inbox.
            </p>
          </span>
        </b>
        <div className="absolute top-[2620px] left-[96px] text-11xl tracking-[-0.4px] leading-[40.75px] flex items-center w-[568px] h-52 font-gilroy">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <span className="font-gilroy">{`We aim to unite all the `}</span>
              <b>visionaries</b>
            </p>
            <p className="m-0">
              <b>{`from founders, contributors to `}</b>
            </p>
            <p className="m-0">
              <b>{`brilliant researchers. `}</b>
            </p>
            <p className="m-0">{`all working together to propel us into the `}</p>
            <p className="m-0">
              <b>next gen Breakthrough’s.</b>
            </p>
          </span>
        </div>
        <div className="absolute top-[2537px] left-[708px] rounded-13xl bg-whitesmoke w-[333px] h-[328px] overflow-hidden text-center text-sm text-dimgray-100">
          <div className="absolute top-[157px] left-[42px] leading-[22.5px] font-medium flex items-center w-[257px] h-[62px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">{`Get a Chance to Showcase `}</p>
              <p className="m-0">{`your latest works `}</p>
              <p className="m-0">from research papers to Top products</p>
            </span>
          </div>
          <a
            className="[text-decoration:none] absolute top-[calc(50%_+_91px)] left-[67px] rounded-81xl bg-gray-800 box-border w-[196px] h-[50px] overflow-hidden cursor-pointer border-[2px] border-solid border-gainsboro"
            onClick={onAprojectLink2Click}
          >
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6"
              alt=""
              src="/62ca186ae691b25b1768cbfe-arrowanglesvg.svg"
            />
          </a>
          <b className="absolute top-[39px] left-[calc(50%_-_104.5px)] text-16xl tracking-[0.05em] flex font-gilroy items-center w-52 h-[108px] text-tomato-200">
            <span className="[line-break:anywhere] w-full">
              <span className="leading-[28px]">{`Submit & Contribute        Your Builds`}</span>
              <span className="leading-[18px] text-tomato-100">{` `}</span>
            </span>
          </b>
        </div>
        <div className="absolute top-[2537px] left-[1067px] rounded-13xl bg-whitesmoke w-[333px] h-[328px] overflow-hidden text-[18px]">
          <div className="absolute top-[calc(50%_-_133px)] left-[32px] flex flex-col items-start justify-start gap-[27px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.78125px] gap-[30px]">
              <div className="relative w-[280px] h-14">
                <img
                  className="absolute top-[calc(50%_-_27.5px)] left-[231px] w-[49px] h-[50px] overflow-hidden"
                  alt=""
                  src="/62f5dbe10a419234e527d174-twittercontacticonsvg.svg"
                />
                <div className="absolute top-[calc(50%_-_24.5px)] left-[0px] w-12 h-12">
                  <img
                    className="absolute top-[calc(50%_-_24px)] left-[0px] rounded-341xl w-12 h-12 object-cover"
                    alt=""
                    src="/62e855526f99a814aee1bdab-3a63-b90-400x400webp@2x.png"
                  />
                  <div className="absolute top-[calc(50%_-_4px)] left-[59px] h-[25px] flex flex-col items-start justify-start">
                    <b className="relative leading-[21.6px] flex items-center w-[101px] h-[15px] shrink-0">
                      SuhasOne ✦
                    </b>
                    <div className="relative text-smi leading-[21px] font-medium text-gray-100 mt-[-10.41px]">
                      @suhasone
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-xl leading-[28.4px] font-semibold font-gilroy flex items-center w-[268.62px]">
                want to be part of something that changes norms, feel free to
                support Superhub!
              </div>
            </div>
            <div className="self-stretch relative h-[53px] overflow-hidden shrink-0 text-6xl font-swear-display">
              <img
                className="absolute h-full w-[99.94%] top-[0%] right-[0.06%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector9.svg"
              />
              <img
                className="absolute h-[0.06%] w-[0.04%] top-[32.83%] right-[79.9%] bottom-[67.11%] left-[20.05%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector10.svg"
              />
              <img
                className="absolute h-[0.01%] w-[0.01%] top-[37.46%] right-[79.72%] bottom-[62.53%] left-[20.26%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/dot-indictaor--3.svg"
              />
              <img
                className="absolute h-[0.01%] w-[0%] top-[32.88%] right-[79.9%] bottom-[67.11%] left-[20.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector11.svg"
              />
              <img
                className="absolute h-[0.01%] w-[0%] top-[32.88%] right-[79.9%] bottom-[67.11%] left-[20.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector12.svg"
              />
              <img
                className="absolute h-[0.08%] w-[0.04%] top-[37.37%] right-[79.7%] bottom-[62.55%] left-[20.27%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector13.svg"
              />
              <img
                className="absolute h-[0.1%] w-[0.03%] top-[32.89%] right-[79.87%] bottom-[67.01%] left-[20.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector14.svg"
              />
              <img
                className="absolute h-[0.11%] w-[0.04%] top-[77.35%] right-[84.98%] bottom-[22.53%] left-[14.98%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector15.svg"
              />
              <img
                className="absolute h-[0.21%] w-[0.01%] top-[75.24%] right-[82.01%] bottom-[24.54%] left-[17.98%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector16.svg"
              />
              <img
                className="absolute h-[0.11%] w-[0.04%] top-[77.35%] right-[82.32%] bottom-[22.53%] left-[17.64%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector17.svg"
              />
              <img
                className="absolute h-[0.07%] w-[0.04%] top-[77.78%] right-[87.07%] bottom-[22.15%] left-[12.89%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector18.svg"
              />
              <img
                className="absolute h-[0.19%] w-[0.02%] top-[76.05%] right-[87.54%] bottom-[23.75%] left-[12.45%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector19.svg"
              />
              <img
                className="absolute h-[31.02%] w-[6.18%] top-[51.59%] right-[81.7%] bottom-[17.39%] left-[12.12%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector20.svg"
              />
              <img
                className="absolute h-[0.05%] w-[0.02%] top-[37.32%] right-[89.89%] bottom-[62.63%] left-[10.09%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector21.svg"
              />
              <img
                className="absolute h-[73.58%] w-[12.5%] top-[14.56%] right-[78.57%] bottom-[11.85%] left-[8.93%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector22.svg"
              />
              <a
                className="[text-decoration:none] absolute h-[51.63%] w-[65.87%] top-[24.18%] left-[26.97%] font-black text-[inherit] inline-block"
                href="https://www.buymeacoffee.com/suhasone"
                target="_blank"
              >
                Buy me a coffee
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOverlaySignInOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlaySignIn}
        >
          <OverlaySignIn onClose={closeOverlaySignIn} />
        </PortalPopup>
      )}
    </>
  );
};

export default Explore;
