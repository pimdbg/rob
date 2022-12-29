import { useReducer, useState } from "react";

export default function DPad({isActive}) {
    // const [moveManual, setMoveManual] = useState(false);
    const [movement, dispatch] = useReducer(reducer, { type: 'neutral' });

    return (
        <div>
            <div className="d-pad">
                <button disabled={isActive} onClick={() => dispatch({type: 'forwards'})} className="btn movement-btn up">Up</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'backwards'})} className="btn movement-btn down">Down</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'left'})} className="btn movement-btn left">Left</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'right'})} className="btn movement-btn right">Right</button>
            </div>
        </div>
    )

    function reducer(state, action) {
        switch (action.type) {
            case 'forwards':
                console.log('Moving up');
                break;
            case 'backwards':
                console.log('Moving backwards');
                break;
            case 'left': 
                console.log('Moving left');
                break;
            case 'right':
                console.log('Moving right');
                break;
            case 'neutral':
                console.log('Stationary');
                break;
            default:
                throw new Error();
        }
    }
}