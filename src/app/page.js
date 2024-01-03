import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Featureservice from "@/app/components/featureservice";
import About from "@/app/components/about";
import Faq from "@/app/components/faq";
import Testimonials from "@/app/components/testimonials";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-36">
        <Navbar />
        <Hero />
        <Featureservice />
        <About />
        <Faq />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
