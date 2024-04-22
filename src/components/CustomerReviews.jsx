import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (<section className="max-container">
    <h3 className="font-montserrat text-4xl text-bold text-center">
        What Our <span className="text-coral-red "> Customers </span> are Say ?
    </h3>
    <p className="info-text m-auto mt-4 max-w-lg text-center">Hear Genuine Stories from our satisfied Customers about their exceptional Experiences with US. </p>
    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
            <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback = {review.feedback} className="flex-col gap-2" />
        ))}
    </div>
  </section>)
}

export default CustomerReviews