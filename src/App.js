import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Button({onClick}) {
    return <button onClick={onClick}>ランダム</button>
}

function Image({imageURL}) {
    return (
        <>
            {imageURL && <img src={imageURL} alt="Random" />}
        </>
    )
}

export default function Conponent() {
    const [imageURL, setImageURL] = useState('');

    async function getImage() {
        try {
            const res = await axios.get('https://picsum.photos/800', { responseType: 'blob' });
            const imageURL = URL.createObjectURL(res.data);
            setImageURL(imageURL);
        } catch (error) {
            console.error('Error fetching the Image component: ', error);
        }
    }

    useEffect(() => {
        getImage();
    }, []);

    return (
        <>
            <Button onClick={getImage} />
            <Image imageURL={imageURL} />
        </>
    )
}