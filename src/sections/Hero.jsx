import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { sales } from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-col flex-col justify-center min-h-screen gap-0 max-container"
      >
        <div className="">
          <img
            src={sales}
            className="w-[100vw] h-auto pt-[5rem] pr-1 relative"
          />
          <div className="absolute top-20 p-12 flex flex-col">
            <h1 className=" text-[2rem] font-bold">
              EXTRA 20% OFF SELECT STYLES
            </h1>
            <h2 className=" text-[1.2rem] font-normal w-[40vw]">
              The after party begins-get an extra 20% off on Nike.com or an extra 25% in the 
              Nike App. Exclusions apply. 
            </h2>
            <button className="bg-rose-400 w-[6rem] text-white m-3 p-2 hover:cursor-pointer hover:bg-rose-500  rounded-xl h-auto">Shop Now</button>
          </div>
        </div>
        <div className="flex">
          <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 pl-10">
            <p className="text-xl font-montserrat text-fuchsia-400">
              Our Summer collections
            </p>

            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
              <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                The New Arrival
              </span>
              <br />
              <span className="text-fuchsia-400 inline-block mt-3">
                Nike
              </span>{" "}
              Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>

            <Button label="Shop now" iconURL={arrowRight} />
            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-palanquin font-bold">
                    {stat.value}
                  </p>
                  <p className="leading-7 font-montserrat text-slate-gray">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img
              src={bigShoeImg}
              alt="shoe colletion"
              width={610}
              height={502}
              className="object-contain relative z-10"
            />

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
              {shoes.map((image, index) => (
                <div key={index}>
                  <ShoeCard
                    index={index}
                    imgURL={image}
                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
