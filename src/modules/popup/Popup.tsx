import { Center, Dialog, Image, SimpleGrid, Text, Group } from "@mantine/core";
import { VegetableCardMini } from "../../components/VegetableCardMini";
import cartEmpty from "../../assets/img/cart_empty.svg";
import { VegetableData, TypesChange } from "../../types";
import style from "./popup.module.scss";

export const Popup = ({ opened, cartVegetables, setVegetables }: Props) => {
  return (
    <Dialog
      opened={opened}
      position={{ top: 70, right: 20 }}
      radius="xl"
      px={24}>
      {cartVegetables.length > 0 ? (
        <SimpleGrid cols={1}>
          {cartVegetables.map((el) => {
            return (
              <VegetableCardMini
                key={el.id}
                {...el}
                setVegetables={setVegetables}
              />
            );
          })}
          <Group justify="space-between" className={style.total}>
            <Text size="18px" fw={600}>
              Total
            </Text>
            <Text size="18px" fw={600}>
              $
              {cartVegetables.reduce(
                (acc, el) => acc + el.price * el.quantity,
                0
              )}
            </Text>
          </Group>
        </SimpleGrid>
      ) : (
        <>
          <Center mt={20}>
            <Image src={cartEmpty} alt="Cart empty" w={118} />
          </Center>
          <Center my={40}>
            <Text size="16px" c="myGrey.6">
              You cart is empty!
            </Text>
          </Center>
        </>
      )}
    </Dialog>
  );
};

interface Props {
  opened: boolean;
  cartVegetables: VegetableData[];
  setVegetables: (propChange: TypesChange, id: number) => void;
}
