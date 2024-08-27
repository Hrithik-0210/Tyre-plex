import React from "react";
import { LiaUserSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    reviewId: "1",
    reviewerName: "John Doe",
    rating: 5,
    reviewText:
      "Excellent service and knowledgeable staff. Highly recommend! From the moment I walked in, the staff was very welcoming and helped me find the right tires for my car. The installation was quick and professional. They even checked my alignment and offered a free tire rotation. Great experience overall!",
    reviewDate: "2024-08-15",
  },
  {
    reviewId: "2",
    reviewerName: "Jane Smith",
    rating: 4,
    reviewText:
      "Great selection of tires and good service, but the wait time was a bit long. I was impressed with their range of tire options and the staff’s expertise. However, even with an appointment, I had to wait about 45 minutes for my installation. The quality of the work was excellent, but plan ahead if you're in a hurry.",
    reviewDate: "2024-08-20",
  },
  {
    reviewId: "3",
    reviewerName: "Emily Johnson",
    rating: 3,
    reviewText:
      "The tires were fine, but the store could use some improvement. The selection was adequate, but the service was a bit disorganized. I had to wait a long time despite having an appointment, and the staff seemed overwhelmed. The tire installation itself was good, but the overall experience left something to be desired.",
    reviewDate: "2024-08-18",
  },
  {
    reviewId: "4",
    reviewerName: "Michael Brown",
    rating: 2,
    reviewText:
      "Not very impressed. The service was slow and the staff seemed untrained. I experienced significant delays in both purchasing and installing my tires. The staff lacked knowledge and didn't offer much assistance beyond basic information. I expected better service and a smoother process. I will consider other options in the future.",
    reviewDate: "2024-08-22",
  },
  {
    reviewId: "5",
    reviewerName: "Sarah Wilson",
    rating: 4,
    reviewText:
      "Good quality tires and fair prices, but service could be improved. The tires themselves are of high quality, and the prices were competitive. However, the customer service was not as attentive as I had hoped. The staff was helpful once approached, but they could be more proactive in assisting customers.",
    reviewDate: "2024-08-25",
  },
  {
    reviewId: "6",
    reviewerName: "David Lee",
    rating: 4,
    reviewText:
      "Great experience with tire purchase and installation. The store offers a wide variety of tires and the prices are very reasonable. The staff was friendly and efficient, although there was a bit of a wait. The installation was done well, and they even provided a free alignment check. I would recommend this place for its value and service.",
    reviewDate: "2024-08-19",
  },
  {
    reviewId: "7",
    reviewerName: "Olivia Martinez",
    rating: 5,
    reviewText:
      "Exceptional service and top-notch tires. Everything was perfect from the moment I entered the store. The staff was very professional and helped me choose the best tires for my vehicle. The installation was swift and done with great care. They even offered a complimentary tire rotation. I am thoroughly satisfied with the entire experience.",
    reviewDate: "2024-08-21",
  },
  {
    reviewId: "8",
    reviewerName: "Daniel Harris",
    rating: 3,
    reviewText:
      "Decent store, but I’ve had better experiences. The selection of tires was alright, but the service was inconsistent. The staff was friendly, but the process was slower than expected. I had a few issues with my appointment time and the installation took longer than anticipated. It’s an average place for tire needs, but there are better options out there.",
    reviewDate: "2024-08-23",
  },
];

const renderStars = (rating) => {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "★"; // Full star
    } else {
      stars += "☆"; // Empty star
    }
  }
  return stars;
};

const GoogleReview = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="google-reviews">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.reviewId} className="review m-1 p-2 h-60">
            <div className="mx-2 border p-2 rounded-lg h-full ">
              <div className="flex justify-start items-center gap-2">
                <LiaUserSolid className="w-8 h-8 border rounded-full bg-gray-300" />
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium">{review.reviewerName}</h2>
                  <span className="text-xs text-gray-500">
                    {review.reviewDate}
                  </span>
                </div>
              </div>
              <div className="rating text-yellow-500">
                {renderStars(review.rating)}
              </div>
              <p className="text-sm">{review.reviewText}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GoogleReview;
