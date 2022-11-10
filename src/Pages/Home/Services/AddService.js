import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
    const services = useLoaderData();
    const id = services.length + 1;
    const nweId = id.toString()
    console.log(nweId)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value
        const description = form.description.value;
        console.log(title, img, description,nweId, price)
        const service ={
            service_id: nweId,
            title: title,
            img: img,
            price: price,
            description: description
        }

        // add service
        fetch('https://ankan-print-assignment-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json)
        .catch(e => console.error(e))
    }

    return (

        <div className='md:w-1/2 bg-purple-100 my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
             <h2 className="text-3xl font-bold text-center">Add Service</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="title"
                            value="Title"
                        />
                    </div>
                    <TextInput
                        id="title"
                        type="text"
                        name='title'
                        placeholder="Enter Title"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="img"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="img"
                        type="url"
                        name='img'
                        placeholder="Enter Your img"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Price"
                        />
                    </div>
                    <TextInput
                        id="price"
                        type="number"
                        name='price'
                        placeholder="Enter Price"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Description"
                        />
                    </div>
                    <TextInput
                        id="description"
                        type="text"
                        name='description'
                        placeholder="Enter Your Description"
                        required={true}
                        shadow={true}
                    />
                </div>
                <Button type="submit" gradientDuoTone='purpleToBlue'>
                    Add Service
                </Button>
            </form>
        </div>
        // <div >
        //     <form onSubmit={handleSubmit}>
        //     <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs" required/>
        //     <input type="url" name='img' placeholder="img" className="input input-bordered w-full max-w-xs" required/>
        //     <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" required/>
        //     <input type="number" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" required/>
        //     <Button type="submit" gradientDuoTone="purpleToBlue">
        //   Add Service
        // </Button>
        //     </form>
        // </div>
    );
};

export default AddService;