import React from 'react';
import book from './../assets/book.avif';
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";

const about = () => {
    return (
        <div className='flex flex-col h-full'>

            {/* HEADER */}
            <div className='flex flex-col px-4 md:px-0'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-green-900 font-bold font-serif text-center'>
                    About Arivan Trust
                </h1>

                <div className="flex justify-center mt-5">
                    <p className="border-b-4 border-amber-700 w-24"></p>
                </div>

                <p className="text-base md:text-lg max-w-3xl mx-auto mt-7 text-center leading-relaxed px-2">
                    Arivan Trust is an <span className="font-bold">education-focused organization</span> founded in 2022.
                    We believe education is the key to breaking the cycle of poverty.
                    We help underprivileged and orphaned children by providing what they need
                    to stay in school and build a better future.
                </p>
            </div>


            {/* MISSION & VISION */}
            <div className='flex flex-col md:flex-row text-lg w-full gap-6 justify-center mt-14 px-4 lg:px-0'>
                <div className='w-full lg:w-[40%] min-h-[220px] border rounded-2xl border-gray-300 p-8 bg-emerald-100 hover:shadow-[0px_8px_10px_rgba(0,0,0,0.15)] transition duration-300'>
                    <div className="bg-green-800 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl my-5 mt-1">
                        <CheckCircleOutlined />
                    </div>

                    <h1 className='text-green-900 text-xl md:text-2xl font-bold playfair'>
                        Our Mission
                    </h1>

                    <p className='mt-4'>
                        To ensure every child has access to quality education. We provide books, study materials,
                        school uniforms, and nutritious meals because a child cannot learn if they are hungry,
                        embarrassed, or lack basic resources. Education is our goal — everything else supports that.
                    </p>
                </div>


                <div className='w-full lg:w-[40%] min-h-[220px] border rounded-2xl border-gray-300 p-8 bg-orange-100 hover:shadow-[0px_8px_10px_rgba(0,0,0,0.15)] transition duration-300'>
                    <div className="bg-amber-600 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl my-5 mt-1">
                        <EyeOutlined />
                    </div>

                    <h1 className='text-green-900 text-xl md:text-2xl font-bold font-playfair'>
                        Our Vision
                    </h1>

                    <p className='mt-4'>
                        A future where every child completes their education and no child drops out of school
                        because they cannot afford books, uniforms, or meals. We dream of educated children
                        becoming teachers, doctors, and leaders who lift their families and communities.
                    </p>
                </div>

            </div>

            <div className="w-full text-center mt-10">

                <div className="inline-block bg-gray-200 px-4 py-1 rounded-full text-sm tracking-widest text-gray-600">
                    OUR WORK
                </div>

                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl mt-4">
                    <span className="text-3xl px-2 text-green-900 font-bold">How We Support Education
                    </span>
                </h1>

                <div className="w-16 h-[3px] bg-orange-500 mx-auto mt-4"></div>

            </div>
            {/* IMAGE + CONTENT */}
            {/* <div className="flex flex-col lg:flex-row w-full mt-[7%] px-4 lg:px-[40px]"> */}
            <div className="flex flex-col md:flex-row w-full mt-[7%] px-4 lg:px-[40px] gap-10">
                {/* IMAGE */}
                {/* <div className="w-full lg:w-[43%] mb-10 lg:mb-0"> */}
                <div className="w-full md:w-[65%] mb-10 md:mb-0">
                    <div className="sticky top-[80px] h-[350px] md:h-[450px] lg:h-[95vh] relative">

                        <img
                            src={book}
                            alt="book"
                            className="w-full h-full object-cover rounded-3xl"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent rounded-3xl"></div>

                        <div className="absolute bottom-10 left-8 text-white max-w-[80%]">

                            <h3 className="text-orange-400 tracking-widest text-sm font-semibold">
                                Comprehensive Support
                            </h3>

                            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl mt-2 leading-tight font-extrabold">
                                Everything a Child <br /> Needs to Succeed
                            </h1>

                            <div className="w-16 h-1 bg-orange-400 mt-4"></div>

                            <p className="mt-4 text-sm leading-relaxed text-gray-200">
                                We give children the resources, dignity, and <br />
                                support they need to show up, sit down, and <br />
                                truly learn.
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT CONTENT */}
                {/* <div className="w-full lg:w-[57%] flex flex-col lg:pl-[50px]"> */}
                <div className="w-full md:w-[57%] max-w-[700px] flex flex-col lg:pl-[50px] mx-auto md:mx-0">
                    {/* <p className="text-gray-400 tracking-widest text-sm font-semibold">
                        COMPREHENSIVE SUPPORT
                    </p> */}
                    {/* 
                    <h1 className="text-green-900 text-2xl md:text-3xl font-medium font-playfair mt-2">
                        Everything a Child Needs to Succeed
                    </h1> */}

                    {/* <p className="mt-3 text-gray-600">
                        We provide these essential resources to ensure no child is left behind.
                    </p> */}


                    {/* ITEM 1 */}
                    <div className="flex flex-row items-start mt-0 gap-5 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-green-800 shadow-md hover:bg-emerald-100 hover:shadow-2xl">
                        <div className="bg-green-800 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-5">📚</div>
                        <div>
                            <h1 className="font-semibold text-lg">Books & Study Materials</h1>
                            <p className="text-gray-600 mt-1">
                                Textbooks, notebooks, and learning guides so children can study,
                                do homework, and prepare for exams without worrying about missing resources.
                            </p>
                        </div>
                    </div>


                    {/* ITEM 2 */}
                    <div className="flex flex-row items-start mt-6 gap-4 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-green-800 shadow-md hover:bg-emerald-100 hover:shadow-2xl">
                        <div className="bg-green-800 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-3">✏️</div>
                        <div>
                            <h1 className="font-semibold text-lg">Daily Stationery</h1>
                            <p className="text-gray-600 mt-1">
                                Pens, pencils, notebooks, and geometry boxes — the essential tools every child needs.
                            </p>
                        </div>
                    </div>


                    {/* ITEM 3 */}
                    <div className="flex flex-row items-start mt-6 gap-4 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-green-800 shadow-md hover:bg-emerald-100 hover:shadow-2xl">
                        <div className="bg-green-800 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-3">⚽</div>
                        <div>
                            <h1 className="font-semibold text-lg">Sports & Activities</h1>
                            <p className="text-gray-600 mt-1">
                                Supporting children in sports, arts, and cultural activities.
                            </p>
                        </div>
                    </div>


                    {/* ITEM 4 */}
                    <div className="flex flex-row items-start mt-6 gap-4 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-amber-600 shadow-md hover:bg-orange-100 hover:shadow-2xl">
                        <div className="bg-amber-600 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-3">👕</div>
                        <div>
                            <h1 className="font-semibold text-lg">School Uniforms</h1>
                            <p className="text-gray-600 mt-1">
                                New, clean uniforms so every child can attend school with confidence.
                            </p>
                        </div>
                    </div>


                    {/* ITEM 5 */}
                    <div className="flex flex-row items-start mt-6 gap-4 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-amber-600 shadow-md hover:bg-orange-100 hover:shadow-2xl">
                        <div className="bg-amber-600 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-3">🍛</div>
                        <div>
                            <h1 className="font-semibold text-lg">Nutritious Meals</h1>
                            <p className="text-gray-600 mt-1">
                                Regular meals so no child has to learn on an empty stomach.
                            </p>
                        </div>
                    </div>


                    {/* ITEM 6 */}
                    <div className="flex flex-row items-start mt-6 gap-4 bg-gray-100 p-6 rounded-2xl border-l-[4px] border-amber-600 shadow-md hover:bg-orange-100 hover:shadow-2xl">
                        <div className="bg-amber-600 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl px-3">👨‍👩‍👧</div>
                        <div>
                            <h1 className="font-semibold text-lg">Family Support</h1>
                            <p className="text-gray-600 mt-1">
                                We work with parents and communities to create a safe environment.
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            {/* CTA */}
            <div className='text-center m-[6%] px-4'>
                <h1 className='text-green-900 text-xl md:text-2xl font-bold font-playfair'>
                    Help a Child Get an Education
                </h1>

                <p className="text-base md:text-lg max-w-3xl mx-auto mt-4 text-center leading-relaxed">
                    Since 2022, we've helped hundreds of children stay in school.
                    <span className='font-bold'> Your support can write a child's future.</span>
                </p>

                <div className='flex flex-col sm:flex-row w-full mt-6 justify-center text-lg gap-4 items-center'>

                    <Button className="px-8 !h-[50px] font-bold !text-lg w-[260px] sm:w-[300px] md:w-[320px] !bg-orange-400 !text-white !border-orange-400 !rounded-4xl hover:!bg-orange-500 hover:!border-orange-500 !shadow-none">
                        Support a Child's Education
                    </Button>

                    <Button className="px-8 !h-[50px] font-bold !text-lg w-[200px] sm:w-[220px] md:w-[240px] !text-green-800 border border-green-800 !rounded-4xl hover:!bg-green-800 hover:!text-white">
                        Become a Volunteer
                    </Button>

                </div>

                <p className='m-4 text-md text-gray-600'>
                    💡 Your donation provides books, uniforms, or meals — whatever it takes to keep a child in school.
                </p>

            </div>

        </div>
    )
}

export default about