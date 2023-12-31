import { Button } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const PrimaryButton = ({ children, onClick }: Props) => {
  return (
    <Button onClick={onClick} colorScheme="messenger" size="sm" variant="solid">
      {children}
    </Button>
  );
};
