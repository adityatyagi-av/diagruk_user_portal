"use client";
import React, { FC, useState } from "react";
import Hero from "./components/Hero";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading
        title="Quality Veda Courses"
        description="This is the quality veda courses portal"
        keywords="qualitymanager,nabl,iso,certification"
      />
      <Header
        open={open} 
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </>
  );
};
export default Page;
