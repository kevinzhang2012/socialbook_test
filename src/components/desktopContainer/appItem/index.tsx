import React, { useEffect, useRef, useState } from 'react';

import './style.css';

export const AppItem = (props: { name: string, icon: string, onDel:React.MouseEventHandler<HTMLSpanElement> }) => {
    const { name, icon } = props;
    const [removable, setRemovable] = useState(false);

    return <div tabIndex={-1} className={`app-item-wrap ${removable ? 'removable' : ''}`} onBlur={() => setRemovable(false)} onContextMenu={(e) => {
        e.preventDefault();
        setRemovable(true);
    }
    }>
        <span className="del-icon" onClick={props.onDel}>Delete</span>
        <div className="app-icon" style={{ backgroundImage: icon }} />
        <div className="app-name">{name}</div>
    </div>
};