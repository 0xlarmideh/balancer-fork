import { Button } from "@chakra-ui/react"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IButtonProps {
  onClick?: () => void;
  text: string;
  bgColor?: string;
  className?: string;
  color?: string;
  width?: any;
  isLoading?: boolean;
  leftIcon?: ReactJSXElement;
  px?: any;
}

export const FilledButton = ({onClick, text, bgColor, className, leftIcon, px, isLoading}:IButtonProps) => {
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
  isLoading,
}:IButtonProps) => {
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
type IModalCTABtn = {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
};
export const ModalCTABtn = ({
  onClick,
  text,
  disabled
}: IModalCTABtn) => {
  return (<Button
    border="1px solid #1bd19c"
    borderRadius="8px"
    bg="#1BD19C"
    py="27px"
    fontSize="23px"
    fontWeight="600"
    color="white"
    w="100%"
    mt="24px"
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </Button>)
};