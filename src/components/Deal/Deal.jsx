import React from 'react'

function Deal() {
    return (
        <div>
            <section className='mt-10 xl:mt-40 w-11/12 mx-auto space-y-2'>

                <div className='lg:flex text-center  lg:text-start justify-between'>

                    <div>
                        <h1 className='text-3xl font-extrabold'>Deal of the day</h1>
                        <p className='mt-2 w-10/12 mx-auto lg:mx-0'>Contrary to popular belief, is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>

                    <div className='flex gap-10 items-center justify-center mt-2'>

                        <div>
                            <h1 className='text-3xl font-bold'>29</h1>
                            <p>Days</p>
                        </div>

                        <div>
                            <h1 className='text-3xl font-bold' >15</h1>
                            <p>Hours</p>
                        </div>

                        <div>
                            <h1 className='text-3xl font-bold' >25</h1>
                            <p>Minutes</p>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Deal