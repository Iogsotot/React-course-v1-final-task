import React, { FC } from 'react';

export interface ITask {
	id: number;
	title: string;
}

export const Task: FC<ITask> = () => {
	return (
		<li></li>
	);
};
