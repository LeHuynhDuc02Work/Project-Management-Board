import React from 'react';
import './Task.css'

type TaskProps = {
    id: number;
    title: string;
    body: string;
    laneId: number;
    handleOnDragStart: (event: React.DragEvent, id: number) => void;
}

export default function Task({ id, title, body, laneId,handleOnDragStart } : TaskProps) {
    return (
        <div 
        className="bg-white border border-grey-400 p-4 rounded-lg mb-4"
        draggable
        onDragStart={(event) => handleOnDragStart(event, id)}
        >
            <h3 className='font-bold'>#{id}: {title}</h3>
            <p>{body}</p>
        </div>
    )
}