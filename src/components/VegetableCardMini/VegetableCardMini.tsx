import { Flex, Group, Image, Text } from "@mantine/core";
import { QuantityButtons } from "../../components/quantityButtons";
import { VegetableData, TypesChange } from "../../types";
import style from "./vegetableCardMini.module.scss";

export const VegetableCardMini = ({
  name,
  price,
  image,
  id,
  quantity,
  setVegetables,
}: Props) => {
  const [vegetablesName, weight] = name.split(" - ");
  return (
    <Flex wrap="nowrap" mb={20} gap={10} w="100%" className={style.card}>
      <Image w={64} h={64} src={image} alt={vegetablesName} />
      <Flex direction="column" gap={20} w="100%" className={style.line}>
        <Group>
          <Text size="18px" fw={600}>
            {vegetablesName}
          </Text>
          <Text size="14px" c="myGrey.6">
            {weight}
          </Text>
        </Group>
        <Group justify="space-between" w="100%">
          <Text size="18px" fw={600}>
            ${price}
          </Text>
          <QuantityButtons
            quantity={quantity}
            setVegetables={setVegetables}
            id={id}
          />
        </Group>
      </Flex>
    </Flex>
  );
};

interface Props extends VegetableData {
  setVegetables: (propChange: TypesChange, id: number) => void;
}
