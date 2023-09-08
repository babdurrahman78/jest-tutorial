import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "../page";

describe("Calculator", () => {
  let input1: HTMLElement;
  let input2: HTMLElement;
  let res: HTMLElement;
  let addButton: HTMLElement;
  let substractButton: HTMLElement;
  let multiplyButton: HTMLElement;
  let divideButton: HTMLElement;

  beforeEach(() => {
    render(<Home />);

    input1 = screen.getByTestId("num1");
    input2 = screen.getByTestId("num2");
    addButton = screen.getByTestId("add");
    substractButton = screen.getByTestId("subtract");
    multiplyButton = screen.getByTestId("multiply");
    divideButton = screen.getByTestId("divide");

    res = screen.getByTestId("result");
  });

  it("renders a calculator", () => {
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("adds numbers", () => {
    fireEvent.change(input1, { target: { value: 1 } });
    fireEvent.change(input2, { target: { value: 8 } });

    act(() => addButton.click());
    expect(res).toHaveTextContent("9");
  });

  it("substracts numbers", () => {
    fireEvent.change(input1, { target: { value: 10 } });
    fireEvent.change(input2, { target: { value: 8 } });

    act(() => substractButton.click());
    expect(res).toHaveTextContent("2");
  });
});
