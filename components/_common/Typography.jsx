import { Text } from "@chakra-ui/react";

export const PageHeading = ({ text, color, textAlign }) => {
  return (
    <Text
      as="h1"
      textAlign={textAlign || "left"}
      color={color || "darkText"}
      fontSize="28px"
      fontStyle="normal"
      fontWeight="500"
      mb="18px"
    >
      {text}
    </Text>
  );
};

export const SmallText = ({ text, color, textAlign }) => {
  return (
    <Text
      color={color || "brand.lighterText"}
      fontSize="23px"
      fontWeight="400"
      textAlign={textAlign || "left"}
    >
      {text}
    </Text>
  );
};

export const MediumText = ({ text, color, textAlign }) => {
  return (
    <Text
      textAlign={textAlign || "left"}
      color={color || "brand.lightText"}
      fontSize="25px"
      fontWeight="400"
    >
      {text}
    </Text>
  );
};
