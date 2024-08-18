import React from "react";
import "./choose.css"

class Choose extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btn_id: ''
        };
    };

    cheng_click_id = (event) => {
        this.setState({
            btn_id: event.target.id
        });
    };

    render() {
        return (
            <div class="choose">
                <div class="name">
                    <button
                        id="kino"
                        onClick={this.cheng_click_id}
                        type="button"
                        className={"kino " + (this.state.btn_id === "kino" ? "click" : "")}
                    >
                        ФИЛЬМЫ
                    </button>
                    <button 
                        id="kniga"
                        onClick={this.cheng_click_id}
                        className={"kniga " + (this.state.btn_id === "kniga" ? "click" : "")} 
                    >
                        КНИГИ
                    </button>
                    <button  
                        id="serial"
                        onClick={this.cheng_click_id}
                        className={"serial " + (this.state.btn_id === "serial" ? "click" : "")}
                    >
                        СЕРИАЛЫ
                    </button>
                </div>
                <div class="choose_info"></div>
            </div>
        )
    }
}

export default Choose