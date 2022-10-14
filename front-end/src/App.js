
import style from './App.module.css';
import {useEffect,useState} from "react"
import Navbar from './navbar/navbar';

function App() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")

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
    <section className={style.mainBackground} style={{minWidth:`${width}px`, minHeight:`${height}px`}}>
      <Navbar/>
    </section>
  );
}

export default App;
