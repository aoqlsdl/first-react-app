import { students } from "./students";

const AttendanceBook = (props) => {
	return (
		<ul>
			{students.map((s, i) => {
				return <li key={`student-${i}`}>{s.name}</li>;
			})}
		</ul>
	);
};

export default AttendanceBook;
