import 'aframe'
import classroomImg from '../assets/classroom.jpeg'

const ARScene = () => {
  return (
    <a-scene
      xr-mode="ar"
      vr-mode-ui="enabled: true"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '100%' }}
    >
      <a-assets>
        <img id="classroom" src={classroomImg} alt="classroom background" crossOrigin="anonymous" />
      </a-assets>

      {/* Box as requested in Step 4/5 */}
      <a-box 
        id="box" 
        position="0 1.2 -0.8" 
        color="#4CC3D9" 
        scale="0.3 0.3 0.3"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 8000; easing: easeInOutSine"
      ></a-box>

      {/* Classroom background as requested in the extension */}
      <a-sky src="#classroom"></a-sky>

      <a-entity camera position="0 1.6 0" look-controls></a-entity>
    </a-scene>
  )
}

export default ARScene
