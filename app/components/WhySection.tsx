"use client";

import {
  Box,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBolt,
  IconCurrencyDollar,
  IconShieldLock,
  IconWorld,
  IconTrendingUp,
  IconHeadset,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconBolt,
    title: "Instant Transfers",
    desc: "Money arrives in minutes, not days. No intermediaries, no delays.",
    gradient: "linear-gradient(135deg, #fb923c 0%, #f87171 100%)",
    glowColor: "rgba(251,146,60,0.25)",
  },
  {
    icon: IconCurrencyDollar,
    title: "Zero Hidden Fees",
    desc: "Transparent pricing. Exactly what you see is what you get.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    glowColor: "rgba(59,130,246,0.25)",
  },
  {
    icon: IconShieldLock,
    title: "Bank-Grade Security",
    desc: "Your data is encrypted and protected with military-grade security.",
    gradient: "linear-gradient(135deg, #34d399 0%, #4ade80 100%)",
    glowColor: "rgba(52,211,153,0.25)",
  },
  {
    icon: IconWorld,
    title: "Global Coverage",
    desc: "Send to 150+ countries with local payment methods.",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
    glowColor: "rgba(167,139,250,0.25)",
  },
  {
    icon: IconTrendingUp,
    title: "Best Rates",
    desc: "Always get the real, mid-market exchange rate. No markups.",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #fb923c 100%)",
    glowColor: "rgba(251,191,36,0.25)",
  },
  {
    icon: IconHeadset,
    title: "24/7 Support",
    desc: "Customer support available anytime to help you out.",
    gradient: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
    glowColor: "rgba(244,114,182,0.25)",
  },
];

export function WhySection() {
  return (
    <section
      id="why"
      className="section-fade fade-from-bottom section-why"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 0",
        background: "linear-gradient(180deg, #fafbff 0%, #ffffff 50%, #f8fafc 100%)",
      }}
    >
      {/* Animated background gradient */}
      <Box
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 20% 30%, rgba(244,121,32,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(11,70,255,0.08) 0%, transparent 50%)",
          animation: "pulseGlow 8s ease-in-out infinite",
        }}
      />

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
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${6 + Math.random() * 6}px`,
              height: `${6 + Math.random() * 6}px`,
              background: i % 3 === 0 ? "#f47920" : i % 3 === 1 ? "#0b46ff" : "#8b5cf6",
              borderRadius: "50%",
              opacity: 0.25,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${
                12 + Math.random() * 8
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </Box>

      <Container
        size="xl"
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <Stack
          gap={20}
          align="center"
          className="element-fade fade-from-top"
          style={{
            marginBottom: 80,
            gap: "clamp(16px, 3vw, 20px)",
          }}
        >
          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(38px, 6.5vw, 64px)",
              lineHeight: 1.15,
              color: "#0f172a",
              letterSpacing: "-0.04em",
              textAlign: "center",
            }}
          >
            Why choose{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f97316 0%, #0b46ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remit Circle?
            </span>
          </Title>
          <Text
            size="lg"
            c="dimmed"
            ta="center"
            style={{
              lineHeight: 1.7,
              color: "#64748b",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              maxWidth: 720,
              fontWeight: 500,
            }}
          >
            Fast, secure, and affordable international transfers
          </Text>
        </Stack>

        {/* Features Grid */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={32}
          style={{
            gap: "clamp(24px, 4vw, 32px)",
          }}
        >
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              radius={28}
              padding={32}
              className="card-3d"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(226,232,240,0.8)",
                position: "relative",
                overflow: "visible",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                minHeight: 280,
              }}
            >
              {/* Glow effect behind card */}
              <Box
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: 32,
                  background: feature.gradient,
                  opacity: 0,
                  filter: "blur(20px)",
                  transition: "opacity 0.4s ease",
                  zIndex: -1,
                }}
                className="feature-card-glow"
              />

              <Stack gap={20} style={{ height: "100%" }}>
                {/* Icon with gradient background */}
                <Box
                  style={{
                    position: "relative",
                    width: "fit-content",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      inset: -12,
                      borderRadius: "50%",
                      background: feature.gradient,
                      opacity: 0.15,
                      filter: "blur(16px)",
                      animation: "pulseGlow 3s ease-in-out infinite",
                      animationDelay: `${idx * 0.3}s`,
                    }}
                    aria-hidden
                  />
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="light"
                    className="icon-orbit"
                    style={{
                      background: feature.gradient,
                      color: "white",
                      boxShadow: `0 8px 24px ${feature.glowColor}`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <feature.icon size={32} stroke={2.5} />
                  </ThemeIcon>
                </Box>

                {/* Content */}
                <Stack gap={12} style={{ flex: 1 }}>
                  <Title
                    order={3}
                    fw={800}
                    style={{
                      fontSize: "clamp(20px, 3vw, 26px)",
                      lineHeight: 1.3,
                      color: "#0f172a",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {feature.title}
                  </Title>
                  <Text
                    size="md"
                    c="dimmed"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      lineHeight: 1.7,
                      color: "#64748b",
                    }}
                  >
                    {feature.desc}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

