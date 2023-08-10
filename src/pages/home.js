import React from 'react';
import 'tailwindcss/tailwind.css';
import HeroBanner from "../app/components/HeroBanner";
import Carrousel from "../app/components/Carrousel";
import Depoimentos from "../app/components/Depoimentos";
import Contatos from "../app/components/Contatos";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import './home.css';

const HomePage = () => {
  return (
    <div style={{ "backgroundColor": "#C8E3DF"}}>
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