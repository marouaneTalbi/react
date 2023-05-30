import { BallTriangle, CirclesWithBar,Oval, InfinitySpin, LineWave, MutatingDots, Vortex, Puff, RevolvingDot, Rings, RotatingSquare, RotatingLines, TailSpin, ThreeCircles, ThreeDots, Triangle, Watch, FallingLines, RotatingTriangles, Radio, ProgressBar, MagnifyingGlass, FidgetSpinner, Dna, Discuss, ColorRing, Comment, Blocks } from "react-loader-spinner";
import Bars from "react-loading-icons/dist/esm/components/bars";
import Circles from "react-loading-icons/dist/esm/components/circles";
import Grid from "react-loading-icons/dist/esm/components/grid";
import Hearts from "react-loading-icons/dist/esm/components/hearts";
// import Oval from "react-loading-icons/dist/esm/components/oval";

export default function Loader() {
  
    return (
        <>
            <div style={{
                position:'fixed',
                top:0,
                left:0,
                width:"100%",
                height:'100%',
                backgroundColor:'rgba(0, 0, 0, 0.5)',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                zIndex:'9999' 
            }}>        
            <ThreeCircles
                height="300"
                width="300"
                radius="9"
                color="white"
                ariaLabel="loading"
                // wrapperStyle
                // wrapperClass
            />
            </div>
        </>
  
    );
  }
  