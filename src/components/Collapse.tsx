import React, {useState} from 'react';
import '../styles/Collapse.css';
import Arrow from '../assets/arrow.svg'
import { CollapseContent } from '../types/CollapseContent';

export function Collapse(props: CollapseContent) {

    const [isOpen, opening] = useState(false);

    const toggleIsOpen = () => {
        opening(current => !current);
    };

    let toDisplay;

    if (typeof props.content === "object") {
        toDisplay = props.content.map(x => <p key={x}>{x}</p>);
    }

    if (typeof props.content === "string") {
        toDisplay = <p>{props.content}</p>;
    }

    // console.log(props.content)

    return (
        <>
            <div className='kasa-collapse' onClick={toggleIsOpen}>
                <p>{props.title}</p>
                {isOpen ? <img src={Arrow} className="reversed" /> : <img src={Arrow} />}
            </div>
            {isOpen && <div className='after-collapse'>{toDisplay}</div>}
        </>
    );
}

