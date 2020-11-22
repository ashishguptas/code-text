import React, { useState } from 'react';
import TabData from './TabData';
import './Tabs.css';

function Tabs() {
    const [tabsData, setTabsData] = useState(TabData);
    const [value, setValue] = useState(0)
    const { tab_list } = tabsData[value]

    return (
        <div className='tabsData-center'>
            <div className="close_btn">
                <img src="https://alyssax.com/x/flowy/assets/closeleft.svg" alt="" />
            </div>
            <h3 className='block_text'>Blocks</h3>
            <div className='search_bar'>
                <img src='https://alyssax.com/x/flowy/assets/search.svg' alt='' />
                <input type='text' placeholder="Search blocks" />
            </div>
            <div className='btn-container'>
                {tabsData.map((item, index) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`tab-btn ${index === value && 'active-btn'}`}
                        >
                            {item.tab_title}
                        </button>
                    )
                })}
            </div>
            <article className='list-info'>
                {tab_list.map((list, index) => {
                    return (
                        <div key={index} className='list-desc' draggable={true}>
                            <input type="hidden" name="blockelemtype" className="blockelemtype" value={list.id}></input>
                            <div className='drag_icon'><img src={`${list.img_drag}`} alt='' /></div>
                            <div className='tab_info'>
                                <div className='tab_icon'><img src={`${list.img_icon}`} alt='' /></div>
                                <div className='content'>
                                    <div className='title'>{list.title}</div>
                                    <p className='title_info'>{list.title_info}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}

export default Tabs
