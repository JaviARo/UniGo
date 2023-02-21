import React from "react";
import { screen, render } from "@testing-library/react";

import Home from "../pages/Home";

beforeEach(() => render(<Home/>));

describe("Home", () => {
  test("Debe tener botón de entrar", () => {
    expect(screen.queryByText(/Entrar/)).toBeInTheDocument();
  })
})