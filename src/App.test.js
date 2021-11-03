import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

configure({ adapter: new Adapter() });

describe("<App> component can validate user input: ", () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<App />)));

  it("valid inputs will produce a result", () => {
    // console.log(wrapper.debug());
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value=" - "]').simulate("click");
    wrapper.find('button[value=" - "]').simulate("click");
    wrapper.find('button[value="3"]').simulate("click");

    expect(wrapper.find("p").text()).toBe("2 -  - 3");
    wrapper.find('button[value="="]').simulate("click");
    expect(wrapper.find("p").text()).toBe("5");
  });

  it("invalid order of parenthesis will produce an alert", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value=" ) "]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value=" - "]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value=" ( "]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
    // window.alert.mockClear() //global object and its calls will persist across tests??
  });

  it("Unbalanced parenthesis will produce an alert", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value=" ( "]').simulate("click");
    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value=" - "]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value=" ( "]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
  });

  it("no more than two operators in a series will be supported", () => {
    window.alert = jest.fn(); // mock alert method within testing blackbox

    wrapper.find('button[value="2"]').simulate("click");
    wrapper.find('button[value=" + "]').simulate("click");
    wrapper.find('button[value=" - "]').simulate("click");
    wrapper.find('button[value=" + "]').simulate("click");
    wrapper.find('button[value="1"]').simulate("click");
    wrapper.find('button[value="="]').simulate("click");

    expect(window.alert).toHaveBeenCalledWith(
      "Please enter a valid expression!"
    );
  });

  //calculate

  //backspakce

  //clear all
});
