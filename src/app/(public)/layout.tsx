
import AboutSection from "@/components/global/about";
import Services from "@/components/global/features";
import Hero from "@/components/layout/hero";
import Header from "@/components/navigation/header";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <Services />
      {children}
    </div>
  );
}
