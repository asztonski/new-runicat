import { Header } from "@/components/UI/Header/Header"
import { Main } from "@/components/UI/Main/Main"
import { Footer } from "@/components/UI/Footer/Footer"

export default function Home() {
  return (
    <div className={"p-10 h-full flex flex-col"}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
