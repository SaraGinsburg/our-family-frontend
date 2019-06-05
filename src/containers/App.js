import React from 'react';
import './App.css';
import Siblings from './Siblings';;

const siblings = [
  {
    id: "1",
    type: "sibling",
    attributes: {
      first_name: "Mussia'le",
      last_name: "Shapiro",
      birthdate: "2007-10-27",
      picture: null,
      points_earned: "0"
    }
  },
  {
    id: "2",
    type: "sibling",
    attributes: {
      first_name: "Menachem",
      last_name: "Shapiro",
      birthdate: "2009-06-07",
      picture: null,
      points_earned: "0"
    }
  },
  {
    id: "3",
    type: "sibling",
    attributes: {
      first_name: "Hadassah'le",
      last_name: "Shapiro",
      birthdate: "2011-02-16",
      picture: null,
      points_earned: "0"
    }
  },
  {
    id: "4",
    type: "sibling",
    attributes: {
      first_name: "Dovid",
      last_name: "Shapiro",
      birthdate: "2013-05-07",
      picture: null,
      points_earned: "0"
    }
  },
  {
    id: "5",
    type: "sibling",
    attributes: {
      first_name: "Shneor",
      last_name: "Shapiro",
      birthdate: "2007-09-11",
      picture: null,
      points_earned: "0"
    }
  },
  {
    id: "6",
    type: "sibling",
      attributes: {
      first_name: "Meir",
      last_name: "Shapiro",
      birthdate: "2007-09-11",
      picture: null,
      points_earned: "0"
    }
  }
]
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Siblings siblings={siblings} />
      </div>
    );
  }
}


export default App;
