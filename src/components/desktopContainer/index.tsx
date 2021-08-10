import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import { AppItem } from './appItem';
import { Carousel } from 'react-responsive-carousel';
import { AppList, MOCK_APP_LIST } from '../../models/appList'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';

// 默认每页app数量
const PAGE_ITEM_NUM = 30;
const DEFAULT_PAGE_NUM = Math.ceil(MOCK_APP_LIST.length / PAGE_ITEM_NUM);;
const appListGroup: AppList[] = [];
for (let i = 0; i < DEFAULT_PAGE_NUM; i++) {
    appListGroup.push(MOCK_APP_LIST.slice(PAGE_ITEM_NUM * i, PAGE_ITEM_NUM * (i + 1)));
}

export const DesktopContainer = () => {
    return <div className="desktop-container">
        <Carousel
            autoPlay={false}
            swipeable={false}
        >
            {appListGroup.map((appList, index) => {
                return <SortablePage key={index} items={appList} />
            })}
        </Carousel>
    </div>
};

const SortablePage = ((props: { items: AppList }) => {
    const [appList, setAppList] = useState(props.items);
    const [isDragging, setIsDragging] = useState(false);

    return <div style={{ margin: '0 1vw' }} onMouseDown={(e) => { e.stopPropagation() }} onMouseUp={(e) => { e.stopPropagation() }}>
        <ReactSortable
            group="test"
            list={appList} setList={setAppList}
            animation={200}
            delayOnTouchOnly
            delay={100}
            onStart={(evt) => {
                setIsDragging(true);
            }}
            onEnd={(evt) => {
                setIsDragging(false);
            }}
        >
            {appList.map((app, index) => {
                return <AppItem key={app.id} isDragging={isDragging} name={app.name} icon={app.icon} onDel={() => {
                    setAppList((prevAppList) => {
                        const newList = prevAppList.slice();
                        newList.splice(index, 1);
                        return newList;
                    });
                }} />
            })}
        </ReactSortable>
    </div>
})