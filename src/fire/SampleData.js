import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";


class Sampledata extends Component {
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
      // result.push(<tr key={i}>
      //   <td><img src={this.state.data[i].cover_url}/></td>
      //   <td>{this.state.data[i].author}</td>
      //   <td>{this.state.data[i].title}<div class="subtitle">{this.state.data[i].subtitle}</div></td>
      //   <td>{this.state.data[i].comment}</td>
      // </tr>);
      result.push(
      <div class="balloonoya">
        <img src={this.state.data[i].back_cover}/>
      <span class="balloon">
        <span style={{fontWeight: "bold"}}>{this.state.data[i].title}</span>
        <div style={{fontSize:"70%"}}>{this.state.data[i].subtitle}</div>
        <img src={this.state.data[i].cover_url}/>
      </span>
      </div>);
    }
    return result;
  }


  render(){
    if (this.state.data === null || this.state.data.length === 0){
      this.getFireData();
    }
    return (
      // <table>
      //   <thead>
      //       <tr>
      //           <th>Cover Image</th>
      //           <th>Author</th>
      //           <th>Title</th>
      //           <th>Rating</th>
      //       </tr>
      //   </thead>
      //   <tbody>
      //       {this.getTableData()}
      //   </tbody>
      // </table>
      <div>
        {this.getTableData()}
      </div>
      
    )
  }
}


export default Sampledata;