import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";


class Sampledata extends Component {
  style = {
    fontSize:"12pt",
    padding:"15px 10px"
  }


  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
    this.getFireData();
  }


  // Firebaseからのデータ取得
  getFireData(){
    let db = firebase.database();
    let ref = db.ref('booklist/');
    let self = this;
    ref.orderByKey()
      .limitToFirst(10)
      .on('value', (snapshot)=>{
        self.setState({
          data:snapshot.val()
        });
    });
  }


  // データ表示の生成
  getTableData(){
    let result = [];
    if (this.state.data === null || this.state.data.length === 0){
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }
    for(let i in this.state.data){
      result.push(<tr key={i}>
        <td><img src={this.state.data[i].cover_url}/></td>
        <td>{this.state.data[i].author}</td>
        <td>{this.state.data[i].title}</td>
        <td>{this.state.data[i].comment}</td>
      </tr>);
    }
    return result;
  }


  render(){
    if (this.state.data === null || this.state.data.length === 0){
      this.getFireData();
    }
    return (
      <table>
        <thead>
            <tr>
                <th>Cover Image</th>
                <th>Author</th>
                <th>Title</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody>
            {this.getTableData()}
        </tbody>
      </table>
    )
  }
}


export default Sampledata;