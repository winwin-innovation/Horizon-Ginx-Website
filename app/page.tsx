"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { LampDemo } from "@/components/LampEffect";
import Clients from "@/components/Clients";
import FacebookMsg from "@/components/FacebookMsg";
import ChatwootWidget from "../components/ChatwootWidget";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <LampDemo />
        <Clients />
        <Approach />
        <Footer />
        <FacebookMsg />
        <ChatwootWidget />
      </div>
    </main>
  );
};

export default Home;
