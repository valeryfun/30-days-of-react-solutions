import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Dnd = () => {
	const starWarsChar = [
		{
			id: 'yoda',
			name: 'baby yoda',
			thumb: '/images/yoda.png'
		},
		{
			id: 'mando',
			name: 'mando',
			thumb: '/images/mando.png'
		},
		{
			id: 'luke',
			name: 'luke',
			thumb: '/images/luke.png'
		},
		{
			id: 'ashoka',
			name: 'ashoka',
			thumb: '/images/ashoka.png'
		}
	]

	const [char, setChar] = useState(starWarsChar)

	function handleOnDragEnd(result) {
		if (!result.destination) return
		const items = Array.from(char)
		const [reordered] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reordered)
		setChar(items)
	}
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='characters'>
				{provided => (
					<ul
						className='characters'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{char.map(({ id, name, thumb }, index) => {
							return (
								<Draggable key={id} draggableId={id} index={index}>
									{provided => (
										<li
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<div className='characters-thumb'>
												<img src={thumb} alt={`${name}`} />
											</div>
											<p>{name}</p>
										</li>
									)}
								</Draggable>
							)
						})}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default Dnd
