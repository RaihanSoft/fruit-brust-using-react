

function Nav() {
    return (
        <div>

            <section className="flex justify-between bg-[#F85559] w-11/12 mx-auto text-white rounded-3xl items-center px-5 py-2" >

                <div className="flex gap-10 hidden md:flex">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Shop</a>
                    <a href="#">All Fruits</a>
                </div>

                <div className="flex items-center gap-5 ">
                    <div>
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <h2 className="text-3xl font-bold">Fruit Burst</h2>

                </div>

                <div className="hidden lg:block">
                    <input type="text" placeholder="Search here" className="rounded-s-3xl p-2" />

                </div>


            </section>

        </div>
    )
}

export default Nav;