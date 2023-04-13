import React, { Component } from 'react'

import firestore from "../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import Getdoc from './getdoc'

export class testfirebase extends Component {

  constructor(props) {
    super();
    this.state = {
      PostData: {
        InputName: '',
        InputMessage: '',
        DateCountdown: props.DateCountdown,
        DatetimePost: serverTimestamp()
      },
      Title: 'SendSomeMessage? Seraph?',
      re: false
    }
  }

  re() {
    this.setState({ re: !this.state.re })
  }

  post() {
    if (this.state.PostData.InputName === '' || this.state.PostData.InputMessage === '') {
      this.setState({
        Title: 'ไม่เอาน่าใส่หน่อยเถอะนะ'
      })
    } else {
      addDoc(collection(firestore, "All"), this.state.PostData)
      this.setState({
        PostData: {
          InputName: '',
          InputMessage: '',
          DateCountdown: this.props.DateCountdown,
          DatetimePost: serverTimestamp()
        },
        Title: 'SendSomeMessage? Seraph?'
      })
    }
  };
  render() {
    return (
      <div>
        <p style={{ fontSize: 40 }}>{this.state.Title}</p>
        <div style={{ flexDirection: 'row', display: 'flex', width: '100vh', justifyContent: 'space-between', margin: 10 }}>
          <p style={{}}>Name:</p>
          <input type="text" value={this.state.PostData.InputName} onChange={(event) => this.setState({ PostData: { ...this.state.PostData, InputName: event.target.value } })} style={{ width: '90%', fontSize: 30, borderTop: 0, borderLeft: 0, borderRight: 0 }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', width: '100vh', justifyContent: 'space-between', margin: 10 }}>
          <p style={{}}>Comment:</p>
          <textarea type="text" value={this.state.PostData.InputMessage} onChange={(event) => this.setState({ PostData: { ...this.state.PostData, InputMessage: event.target.value } })} style={{ width: '90%', fontSize: 20, borderTop: 0, borderLeft: 0, borderRight: 0 }} />
        </div>
        <button onClick={() => this.post()}>Post</button>
        <Getdoc />
      </div>
    )
  }
}

export default testfirebase