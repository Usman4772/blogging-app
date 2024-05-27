import Nav from "@/components/NavBar/Nav";
import Slider from "@/components/Slider/Slider";
import Posts from "@/components/posts/posts";
import NextTopLoader from "nextjs-toploader";
export default function Home() {
  return (
    <main className="w-screen min-h-screen  flex jusitfy-center items-start bg-white flex-col relative">
    <NextTopLoader color="#31caae"/>
      <Nav showSearchBar={true}></Nav>
           <div className="relative top-[15vh]">
          <div className="w-screen flex items-center py-8 flex-col gap-8">
            <h2 className="text-2xl font-semibold font-mono ">Featured</h2>
          <Slider/>
          </div>
      <h1 className="font-bold text-4xl w-screen flex justify-center py-8 font-mono">Trending</h1>
    <Posts/>
         </div>

    </main>
  );
}
