"use client";

import {
  ActionIcon,
  Box,
  Button,
  Card,
  Group,
  Modal,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrandApple,
  IconBrandAndroid,
  IconDeviceMobile,
  IconQrcode,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DownloadModalProps {
  onOpenChange?: (opened: boolean) => void;
}

export function DownloadModal({ onOpenChange }: DownloadModalProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setOpened(true);
      onOpenChange?.(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onOpenChange]);

  const handleClose = () => {
    setOpened(false);
    onOpenChange?.(false);
  };

  const downloadLinks = [
    {
      label: "App Store",
      icon: IconBrandApple,
      href: "#ios",
      imageSrc: "/apple3.png",
      imageSize: 26,
      containerSize: 38,
    },
    {
      label: "Google Play",
      icon: IconBrandAndroid,
      href: "#android",
      imageSrc: "/Google-Play.png",
      imageSize: 32,
      containerSize: 42,
    },
    {
      label: "AppGallery",
      icon: IconDeviceMobile,
      href: "#huawei",
      imageSrc: "/app-gallery.png",
      imageSize: 34,
      containerSize: 44,
    },
  ];

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      centered
      withCloseButton={false}
      size="auto"
      padding={0}
      radius={32}
      transitionProps={{
        duration: 400,
        transition: "pop",
        timingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      styles={{
        body: { padding: 0 },
        content: {
          background: "transparent",
          boxShadow: "none",
        },
        overlay: {
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      <Card
        radius={32}
        padding={48}
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
          border: "1px solid rgba(226,232,240,0.8)",
          position: "relative",
          overflow: "visible",
          maxWidth: 600,
          width: "100%",
        }}
      >
        {/* Close button */}
        <ActionIcon
          variant="subtle"
          size={40}
          radius="xl"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            background: "rgba(15,23,42,0.05)",
            color: "#64748b",
          }}
        >
          <IconX size={20} />
        </ActionIcon>

        <Stack gap={32} align="center">
          {/* Header */}
          <Stack gap={12} align="center">
            <ThemeIcon
              size={72}
              radius="xl"
              variant="light"
              className="icon-orbit"
              style={{
                background: "linear-gradient(135deg, #fb923c 0%, #3b82f6 100%)",
                color: "white",
                boxShadow: "0 12px 32px rgba(244,121,32,0.35)",
              }}
            >
              <IconQrcode size={36} stroke={2.5} />
            </ThemeIcon>
            <Title
              order={2}
              fw={900}
              ta="center"
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                lineHeight: 1.2,
                color: "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              Download Remit Circle App
            </Title>
            <Text
              size="md"
              c="dimmed"
              ta="center"
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: 1.6,
                color: "#64748b",
                maxWidth: 480,
              }}
            >
              Get the app and start sending money worldwide with ease. Scan the
              QR code or download directly from your app store.
            </Text>
          </Stack>

          {/* QR Code */}
          <Box
            style={{
              position: "relative",
              width: 200,
              height: 200,
              borderRadius: 20,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              border: "2px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(15,23,42,0.1)",
            }}
          >
            <Image
              src="/qr.png"
              alt="QR Code"
              width={168}
              height={168}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Download Buttons */}
          <Stack gap={12} style={{ width: "100%", maxWidth: 400 }}>
            <Text
              size="sm"
              fw={600}
              ta="center"
              style={{
                color: "#64748b",
                fontSize: 13,
                marginBottom: 4,
              }}
            >
              Or download from
            </Text>
            <Group gap={10} justify="center" wrap="wrap">
              {downloadLinks.map((store) => (
                <Box
                  key={store.label}
                  component="a"
                  href={store.href}
                  style={{
                    background: "transparent",
                    borderRadius: 10,
                    padding: "8px 14px",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "fit-content",
                    border: "1px solid rgba(148,163,184,0.3)",
                    textDecoration: "none",
                  }}
                  className="card-3d"
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
                        alt={`${store.label} logo`}
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
                    <Text
                      size="sm"
                      fw={700}
                      style={{
                        color: "#0f172a",
                        fontSize: "14px",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {store.label}
                    </Text>
                  </Group>
                </Box>
              ))}
            </Group>
          </Stack>

          {/* Close button text */}
          <Button
            variant="subtle"
            size="sm"
            onClick={handleClose}
            style={{
              color: "#94a3b8",
              fontSize: 13,
            }}
          >
            Maybe later
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
}
