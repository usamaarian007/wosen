import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const WordCloud = () => {
  // const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const tagCloudRef = useRef(null);
  //   ['Java', 'React', 'mongoDB', 'Express', 'NodeJS', 'Redux', 'HTML5', 'CSS3', 'JS', 'Flask', 'Flutter', 'Dart', 'FireBase', 'MySQl', 'C++', 'C', 'Pythons', 'Django', 'Git', 'Ubuntu' ]
  const data = [
    "JavaScript",
    "",
    "",
    "",
    "",
    "React",
    "",
    "",
    "",
    "",
    "mongo",
    "",
    "",
    "",
    "",
    "Express",
    "",
    "",
    "",
    "",
    "Node",
    "",
    "",
    "",
    "",
    "redux",
  ];
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const tagCloud = TagCloud(tagCloudRef.current);
    tagCloud.update(data, options);
    return () => {
      tagCloud.destroy();
    };
    // if (isLoading) {
    //   TagCloud(container, texts, options)
    //   console.log('i fire once')
    //   setLoad(false)
    // }
  },[])

  return(

<div className="main">
      <span className="content">
    <div ref={tagCloudRef} />

      </span>
    </div>
  ) 
  
}

export default WordCloud
