import { BackgroundImage, Button, Group, Text } from "@mantine/core";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { TypesChange } from "../../types";

export const QuantityButtons = ({ quantity, setVegetables, id }: Props) => {
  return (
    <Group>
      <Button
        p={0}
        w={30}
        h={30}
        radius="md"
        color="myGrey.3"
        onClick={() => setVegetables(TypesChange.QUANTITY_DECREMENT, id)}>
        <BackgroundImage src={minus} w={12} h={2} />
      </Button>
      <Text>{quantity}</Text>
      <Button
        p={0}
        w={30}
        h={30}
        radius="md"
        color="myGrey.3"
        onClick={() => setVegetables(TypesChange.QUANTITY_INCREMENT, id)}>
        <BackgroundImage src={plus} w={12} h={12} />
      </Button>
    </Group>
  );
};

interface Props {
  quantity: number;
  id: number;
  setVegetables: (propChange: TypesChange, id: number) => void;
}
