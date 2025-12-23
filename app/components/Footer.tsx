"use client";

import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandApple,
  IconBrandAndroid,
  IconDeviceMobile,
  IconLogin2,
  IconUserPlus,
  IconQuestionMark,
  IconInfoCircle,
  IconShieldLock,
  IconCookie,
  IconFileText,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "About Remit Circle", href: "#about", icon: IconInfoCircle },
  { label: "FAQs", href: "#faq", icon: IconQuestionMark },
  { label: "Login", href: "#login", icon: IconLogin2 },
  { label: "Register", href: "#register", icon: IconUserPlus },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy", icon: IconShieldLock },
  { label: "Cookie Policy", href: "#cookies", icon: IconCookie },
  { label: "Terms & Conditions", href: "#terms", icon: IconFileText },
];

const downloadLinks = [
  { label: "iOS", href: "#ios", icon: IconBrandApple },
  { label: "Android", href: "#android", icon: IconBrandAndroid },
  { label: "Huawei", href: "#huawei", icon: IconDeviceMobile },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section-fade fade-from-bottom section-footer"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 32px",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
        borderTop: "1px solid rgba(226,232,240,0.6)",
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
            "radial-gradient(circle at 20% 80%, rgba(244,121,32,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(11,70,255,0.08) 0%, transparent 50%)",
          animation: "pulseGlow 12s ease-in-out infinite",
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
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background:
                i % 3 === 0 ? "#f47920" : i % 3 === 1 ? "#0b46ff" : "#8b5cf6",
              borderRadius: "50%",
              opacity: 0.15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${
                14 + Math.random() * 10
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
        {/* Main Footer Content */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={48}
          style={{
            gap: "clamp(32px, 5vw, 48px)",
            marginBottom: 48,
          }}
        >
          {/* Brand Column */}
          <Stack
            gap={20}
            className="element-fade fade-from-left"
            style={{
              gap: "clamp(16px, 3vw, 20px)",
            }}
          >
            {/* Logo */}
            <Box
              style={{
                position: "relative",
                width: "fit-content",
              }}
            >
              <Image
                src="/rc-logo-1.png"
                alt="Remit Circle logo"
                width={180}
                height={52}
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
                  maxWidth: "clamp(140px, 25vw, 180px)",
                }}
                priority
              />
            </Box>

            {/* Description */}
            <Text
              size="sm"
              c="dimmed"
              style={{
                fontSize: "clamp(13px, 1.8vw, 15px)",
                lineHeight: 1.7,
                color: "#64748b",
                maxWidth: 320,
              }}
            >
              Remit Circle is a global money transfer service that allows
              individuals and businesses to send money internationally in a
              secure, fast, and affordable manner.
            </Text>
          </Stack>

          {/* Company Links */}
          <Stack
            gap={20}
            className="element-fade fade-from-bottom delay-1"
            style={{
              gap: "clamp(16px, 3vw, 20px)",
            }}
          >
            <Title
              order={4}
              fw={800}
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#0f172a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Company
            </Title>
            <Stack gap={12} style={{ gap: "clamp(10px, 2vw, 12px)" }}>
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: "#64748b",
                    fontSize: "clamp(13px, 1.8vw, 15px)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "fit-content",
                  }}
                >
                  <link.icon size={16} style={{ flexShrink: 0 }} />
                  <Text
                    component="span"
                    style={{
                      fontSize: "clamp(13px, 1.8vw, 15px)",
                      color: "#64748b",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Legal Links */}
          <Stack
            gap={20}
            className="element-fade fade-from-bottom delay-2"
            style={{
              gap: "clamp(16px, 3vw, 20px)",
            }}
          >
            <Title
              order={4}
              fw={800}
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#0f172a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Legal
            </Title>
            <Stack gap={12} style={{ gap: "clamp(10px, 2vw, 12px)" }}>
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: "#64748b",
                    fontSize: "clamp(13px, 1.8vw, 15px)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "fit-content",
                  }}
                >
                  <link.icon size={16} style={{ flexShrink: 0 }} />
                  <Text
                    component="span"
                    style={{
                      fontSize: "clamp(13px, 1.8vw, 15px)",
                      color: "#64748b",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Downloads Links */}
          <Stack
            gap={20}
            className="element-fade fade-from-bottom delay-3"
            style={{
              gap: "clamp(16px, 3vw, 20px)",
            }}
          >
            <Title
              order={4}
              fw={800}
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#0f172a",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Downloads
            </Title>
            <Stack gap={12} style={{ gap: "clamp(10px, 2vw, 12px)" }}>
              {downloadLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: "#64748b",
                    fontSize: "clamp(13px, 1.8vw, 15px)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "fit-content",
                  }}
                >
                  <link.icon size={16} style={{ flexShrink: 0 }} />
                  <Text
                    component="span"
                    style={{
                      fontSize: "clamp(13px, 1.8vw, 15px)",
                      color: "#64748b",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Copyright */}
        <Box
          className="element-fade fade-from-top delay-3"
          style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(226,232,240,0.6)",
            marginTop: 32,
          }}
        >
          <Text
            size="sm"
            c="dimmed"
            ta="center"
            style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#94a3b8",
            }}
          >
            © {currentYear} Remit Circle. All rights reserved.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}
