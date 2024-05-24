import Nav from "@/components/NavBar/Nav";
import Slider from "@/components/Slider/Slider";
import Posts from "@/components/posts/posts";
export default function Home() {
  return (
    <main className="w-screen min-h-screen  flex jusitfy-center items-start bg-white flex-col relative">
    
      <Nav showSearchBar={true}></Nav>
           <div className="relative top-[15vh]">
           <Slider/>
      <h1 className="font-bold text-4xl w-screen flex justify-center py-8 font-mono">Trending</h1>
    <Posts/>
         </div>

    </main>
  );
}
