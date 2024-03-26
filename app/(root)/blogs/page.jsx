"use client";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Blog from "@/components/blog";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import FeaturedSide from "@/components/featuredside";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Law from "@/components/law";

export default function () {
  const onPageChange = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-gray-50 pt-32 pb-12">
      <div className="container mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog</h2>
      </div>
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2 space-y-6">
          <div className="space-y-4">
            <Blog
              thumb="/images/blogs/thumb1.jpg"
              title="Redfin Ranks the Most Competitive Neighborhoods of 2022"
              content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus."
              username="Ali Tufan"
              date="7 August 2022"
              avatar="/images/blogs/user1.png"
            />
            <Blog
              thumb="/images/blogs/thumb1.jpg"
              title="Redfin Ranks the Most Competitive Neighborhoods of 2022"
              content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus."
              username="Ali Tufan"
              date="7 August 2022"
              avatar="/images/blogs/user1.png"
            />
            <Blog
              thumb="/images/blogs/thumb1.jpg"
              title="Redfin Ranks the Most Competitive Neighborhoods of 2022"
              content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus."
              username="Ali Tufan"
              date="7 August 2022"
              avatar="/images/blogs/user1.png"
            />
            <ReactPaginate
              pageCount={7}
              previousLabel={<IconArrowLeft size={16} />}
              nextLabel={<IconArrowRight size={16} />}
              onPageChange={onPageChange}
              className="col-span-2 own-pagination space-x-2 text-center"
            />
          </div>
        </div>
        <div className="hidden md:block space-y-6">
          <div className="bg-white p-6 rounded-md border shadow-sm">
            <input
              className="border rounded-md w-full py-1 px-4"
              placeholder="Search Here"
            />
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Categories Property</h2>
            <div>
              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-blue-400 text-sm py-1 hover:text-blue-600"
                >
                  Apartment
                </Link>
                <div className="text-xs">6 properties</div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-blue-400 text-sm py-1 hover:text-blue-600"
                >
                  Condo
                </Link>
                <div className="text-xs">9 properties</div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-blue-400 text-sm py-1 hover:text-blue-600"
                >
                  Family House
                </Link>
                <div className="text-xs">12 properties</div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-blue-400 text-sm py-1 hover:text-blue-600"
                >
                  Modern Villa
                </Link>
                <div className="text-xs">3 properties</div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-blue-400 text-sm py-1 hover:text-blue-600"
                >
                  Town House
                </Link>
                <div className="text-xs">12 properties</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Featured Properties</h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={10}
              centeredSlides
              pagination={{ clickable: true }}
              style={{ paddingBottom: 10 }}
              autoplay
              loop
            >
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb1.jpg"
                  type="Aprtment"
                  price={1500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb2.jpg"
                  type="Bungalow"
                  price={1800}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb3.jpg"
                  type="Bungalow"
                  price={2700}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb1.jpg"
                  type="Aprtment"
                  price={1600}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb2.jpg"
                  type="Bungalow"
                  price={1200}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedSide
                  thumb="/images/featureds/thumb3.jpg"
                  type="Bungalow"
                  price={3200}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Tags</h2>
            <div className="flex flex-wrap text-xs gap-2">
              <div className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                Apartment
              </div>
              <div className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                Real Estate
              </div>
              <div className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                Estate
              </div>
              <div className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                Luxury
              </div>
              <div className="py-2 px-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                Real
              </div>
            </div>
          </div>
        </div>
      </div>
      <Law />
    </div>
  );
}
