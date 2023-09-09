import { Button } from "@chakra-ui/react"

export const FilledButton = ({onClick, text, bgColor, className, leftIcon, px, isLoading}) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      bg={bgColor || "brand.phanes"}
      width="fit-content"
      color={'brand.darkText'}
      py="21px"
      px={px}
      rounded="8px"
      size="sm"
      fontSize='16px'
      className={className}
      isLoading={isLoading}
      leftIcon={leftIcon}
      spinnerPlacement="end"
      _hover={{
        bg: "blueAccentHover",
        opacity: "0.8",
        transition: "0.8s all ease",
      }}
    >
      {text}
    </Button>
  );
}

export const FilledFullButton = ({
  onClick,
  text,
  bgColor,
  className,
  color,
  width,
  isLoading,
}) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      bg={bgColor || "brand.phanes"}
      width={"100%"}
      py="10px"
      color={"brand.darkText"}
      fontSize="16px"
      rounded="8px"
      size="sm"
      className={className}
      isLoading={isLoading}
      spinnerPlacement="end"
      _hover={{
        bg: "brand.phanes",
        opacity: "0.8",
        transition: "0.8s all ease",
      }}
    >
      {text}
    </Button>
  );
};
