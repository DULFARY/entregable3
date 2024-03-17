import { useRef } from "react";
import './styles/FormSearch.css';

const FormSearch= ({setLocationSelected}) => {

    const inputSearch = useRef ();

    const handleSubmit = e  => {
        e.preventDefault()
        setLocationSelected(inputSearch.current.value.trim());
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="for_input" ref={inputSearch} type="text" />
            <button className="for_btn">search</button>
        </form>
    );
};

export default FormSearch