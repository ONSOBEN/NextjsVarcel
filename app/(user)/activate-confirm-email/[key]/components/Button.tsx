import style from "./style.module.css";
type Props = {
	title: string;
	onclick?: () => void;
	classname?: string;
};

export default function Button({ title, onclick, classname }: Props) {
	return (
		<button onClick={onclick} className={`${style.container} ${classname}`}>
			{title}
		</button>
	);
}
