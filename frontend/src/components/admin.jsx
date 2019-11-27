import React, { Component } from 'react'
import axios from 'axios'

export default class admin extends Component {
    state ={}
// mall_name: e.target.value,
// mall_image: e.target.value,
// mall_desc : e.target.value,
// mall_contact: e.target.value,
// mall_coordinates: e.target.value,
// mall_stores: e.target.value
onChangeMall =(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmit =(e)=>{
    console.log("click")
    e.preventDefault()
    axios.post('/malls/newmall' , this.state)
    .then(res => console.log(res))
    .catch(err=> console.log(err))
}

    render() {
        console.log(this.state)
        return (
            <div>
            <h3>Add New Mall</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>mall name: </label>
<input  type="text" required className="form-control" name="mall_name"  onChange={this.onChangeMall}  />
<label>mall image: </label>
<input  type="text" required className="form-control"  name="mall_image" onChange={this.onChangeMall}  />
<label>mall desc: </label>
<input  type="text" required className="form-control"  name="mall_desc" onChange={this.onChangeMall}  />
<label>mall contact: </label>
<input  type="text" required className="form-control"  name="mall_contact" onChange={this.onChangeMall}  />
<label>mall coordinates: </label>
<input  type="text" required className="form-control"  name="mall_coordinates.lat" onChange={this.onChangeMall}  />
<input  type="text" required className="form-control"  name="mall_coordinates.long" onChange={this.onChangeMall}  />

<label>mall stores: </label>
<input  type="text"  className="form-control" name="mall_stores"  onChange={this.onChangeMall}  />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary"  />
              </div>
            </form>
          </div>
        )
    }
}
