// 사용하지 않는 Arg는 disable하기 위한 함수

export function disableUnusedArgs(argsNames, usedArg) {
  return argsNames.reduce((disabledArgs, currentArg) => {
    if (currentArg === usedArg) return disabledArgs;
    return {
      ...disabledArgs,
      [currentArg]: { table: { disable: true } },
    };
  }, {});
}

export function automateStoriesFromProps(component) {
  const Playground = (args) => React.createElement(StyledButton, args);
  const argsNames = Object.keys(component.__docgenInfo.props);
  const stories = {};

  argsNames.forEach((argName) => {
    stories[argName] = Playground.bind({});
    stories[argName].argTypes = disableUnusedArgs(argsNames, argName);
  });

  stories['Playground'] = Playground;

  return stories;
}
