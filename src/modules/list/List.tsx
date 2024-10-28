import { SimpleGrid } from "@mantine/core";
import { VegetableCard } from "../../components/VegetableCard";
import { VegetableData } from "../../types";

export const List = ({ vegetables }: Props) => {
  return (
    <SimpleGrid cols={4}>
      {vegetables.map((el) => {
        return <VegetableCard key={el.id} {...el} />;
      })}
    </SimpleGrid>
  );
};

interface Props {
  vegetables: VegetableData[];
}
