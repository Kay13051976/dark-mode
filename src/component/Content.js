import img1 from "../image/istockphoto-1342229191-612x612.jpg";
import img2 from "../image/istockphoto-1355966798-1024x1024.jpg";
import { useContext } from "react";
import { ThemeContext } from "../App"



const Content = ()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <main className={theme==="dark"?"dark":"light"}>
            <div>
                <h1>Raikruyee Official</h1>
                <p>DarkMode Workshop</p>
            </div>
             <img src={theme==="dark"?img2:img1} alt="Logo"/> 
        </main>
    )
}
export default Content;
