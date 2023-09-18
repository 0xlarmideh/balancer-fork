import { Text } from "@chakra-ui/react";

interface ITextprops {
  text: string;
  color?: string;
  textAlign?: any
}

export const PageHeading = ({ text, color, textAlign }:ITextprops) => {
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

export const SmallText = ({ text, color, textAlign }:ITextprops) => {
  return (
    <Text
      color={color || "brand.lighterText"}
      fontSize="23px"
      fontWeight="500"
      textAlign={textAlign || "left"}
    >
      {text}
    </Text>
  );
};

export const MediumText = ({ text, color, textAlign }:ITextprops) => {
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
