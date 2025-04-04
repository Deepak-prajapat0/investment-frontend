import { WHY_CHOOSE_US } from "@/constants/constant";
import Image from "next/image";
import React from "react";

export default async function AboutUs() {
    return (
        <div className=" pb-8">
            {/* Hero Section */}

            <div className="max-w-7xl mx-auto px-4">
                <section className="pt-16 mb-12 flex md:flex-row flex-col  gap-4 ">
                    <div className=" md:pe-12 ">
                        <h1 className="text-4xl font-semibold md:text-start text-center">About Us</h1>
                        <p className="mt-4 text-lg text-gray-700 md:text-start text-center">
                            Empowering investors with smart financial solutions and expert guidance.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia suscipit aspernatur molestias voluptate ipsam saepe aliquam, repellendus voluptatem sint modi illo voluptates laudantium sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, facilis distinctio corrupti praesentium nihil reiciendis vitae!
                        </p>
                    </div>
                    <Image src={'/about-us.jpg'} loading="lazy" height={400} width={500} alt="about company" className="rounded-xl" />
                </section>

                {/* Why Choose Us */}
                <section className="mt-10 p-2 pt-16 ">
                    <h2 className="text-4xl text-center font-semibold mb-4 ">Why Choose Us?</h2>
                    <div className="flex md:flex-row flex-col gap-2 pt-8 items-start  justify-between">
                        <Image src="/about_us.jpg" loading="lazy" width={500} height={400} alt="About Us" className="rounded-lg" />
                        <ul className=" md:w-1/2 pl-6 text-gray-700 flex flex-row flex-wrap gap-y-8 ">
                            {WHY_CHOOSE_US.map((item) =>
                                <li key={item.title} className="w-1/2 p-2">
                                    <h3 className="text-2xl font-normal ">
                                        {item.title}
                                    </h3>
                                    <h6>
                                        {item.description}
                                    </h6>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    );
}
