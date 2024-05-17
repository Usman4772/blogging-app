import Nav from "@/components/NavBar/Nav";
import Posts from "@/components/posts/posts";
import { Slider } from "antd";
export default function Home() {
  return (
    <main className="w-screen min-h-screen  flex jusitfy-center items-start bg-white flex-col">
      <Nav></Nav>
      <h1 className="font-bold text-4xl w-screen flex justify-center py-8 font-mono">Trending</h1>
      <Posts/>

    </main>
  );
}
