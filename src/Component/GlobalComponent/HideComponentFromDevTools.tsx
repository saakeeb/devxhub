import React, { ComponentType, useEffect } from 'react';
import hideReactDevtools from 'react-devtools-inline';

const HideComponentFromDevTools = <Props extends object>(Component: ComponentType<Props>) => {
  const HiddenComponent: React.FC<Props> = (props) => {
    useEffect(() => {
      hideReactDevtools; // Hide the React element tree in devtools
    }, []);

    return <Component {...props} />;
  };

  HiddenComponent.displayName = 'Dev';

  return HiddenComponent;
};

export default HideComponentFromDevTools;
