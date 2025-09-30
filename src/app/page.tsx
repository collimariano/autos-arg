"use client";

import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { PublishForm } from "./components/PublishForm";
import { Header } from "./components/Header";

export default function HomePage() {
  const [view, setView] = useState<"home" | "publish">("home");

  return (
    <>
      {view === "home" && (
        <HomeScreen
          onSearch={() => console.log("search clicked")}
          onPublish={() => setView("publish")}
          onCarClick={(id) => console.log("car clicked:", id)}
        />
      )}

      {view === "publish" && (
        <PublishForm
          onPublish={() => {
            console.log("Form submitted");
            setView("home"); // después de publicar volvés al Home
          }}
        />
      )}
    </>
  );
}
