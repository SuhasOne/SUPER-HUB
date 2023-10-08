import type { NextPage } from "next";

const OverlaySignIn: NextPage = () => {
  return (
    <div className="relative rounded-3xl bg-white w-[482px] h-[496px] overflow-hidden max-w-full max-h-full text-left text-3xl text-darkslategray font-avenir">
      <div className="absolute top-[34px] left-[41px] h-[417px] flex flex-col items-center justify-center gap-[24px]">
        <div className="h-[139px] flex flex-col items-center justify-center gap-[11px] text-center text-[28px] font-gilroy">
          <img
            className="relative rounded-[45px] w-[45px] h-[45px] object-cover"
            alt=""
            src="/ic-profile-fallback-1@2x.png"
          />
          <b className="relative leading-[148.9%]">Sign up/Log in</b>
        </div>
        <div className="relative rounded-81xl bg-white box-border w-[401px] h-[71px] overflow-hidden shrink-0 border-[1px] border-solid border-black">
          <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_97px)] flex items-center w-[244px] h-8">
            Continue with Google
          </div>
          <img
            className="absolute top-[24px] left-[63px] w-6 h-6 overflow-hidden"
            alt=""
            src="/social-media-logo.svg"
          />
        </div>
        <div className="relative rounded-81xl bg-white box-border w-[401px] h-[71px] overflow-hidden shrink-0 border-[1px] border-solid border-black">
          <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_97px)] flex items-center w-[244px] h-8">
            Continue with Twitter
          </div>
          <img
            className="absolute top-[calc(50%_-_15.5px)] left-[63px] w-[30px] h-[28.5px] overflow-hidden"
            alt=""
            src="/social-icons.svg"
          />
        </div>
        <div className="relative rounded-81xl bg-white box-border w-[401px] h-[71px] overflow-hidden shrink-0 border-[1px] border-solid border-black">
          <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_97px)] flex items-center w-[244px] h-8">
            Continue with GitHub
          </div>
          <img
            className="absolute top-[calc(50%_-_11.5px)] left-[63px] w-6 h-6 overflow-hidden"
            alt=""
            src="/social-icons1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlaySignIn;
