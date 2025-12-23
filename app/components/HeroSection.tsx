"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconWorld } from "@tabler/icons-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="top"
      className="section-hero section-fade fade-from-bottom hero-animate-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Floating particles in hero */}
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
        {[...Array(10)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${6 + Math.random() * 6}px`,
              height: `${6 + Math.random() * 6}px`,
              background: i % 2 === 0 ? "#f47920" : "#0b46ff",
              borderRadius: "50%",
              opacity: 0.25,
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
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={80}
          py={120}
          style={{
            alignItems: "center",
            gap: "clamp(32px, 8vw, 80px)",
            paddingTop: "clamp(80px, 14vw, 140px)",
            paddingBottom: "clamp(60px, 12vw, 120px)",
          }}
        >
          {/* Left: copy */}
          <Stack
            gap={32}
            className="element-fade fade-from-left hero-animate-content"
            style={{
              maxWidth: 620,
              width: "100%",
              gap: "clamp(24px, 4vw, 32px)",
            }}
          >
            <Box
              style={{
                position: "relative",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              <Badge
                radius={999}
                size="lg"
                variant="light"
                leftSection={<IconWorld size={16} color="#f97316" />}
                style={{
                  background: "rgba(244,121,32,0.10)",
                  color: "#f97316",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "clamp(9px, 2vw, 11px)",
                  padding: "clamp(6px, 1.5vw, 8px) clamp(14px, 3vw, 18px)",
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Send money worldwide
              </Badge>
              {/* Christmas hat on badge */}
              <Box
                style={{
                  position: "absolute",
                  top: "clamp(-36px, -5vw, -30px)",
                  right: "clamp(-26px, -5vw, -40px)",
                  width: "clamp(50px, 12vw, 40px)",
                  height: "clamp(50px, 12vw, 40px)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/hat2.png"
                  alt="Christmas hat"
                  width={80}
                  height={80}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    backgroundColor: "transparent",
                  }}
                />
              </Box>
            </Box>

            <Stack gap={16} style={{ gap: "clamp(12px, 2vw, 16px)" }}>
              <Title
                order={1}
                fw={900}
                style={{
                  fontSize: "clamp(30px, 6vw, 64px)",
                  lineHeight: 1.15,
                  color: "#0f172a",
                  letterSpacing: "-0.03em",
                }}
              >
                Worldwide Transfers
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #f97316 0%, #f43f5e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Local Care
                </span>
              </Title>

              <Text
                size="xl"
                c="dimmed"
                style={{
                  lineHeight: 1.7,
                  color: "#64748b",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  maxWidth: 520,
                }}
              >
                Remit Circle offers fast, secure, and affordable international
                money transfers. Connect with loved ones and businesses
                worldwide through our easy-to-use app.
              </Text>
            </Stack>

            <Group gap="md">
              <Button
                size="lg"
                radius={999}
                rightSection={<IconArrowRight size={18} />}
                className="btn-primary"
                style={{
                  paddingInline: "clamp(24px, 6vw, 36px)",
                  background:
                    "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                  boxShadow: "0 14px 40px rgba(248,113,113,0.45)",
                }}
              >
                Join us today
              </Button>
            </Group>
          </Stack>

          {/* Right: transfer card */}
          <Box
            className="element-fade fade-from-right"
            style={{
              maxWidth: 520,
              width: "100%",
            }}
          >
            <Card
              shadow="xl"
              radius={32}
              padding="xl"
              className="card-3d transfer-card"
              style={{
                border: "1px solid #e2e8f0",
                background: "linear-gradient(145deg,#ffffff,#f9fafb)",
              }}
            >
              <Stack gap={20}>
                {/* Amount input + currency */}
                <Stack gap={6}>
                  <Text
                    size="sm"
                    c="dimmed"
                    style={{ fontWeight: 500, color: "#64748b" }}
                  >
                    You send exactly
                  </Text>
                  <TextInput
                    defaultValue="1,000"
                    size="md"
                    radius="md"
                    styles={{
                      input: {
                        fontSize: 20,
                        fontWeight: 600,
                        paddingBlock: 10,
                      },
                    }}
                    rightSectionWidth={96}
                    rightSection={
                      <Box
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "2px 10px",
                        }}
                      >
                        <Box
                          style={{
                            width: 18,
                            height: 13,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            borderRadius: 2,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 480"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path fill="#00008B" d="M0 0h640v480H0z" />
                            <path
                              fill="#fff"
                              d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
                            />
                            <path
                              fill="red"
                              d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
                            />
                            <path
                              fill="#fff"
                              d="M120.5 0v240h80V0zM0 80v80h320V80z"
                            />
                            <path
                              fill="red"
                              d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"
                            />
                            <path
                              fill="#fff"
                              d="m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6zM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z"
                            />
                          </svg>
                        </Box>
                        <Text
                          size="xs"
                          fw={700}
                          style={{
                            letterSpacing: "0.08em",
                            color: "#92400e",
                          }}
                        >
                          AUD
                        </Text>
                      </Box>
                    }
                  />
                </Stack>

                {/* Details */}
                <Stack gap={4} style={{ fontSize: 13, color: "#6b7280" }}>
                  <Text size="sm">Includes fees: 0 AUD</Text>
                  <Text size="sm">
                    Total amount we&apos;ll convert: 1,000 AUD
                  </Text>
                  <Text size="sm">Current rate: 0.6678</Text>
                </Stack>

                <Box
                  style={{
                    marginTop: 8,
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "#dcfce7",
                    color: "#166534",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  Discounted fees applied for new users
                </Box>

                {/* Recipient gets */}
                <Stack gap={8} mt={8}>
                  <Text
                    size="sm"
                    c="dimmed"
                    style={{ fontWeight: 500, color: "#64748b" }}
                  >
                    Recipient gets
                  </Text>
                  <TextInput
                    defaultValue="667.83"
                    size="md"
                    radius="md"
                    styles={{
                      input: {
                        fontSize: 20,
                        fontWeight: 600,
                        paddingBlock: 10,
                      },
                    }}
                    rightSectionWidth={96}
                    rightSection={
                      <Box
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "2px 10px",
                        }}
                      >
                        <Box
                          style={{
                            width: 18,
                            height: 13,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            borderRadius: 2,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 480"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path fill="#bd3d44" d="M0 0h640v480H0" />
                            <path
                              stroke="#fff"
                              strokeWidth="37"
                              d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
                            />
                            <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
                            <marker
                              id="us-a"
                              markerHeight="30"
                              markerWidth="30"
                            >
                              <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
                            </marker>
                            <path
                              fill="none"
                              markerMid="url(#us-a)"
                              d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
                            />
                          </svg>
                        </Box>
                        <Text
                          size="xs"
                          fw={700}
                          style={{
                            letterSpacing: "0.08em",
                            color: "#1d4ed8",
                          }}
                        >
                          USD
                        </Text>
                      </Box>
                    }
                  />
                </Stack>

                <Button
                  size="md"
                  radius={999}
                  fullWidth
                  className="btn-primary"
                  style={{
                    marginTop: 12,
                    background:
                      "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                  }}
                >
                  Send money now
                </Button>
              </Stack>
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
    </section>
  );
}
