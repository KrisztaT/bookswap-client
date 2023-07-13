import { render as rtlRender } from '@testing-library/react';
import { AuthContextProvider } from '../contexts/AuthContext'; // Import your AuthContextProvider

function render(component) {
  return rtlRender(
    <AuthContextProvider>
      {component}
    </AuthContextProvider>
  
  );
}

export * from '@testing-library/react';
export { render };
