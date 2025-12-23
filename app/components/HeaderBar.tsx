"use client";

import { ActionIcon, Box, Button, Container, Group, Text } from "@mantine/core";
import {
  IconChevronDown,
  IconLogin2,
  IconMenu2,
  IconUserPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./data";

export function HeaderBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      className="header-main"
      data-scrolled={scrolled}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        width: "100%",
      }}
    >
      {/* Glass / gradient background */}
      <Box
        className="header-bg-gradient"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(135deg, rgba(244,121,32,0.08) 0%, rgba(11,70,255,0.08) 50%, rgba(244,121,32,0.05) 100%)",
          opacity: scrolled ? 0.7 : 1,
          transition: "opacity 0.4s ease",
        }}
      />

      <Box
        className="header-glass"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          background: scrolled
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.8)",
          borderBottom: scrolled
            ? "1px solid rgba(238,241,245,0.9)"
            : "1px solid rgba(238,241,245,0.5)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(15,23,42,0.12)"
            : "0 4px 16px rgba(15,23,42,0.06)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Small floating particles */}
      <Box
        className="header-particles"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            style={{
              position: "absolute",
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              background: i % 2 === 0 ? "#f47920" : "#0b46ff",
              borderRadius: "50%",
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${
                8 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </Box>

      <Container
        size="xl"
        className="container"
        style={{ position: "relative" }}
      >
        <Group
          justify="space-between"
          h={scrolled ? 64 : 80}
          gap="md"
          style={{
            transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Logo */}
          <Link
            href="#top"
            className="header-logo-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              overflow: "visible",
            }}
          >
            <Box
              className="header-logo-wrapper"
              style={{
                position: "relative",
                overflow: "visible",
                transition:
                  "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease",
              }}
            >
              <Image
                src="/rc-logo-1.png"
                alt="Remit Circle logo"
                width={scrolled ? 90 : 180}
                height={scrolled ? 44 : 52}
                style={{
                  objectFit: "contain",
                  maxWidth: "clamp(120px, 28vw, 50px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
                }}
                priority
                className="header-logo"
              />
              {/* Christmas hat on logo */}
              <Box
                style={{
                  position: "absolute",
                  top: scrolled ? 0 : -10,
                  right: scrolled ? 0 : 0,
                  width: scrolled ? 20 : 40,
                  height: scrolled ? 20 : 40,
                  pointerEvents: "none",
                  zIndex: 10,
                  overflow: "visible",
                }}
              >
                <Image
                  src="/hat2.png"
                  alt="Christmas hat"
                  width={scrolled ? 20 : 40}
                  height={scrolled ? 20 : 40}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    backgroundColor: "transparent",
                  }}
                />
              </Box>
              <Box
                className="logo-glow"
                style={{
                  position: "absolute",
                  inset: -8,
                  background:
                    "radial-gradient(circle, rgba(244,121,32,0.32) 0%, transparent 65%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
            </Box>
          </Link>

          {/* Nav links */}
          <Group gap={20} visibleFrom="md" className="header-nav">
            {navLinks.map((item, idx) => (
              <Box
                key={item.label}
                style={{
                  animation: `fadeInDown 0.5s ease both`,
                  animationDelay: `${idx * 0.06}s`,
                }}
              >
                <Link href={item.href} className="nav-link-enhanced">
                  <Box
                    component="span"
                    style={{
                      position: "relative",
                      paddingBottom: 4,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0f172a",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.label}
                    {item.href === "#faq" && (
                      <IconChevronDown
                        size={14}
                        className="nav-chevron"
                        style={{
                          display: "inline-block",
                          marginLeft: 4,
                          verticalAlign: "middle",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    className="nav-underline"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: 0,
                      height: 2.5,
                      background:
                        "linear-gradient(90deg, #0b46ff 0%, #f47920 100%)",
                      borderRadius: 999,
                      transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 2px 8px rgba(244,121,32,0.4)",
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Group>

          {/* Actions: Login / Register */}
          <Group gap="xs" className="header-actions" wrap="nowrap">
            <Button
              variant="outline"
              radius="xl"
              size={scrolled ? "sm" : "md"}
              leftSection={<IconLogin2 size={16} />}
              className="btn-secondary"
              component="a"
              href="#login"
              visibleFrom="sm"
              style={{
                borderColor: "#0b46ff",
                color: "#0b46ff",
                background: "rgba(255,255,255,0.9)",
                animation: `fadeInRight 0.5s ease both`,
                animationDelay: "0.25s",
              }}
            >
              <Text component="span" visibleFrom="md">
                Login
              </Text>
              <Text component="span" hiddenFrom="md">
                Log in
              </Text>
            </Button>

            <Button
              radius="xl"
              size={scrolled ? "sm" : "md"}
              className="btn-primary"
              component="a"
              href="#register"
              leftSection={<IconUserPlus size={16} />}
              style={{
                background: "linear-gradient(135deg, #f47920 0%, #ff8c42 100%)",
                color: "white",
                boxShadow: "0 6px 20px rgba(244,121,32,0.5)",
                animation: `fadeInRight 0.5s ease both`,
                animationDelay: "0.3s",
              }}
            >
              <Text component="span" visibleFrom="md">
                Register
              </Text>
              <Text component="span" hiddenFrom="md">
                Sign up
              </Text>
            </Button>

            <ActionIcon
              variant="subtle"
              size={40}
              radius="md"
              hiddenFrom="md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                animation: `fadeInRight 0.5s ease both`,
                animationDelay: "0.3s",
              }}
            >
              <IconMenu2 size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
