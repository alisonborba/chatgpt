import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("Testing App Component", () => {
  test("Should be able to see the initials texts on screen", () => {
    const { getByText } = render(<App />);

    expect(getByText("Ask the Masters")).toBeInTheDocument();
    expect(getByText("Choose one and make any question")).toBeInTheDocument();
  });

  test("Should be able to render the initial PT flag", () => {
    const { getByAltText } = render(<App />);

    expect(getByAltText("pt-flag")).toBeInTheDocument();
  });

  test("Should be able to click the language button and translate the page", () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByTestId("lang-flag");
    fireEvent.click(button);
    expect(getByText("Pergunte aos mestres")).toBeInTheDocument();
    expect(
      getByText("Escolha um e faça qualquer pergunta")
    ).toBeInTheDocument();
  });
});
