import { screen, cleanup, fireEvent } from "@testing-library/react";
import { render } from "./test/utils";
import App from "./App";
// @ts-ignore
import { server } from "./moks/server.js";
import { it, describe, beforeEach, afterEach, expect } from "vitest";

describe("should render App", () => {
  beforeEach(() => {
    server.listen();
    render(<App />);
  });
  afterEach(() => {
    server.listen();
    cleanup();
  });

  it("should render App", async () => {
    await screen.findAllByText("Catalog");
  });

  it("should open popup", async () => {
    const btn = screen.getByText("Cart");
    fireEvent.click(btn);
    await screen.findByText("You cart is empty!");
  });

  it("should add vegetable to cart", async () => {
    const btnCart = screen.getByText("Cart");
    const [btnAddCart] = await screen.findAllByText(/Add to cart/i);
    fireEvent.click(btnCart);
    fireEvent.click(btnAddCart);
    await screen.findByText("Total");
  });

  it("should increment quantity", async () => {
    const [btnIncrement] = await screen.findAllByTestId(
      "quantity-increment-button"
    );
    const [quantity] = await screen.findAllByTestId("quantity-text");
    expect(quantity.textContent).toBe("1");
    fireEvent.click(btnIncrement);
    expect(quantity.textContent).toBe("2");
  });

  it("should decrement quantity", async () => {
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
