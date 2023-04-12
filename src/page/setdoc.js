import React, { Component } from 'react'
import firestore from "../firebase"

import { doc, setDoc } from "firebase/firestore";

export class setdoc extends Component {
    async componentDidMount() {
        await setDoc(doc(firestore, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }
    render() {
        return (
            <div>setdoc</div>
        )
    }
}

export default setdoc