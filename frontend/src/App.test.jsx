import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders homepage hero", () => {
  render(<App />);
  expect(screen.getByText(/Elegance in Every Piece/i)).toBeInTheDocument();
});
