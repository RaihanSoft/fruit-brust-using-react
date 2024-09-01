

function Shop() {
    return (
        <div>
            <section className="mt-10 w-11/12 mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {/* div one  */}
                <div className="border-2 p-8">
                    {/* img div  */}
                    <div className="">
                        <img className="mx-auto" src="./assets/fruit4.png" alt="" />
                    </div>

                    {/* content div  */}
                    <div className="text-center space-y-5">

                        <h3 className="text-2xl font-bold">12.90$ - 18.85$</h3>
                        <small>Apples</small>

                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <p className="font-bold text-red-500">Details</p>


                    </div>


                </div>
                {/* div one  */}
                <div className="border-2 p-8">
                    {/* img div  */}
                    <div className="">
                        <img className="mx-auto" src="./assets/fruit1.png" alt="" />
                    </div>

                    {/* content div  */}
                    <div className="text-center space-y-5">

                        <h3 className="text-2xl font-bold">12.90$ - 18.85$</h3>
                        <small>Apples</small>

                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <p className="font-bold text-red-500">Details</p>


                    </div>


                </div>
                {/* div one  */}
                <div className="border-2 p-8">
                    {/* img div  */}
                    <div className="">
                        <img className="mx-auto" src="./assets/fruit2.png" alt="" />
                    </div>

                    {/* content div  */}
                    <div className="text-center space-y-5">

                        <h3 className="text-2xl font-bold">12.90$ - 18.85$</h3>
                        <small>Apples</small>

                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <p className="font-bold text-red-500">Details</p>


                    </div>


                </div>
                {/* div one  */}
                <div className="border-2 p-8">
                    {/* img div  */}
                    <div className="">
                        <img className="mx-auto" src="./assets/fruit3.png" alt="" />
                    </div>

                    {/* content div  */}
                    <div className="text-center space-y-5">

                        <h3 className="text-2xl font-bold">12.90$ - 18.85$</h3>
                        <small>Apples</small>

                        <div>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <p className="font-bold text-red-500">Details</p>


                    </div>


                </div>


            </section>
            <div className="flex justify-center  items-center  mt-10 ">
                <button className="btn btn-error text-white">Shop All</button>
            </div>
        </div>
    )
}

export default Shop