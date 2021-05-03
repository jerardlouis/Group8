import { render, screen } from "@testing-library/react";
import App from "./App";
import Main from "./Main";

test("renders loan book button", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Loan Book/i);
  expect(linkElement).toBeInTheDocument();
});