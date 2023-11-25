import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CharacterSelect from "../components/CharacterSelect";

describe("Testing CharacterSelect Component", () => {
  test("Should be able to render the character-grid tag id", () => {
    render(<CharacterSelect select={() => {}} />);

    expect(screen.getByTestId("character-grid")).toBeInTheDocument();
  });

  test("Should be able to render the character-grid tag id", () => {
    render(<CharacterSelect select={() => {}} />);

    // const handleClick = vi.fn();

    // console.log("handleClick", handleClick);
    // fireevent

    // expect(screen.getByTestId("character-grid")).toBeInTheDocument();
  });
});
