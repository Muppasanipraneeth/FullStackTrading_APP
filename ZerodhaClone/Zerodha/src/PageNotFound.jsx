import { Link } from "react-router-dom";
import kiran404 from "../src/assets/kiaan404.jpg"

const NotFound=()=>{
    return (<>
    <div className="flex ml-20 mt-20">
        <div className="m-10">
            <h1 className="text-2xl"> 404</h1>
            <p className="text-6xl font-normal mt-4">Kiaan couldn’t find that page</p>
            <p className="mt-10 text-2xl font-light">We couldn’t find the page you were looking for. <span  className="text-blue-600"><Link >Visit Zerodha’s home page</Link></span></p>

        </div>
        <div className="mr-40 p-5">
            <img src={kiran404} alt="404"></img>
        </div>
<div>

</div>

    </div>
    </>)
}
export default NotFound;