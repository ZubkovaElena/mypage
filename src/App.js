import React, {Component} from 'react';
import './App.css';
import Footer from "./Сontainer/Footer/Footer";
import Header from "./Сontainer/Header/Header";
import Sidebar2 from "./Сontainer/Sidebar2/Sidebar2";
import Side from "./Сontainer/Sidebar1/Sidebar1";


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Side/>

            <Sidebar2/>
        <Footer />
        </div>
    )
  }
}
export default App;
