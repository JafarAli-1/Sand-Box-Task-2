"use client";

import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconQrcode,
  IconShieldCheck,
  IconBolt,
  IconBell,
} from "@tabler/icons-react";
import Image from "next/image";

export function DownloadSection() {
  return (
    <section
      id="download"
      className="section-fade fade-from-bottom download-section-mobile"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "96px 0",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Floating particles */}
      <Box
        className="section-particles"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${5 + Math.random() * 5}px`,
              height: `${5 + Math.random() * 5}px`,
              background: i % 2 === 0 ? "#f47920" : "#0b46ff",
              borderRadius: "50%",
              opacity: 0.2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${
                10 + Math.random() * 6
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </Box>

      <Container
        size="xl"
        className="container download-section-container"
        style={{ position: "relative", zIndex: 1 }}
        maw="82%"
      >
        {/* Header */}
        <Stack
          gap={20}
          align="center"
          className="element-fade fade-from-top"
          style={{ marginBottom: 64, gap: "clamp(16px, 3vw, 20px)" }}
        >
          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              lineHeight: 1.2,
              color: "#0f172a",
              letterSpacing: "-0.03em",
              textAlign: "center",
            }}
          >
            Download Our App
          </Title>
          <Text
            size="lg"
            c="dimmed"
            ta="center"
            style={{
              lineHeight: 1.7,
              color: "#64748b",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              maxWidth: 700,
            }}
          >
            Register today and access a wide range of fantastic features,
            including easy transactions, quick payments, and efficient financial
            management.
          </Text>
        </Stack>

        {/* Main Content: Split Layout */}
        <SimpleGrid
          cols={{ base: 1, lg: 2 }}
          spacing={64}
          style={{
            gap: "clamp(40px, 8vw, 64px)",
            marginBottom: 48,
          }}
        >
          {/* Left: Features + Download Buttons */}
          <Stack gap={40} className="element-fade fade-from-left">
            {/* Features Grid */}
            <SimpleGrid cols={1} spacing={20}>
              {[
                {
                  icon: IconBolt,
                  title: "Instant Transfers",
                  desc: "Send money in seconds with just a few taps",
                },
                {
                  icon: IconBell,
                  title: "Real-Time Notifications",
                  desc: "Stay updated on every transaction instantly",
                },
                {
                  icon: IconShieldCheck,
                  title: "Bank-Level Security",
                  desc: "Your data is encrypted and fully protected",
                },
              ].map((feature, idx) => (
                <Card
                  key={feature.title}
                  radius={16}
                  padding={20}
                  className="card-3d"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Group gap={16} align="flex-start">
                    <ThemeIcon
                      size={48}
                      radius="md"
                      variant="light"
                      color="brand"
                      className="icon-orbit"
                      style={{
                        background: "rgba(244,121,32,0.12)",
                        flexShrink: 0,
                      }}
                    >
                      <feature.icon size={24} color="#f47920" />
                    </ThemeIcon>
                    <Stack gap={6} style={{ flex: 1 }}>
                      <Text
                        fw={700}
                        style={{
                          fontSize: "clamp(16px, 2vw, 18px)",
                          color: "#0f172a",
                        }}
                      >
                        {feature.title}
                      </Text>
                      <Text
                        size="sm"
                        c="dimmed"
                        style={{
                          fontSize: "clamp(13px, 1.5vw, 15px)",
                          color: "#64748b",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.desc}
                      </Text>
                    </Stack>
                  </Group>
                </Card>
              ))}
            </SimpleGrid>

            {/* Download Buttons */}
            <Stack gap={12} className="download-section-buttons-wrapper">
              <Text
                fw={600}
                className="download-section-buttons-label"
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "#0f172a",
                  marginBottom: 4,
                }}
              >
                Available on
              </Text>
              <Group
                gap={12}
                wrap="wrap"
                className="download-section-buttons-group"
              >
                {[
                  {
                    topText: "Download on the",
                    mainText: "App Store",
                    imageSrc: "/apple3.png",
                    imageSize: 26,
                    containerSize: 38,
                  },
                  {
                    topText: "GET IT ON",
                    mainText: "Google Play",
                    imageSrc: "/Google-Play.png",
                    imageSize: 32,
                    containerSize: 42,
                  },
                  {
                    topText: "EXPLORE IT ON",
                    mainText: "AppGallery",
                    imageSrc: "/app-gallery.png",
                    imageSize: 34,
                    containerSize: 44,
                  },
                ].map((store) => (
                  <Box
                    key={store.mainText}
                    className="download-section-button card-3d"
                    style={{
                      background: "transparent",
                      borderRadius: 10,
                      padding: "8px 14px",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      width: "fit-content",
                      border: "1px solid rgba(148,163,184,0.3)",
                    }}
                  >
                    <Group gap={12} align="center" wrap="nowrap">
                      <Box
                        style={{
                          width: store.containerSize,
                          height: store.containerSize,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={store.imageSrc}
                          alt={`${store.mainText} logo`}
                          width={store.imageSize}
                          height={store.imageSize}
                          style={{
                            width: `${store.imageSize}px`,
                            height: `${store.imageSize}px`,
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </Box>
                      <Stack gap={1} style={{ minWidth: 0 }}>
                        <Text
                          size="xs"
                          style={{
                            color: "#9ca3af",
                            fontSize: "10px",
                            fontWeight: 400,
                            lineHeight: 1.2,
                            letterSpacing: "0.2px",
                          }}
                        >
                          {store.topText}
                        </Text>
                        <Text
                          size="sm"
                          fw={700}
                          style={{
                            color: "#0f172a",
                            fontSize: "15px",
                            lineHeight: 1.2,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {store.mainText}
                        </Text>
                      </Stack>
                    </Group>
                  </Box>
                ))}
              </Group>

              {/* QR Code */}
              <Card
                radius={20}
                padding={24}
                className="card-3d download-qr-card"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  maxWidth: 240,
                  width: "100%",
                }}
              >
                <Stack gap={12} align="center">
                  <ThemeIcon
                    size={36}
                    radius={10}
                    variant="light"
                    color="brand"
                    className="icon-orbit"
                    style={{
                      background: "rgba(244,121,32,0.1)",
                    }}
                  >
                    <IconQrcode size={20} color="#f47920" />
                  </ThemeIcon>
                  <Text
                    size="xs"
                    fw={700}
                    ta="center"
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Scan to Download
                  </Text>
                  <Box
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 14,
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 12,
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <Image
                      src="/qr.png"
                      alt="QR Code"
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </Stack>

          {/* Right: Phone + QR Code */}
          <Stack
            gap={32}
            align="center"
            className="element-fade fade-from-right"
          >
            {/* Phone Mockup */}
            <Box
              className="phone-float-loop"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Glow Effect */}
              <Box
                style={{
                  position: "absolute",
                  width: "130%",
                  height: "130%",
                  background:
                    "radial-gradient(circle, rgba(244,121,32,0.18) 0%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                  zIndex: 0,
                  animation: "pulseGlow 4s ease-in-out infinite",
                }}
              />
              <Box
                style={{
                  position: "relative",
                  maxWidth: "clamp(280px, 45vw, 420px)",
                  width: "100%",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/mobile.png"
                  alt="Remit Circle App"
                  width={420}
                  height={840}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 32px 80px rgba(15,23,42,0.4))",
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
