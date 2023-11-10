import { Header } from "@/components/UI/Header/Header";
import { Main } from "@/components/UI/Main/Main";
import { Footer } from "@/components/UI/Footer/Footer";
import { Light } from "@/components/UX/Light/Light";

export default function Home() {
  return (
    <>
      <div className={"p-3 md:p-10 h-full flex flex-col"}>
        <Header />
        <Main />
        <Footer />
      </div>
      <Light />
    </>
  );
}
