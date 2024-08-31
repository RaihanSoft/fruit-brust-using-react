function Header() {
    return (
        <div>

            <section className="w-11/12 mx-auto mt-5">
                <div className="carousel w-full">


                    <div id="slide1" className="carousel-item relative w-full bg-[url(./assets/banner1.png)]">

                        <div className="text-white mx-auto text-center pt-10 space-y-16  py-10">
                            <h1 className="text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
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


                    <div id="slide2" className="carousel-item relative w-full bg-[url(./assets/banner2.png)]">
                        <div className="text-white mx-auto text-center pt-10 space-y-16 ">
                            <h1 className="text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
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


                    <div id="slide3" className="carousel-item relative w-full bg-[url(./assets/banner3.png)]">
                        <div className="text-white mx-auto text-center pt-10 space-y-16 ">
                            <h1 className="text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
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


                    <div id="slide4" className="carousel-item relative w-full bg-[url(./assets/banner4.png)]">
                        <div className="text-white mx-auto text-center pt-10 space-y-16 ">
                            <h1 className="text-6xl font-extrabold ">Exotic tastes at your <br />doorstep</h1>
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
            </section>

        </div>
    )
}

export default Header