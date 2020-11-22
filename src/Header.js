import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
            <header>
                <div className='left_bar'>
                    <div className='back_btn'><img src="https://alyssax.com/x/flowy/assets/arrow.svg" alt="" /></div>
                    <div className="header_text">
                        <h3>Your automation pipeline</h3>
                        <p>Marketing automation</p>
                    </div>
                </div>
                <div className='center_bar'>
                    <div className='diagram_view'>Diagram view</div>
                    <div className='code_editor'>Code editor</div>
                </div>
                <div className='right_bar'>
                    <div className='discard'>Discard</div>
                    <div className='publish'>Publish to site</div>
                </div>
            </header>
        </div>
    )
}

export default Header
