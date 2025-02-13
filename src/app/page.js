"use client";

import { useRouter } from "next/navigation"
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import Footer from '../components/Footer';

export default function Home() {

  const router = useRouter();

  const goToPage = () => {
    router.push("/talentShow")
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <Hero onButtonClick={goToPage} />
      <FeatureCards />
      <Footer />
    </div>
  );
}
