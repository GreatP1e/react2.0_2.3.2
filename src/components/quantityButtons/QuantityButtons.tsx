import { BackgroundImage, Button, Group, Text } from "@mantine/core";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import {
  quantityDecrement,
  quantityIncrement,
  useAppDispatch,
} from "../../reducer/reducer";

export const QuantityButtons = ({ quantity, id }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Group>
      <Button
        data-testid="quantity-decrement-button"
        p={0}
        w={30}
        h={30}
        radius="md"
        color="myGrey.3"
        onClick={() => dispatch(quantityDecrement(id))}>
        <BackgroundImage src={minus} w={12} h={2} />
      </Button>
      <Text data-testid="quantity-text">{quantity}</Text>
      <Button
        data-testid="quantity-increment-button"
        p={0}
        w={30}
        h={30}
        radius="md"
        color="myGrey.3"
        onClick={() => dispatch(quantityIncrement(id))}>
        <BackgroundImage src={plus} w={12} h={12} />
      </Button>
    </Group>
  );
};

interface Props {
  quantity: number;
  id: number;
}
