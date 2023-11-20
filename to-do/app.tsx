import React from 'react';
import { ToDoList } from './ToDoList';

const data = [1, 2, 3, 4, 5, 6];

const App = () => {

	return <>
		<Header></Header>
		<main>
			<ToDoList data={data}></ToDoList>
		</main>
		<Footer></Footer>
	</>
}