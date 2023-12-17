import Book from './Book';

const Library = props => {
	return (
		<>
			<Book name="처음만난 파이썬" numOfPages={300} />
			<Book name="처음만난 리액트" numOfPages={350} />
			<Book name="처음만난 AWS" numOfPages={400} />
		</>
	);
};
export default Library;
