import React from 'react'
import data from './EightBallData'
import { useState } from 'react'


const def = { msg: "Think of a Question", color: "black"};

const Ball = () => {
    const rand = Math.floor(Math.random() * data.length)
    console.log(rand)

  const [ball, setball] = useState(def)
  const [checker, setChecker] = useState(0)
    let curr;
  if (checker % 2 != 0) {
    curr = def;
  } else {
    curr = data[rand]
  }

  return (
    <div onClick={() => {setball(curr); setChecker(checker + 1)}} style={{backgroundColor: ball.color, borderRadius: "50%", width: '300px', height: '300px', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                cursor: 'pointer'}}>
        <p>{ball.msg}</p>

    </div>
  )
}

export default Ball;