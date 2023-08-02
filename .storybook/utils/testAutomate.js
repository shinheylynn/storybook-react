function makeDefaultTemplate(component, initialTemplate) {
    const componentName = component.__docgenInfo.displayName
    return (args) => ({
      components: { [componentName]: component },
      setup() {
        return { args }
      },
      template: initialTemplate
    })
  }

  export const disableArgs = (stories, component) => {
    const makeDisabledArgs = (component) => {
      const propNames = Object.keys(component.props);
      const disabledArgs = {};
  
      propNames.forEach((propName) => {
        disabledArgs[propName] = undefined;
      });
  
      return disabledArgs;
    };
  
    const allDisabledArgs = makeDisabledArgs(component);
  
    return stories.map((story) => ({
      ...story,
      args: {
        ...allDisabledArgs,
        ...story.args,
      },
    }));
  };