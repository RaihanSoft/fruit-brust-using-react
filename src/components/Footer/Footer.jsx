
function Footer() {
    return (
        <div>
            <section className=" mt-10 bg-black text-white py-10">

                <div>
                    <div className="flex gap-1 items-center justify-center ">
                        <div>
                            <img src="./assets/logo.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Fruit Burst</h1>
                        </div>

                    </div>

                    <div className="space-x-4 text-center mt-3">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Shop</a>
                        <a href="#">All Fruits</a>
                        <a href="#">Support</a>
                        <a href="#">My Account</a>
                    </div>


                    <div className="space-x-2 text-center mt-3 text-2xl">
                        <i class="ri-facebook-circle-fill"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-linkedin-fill"></i>


                    </div>


                </div>

            </section>
        </div>
    )
}

export default Footer