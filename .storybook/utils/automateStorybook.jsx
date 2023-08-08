// 사용하지 않는 Arg는 disable하기 위한 함수

export function disableUnusedArgs(stories, component) {
  const argsNames = Object.keys(component.props);

  // 모든 arg를 undefined로 만들어 비활성화하는 객체를 생성
  const disableAllArgs = argsNames.reduce((disabledArgs, argName) => {
    return { ...disabledArgs, [argName]: undefined };
  }, {});

  // 각 스토리에 비활성화된 arg들을 적용하고, 사용자가 설정한 인자를 추가로 적용시켜 합치는 작업
  stories.forEach((story) => {
    story.args = {
      ...disableAllArgs, // 비활성화된 arg들 추가
      ...story.args, // 사용자가 설정한 값 추가
    };
  });
}
