"use client";

import { Box, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { HeaderBar } from "./components/HeaderBar";
import { HeroSection } from "./components/HeroSection";
import { FeesSection } from "./components/FeesSection";
import { DownloadSection } from "./components/DownloadSection";
import { WhySection } from "./components/WhySection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { DownloadModal } from "./components/DownloadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".section-fade");
    sections.forEach((section) => observer.observe(section));

    const fadeElements = document.querySelectorAll(".element-fade");
    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <Box style={{ background: "#fafbff", minHeight: "100vh" }}>
      <Stack gap={0}>
        <Box
          style={{
            opacity: isModalOpen ? 0 : 1,
            visibility: isModalOpen ? "hidden" : "visible",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          <HeaderBar />
        </Box>
        {/* Spacer for fixed header */}
        <Box h={80} />
        <HeroSection />
        <FeesSection />
        <DownloadSection />
        <WhySection />
        <CTASection />
        <Footer />
      </Stack>
      <DownloadModal onOpenChange={setIsModalOpen} />
    </Box>
  );
}
