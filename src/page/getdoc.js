import React, { Component } from 'react'

import { getDocs, collection } from "firebase/firestore";
import firestore from '../firebase'

export class getdoc extends Component {

    constructor(props) {
        super();
        this.state = {
            Data: [],
            Loading: true
        }
    }

    async componentDidMount() {
        await this.LoadingData()
    }

    async LoadingData() {
        const querySnapshot = await getDocs(collection(firestore, "All"));
        querySnapshot.forEach((doc) => {

            // console.log(doc.data().DatetimePost)
            this.state.Data.push(
                {
                    id: doc.id,
                    name: doc.data().InputName,
                    message: doc.data().InputMessage,
                    datecountdown: doc.data().DateCountdown,
                    datetimepost: doc.data().DatetimePost.toDate()
                }
            )
        });

        this.setState({
            Loading: false
        })
    }


    render() {
        const uniqueData = new Map();
        this.state.Data.forEach(obj => {
            if (!uniqueData.has(obj.id)) {
                uniqueData.set(obj.id, obj);
            }
        });
        let result = Array.from(uniqueData.values());
        result.sort((a, b) => a.datetimepost - b.datetimepost);


        // console.log(result)
        // this.LoadingData()
        return (
            <div style={{ position: 'absolute', right: 20, top: 20, width: '40vh', height: '40vh', overflowY: 'scroll' }}>
                {
                    result.length >= 1 &&
                    result.map(data =>
                        <div key={data.id}>
                            <div style={{ textAlign: 'left', padding: 8 }}>
                                <div>{data.datetimepost.toLocaleString()}</div>
                                <div style={{ width: '100%' }}>{data.name} : {data.message}</div>

                                {/* <div style={{ backgroundColor: 'green', width: '60%' }}>{data.message}</div> */}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default getdoc