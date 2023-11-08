import { Button } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <Button onClick={onClick} colorScheme="teal" variant="solid">
      {children}
    </Button>
  );
};
