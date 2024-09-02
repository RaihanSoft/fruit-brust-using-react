function Team() {
    return (
        <div>
            <section className='w-11/12 mx-auto mt-10 border-4 py-16  bg-[url(./assets/team.png)] text-white  rounded-xl'>

                {/* team descripton  */}
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Meet the team section</h1>
                    <p className='pt-3'>Contrary to popular belief, is not simply random text. It has roots in <br /> a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>


                {/* team members  */}
                <div className='grid grid-cols-4 justify-items-center mt-10' >


                    {/* one  */}
                    <div className=' flex'>
                        <div className=' p-5 text-center space-y-3'>
                            {/* one  */}
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="./assets/member1.png" />

                                </div>

                            </div>
                            <div>
                                <h1>Awlad Hossain</h1>
                                <p>Fruits Expert</p>
                                <div className='space-x-2'>
                                    <i class="ri-facebook-fill  text-red-400 "></i>
                                    <i class="ri-twitter-fill  text-red-400 "></i>
                                    <i class="ri-github-fill  text-red-400 "></i>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* one  */}
                    <div className=' flex'>
                        <div className=' p-5 text-center space-y-3'>
                            {/* one  */}
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="./assets/member1.png" />

                                </div>

                            </div>
                            <div>
                                <h1>Awlad Hossain</h1>
                                <p>Fruits Expert</p>
                                <div className='space-x-2'>
                                    <i class="ri-facebook-fill  text-red-400 "></i>
                                    <i class="ri-twitter-fill  text-red-400 "></i>
                                    <i class="ri-github-fill  text-red-400 "></i>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* one  */}
                    <div className=' flex'>
                        <div className=' p-5 text-center space-y-3'>
                            {/* one  */}
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="./assets/member1.png" />

                                </div>

                            </div>
                            <div>
                                <h1>Awlad Hossain</h1>
                                <p>Fruits Expert</p>
                                <div className='space-x-2'>
                                    <i class="ri-facebook-fill  text-red-400 "></i>
                                    <i class="ri-twitter-fill  text-red-400 "></i>
                                    <i class="ri-github-fill  text-red-400 "></i>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* one  */}
                    <div className='flex'>
                        <div className=' p-5 text-center space-y-3'>
                            {/* one  */}
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="./assets/member1.png" />

                                </div>

                            </div>
                            <div>
                                <h1>Awlad Hossain</h1>
                                <p>Fruits Expert</p>
                                <div className='space-x-2'>
                                    <i class="ri-facebook-fill  text-red-400 "></i>
                                    <i class="ri-twitter-fill  text-red-400 "></i>
                                    <i class="ri-github-fill  text-red-400 "></i>

                                </div>
                            </div>

                        </div>

                    </div>




                </div>

            </section>
        </div>
    )
}

export default Team