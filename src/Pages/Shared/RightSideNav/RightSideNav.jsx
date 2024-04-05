
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h3 className="text-3xl font-semibold"> Login With</h3>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>

                <button className="btn btn-outline w-full">
                    <FaGithub> </FaGithub>
                    Github
                </button>
            </div>

            <div className="p-4  mb-6 ">
                <h3 className="text-3xl font-semibold mb-6 "> Find Us ON</h3>
                <a href="" className="flex items-center p-3 border rounded-t-lg p-4l text-lg">
                    <FaFacebook></FaFacebook>
                    <span className="ml-3">FaceBook</span>
                </a>
                <a href="" className="flex items-center p-3 border-x p-4l text-lg">
                    <FaTwitter></FaTwitter>
                    <span className="ml-3">FaceBook</span>
                </a>
                <a href="" className="flex items-center p-3 border rounded-b-lg p-4l text-lg">
                    <FaInstagram></FaInstagram>
                    <span className="ml-3">FaceBook</span>
                </a>
            </div>

            {/* Q zone */}

            <div className="p-4 space-y-3 mb-6">
                <h3 className=" text-center text-3xl font-semibold"> Q Zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>



        </div>
    );
};

export default RightSideNav;