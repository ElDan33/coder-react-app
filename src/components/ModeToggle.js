import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

const ModeToggle = () => {
    
    const appHeader = document.querySelector(".App-header");
    const label = document.querySelector(".label");
    const ball = document.querySelector(".ball");

    const handMode = () =>{
        appHeader.classList.toggle("App-header-dark");
        label.classList.toggle("label-dark");
        ball.classList.toggle("ball-dark");
    }

    return (
        <>
            <div>
                <input onClick={handMode} type="checkbox" class="checkbox" id="checkbox"/>
                <label for="checkbox" class="label">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <div class="ball"/>
                </label>
            </div>
        </>
    )
}

export default ModeToggle