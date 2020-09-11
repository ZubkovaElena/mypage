import React from "react";
import './button.css'


export function But() {
    return (
        <div>
            <div className={'blockgray'}>
                <button> Сообщения</button>
                <button> Водители</button>
                <button> Маршруты</button>
                <button> Долги</button>
                <button> Статистика</button>
                <button> Баланс</button>
            </div>
            <p>Прочее</p>
            <div className={'blockgray'}>
                <button> Настройки</button>
                <button> Банковские карты</button>
                <button> База знаний</button>
            </div>
        </div>


    )
}