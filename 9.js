const makePerson = ({ firstName, age, lastName, job }) => {
	return {
		name: firstName + ' ' + lastName,
		age,
		job
	};
};

const dev = makePerson({
	firstName: 'tom',
	lastName: 'palnt',
	age: 24,
	job: 'Web Dev'
});

console.log(dev);
