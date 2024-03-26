import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
