import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName()} is mounted on componentDidMount()`);
    }
    componentWillUnmount() {
      console.log(`Component ${this.getComponentName()} is going to unmount on componentWillUnmount()`);
    }
    getComponentName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
     }
    render() {
       return <WrappedComponet {...this.props} />;
    }
    }
 WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.getComponentName()})`;

  return WithLoggingComponent;  
};
export default WithLogging;

