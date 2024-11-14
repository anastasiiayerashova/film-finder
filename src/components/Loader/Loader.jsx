import { ThreeCircles } from "react-loader-spinner"
import s from './Loader.module.css';
export default function Loader() {
    return (
        <ThreeCircles
            color="#2dd0e2"
            visible={true}
  height="80"
  width="80"
  ariaLabel="three-circles-loading"    
/>
    )
 }