import { Text } from "./";
import { render } from "@testing-library/react";

describe("Render Text", () => {
  it("Should be Text exist", () => {
    const { getByTestId } = render(<Text />);
    const currentElement = getByTestId(`Text`);
    expect(currentElement).toBeTruthy();
  });
});
