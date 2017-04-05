import React from 'react';
import axios from 'axios';


import Table from './table/table';


require('./app.scss');


export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      camperList: [],
      camperListRecent: [],
      showTotal: true, // this is by default - showing a list with Total points.
    }
  }


  componentDidMount() {

    let total, recent;


    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(({data}) => total = data)
    .then( () => {
      axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(({data}) => {
        recent = data;
        this.setState({
          camperList: total,
          camperListRecent: recent
        });
      })
    })
  }

  toggleList(showTotal) {

    this.setState({showTotal});
  }




  render() {

    let {showTotal} = this.state;

    let camperList = showTotal ? this.state.camperList : this.state.camperListRecent;

    return (
      <div className="container center-block">

        <h2 className='text-center leaderboard'>Leaderboard</h2>

        <Table 
          showTotal={this.toggleList.bind(this, true)} 
          showRecent={this.toggleList.bind(this, false)}
          showingTotal={showTotal}
          list={camperList}
        />

      </div>

    )

  }


}