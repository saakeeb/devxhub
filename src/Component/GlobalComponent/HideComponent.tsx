import React, { ComponentType, useEffect } from 'react';
import hideReactDevtools from 'react-devtools-inline';

const HideComponents = <Props extends object>(Component: ComponentType<Props>) => {
  const HiddenComponent: React.FC<Props> = (props) => {
    useEffect(() => {
      hideReactDevtools; // Hide the React element tree in devtools
    }, []);

    return <Component {...props} />;
  };

  HiddenComponent.displayName = 'Dev'; // Give the component name "Dev" in chrome dev tools in components tab

  return HiddenComponent;
};

export default HideComponents;
