"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import {
  IconEye,
  IconMessage,
  IconCalendar,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandDribbble,
  IconStarFilled,
  IconStarHalfFilled,
  IconStar,
} from "@tabler/icons-react";
import FeaturedSide from "@/components/featuredside";
import Blog from "@/components/blog";
import Law from "@/components/law";

export default function () {
  return (
    <div className="bg-gray-50 pt-32 pb-12">
      <div className="container mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog</h2>
      </div>
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2 space-y-6">
          <div className="bg-white px-6 py-12 border rounded-md shadow-sm">
            <h2 className="text-xl font-bold">
              Redfin Ranks the Most Competitive Neighborhoods of 2022
            </h2>
            <div className="grid grid-cols-4 text-sm gap-4 py-6">
              <Link
                href="/agent/detail"
                className="flex items-center gap-2 hover:text-[#B63437]"
              >
                <img
                  src="/images/blogs/user1.png"
                  alt="avatar"
                  width="36px"
                  className="rounded-full"
                />
                <p>Ali Tufan</p>
              </Link>
              <div className="flex items-center gap-1">
                <IconCalendar size={24} style={{ padding: 1 }} />
                <p>1/16/2020</p>
              </div>
              <div className="flex items-center gap-1">
                <IconEye size={24} style={{ padding: 1 }} />
                341 views
              </div>
              <div className="flex items-center gap-1">
                <IconMessage size={24} style={{ padding: 1 }} />
                15
              </div>
            </div>
            <div className="mb-4">
              <img
                src="/images/blog/thumb1.jpg"
                alt="thumb"
                className="w-full rounded-md"
              />
            </div>
            <div className="space-y-4 mb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
                hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
                Quisque bibendum orci ac nibh facilisis, at malesuada orci
                congue. Nullam tempus sollicitudin cursus. Ut et adipiscing
                erat. Curabitur this is a text link libero tempus congue.
              </p>
              <p>
                Duis mattis laoreet neque, et ornare neque sollicitudin at.
                Proin sagittis dolor sed mi elementum pretium. Donec et justo
                ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Integer tristique elit lobortis purus
                bibendum, quis dictum metus mattis. Phasellus posuere felis sed
                eros porttitor mattis. Curabitur massa magna, tempor in blandit
                id, porta in ligula. Aliquam laoreet nisl massa, at interdum
                mauris sollicitudin et.
              </p>
              <p className="font-bold text-lg">
                Housing Markets That Changed the Most This Decade
              </p>
              <p>
                Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat
                eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
                Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
                interdum vestibulum. Aenean gravida mi non aliquet porttitor.
                Praesent dapibus, nisi a faucibus tincidunt, quam dolor
                condimentum metus, in convallis libero ligula ut eros.
              </p>
              <p>
                Curabitur massa magna, tempor in blandit id, porta in ligula.
                Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
                Mauris risus lectus, tristique at nisl at, pharetra tristique
                enim.
              </p>
              <p>
                Nullam this is a link nibh facilisis, at malesuada orci congue.
                Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat
                eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
                Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
                interdum vestibulum. Aenean gravida mi non aliquet porttitor.
                Praesent dapibus, nisi a faucibus tincidunt, quam dolor
                condimentum metus, in convallis libero ligula ut eros.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="">Share</div>
              <div className="p-2 bg-gray-100 text-[#666] rounded-md hover:bg-gray-200">
                <IconBrandFacebookFilled size={16} />
              </div>
              <div className="p-2 bg-gray-100 text-[#666] rounded-md hover:bg-gray-200">
                <IconBrandTwitterFilled size={16} />
              </div>
              <div className="p-2 bg-gray-100 text-[#666] rounded-md hover:bg-gray-200">
                <IconBrandInstagram size={16} />
              </div>
              <div className="p-2 bg-gray-100 text-[#666] rounded-md hover:bg-gray-200">
                <IconBrandPinterest size={16} />
              </div>
              <div className="p-2 bg-gray-100 text-[#666] rounded-md hover:bg-gray-200">
                <IconBrandDribbble size={16} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm border">
            <div className="flex gap-1 p-6 items-center">
              <p className="text-xl font-bold pr-6">896 Reviews</p>
              <IconStarFilled color="#B63437" size={18} />
              <IconStarFilled color="#B63437" size={18} />
              <IconStarFilled color="#B63437" size={18} />
              <IconStarFilled color="#B63437" size={18} />
              <IconStarHalfFilled color="#B63437" size={18} />
              <p className="text-sm text-[#666]">(4.5 out of 5)</p>
            </div>

            <div className="px-6 space-y-6 pb-6 border-b">
              <div className="flex gap-4">
                <div className="basis-20 shrink-0">
                  <img
                    src="/images/property/user.png"
                    alt="user"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <Link
                      href="/agent/detail"
                      className="font-bold pr-4 hover:text-[#B63437]"
                    >
                      Samul Williams
                    </Link>
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarHalfFilled color="#B63437" size={16} />
                    <IconStar color="#B63437" size={16} />
                  </div>
                  <p className="text-[#666]">
                    Beautiful home, very picturesque and close to everything in
                    jtree! A little warm for a hot weekend, but would love to
                    come back during the cooler seasons!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="basis-20 shrink-0">
                  <img
                    src="/images/property/user.png"
                    alt="user"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <Link
                      href="/agent/detail"
                      className="font-bold pr-4 hover:text-[#B63437]"
                    >
                      Samul Williams
                    </Link>
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarFilled color="#B63437" size={16} />
                    <IconStarHalfFilled color="#B63437" size={16} />
                    <IconStar color="#B63437" size={16} />
                  </div>
                  <p className="text-[#666]">
                    Beautiful home, very picturesque and close to everything in
                    jtree! A little warm for a hot weekend, but would love to
                    come back during the cooler seasons!
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-md font-bold text-[#666]">
                Write a Review
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-1">
                  <IconStarFilled color="#B63437" size={16} />
                  <IconStarFilled color="#B63437" size={16} />
                  <IconStarFilled color="#B63437" size={16} />
                  <IconStarHalfFilled color="#B63437" size={16} />
                  <IconStar color="#B63437" size={16} />
                </div>
                <p className="text-sm">Your Rating & Review</p>
              </div>
              <input
                type="text"
                className="border rounded-md w-full py-1 px-4"
                placeholder="Review Title"
              />
              <textarea
                className="border rounded-md py-3 px-4 w-full h-36"
                placeholder="Your Review"
              ></textarea>
              <div className="bg-[#B63437] py-3 px-8 text-center inline-block text-white rounded-lg cursor-pointer hover:bg-[#e94c51]">
                Submit Review
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <Blog
              thumb="/images/blogs/thumb1.jpg"
              avatar="/images/blogs/user1.png"
              username="Ali Tufan"
              title="Luxury Family Home"
              minimized
            />
            <Blog
              thumb="/images/blogs/thumb2.jpg"
              avatar="/images/blogs/user2.png"
              username="Ali Tufan"
              title="Luxury Family Home"
              minimized
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
