import React, {useContext} from "react";
import Image from "../components/Image";
import {Context} from '../Context'
import {getClass} from "../utils/index";
import "../step.css";


function Photo() {

    const {allPhotos} = useContext(Context);

        

     const Photo = allPhotos.map((photos, i)=>(
        <Image key={i} img={photos} className={getClass(i)} />
     ));

    return (
        <main className="photos">
                {Photo}
        </main>
    )
}

export default Photo