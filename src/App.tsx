import { useEffect } from "react";
import { AppShell, Loader, MantineProvider, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./modules/header";
import { Popup } from "./modules/popup";
import { List } from "./modules/list";
import "@mantine/core/styles.css";
import { theme } from "./theme";
import { useAppDispatch, useAppSelector } from "./reducer/reducer";
import { fetchVegetables } from "./reducer/thunk";
import style from "./App.module.scss";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  const { vegetables, loading } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVegetables());
  }, []);

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
        />
        {loading ? (
          <Loader color="myGreen.5" mt={100} ml="50vw" />
        ) : (
          <AppShell.Main classNames={{ main: style.main }}>
            <Title order={1} mx={0} my={60}>
              Catalog
            </Title>
            <List vegetables={vegetables} />
          </AppShell.Main>
        )}
      </AppShell>
    </MantineProvider>
  );
}

export default App;
