import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';


const DraggableColorList = SortableContainer((props) => {
    const { colors, deleteButtonHandle } = props;


    React.useEffect(() => {
        console.log(colors)
    }, [])
    return (
        <div style={{ height: '100%' }}>
            {
                colors.map((color, index) => <DraggableColorBox 
                    index={index}
                deleteButtonHandle={deleteButtonHandle} key={index} backgroundColor={color.color} name={color.name} />)
            }
        </div>
    )
})

export default DraggableColorList
