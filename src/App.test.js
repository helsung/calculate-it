import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => (wrapper = mount(<App />)));

describe("<App> component can validate user input: ", () => {
  it("invalid order of parenthesis will produce an alert", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value=")"]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="-"]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value="("]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
    // window.alert.mockClear() //global object and its calls will persist across tests??
  });

  it("Unbalanced parenthesis will produce an alert", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value="("]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="-"]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value="("]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
  });

  it("no more than two operators in a series will be supported...", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="+"]').simulate("click");
    wrapper.find('button[value="-"]').simulate("click");
    wrapper.find('button[value="+"]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
  });

  it("...however consecutive (-) operators are supported", () => {
    // console.log(wrapper.debug());
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="-"]').simulate("click");
    wrapper.find('button[value="-"]').simulate("click");
    wrapper.find('button[value="3"]').simulate("click");

    expect(wrapper.find("p").text()).toBe("2--3");
    wrapper.find('button[value="="]').simulate("click");
    expect(wrapper.find("p").text()).toBe("5");
  });
});

//backspace
describe("<App> component can handle various functionalities from <Button> component:", () => {
  it("backspace will delete one element at a time", () => {
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="x"]').simulate("click");
    wrapper.find('button[value="5"]').simulate("click");
    wrapper.find('button[value="DEL"]').simulate("click");
    expect(wrapper.find("p").text()).toBe("22x");
    wrapper.find('button[value="DEL"]').simulate("click");
    expect(wrapper.find("p").text()).toBe("22");
    wrapper.find('button[value="DEL"]').simulate("click");
    expect(wrapper.find("p").text()).toBe("");
  });

  it("AC will clear entire entry (All Clear)", () => {
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value="x"]').simulate("click");
    wrapper.find('button[value="5"]').simulate("click");
    expect(wrapper.find("p").text()).toBe("22x5");
    wrapper.find('button[value="AC"]').simulate("click");
    expect(wrapper.find("p").text()).toBe("");
  });
});

//calculate
