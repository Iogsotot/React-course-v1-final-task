import React from 'react'

const data = [1, 2, 3, 4, 5, 6];

const ToDo = (data: number[]) => {

	return <>
		{data.map((item) => <li> {item}</li>)}
	</>

}

// add basic markups
// add styles
// add Context Api