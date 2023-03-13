import React from 'react'

import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'
import WorkPlace from './WorkPlace/WorkPlace'

import './PanelRight.css'

function PanelRight(  {
    items, boardId, board, dragOverHandler,
    dragLeaveHandler, dragStartHandler, dragEndHandler,
    dropHandler, dropCardHandler, handleClick, workplaceRef
  }) {
    return(
        <section className="panelright">
            <CheckBox />
        {
          items.length === 0 ?
          (
            <Canvas
              items={items}
              board={board}
              dragOverHandler={dragOverHandler}
              dropCardHandler={dropCardHandler}
            />
          ) : (
            <WorkPlace
              items={items}
              board={board}
              dragOverHandler={dragOverHandler}
              dragLeaveHandler={dragLeaveHandler}
              dragStartHandler={dragStartHandler}
              dragEndHandler={dragEndHandler}
              dropHandler={dropHandler}

              dropCardHandler={dropCardHandler}

              handleClick={handleClick}

              workplaceRef={workplaceRef}
            />
          )
        }
        </section>
    )
}

export default PanelRight;