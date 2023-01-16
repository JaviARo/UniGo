import React from "react";
import { screen, render } from "@testing-library/react";

import Editor from "./Editor";
import FilledContent from "../components/FilledContent";

// beforeEach(() => render(<Editor />));
// const RouterWrapper = ({ children }) => (
//   <MemoryRouter>
//     {children}
//   </MemoryRouter>
// );

describe("Editor", () => {
  it("Must have FilledContent", () => {
    render(<FilledContent />);
    // expect(require('../components/FilledContent.js').mock.calls.lenght.toBe(1));
  });
});