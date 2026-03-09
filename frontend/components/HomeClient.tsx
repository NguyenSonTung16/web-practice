"use client";

import { useState } from "react";
import CourseGrid from "./CourseGrid";
import Header from "./Header";
import Hero from "./Hero";
import Rating from "./Rating";
import Sidebar from "./Sidebar";

type HomeClientProps = {
  helloMessage: string;
};

export default function HomeClient({ helloMessage }: HomeClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <main>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onMenuClick={() => alert("Chuyen tiep sang trang moi!")}
      />

      <Hero helloMessage={helloMessage} />

      <Rating selected={rating} onSelect={setRating} />

      <div className="description section-container">
        <p className="description-text">6 tuan</p>
        <p className="description-text">120 hoc vien</p>
      </div>

      <div className="button section-container">
        <button className="button-link" onClick={() => alert("Dang ky thanh cong!")}>Dang ky ngay</button>
      </div>

      <CourseGrid onCourseClick={() => alert("Dang ky khoa hoc thanh cong!")} />
    </main>
  );
}
