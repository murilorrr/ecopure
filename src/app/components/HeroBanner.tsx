import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import myImage from "../../../public/images/image 5 (1).png";
import wave from "../../../public/images/wave.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [fullSize, setWaveSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      // Calcula a metade da largura e altura da janela ao ser redimensionada
      const halfWidth = window.innerWidth / 3.5;
      const halfHeight = window.innerHeight / 3.5;
      const Width = window.innerWidth;
      const Height = window.innerHeight;
      setImgSize({ width: halfWidth, height: halfHeight });
      setWaveSize({ width: Width, height: Height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{ width: "calc(100vw - 2rem)" }}
        className="flex sm:justify-around items-center align p-8"
      >
        <div className="mx-auto flex w-3/6 flex-col gap-4 object-contain justify-center">
          <h3 className="text-white text-7xl">Invista nos seus clientes</h3>
          <h4 className="caret-gray-950 text-2xl">
            Transforme seu ambiente com climatização premium. Conforto
            garantido, do seu jeito.
          </h4>
          <div className="flex flex-col align-middle justify-center">
            <button className="w-3/6 bg-black text-white self-start font-semibold py-2 px-4 rounded">
              Faça um Orçamento
            </button>
          </div>
        </div>

        <div className="mr-4 w-3/6 flex items-center justify-center">
          <Image
            src={myImage}
            alt="Picture of the author"
            width={imgSize.width}
            height={imgSize.height}
          />
        </div>
      </div>
      <Image
        src={wave}
        alt=""
        width={fullSize.width}
        height={fullSize.height}
      />
    </>
  );
};

export default HeroBanner;
