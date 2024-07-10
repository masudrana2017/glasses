import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <Header></Header>
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </>
    );
};

export default Root;