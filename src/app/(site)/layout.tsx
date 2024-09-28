
import Hero from "@/components/sections/hero";
import Header from "@/components/layout/header";
import Footer from "@/components/sections/Footer";




export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-black bg-white">
      <Header />

      <div className="flex-1">
        {children}


      </div>

      <Footer />
    </div>
  );
}
