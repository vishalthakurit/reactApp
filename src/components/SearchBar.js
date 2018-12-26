import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';

function SearchField(props){
    return(
        <div>
            <input type="text" className={props.class} placeholder={props.placeholder} />
            <span className="search_icon">
                <IosSearch onClick={() => alert('Hi!')} fontSize="25px" color="#43853d" />
            </span>
        </div>
    )
}

export default SearchField;