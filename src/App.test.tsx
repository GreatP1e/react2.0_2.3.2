import { screen, cleanup, fireEvent } from "@testing-library/react";
import { render } from "./test/utils";
import App from "./App";
// @ts-ignore
import { server } from "./moks/server.js";
import { it, describe, beforeEach, afterAll, afterEach, expect } from "vitest";

describe("should render App", () => {
  beforeEach(() => {
    server.listen();
  });
  afterEach(() => {
    server.listen();
  });
  afterAll(() => {
    cleanup();
  });
  it("should render App", async () => {
    render(<App />);
    await screen.findAllByText("Brocolli");
  });

  it("should open popup", async () => {
    render(<App />);
    const btn = await screen.findByText(/Cart/i);
    fireEvent.click(btn);
    await screen.findByText("You cart is empty!");
  });

  it("should add vegetable to cart", async () => {
    render(<App />);
    const btnCart = await screen.findByText(/Cart/i);
    const [btnAddCart] = await screen.findAllByText(/Add to cart/i);
    fireEvent.click(btnCart);
    fireEvent.click(btnAddCart);
    await screen.findByText("Total");
  });

  it("should increment quantity", async () => {
    render(<App />);
    const [btnIncrement] = await screen.findAllByTestId(
      "quantity-increment-button"
    );
    const [quantity] = await screen.findAllByTestId("quantity-text");
    expect(quantity.textContent).toBe("1");
    fireEvent.click(btnIncrement);
    expect(quantity.textContent).toBe("2");
  });

  it("should decrement quantity", async () => {
    render(<App />);
    const [btnIncrement] = await screen.findAllByTestId(
      "quantity-increment-button"
    );
    const [btnDecrement] = await screen.findAllByTestId(
      "quantity-decrement-button"
    );
    const [quantity] = await screen.findAllByTestId("quantity-text");
    expect(quantity.textContent).toBe("1");
    fireEvent.click(btnIncrement);
    fireEvent.click(btnDecrement);
    expect(quantity.textContent).toBe("1");
  });
});
