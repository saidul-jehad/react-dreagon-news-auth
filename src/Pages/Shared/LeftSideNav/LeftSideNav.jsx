import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className="p-4">
            <h3>All Category : {categories.length}</h3>
            <div className="space-y-4 mt-7 ml-4">
                {
                    categories.map(category => <NavLink
                        className='block'
                        key={category.id}
                        to={`/category/${category.id}`}

                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;