import React from 'react';

function Form() {
    return(
        <div className="Form">
            <div className="animal-form-container">
                <form className="animalForm">
                    <div className="animal-type-container">
                        <p>Animal Type</p>
                        <input type="text" className="animalType" placeholder="Fish"/>
                    </div>
                    <div className="animal-size-container">
                        <p>Animal Size</p>
                        <input type="text" className="animalSize" placeholder="Tinsy Tiny"/>
                    </div>
                    <button className="subit">Submit</button>
                </form>
            </div>
            <div className="animal-preview-container">
                <img className="animalImg" src="https://static.scientificamerican.com/sciam/cache/file/41DF7DA0-EE58-4259-AA815A390FB37C55_source.jpg?w=390&h=520&92AD8A57-5046-4AC2-B2480CC9628B1F2E"/>
            </div>
        </div>
    )
}

export default Form;