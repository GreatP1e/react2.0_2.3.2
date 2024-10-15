import { AppShell, Image, Button, Group, Flex } from "@mantine/core";
import logo from "../../assets/img/logo.svg";
import { Cart } from "../../shared/image";
import style from "./header.module.scss";

export const Header = ({ toggle, inCartCounter }: Props) => {
  return (
    <AppShell.Header>
      <Group justify="space-between" px={40} h="100%">
        <Image src={logo} h={33} w={209} alt="Logo" />
        <Button
          h={44}
          w={144}
          px={30}
          color="myGreen.5"
          radius="md"
          onClick={toggle}>
          <Flex gap={5} justify="center" align="center" wrap="nowrap">
            {!!inCartCounter && (
              <div className={style.cartCounter}>
                <span>{inCartCounter}</span>
              </div>
            )}
            Cart
            <Cart className={style.cart} />
          </Flex>
        </Button>
      </Group>
    </AppShell.Header>
  );
};

interface Props {
  toggle: () => void;
  inCartCounter: number;
}
