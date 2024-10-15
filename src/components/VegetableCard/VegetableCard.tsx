import { Button, Card, Group, Image, Text } from "@mantine/core";
import { Cart } from "../../shared/image";
import { QuantityButtons } from "../../components/quantityButtons";
import style from "./vegetableCard.module.scss";
import { VegetableData, TypesChange } from "../../types";

export const VegetableCard = ({
  name,
  price,
  image,
  id,
  quantity,
  setVegetables,
}: Props) => {
  const [vegetablesName, weight] = name.split(" - ");
  return (
    <Card>
      <Image w="100%" src={image} alt={vegetablesName} />
      <Group justify="space-between">
        <Group>
          <Text size="18px" fw={600}>
            {vegetablesName}
          </Text>
          <Text size="14px" c="myGrey.6">
            {weight}
          </Text>
        </Group>
        <QuantityButtons
          quantity={quantity}
          setVegetables={setVegetables}
          id={id}
        />
      </Group>
      <Group justify="space-between" mt={20}>
        <Text size="18px" fw={600}>
          ${price}
        </Text>
        <Button
          radius="md"
          w={204}
          h={44}
          color="myGreen.1"
          onClick={() => setVegetables(TypesChange.IN_CART, id)}>
          <Group justify="space-around" w="100%" h="100%">
            <Text size="16px" fw={600} c="myGreen.7">
              Add to cart
            </Text>
            <Cart className={style.cart} />
          </Group>
        </Button>
      </Group>
    </Card>
  );
};

interface Props extends VegetableData {
  setVegetables: (propChange: TypesChange, id: number) => void;
}
