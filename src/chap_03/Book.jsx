const Book = props => {
	return (
		<>
			<h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
			<h1>{`이 책은 총 ${props.numOfPages} 페이지입니다.`}</h1>
		</>
	);
};

export default Book;
