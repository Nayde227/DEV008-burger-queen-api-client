import { render, screen } from "@testing-library/react";

describe("Examples", () => {
  it("should should be a teapot", () => {
    expect(1).toBe(1);
  });

  it("should render Home", () => {
    render(<div>prueba</div>);
    screen.debug();
  });
});