import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='m-8'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
                <Carousel indicators={false}>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5ac4eb022971149bb6d709d3/1549402246418-WXMAVB6NWN8KY0V3G9AP/JSI-Kits-screen-pull-dark-t-shirt.jpg"
                        alt="..."
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5a099cb3017db2f48e15a5ce/1646057454415-9S1O8V2084W5EZHL346A/9CA683DE-F663-4FC0-A51E-6681A2A2E95F?format=1500w"
                        alt="..."
                    />
                    <img
                        src="https://adamley.co.uk/wp-content/uploads/2019/05/adamley-screen-printing-featured-image.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to='/services'>
                <Button className='mx-auto' gradientDuoTone="purpleToBlue">
                    See All
                </Button>
            </Link>

            <div className='w-3/4 mx-auto my-12'>
            <div className="hero min-h-screen " style={{  backgroundImage: `url("https://tinyworkshops.com/wp-content/uploads/2021/12/FEATURE_screen-printing-kits.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Screen Printing</h1>
      <p className="mb-5">Screen printing involves using a photographic process to transfer your design onto a silk screen. Each colour used within the design requires its own screen. Your artwork is copied onto transparent film and then transferred photographically onto a silk screen that is coated with photographic emulsion.</p>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Home;