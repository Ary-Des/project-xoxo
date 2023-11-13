import React from 'react'
import { Image, View } from 'react-native'
<Image
  source={require("../assets/crown-pic3.png")}
  style={{
    width:filterWidth,
    height:filterHeight,
    resizeMode:'contain',
    transform:[{rotate:`${transformAngle()}deg`}]
  }}/>