import React from 'react';
import HeroBanner from "../app/components/HeroBanner";
import Carrousel from "../app/components/Carrousel";
import Depoimentos from "../app/components/Depoimentos";
import Contatos from "../app/components/Contatos";
import DesenvolvidoPor from "../app/components/DesenvolvidoPor";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <Carrousel></Carrousel>
      <Depoimentos></Depoimentos>
      <Contatos></Contatos>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;