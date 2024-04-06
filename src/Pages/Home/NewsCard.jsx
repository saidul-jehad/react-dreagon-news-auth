import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, author, total_view, rating, thumbnail_url, image_url, details, _id } = news
    return (
        <div className="card bg-base-100 shadow-xl">

            <div className="card-body">

                <h2 className="text-xl font-semibold">{title}</h2>

                <figure><img src={image_url} alt="Thambnail" /></figure>

                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link
                        to={`/news/${_id}`}
                        className='btn-link btn hover:underline no-underline'>Read more...</Link></p> :
                        <p><details></details></p>
                }


                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};


NewsCard.propTypes = {
    news: PropTypes.object
}
export default NewsCard;