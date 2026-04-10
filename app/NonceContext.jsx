import { createContext, useContext } from "react";

const NonceContext = createContext(undefined);

export function NonceProvider({ nonce, children }) {
  return (
    <NonceContext.Provider value={nonce}>
      {children}
    </NonceContext.Provider>
  );
}

export function useNonce() {
  return useContext(NonceContext);
}
