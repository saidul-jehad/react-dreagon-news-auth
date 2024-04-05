import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";

const Home = () => {
    return (
        <div className="font-poppins font-bold">
            <Header> </Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav> </LeftSideNav>
                </div>

                <div className="col-span-2 border">
                    <h3 className="text-4xl">News Coming soon</h3>
                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;