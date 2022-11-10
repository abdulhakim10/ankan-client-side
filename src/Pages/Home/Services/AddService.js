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
        fetch('http://localhost:5000/services', {
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
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-xs" />
            <input type="url" name='img' placeholder="img" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" />
            <input type="number" name='price' placeholder="price" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;