import React from "react";
import '../CSS/Marker.css'
import { FaMapMarkerAlt } from "react-icons/fa";


const Marker = (props: any) => {
    const y = props.idStation;
    const { color, name, id } = props;
    return (
        <><FaMapMarkerAlt style={{ color: "red", fontSize: 30 }}><button className="buttonMarker" > <div>{props.id}</div><FaMapMarkerAlt style={{ color: "red", fontSize: 30 }} /></button></FaMapMarkerAlt>
            <div>{props.idStation}</div>
        </>

    );
}
export default Marker;