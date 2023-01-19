import { useReducer, useState } from "react";
import io from 'socket.io-client';

const SOCKET_URL = '/';
const socket = io(SOCKET_URL);

export default function DPad({isActive}) {
    // const [moveManual, setMoveManual] = useState(false);
    const [movement, dispatch] = useReducer(reducer, { type: 'neutral' });

    return (
        <div>
            <div className="d-pad">
                <button disabled={isActive} onClick={() => dispatch({type: 'forwards'})} className="d-pad__btn-up">Up</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'backwards'})} className="d-pad__btn-down">Down</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'left'})} className="d-pad__btn-left">Left</button>
                <button disabled={isActive} onClick={() => dispatch({type: 'right'})} className="d-pad__btn-right">Right</button>
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