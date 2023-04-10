import React, { Component } from 'react'

import firestore from "../firebase"
import {addDoc,collection} from '@firebase/firestore'
const test = collection(firestore,"test")
const demo = {
    message:'test2'
}

export class testfirebase extends Component {
    post(){
        console.log('test')
        console.log(demo)
        addDoc(test,demo)
    };
  render() {
    return (
      <div>
                <button onClick={()=>this.post()}>Post</button>
                      </div>
    )
  }
}

export default testfirebase