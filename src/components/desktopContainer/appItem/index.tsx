import React, { useEffect, useRef, useState } from 'react';

import './style.css';

export const AppItem = (props: { name: string, icon: string, onDel:React.MouseEventHandler<HTMLSpanElement>, isDragging:boolean }) => {
    const { name, icon, isDragging } = props;
    const [removable, setRemovable] = useState(false);
    const appItem = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (isDragging) {
            setRemovable(false);
        }
    }, [isDragging]);
    useEffect(() => {
        const cb = () => {
            if (isDragging) {
                return;
            }
            setRemovable(true);
        };
        appItem.current && appItem.current.addEventListener('long-press', cb);
        return () => {
            appItem.current && appItem.current.removeEventListener('long-press', cb);
        }
    }, [])
    
    return <div tabIndex={-1} className="app-item-wrap" onBlur={() => setRemovable(false)}
        onContextMenu={(e) => {
            e.preventDefault();
        }
    }>
        <div data-long-press-delay="1000" ref={appItem} className={`app-item ${!isDragging && removable ? 'removable' : ''}`}style={{width: '100%', height: '100%'}}>
        <span className="del-icon" onClick={props.onDel}>X</span>
        <div className="app-icon" style={{ backgroundImage: icon }} />
        <div className="app-name">{name}</div>
        </div>
    </div>
};