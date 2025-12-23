"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconMail,
  IconQuestionMark,
} from "@tabler/icons-react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="cta"
      className="section-fade fade-from-bottom section-cta"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 0",
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff7ed 30%, #ffffff 100%)",
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
            "radial-gradient(circle at 30% 20%, rgba(244,121,32,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(11,70,255,0.1) 0%, transparent 50%)",
          animation: "pulseGlow 10s ease-in-out infinite",
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
        {[...Array(18)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              background:
                i % 3 === 0 ? "#f47920" : i % 3 === 1 ? "#0b46ff" : "#8b5cf6",
              borderRadius: "50%",
              opacity: 0.2,
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
        {/* Top CTA Section */}
        <Stack
          gap={32}
          align="center"
          className="element-fade fade-from-top"
          style={{
            marginBottom: 80,
            gap: "clamp(24px, 4vw, 32px)",
          }}
        >
          <Title
            order={2}
            fw={900}
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.15,
              color: "#0f172a",
              letterSpacing: "-0.04em",
              textAlign: "center",
            }}
          >
            Ready to send money{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #0b46ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              smarter?
            </span>
          </Title>
          <Text
            size="lg"
            c="dimmed"
            ta="center"
            style={{
              lineHeight: 1.7,
              color: "#64748b",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              maxWidth: 640,
              fontWeight: 500,
            }}
          >
            Join millions of users saving money on international transfers
          </Text>

          <Group gap="md" wrap="wrap" justify="center">
            <Button
              size="lg"
              radius={999}
              rightSection={<IconArrowRight size={20} />}
              className="btn-primary"
              style={{
                fontSize: "clamp(15px, 2.5vw, 18px)",
                background: "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                boxShadow: "0 14px 40px rgba(248,113,113,0.45)",
              }}
            >
              Start Sending Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              radius={999}
              leftSection={<IconQuestionMark size={18} />}
              className="btn-secondary"
              style={{
                fontSize: "clamp(15px, 2.5vw, 18px)",
                borderColor: "#e2e8f0",
                color: "#0f172a",
                background: "#ffffff",
                borderWidth: 2,
              }}
            >
              See FAQ
            </Button>
          </Group>
        </Stack>

        {/* Email Subscription Card */}
        <Box className="element-fade fade-from-bottom delay-2">
          <Card
            radius={32}
            padding={48}
            className="card-3d"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
              maxWidth: 680,
              margin: "0 auto",
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* Glow effect behind card */}
            <Box
              aria-hidden
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: 36,
                background:
                  "linear-gradient(135deg, rgba(244,121,32,0.15) 0%, rgba(11,70,255,0.15) 100%)",
                opacity: 0,
                filter: "blur(30px)",
                transition: "opacity 0.4s ease",
                zIndex: -1,
              }}
              className="cta-card-glow"
            />

            <Stack gap={28} align="center">
              {/* Icon */}
              <Box
                style={{
                  position: "relative",
                  width: "fit-content",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    inset: -16,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(244,121,32,0.2) 0%, rgba(11,70,255,0.2) 100%)",
                    filter: "blur(20px)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                  }}
                  aria-hidden
                />
                <ThemeIcon
                  size={72}
                  radius="xl"
                  variant="light"
                  className="icon-orbit"
                  style={{
                    background:
                      "linear-gradient(135deg, #fb923c 0%, #3b82f6 100%)",
                    color: "white",
                    boxShadow: "0 12px 32px rgba(244,121,32,0.35)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <IconMail size={36} stroke={2.5} />
                </ThemeIcon>
              </Box>

              {/* Content */}
              <Stack gap={12} align="center" style={{ width: "100%" }}>
                <Title
                  order={3}
                  fw={800}
                  style={{
                    fontSize: "clamp(24px, 4vw, 32px)",
                    lineHeight: 1.3,
                    color: "#0f172a",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                  }}
                >
                  Stay in the loop
                </Title>
                <Text
                  size="md"
                  c="dimmed"
                  ta="center"
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    lineHeight: 1.7,
                    color: "#64748b",
                    maxWidth: 520,
                  }}
                >
                  Get updates on exchange rates, new features, and exclusive
                  offers.
                </Text>
              </Stack>

              {/* Email Input + Subscribe Button */}
              <Stack gap={16} style={{ width: "100%", maxWidth: 480 }}>
                <TextInput
                  placeholder="Enter your email"
                  size="lg"
                  radius="md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  styles={{
                    input: {
                      fontSize: 16,
                      paddingBlock: 16,
                      borderColor: "#e2e8f0",
                      borderWidth: 2,
                      transition: "all 0.3s ease",
                    },
                  }}
                  style={{
                    width: "100%",
                  }}
                />
                <Button
                  size="lg"
                  radius={999}
                  fullWidth
                  rightSection={<IconArrowRight size={20} />}
                  className="btn-primary"
                  style={{
                    paddingBlock: 16,
                    fontSize: 16,
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                    boxShadow: "0 8px 24px rgba(248,113,113,0.4)",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Container>
    </section>
  );
}
