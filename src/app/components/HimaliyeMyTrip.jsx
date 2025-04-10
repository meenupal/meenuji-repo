// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { MdOutlineLocalPhone, MdFavoriteBorder } from "react-icons/md";

// const tourPackages = [
//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "22,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//   },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "16,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal5.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "20,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal23.jpg",
  // },
  // {
  //   title: "Coorg Tour Package from Bangalore",
  //   nights: 2,
  //   days: 3,
  //   price: "23,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal24.jpg",
  // },
  // {
  //   title: "Uttarakhand Trail | Mussoorie",
  //   nights: 4,
  //   days: 5,
  //   price: "16,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal21.jpg",
  // },
  // {
  //   title: "Auli Rishikesh Tour From Delhi Jaipur",
  //   nights: 5,
  //   days: 6,
  //   price: "18,000",
  //   discount: "15%",
  //   tag: "Monsoon Sale!",
  //   image: "/deal22.jpg",
  // },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal6.jpg",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal14.jpg",
//   },
//   {
//     title: "Coorg Tour Package from Bangalore",
//     nights: 2,
//     days: 3,
//     price: "25,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal24.jpg",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal27.jpg",
//   },
//   {
//     title: "Auli Rishikesh Tour From Delhi Jaipur",
//     nights: 5,
//     days: 6,
//     price: "18,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal28.jpg",
//   },
//   {
//     title: "Uttarakhand Trail | Mussoorie",
//     nights: 4,
//     days: 5,
//     price: "16,000",
//     discount: "15%",
//     tag: "Monsoon Sale!",
//     image: "/deal29.jpg",
//   },
//   // ... add more packages as needed
// ];

// export default function HimaliyeMyTripCarousel() {
//   return (
//     <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white md:mx-24">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Check our Upcoming Treks
//       </h2>

//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 3 },
//         }}
//       >
//         {tourPackages.map((tour, index) => (
//           <SwiperSlide key={index}>
//             <div className="rounded-xl  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
//               <img
//                 src={tour.image}
//                 alt={tour.title}
//                 className="w-full h-56 sm:h-64 md:h-72 object-cover"
//               />
//               <div className="p-4 flex flex-col justify-between h-full">
//                 {/* Tour details */}
//                 <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
//                   <span>
//                     {tour.nights} Nights – {tour.days} Days
//                   </span>
//                   <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
//                     {tour.tag}
//                   </span>
//                 </div>

//                 {/* Tour title */}
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {tour.title}
//                 </h3>

//                 {/* Price + Save Row */}
//                 <div className="flex items-center justify-between mb-2 px-[2px]">
//                   <p className="text-orange-600 font-bold text-base pr-[18px]">
//                     Starting From ₹ {tour.price}
//                   </p>
//                   <button
//                     className="text-sm flex items-center gap-1 text-orange-500 hover:text-orange-600 transition pl-[18px]"
//                     title="Save this tour"
//                   >
//                     {/* <MdFavoriteBorder className="text-lg" /> */}
//                     <span className="inline-block text-[9px] font-semibold bg-green-100 text-green-700 px-1 py-1 rounded mb-2 mx-[18px]">
//                       SAVE UPTO {tour.discount}
//                     </span>
//                   </button>
//                 </div>

//                 {/* Discount Badge */}
//                 {/* <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded mb-3 mx-[18px]">
//                   SAVE UPTO {tour.discount}
//                 </span> */}

//                 {/* Call and Explore Buttons */}
//                 <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
//                   <button className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto">
//                     <MdOutlineLocalPhone />
//                   </button>
//                   <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-2 py-2 rounded-full w-full sm:w-auto">
//                     Explore Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineLocalPhone } from "react-icons/md";

const tourPackages = [
  {
    title: "Coorg Tour Package from Bangalore",
    nights: 2,
    days: 3,
    price: "22,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal27.jpg",
  },
  {
    title: "Uttarakhand Trail | Mussoorie",
    nights: 4,
    days: 5,
    price: "16,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal12.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal23.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "20,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal14.jpg",
  },
  {
    title: "Coorg Tour Package from Bangalore",
    nights: 2,
    days: 3,
    price: "23,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal24.jpg",
  },
  {
    title: "Uttarakhand Trail | Mussoorie",
    nights: 4,
    days: 5,
    price: "16,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal21.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal22.jpg",
  },
  {
    title: "Uttarakhand Trail | Mussoorie",
    nights: 4,
    days: 5,
    price: "16,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal5.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal29.jpg",
  },
  {
    title: "Uttarakhand Trail | Mussoorie",
    nights: 4,
    days: 5,
    price: "16,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal5.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal23.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "20,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal15.jpg",
  },
  {
    title: "Coorg Tour Package from Bangalore",
    nights: 2,
    days: 3,
    price: "23,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal24.jpg",
  },
  {
    title: "Uttarakhand Trail | Mussoorie",
    nights: 4,
    days: 5,
    price: "16,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal27.jpg",
  },
  {
    title: "Auli Rishikesh Tour From Delhi Jaipur",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "15%",
    tag: "Monsoon Sale!",
    image: "/deal37.jpg",
  },
  // ... other packages
];

export default function HimaliyeMyTripCarousel() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white md:mx-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Check our Upcoming Treks
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {tourPackages.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 ease-in-out">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {tour.nights} Nights – {tour.days} Days
                  </span>
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    {tour.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-orange-600 font-bold text-base">
                    Starting From ₹ {tour.price}
                  </p>
                  <span className="inline-block text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    SAVE UPTO {tour.discount}
                  </span>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
                  <button className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto">
                    <MdOutlineLocalPhone />
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

