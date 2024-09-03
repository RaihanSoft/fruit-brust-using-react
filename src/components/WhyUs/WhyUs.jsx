function WhyUs() {
    return (
        <div className='w-11/12 mx-auto'>
            {/* description section  */}
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold py-2">Why Choose Us</h1>
                <p>Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br /> Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>





            {/* content section  */}
            <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                {/* one  */}
                <div className="space-y-10">
                    <div className="flex gap-2 p-4">
                        <div className="flex items-center justify-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>

                        <div>
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>


                    </div>


                    <div className="flex gap-2 p-4">
                        <div className="flex items-center justify-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>

                        <div>
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>


                    </div>

                    <div className="flex gap-2  p-4">
                        <div className="flex items-center justify-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>

                        <div>
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>


                    </div>
                </div>

                <div>
                    <img src="./assets/whychoose1.png" alt="" />
                </div>

                <div className="space-y-10">
                    {/* one  */}
                    <div className="flex gap-2 p-4">

                        <div className="text-right">
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>

                        <div className="flex items-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>


                    </div>
                    {/* one  */}
                    <div className="flex gap-2 p-4">

                        <div className="text-right">
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>

                        <div className="flex items-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>


                    </div>
                    {/* one  */}
                    <div className="flex gap-2 p-4">

                        <div className="text-right">
                            <h1 className="font-bold text-xl">Dedicated Team</h1>
                            <p>Professional employees are there for you to pick <br /> the most amazing and fresh fruits.</p>
                        </div>

                        <div className="flex items-center text-xl  ">
                            <i class="ri-group-fill"></i>
                        </div>


                    </div>



                </div>

            </section>
        </div>
    )
}

export default WhyUs;