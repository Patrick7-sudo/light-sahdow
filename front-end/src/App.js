
import style from './App.module.css';
import {useEffect,useState} from "react"
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

function App() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [mode, setMode] = useState("")

  function modeSetting(){
    if(mode){
      setMode(false)
    }else{
      setMode(true)
    }
    console.log(mode)
  }

  useEffect(()=>{
    function autoWidth(){
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize",autoWidth)

    autoWidth()

  },[width])

   useEffect(() => {
     function autoHeight() {
       setHeight(window.innerHeight);
     }
     window.addEventListener("resize", autoHeight);

     autoHeight();
   }, [height]);
  
  return (
    <section className={`${style.mainBackground} ${mode?style.darkBackground:style.lightBackground}`} style={{minWidth:`${width}px`, minHeight:`${height}px`}}>
      <Navbar mode={mode}/>
      <Footer modeSetting={modeSetting} mode={mode}/>
    </section>
  );
}

export default App;
