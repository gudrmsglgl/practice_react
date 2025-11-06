import React from "react";

export const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponent, [Provider, props = {}]) => {
        return ({ children }) => (
            <AccumulatedComponent>
                <Provider {...props}>{children}</Provider>
            </AccumulatedComponent>
        );
    },
    initialComponent
   );
};