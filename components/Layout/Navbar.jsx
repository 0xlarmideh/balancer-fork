import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PopoverArrow,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import PhanesLogo from "@/public/images/Phanes.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { FilledButton } from "../_common/Buttons";
import ETHLogo from "@/public/icons/eth.svg";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Pools",
    },
    {
      path: "/swap",
      title: "Swap",
    },
    { path: "/claim", title: "claim" },
    { path: "/portfolio", title: "portfolio" },
  ];
  const router = useRouter();
  const ConnectIcon = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            d="M14 6V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4M1 4C1 4.53043 1.21071 5.03914 1.58579 5.41421C1.96086 5.78929 2.46957 6 3 6H15C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7V10M1 4V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V14"
            stroke="#010D09"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 10V14H13C12.4696 14 11.9609 13.7893 11.5858 13.4142C11.2107 13.0391 11 12.5304 11 12C11 11.4696 11.2107 10.9609 11.5858 10.5858C11.9609 10.2107 12.4696 10 13 10H17Z"
            stroke="#010D09"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </>
    );
  };
  return (
    <nav>
      <Box py="40px" px="64px" bg="brand.lightBg">
        <Flex justify="space-between" align="center">
          <Image src={PhanesLogo} alt="Phanes Logo" />
          <HStack spacing={8} align="center">
            {routes.map((route, i) => (
              <Link key={i} href={route?.path}>
                <Text
                  textTransform="capitalize"
                  fontWeight="600"
                  fontSize="24px"
                  color={
                    router.asPath === route?.path ? "brand.phanes" : "white"
                  }
                >
                  {route?.title}
                </Text>
              </Link>
            ))}
          </HStack>
          <HStack spacing={2} align="center">
            <Menu>
              <MenuButton as={Button} variant="unstyled" bg="none">
                <HStack p={2} border="#1BD19C 1px solid" rounded="8px">
                  <Image src={ETHLogo} alt="eth logo" />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Wallet List</MenuItem>
              </MenuList>
            </Menu>
            <FilledButton
              text={"Connect Wallet"}
              leftIcon={<ConnectIcon />}
              onClick={() => {
                console.log("clicked");
              }}
            />
          </HStack>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
