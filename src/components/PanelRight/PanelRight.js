import React from 'react'

import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'
import WorkPlace from './WorkPlace/WorkPlace'

import './PanelRight.css'

function PanelRight() {
    return(
        <section className="panelright">
            <CheckBox />
            <Canvas />
            <WorkPlace />
        </section>
    )
}

export default PanelRight;