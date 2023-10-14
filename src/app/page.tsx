import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"

export default function Home() {
  return (
    <div className={"p-10 h-full flex flex-col"}>
      <Header />
      <main className={"flex-1"}></main>
      <Footer />
    </div>
  )
}
