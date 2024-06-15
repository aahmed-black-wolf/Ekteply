"use client";

import { Fragment } from 'react';

import ScrollButton from '../Common/Animation/ScrollButton';
import Center from '../Common/Layout/Center';
import Footer from '../Common/Layout/Footer';
import Header from '../Common/Layout/Header';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import PricePlane from './PricePlane/PricePlane';
import QA from './Q&A/QA';
import Services from './Services/Services';
import Support from './Support/Support';
import Tasmania from './Tasmania/Tasmania';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Center>
        <Services />
        <Info />
        <QA />
        <Tasmania />
        <PricePlane />
        <Support />
        <Footer />
      </Center>
      <ScrollButton />
    </Fragment>
  );
}
