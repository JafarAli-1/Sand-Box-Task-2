"use client";

import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Image from "next/image";

export function FeesSection() {
  return (
    <section
      id="fees"
      className="section-fade fade-from-bottom"
      style={{ position: "relative", overflow: "hidden", padding: "96px 0" }}
    >
      {/* Floating particles for fees section */}
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
        {[...Array(8)].map((_, i) => (
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
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Stack
          gap={8}
          align="center"
          className="element-fade fade-from-top"
          style={{ marginBottom: 32 }}
        >
          <Title
            order={2}
            style={{
              fontSize: "clamp(26px, 3vw, 36px)",
              letterSpacing: "-0.03em",
            }}
          >
            Low, Transparent Fees
          </Title>
          <Text
            size="sm"
            c="dimmed"
            ta="center"
            style={{ maxWidth: 640, fontSize: 14, lineHeight: 1.7 }}
          >
            Only pay for what you use. No monthly fees, no surprises.
            <br />
            Just clear, upfront pricing — so you can focus on running your
            business, not decoding hidden costs.
          </Text>
        </Stack>

        <Card
          radius={28}
          padding="xl"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
          }}
        >
          <Stack gap={28} style={{ paddingInline: 8, paddingBlock: 8 }}>
            <Stack gap={4} align="center">
              <Text
                size="sm"
                fw={700}
                style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Compare providers
              </Text>
              <Text size="xs" c="dimmed" ta="center" style={{ fontSize: 12 }}>
                See how much your recipient gets with each provider
              </Text>
            </Stack>

            {/* Inputs row */}
            <Group
              grow
              gap="md"
              className="element-fade fade-from-bottom fees-inputs-group"
              style={{
                alignItems: "flex-end",
                flexWrap: "wrap",
              }}
            >
              <Stack gap={6} className="fees-input-stack" style={{ minWidth: 160 }}>
                <Text size="xs" c="dimmed">
                  Amount
                </Text>
                <TextInput
                  defaultValue="1,000"
                  size="md"
                  radius="md"
                  className="fees-text-input"
                  styles={{
                    input: {
                      fontSize: 14,
                    },
                  }}
                />
              </Stack>

              <Stack gap={6} className="fees-input-stack" style={{ minWidth: 220 }}>
                <Text size="xs" c="dimmed">
                  From
                </Text>
                <TextInput
                  defaultValue="AUD - Australian Dollar"
                  size="md"
                  radius="md"
                  rightSection={<span style={{ fontSize: 12 }}>▼</span>}
                  className="fees-text-input"
                  styles={{
                    input: {
                      fontSize: 14,
                    },
                  }}
                />
              </Stack>

              <Stack gap={6} className="fees-input-stack" style={{ minWidth: 220 }}>
                <Text size="xs" c="dimmed">
                  To
                </Text>
                <TextInput
                  defaultValue="USD – US Dollar"
                  size="md"
                  radius="md"
                  rightSection={<span style={{ fontSize: 12 }}>▼</span>}
                  className="fees-text-input"
                  styles={{
                    input: {
                      fontSize: 14,
                    },
                  }}
                />
              </Stack>
            </Group>

            {/* Providers grid */}
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 4 }}
              spacing="lg"
              className="element-fade fade-from-bottom delay-2"
              style={{
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              {/* Remit Circle card */}
              <Card
                radius={24}
                padding="lg"
                style={{
                  background:
                    "linear-gradient(160deg,#ff4b1f 0%,#ff9068 50%,#f97316 100%)",
                  color: "white",
                }}
              >
                <Stack gap={14}>
                  <Group gap={8} align="center">
                    <Box
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/remiet.png"
                        alt="Remit Circle logo"
                        width={48}
                        height={48}
                        style={{
                          width: 48,
                          height: 48,
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Text size="xs" fw={700}>
                      Remit Circle
                    </Text>
                  </Group>
                  <Title order={3} style={{ fontSize: 24 }}>
                    660.83 USD
                  </Title>
                  <Text size="xs" c="rgba(255,255,255,0.8)">
                    Recipient gets
                  </Text>

                  <Stack gap={4} mt={8} style={{ fontSize: 11 }}>
                    <Group justify="space-between">
                      <Text size="xs">Exchange rate</Text>
                      <Text size="xs">0.6678</Text>
                    </Group>
                    <Group justify="space-between">
                      <Text size="xs">Markup</Text>
                      <Text size="xs">0 AUD</Text>
                    </Group>
                    <Group justify="space-between">
                      <Text size="xs">Fee</Text>
                      <Text size="xs">7 AUD</Text>
                    </Group>
                    <Group justify="space-between" mt={4}>
                      <Text size="xs" fw={600}>
                        Total fees
                      </Text>
                      <Text size="xs" fw={600}>
                        7 AUD
                      </Text>
                    </Group>
                  </Stack>
                </Stack>
              </Card>

              {/* Other provider cards */}
              {[
                {
                  name: "ANZ",
                  amount: "640.53 USD",
                  logo: "/anz.png",
                },
                {
                  name: "PayPal",
                  amount: "630.09 USD",
                  logo: "/paypal.png",
                },
                {
                  name: "Bendigo Bank",
                  amount: "616.22 USD",
                  logo: "/bank.png",
                },
              ].map((provider) => (
                <Card
                  key={provider.name}
                  radius={20}
                  padding="lg"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <Stack gap={12}>
                    <Group gap={8} align="center">
                      <Box
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "999px",
                          background: "#f9fafb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={provider.logo}
                          alt={`${provider.name} logo`}
                          width={48}
                          height={48}
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Text size="xs" fw={600} c="dimmed">
                        {provider.name}
                      </Text>
                    </Group>

                    <Title order={4} style={{ fontSize: 20 }}>
                      {provider.amount}
                    </Title>
                    <Text size="xs" c="dimmed">
                      Recipient gets
                    </Text>

                    <Stack gap={4} mt={8} style={{ fontSize: 11 }}>
                      <Group justify="space-between">
                        <Text size="xs">Exchange rate</Text>
                        <Text size="xs">0.64–0.63</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text size="xs">Markup</Text>
                        <Text size="xs">32–50 AUD</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text size="xs">Fee</Text>
                        <Text size="xs">9–30 AUD</Text>
                      </Group>
                      <Group justify="space-between" mt={4}>
                        <Text size="xs" fw={600}>
                          Total fees
                        </Text>
                        <Text size="xs" fw={600}>
                          40–78 AUD
                        </Text>
                      </Group>
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Card>
      </Container>
    </section>
  );
}
