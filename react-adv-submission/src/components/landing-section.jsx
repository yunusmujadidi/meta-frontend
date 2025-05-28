import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen-section";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" name="Pete" />
        <Heading as="p" size="md" color="white" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={3}>
        <Heading as="h1" size="3xl" color="white" textAlign="center">
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" color="white" textAlign="center">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
