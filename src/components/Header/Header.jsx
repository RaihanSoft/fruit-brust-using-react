function Header() {
    return (
        <div>

            <section className="w-11/12 mx-auto mt-5 relative">
                <div className="carousel w-full">


                    <div id="slide1" className="carousel-item relative w-full bg-[url(../assets/banner1.png)]">

                        <div className="text-white mx-auto text-center pt-10 space-y-16 py-2 sm:py-4 md:py-8 lg:py-12 xl:py-32">
                            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
                            <p>We supply highly quality organic products</p>
                            <div>
                                <button className="btn text-white bg-error border-none ">Shop Now</button>
                            </div>
                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>

                    </div>


                    <div id="slide2" className="carousel-item relative w-full bg-[url(../assets/banner2.png)]">
                        <div className="text-white mx-auto text-center pt-10 space-y-16 py-2 sm:py-4 md:py-8 lg:py-12 xl:py-32">
                            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
                            <p>We supply highly quality organic products</p>
                            <div>
                                <button className="btn text-white bg-error border-none ">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide3" className="carousel-item relative w-full bg-[url(../assets/banner3.png)]">
                        <div className="text-white mx-auto text-center pt-10 space-y-16 py-2 sm:py-4 md:py-8 lg:py-12 xl:py-32">
                            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
                            <p>We supply highly quality organic products</p>
                            <div>
                                <button className="btn text-white bg-error border-none ">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide4" className="carousel-item relative w-full bg-[url(../assets/banner4.png)]">
                        <div className="text-white mx-auto text-center pt-5 space-y-16 py-2 sm:py-4 md:py-8 lg:py-12 xl:py-32">
                            <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
                            <p>We supply highly quality organic products</p>
                            <div>
                                <button className="btn text-white bg-error border-none ">Shop Now</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>



                </div>



                {/* header boxes  */}

                <div className="flex gap-10 bg-white hidden xl:flex  shadow-lg rounded-xl w-10/12 mx-auto py-10 absolute -bottom-24 right-[110px] justify-center ">

                    <div className="text-center">
                        <div><img src="./assets/fruit1.png" alt="" /></div>
                        <p className="font-bold">Strawberry</p>
                    </div>

                    <div className="text-center">
                        <div><img src="./assets/fruit2.png" alt="" /></div>
                        <p className="font-bold">Orange</p>
                    </div>


                    <div className="text-center">
                        <div><img src="./assets/fruit3.png" alt="" /></div>
                        <p className="font-bold">Mango</p>
                    </div>

                    <div className="text-center">
                        <div><img src="./assets/fruit4.png" alt="" /></div>
                        <p className="font-bold">Strawberry</p>
                    </div>

                    <div className="text-center">
                        <div><img src="./assets/fruit5.png" alt="" /></div>
                        <p className="font-bold">Mango</p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Header