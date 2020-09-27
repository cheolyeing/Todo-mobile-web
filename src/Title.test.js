import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

describe("<Title />", () => {
  it("matches snapshot", () => {
    const utils = render(<Title />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Title />);
    utils.getByText("THIS WEEK");
    utils.getByText("신나는 일주일을 계획합시다!");
  });
});
