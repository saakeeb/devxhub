import React, { ComponentType, useEffect } from 'react';

const HideComponents = <Props extends object>(Component: ComponentType<Props>) => {
  const HiddenComponent: React.FC<Props> = (props) => {
    useEffect(() => {
      const devToolsStyle = `
        visibility: hidden !important;
        pointer-events: none !important;
        display: none !important;
      `;
      const devToolsMetaTag = document.createElement('meta');
      devToolsMetaTag.name = 'react-devtools';
      devToolsMetaTag.content = 'no-display';
      document.head.appendChild(devToolsMetaTag);
      const devToolsRoot = document.createElement('div');
      devToolsRoot.style.cssText = devToolsStyle;
      document.body.appendChild(devToolsRoot);

      return () => {
        document.head.removeChild(devToolsMetaTag);
        document.body.removeChild(devToolsRoot);
      };
    }, []);

    return <Component {...props} />;
  };

  HiddenComponent.displayName = 'Dev'; // Give the component name "Dev" in Chrome DevTools in the components tab

  return HiddenComponent;
};

export default HideComponents;
