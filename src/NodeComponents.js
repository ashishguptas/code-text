import React, { Fragment } from 'react';
import ReactFlow, { Background } from 'react-flow-renderer'

const intialElements = [
    { id: '1', type: 'input', data: { label: 'New visitor' }, position: { x: 0, y: 0 } }
]

const MindNode = () => {
    return (
        <section className='flow_section'>
            <Fragment>
                <ReactFlow elements={intialElements} style={{ width: '100%', height: '41vw' }}>
                    <Background
                        color='#ddd'
                        variant="dots"
                        size={1}
                    />
                </ReactFlow>
            </Fragment>
        </section>
    )
}

export default MindNode;
