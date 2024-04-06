import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const dragonNews = useLoaderData()

    // console.log(dragonNews);

    return (
        <div className="font-poppins font-bold">
            <Header> </Header>
            <BrakingNews></BrakingNews>
            {/* <Navbar></Navbar> */}



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav> </LeftSideNav>
                </div>

                <div className="col-span-2">
                    <h3 className="text-4xl">News Coming soon</h3>

                    {
                        dragonNews.map(news => <NewsCard 
                            key={news._id}
                            news={news}
                        ></NewsCard>)
                    }


                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;