import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { ReactNode, ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";

function renderWithMantine(ui: ReactNode, options = {}) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
    ...options,
  });
}
export function render(ui: ReactElement, options = {}) {
  return renderWithMantine(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    ),
    ...options,
  });
}
