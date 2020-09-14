import React from "react";
import './Sidebar2.css'
const style ={
      border: '1px solid #EBEDF2',
        width: '306px',
        height: '842px'
}
const style2 = {
    borderRadius: '50%',
    textAlign:'center',
    top: '100px'

}
export default () => (

<div style={{float: 'right'}}>
    <div style={style}>
         <div className={'style2'}>
                        <img src="https://yakapitalist.ru/wp-content/uploads/2018/10/Skolko-zarabatyvayut-voditeli-avtobusov.jpg"
                                 alt='Фото сотрудника'/>
                    </div>
        <div style={{textAlign: 'center',fontSize: '18px',color: 'black'}}>
            <p>Алексей Смирнов</p>
        </div>
        <div style={{textAlign: 'center',fontSize: '11px'}}>
            <p>Главный водитель</p>
            <div style={{fontSize:'13px', fontWeight:'bold'}}>
                <p>LVD123</p>
            </div>

        </div>
        <div className={"Green"}>
            <button>Написать в чат</button>
        </div>
        </div>


    </div>
)