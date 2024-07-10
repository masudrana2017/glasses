import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const user=useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>This is Home Page</h2>
            
        </div>
    );
};

export default Home;