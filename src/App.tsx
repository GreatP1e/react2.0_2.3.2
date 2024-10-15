import { useEffect, useState } from "react";
import {
  AppShell,
  createTheme,
  Loader,
  MantineProvider,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./modules/header";
import { Popup } from "./modules/popup";
import { List } from "./modules/list";
import { myGreen, myGrey } from "./constants/constTheme";
import { getVegetable } from "./api/getVegetable";
import { TypesChange, VegetableData } from "./types";
import "@mantine/core/styles.css";
import style from "./App.module.scss";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  const [vegetables, setVegetables] = useState<VegetableData[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getVegetable()
      .then((veg) => {
        const vegetablesData = veg.map((el) => ({
          ...el,
          quantity: 1,
          inCart: false,
        }));
        setVegetables(vegetablesData);
        setLoader(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const setVegetablesHandler = (propChange: TypesChange, id: number) => {
    switch (propChange) {
      case TypesChange.QUANTITY_INCREMENT:
        setVegetables((prevState) => {
          return prevState.map((el) => {
            if (el.id === id) {
              return { ...el, quantity: el.quantity + 1 };
            }
            return el;
          });
        });
        break;
      case TypesChange.QUANTITY_DECREMENT:
        setVegetables((prevState) => {
          return prevState.map((el) => {
            if (el.id === id && el.quantity > 1) {
              return { ...el, quantity: el.quantity - 1 };
            }
            return el;
          });
        });
        break;
      case TypesChange.IN_CART:
        setVegetables((prevState) => {
          return prevState.map((el) => {
            if (el.id === id) {
              return { ...el, inCart: !el.inCart };
            }
            return el;
          });
        });
    }
  };
  const theme = createTheme({
    headings: {
      sizes: {
        h1: {
          fontWeight: "600",
          fontSize: "32px",
        },
      },
    },
    colors: {
      myGreen,
      myGrey,
    },
    radius: {
      md: "8px",
      xl: "16px",
    },
  });
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <Header
          toggle={toggle}
          inCartCounter={vegetables.filter((el) => el.inCart).length}
        />
        <Popup
          opened={opened}
          cartVegetables={vegetables.filter((el) => el.inCart)}
          setVegetables={setVegetablesHandler}
        />
        {loader ? (
          <Loader color="myGreen.5" />
        ) : (
          <AppShell.Main classNames={{ main: style.main }}>
            <Title order={1} mx={0} my={60}>
              Catalog
            </Title>
            <List
              vegetables={vegetables}
              setVegetables={setVegetablesHandler}
            />
          </AppShell.Main>
        )}
      </AppShell>
    </MantineProvider>
  );
}

export default App;
