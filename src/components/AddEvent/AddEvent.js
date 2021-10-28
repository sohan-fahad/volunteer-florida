import axios from 'axios';
import React, { useRef } from 'react';
import './AddEvent.css'

const AddEvent = () => {
    const nameRef = useRef()
    const eventDateRef = useRef()
    const descriptionRef = useRef()
    const imgLinkRef = useRef()

    const handleEventAdd = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const eventDate = eventDateRef.current.value
        const description = descriptionRef.current.value
        const eventImg = imgLinkRef.current.value

        const enventInfo = { name, eventDate, description, eventImg }
        axios.post('http://localhost:5000/volunteers', enventInfo)
            .then(res => {
                if (res) {
                    alert("Successful")
                    console.log(res)
                    nameRef.current.value =''
                    eventDateRef.current.value=''
                    descriptionRef.current.value=''
                    imgLinkRef.current.value=''

                }
            })
    }
    return (
        <div className="AddEvent">
            <form onSubmit={handleEventAdd}>
                <input type="text" placeholder="Event Name" ref={nameRef} required />
                <input type="date" ref={eventDateRef} required />
                <textarea placeholder="Description" rows="2" ref={descriptionRef} />
                <input type="url" placeholder="Image Link" ref={imgLinkRef} />
                <input type="submit" value="ADD" className="btn-reg" />
            </form>
        </div>
    );
};

export default AddEvent;