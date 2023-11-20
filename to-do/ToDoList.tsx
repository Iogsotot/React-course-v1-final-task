import React from 'react';

const ToDoList = (data: number[]) => {

	return <>
		{data.map((item) => <li> {item}</li>)}
	</>

}

// add basic markups
// add styles
// add Context Api