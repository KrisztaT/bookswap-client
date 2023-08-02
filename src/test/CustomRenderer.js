import { render as rtlRender } from "@testing-library/react";
import { AuthContextProvider } from "../contexts/AuthContext";

//custom renderer to provide AuthContextProvider to the components tested
function render(component) {
  return rtlRender(<AuthContextProvider>{component}</AuthContextProvider>);
}

export * from "@testing-library/react";
export { render };
