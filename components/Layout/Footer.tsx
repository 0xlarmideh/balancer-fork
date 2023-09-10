import { Divider, Flex, HStack, Link, Text } from "@chakra-ui/react";
import MaxWidth from "../_common/MaxWidth";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import PhanesLogo from "@/public/images/Phanes.png";
import Image from "next/image";


const Footer = () => {
  const FooterLinks = [
    { title: "About", link: "#" },
    { title: "Docs", link: "#" },
    { title: "Analytics", link: "#" },
  ];

  const FooterIcons = [
    { title: "Discord", link: "#", icon: <FaDiscord /> },
    { title: "Twitter", link: "#", icon: <FaTwitter /> },
    { title: "Telegram", link: "#", icon: <FaTelegramPlane /> },
  ];
  return (
    <>
      <footer>
        <MaxWidth>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "18px", md: "0" }}
            py={{ base: "70px", md: "100px" }}
            justify="space-between"
          >
            {/* Logo */}
            <Image src={PhanesLogo} alt="Phanes Logo" />
            <HStack spacing={4}>
              {FooterLinks.map((link, idx) => (
                <Link
                  fontSize="19px"
                  fontWeight="500"
                  color="brand.phanesGrey"
                  href={link?.link}
                  key={idx}
                  _hover={{
                    transform: "scale(1.15)",
                    color: "brand.phanes",
                    transition: "all 0.6s",
                  }}
                >
                  {link?.title}
                </Link>
              ))}
            </HStack>
            <HStack align="center" spacing="24px">
              {/* Icons */}
              {FooterIcons.map((link, idx) => (
                <Link
                  fontSize="24px"
                  color="brand.phanes"
                  href={link?.link}
                  key={idx}
                  _hover={{
                    transform: "scale(1.15)",
                    transition: "all 0.6s",
                    opacity: 0.8,
                  }}
                >
                  {link?.icon}
                </Link>
              ))}
            </HStack>
          </Flex>
          <Divider mb="26px" />
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "8px", md: "0" }}
            color="brand.phanesGrey"
            justify="space-between"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize="19px" fontWeight="500">
              Copyright © 2022 Phanes Network
            </Text>
            <Text fontSize="19px">
              All Rights Reserved |{" "}
              <Link color="brand.phanes" as="span" href="#">
                Terms and Conditions
              </Link>{" "}
              |{" "}
              <Link color="brand.phanes" as="span" href="#">
                Privacy Policy
              </Link>
            </Text>
          </Flex>
        </MaxWidth>
      </footer>
    </>
  );
};

export default Footer;
