// 1. 스토리 자동생성을 위한 함수 모음

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

// 수정전 코드 (makeDisabledArgTypes)

// export function makeDisabledArgTypes(component) {
//   const propNames = Object.keys(component.props)
//   return propNames.reduce((disabledArgTypes, propName) => {
//     return { ...disabledArgTypes, [propName]: { table: { disable: true } } }
//   }, { default: { table: { disable: true } }, input: { table: { disable: true } } })
// }

 function makeDisabledArgTypes(component) {
  const propNames = Object.keys(component.props)
  let disabledArgTypes = { default: { table: { disable: true } },
                           input:   { table: { disable: true } } 
    }

  propNames.forEach((propName) => {
    disabledArgTypes[propName] = { table: { disable: true } };
  } )
  return disabledArgTypes
}


function makeDefaultStory(propName, component, initialTemplate) {
  const DefaultTemplate = makeDefaultTemplate(component, initialTemplate)
  const disabledArgTypes = makeDisabledArgTypes(component)

  const story = DefaultTemplate.bind({})
  
  // 스토리북 6버전에서 작동하던 storyName이 7버전에서 기능이 삭제된바 수정요구
  //story.storyName = `:${propName}` 
  story.argTypes = { ...disabledArgTypes, [propName]: { table: { disable: false } } }

  return story
}


// 수정전 코드 (automateStoriesFromProps)

// export default function automateStoriesFromProps(component, initialTemplate) {
//   const propNames = Object.keys(component.props)

//   const stories = propNames.reduce((stories, propName) => {
//     const story = makeDefaultStory(propName, component, initialTemplate)
//     return { ...stories, [propName]: story }
//   }, {})

//   const DefaultTemplate = makeDefaultTemplate(component, initialTemplate)
//   return { ...stories, Playground: DefaultTemplate.bind({}), DefaultTemplate }
// }



export default function automateStoriesFromProps(component, initialTemplate) {
  const propNames = Object.keys(component.props);

  let stories = {};

  propNames.forEach((propName) => {
    stories[propName] = makeDefaultStory(propName, component, initialTemplate);
  });

  const DefaultTemplate = makeDefaultTemplate(component, initialTemplate);
  stories.Playground = DefaultTemplate.bind({});

  return { ...stories, DefaultTemplate };
}

// ----------------------------------------------------
// 2. docs를 꾸미기 위해 사용 되는 함수 모음

export function makeDisabledArgs(component) {
  const propNames = Object.keys(component.props)
  return propNames.reduce((disabledArgs, propName) => {
    return { ...disabledArgs, [propName]: undefined }
  }, {})
}

export function disableArgs(stories, component) {
  const allDisabledArgs = makeDisabledArgs(component)
  stories.forEach(story => {
    story.args = {
      ...allDisabledArgs,
      ...story.args
    }
  })
}