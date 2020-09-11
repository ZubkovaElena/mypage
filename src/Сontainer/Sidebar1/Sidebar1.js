import React, {Component} from "react";
import './Sidebar1.css'
import {But} from "./buttons1/buttons1";

const style1 = {
    float: 'left',
    background: '#404040',
    color: '#B0B1B7',
    width: '245px',
    height: '841px',
    fontSize: '9px'

}
const style2 = {
    borderRadius: '50%',
    textAlign:'center',
    top: '100px'

}
class Side extends Component {
    render() {
        return (
                <div style={style1}>
                    <div style={style2}>
                        <p>
                            <img src="https://yakapitalist.ru/wp-content/uploads/2018/10/Skolko-zarabatyvayut-voditeli-avtobusov.jpg"
                                 width="100"
                                 height="100"
                                 alt='Фото сотрудника'/>
                        </p>
                    </div>


                        <div style={{textAlign: 'center',fontSize: '18px',color: 'white'}}>
                            <p>Алексей Тарабаев</p>
                        </div>
                        <div style={{textAlign: 'center',fontSize: '11px'}}>
                            <p>Admin</p>
                        </div>
                    <hr align="center" width="225px" size="1" color='#B0B1B7' />
                        <p>Рабочие инструменты</p>


                    <But/>
                </div>





        )
    }
}

export default Side;