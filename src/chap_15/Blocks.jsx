import * as s from "./Blocks.styles";

const blockItems = [
	{ label: "1", padding: "1rem", backgroundColor: "red" },
	{ label: "2", padding: "3rem", backgroundColor: "green" },
	{ label: "3", padding: "2rem", backgroundColor: "blue" },
];

const Blocks = (props) => {
	return (
		<s.Wrapper>
			{blockItems.map((i) => {
				return (
					<s.Block
						padding={i.padding}
						backgroundcolor={i.backgroundColor}
						key={i.label}
					>
						{i.label}
					</s.Block>
				);
			})}
		</s.Wrapper>
	);
};

export default Blocks;
