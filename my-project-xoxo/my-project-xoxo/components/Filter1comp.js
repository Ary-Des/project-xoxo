const Filter1=({
  face:{
    bounds:{
      sizr:{width:faceWidth,height:faceHeight},
    },
    LEFT_EYE,
    RIGHT_EYE,
    NOSE_BASE,
  },
})=>{
  const transformAngle=(
    angleRad=Math.atan((RIGHT_EYE.y-LEFT_EYE.y)/(RIGHT_EYE.x-LEFT_EYE.x)))=>(angleRad*180)/Math.PI;
  
}