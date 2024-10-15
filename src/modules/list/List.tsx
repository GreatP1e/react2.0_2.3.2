import { SimpleGrid } from "@mantine/core";
import { VegetableCard } from "../../components/VegetableCard";
import { VegetableData, TypesChange } from "../../types";

export const List = ({ vegetables, setVegetables }: Props) => {
  return (
    <SimpleGrid cols={4}>
      {vegetables.map((el) => {
        return (
          <VegetableCard key={el.id} {...el} setVegetables={setVegetables} />
        );
      })}
    </SimpleGrid>
  );
};

interface Props {
  vegetables: VegetableData[];
  setVegetables: (propChange: TypesChange, id: number) => void;
}
