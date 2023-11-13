import { Header } from "@/components/UI/Header/Header";
import { Main } from "@/components/UI/Main/Main";
import { Footer } from "@/components/UI/Footer/Footer";
import { Light } from "@/components/UX/Light/Light";

export default function Home() {
  return (
    <>
      <div className={"py-3 px-1 lg:p-10 h-full flex flex-col"}>
        <Header />
        <Main />
        <Footer />
      </div>
      <Light />
    </>
  );
}
