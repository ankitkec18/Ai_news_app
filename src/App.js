import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

 

const App = () => {

  const alanKey ='3ee3d66ffa1f505341dc33df8c284dd22e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand: ({command})=>{
        if(command=== 'testCommand'){
          alert('This code was executed');
        }
      }
    })
  },[])

  return (
   <h1>News App</h1>
  )
}

export default App