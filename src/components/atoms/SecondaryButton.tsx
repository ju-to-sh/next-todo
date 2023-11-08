import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SecondaryButton = ({ children, onClick }: Props) => {
  return (
    <Button onClick={onClick} colorScheme="red" size="sm" variant="solid" ml="2">
      {children}
    </Button>
  );
};
