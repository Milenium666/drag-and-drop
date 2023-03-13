import React from 'react';

import add from '../../../images/add.svg';

import './Canvas.css';

function Canvas({ board, dragOverHandler, dropCardHandler }) {
    function cardEnterBoard(e) {
        e.target.style.background = '#F0F9FF'


    }

    function cardLeaveBoard(e) {
        e.target.style.background = '#FFFFFF'
    }
    return (
        <section
            className="canvas"
            onDragOver={(e) => { dragOverHandler(e) }}
            onDrop={(e) => { dropCardHandler(e, board) }}

            onDragEnter={(e) => { cardEnterBoard(e) }}
            onDragLeave={(e) => { cardLeaveBoard(e) }}
        >
            <img
                className="canvas__img"
                alt="Изображение, которое показывает назначение данного элемента"
                src={add}
            />
            <p className="canvas__up">
                Перетащите сюда
            </p>
            <p className="canvas__bottom">
                любой элемент из левой панели
            </p>
        </section>
    )
}

export default Canvas;