import {
  Box,
  Drawer,
  Divider,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FilledButton } from "../_common/Buttons";

interface IMobileProps {
  isOpen: boolean;
  onClose: () => void;
  data: {title: string, path: string}[]
}
const MobileNav = ({ isOpen, onClose, data }: IMobileProps) => {
  const router = useRouter()
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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        boxShadow="12px 12px 64px 0px rgba(16, 123, 92, 0.60)"
        maxW="90%"
        bg="#001610"
      >
        <DrawerCloseButton
          color="brand.lightText"
          fontSize="27px"
          top="1.8rem"
          right="1.2rem"
        />
        <DrawerBody mt="6rem">
          {/* <VStack
            display={{ base: "none", md: "flex" }}
            spacing={2}
            align="center"
          > */}
          {data.map((route, i) => (
            <Box key={i}>
              <Link href={route?.path}>
                <Text
                  textTransform="capitalize"
                  fontWeight="600"
                  fontSize="21px"
                  color={
                    router.asPath === route?.path ? "brand.phanes" : "white"
                  }
                  _hover={{
                    transform: "scaleX(1.05)",
                    opacity: 0.85,
                    transition: "all 0.6s",
                  }}
                >
                  {route?.title}
                </Text>
              </Link>

              <Divider color="brand.lightText" my="18px" />
            </Box>
          ))}
          <FilledButton
            text={"Connect Wallet"}
            leftIcon={<ConnectIcon />}
            onClick={() => {
              console.log("clicked");
            }}
          />
          {/* </VStack> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
