import React from "react";
import "./choose.css"

function Choose_Text(props) {
    //Обращение к бд для инфы о выборе
    if (props.btn_id === "kino") {
        return (
            <h1>a</h1>
        );
    } else if (props.btn_id === "kniga") {
        return (
            <h1>b</h1>
        );
    } else if (props.btn_id === "serial") {
        return (
            <h1>c</h1>
        );
    } else if (props.btn_id === "anime") {
        return (
            <h1>d</h1>
        );
    }
}

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

    buttons_render = (btn_id) => {
        return (
            <div class="name">
                <button
                    id="kino"
                    onClick={this.cheng_click_id}
                    type="button"
                    className={"kino " + (btn_id === "kino" ? "click" : "")}
                >
                    ФИЛЬМЫ
                </button>
                <button 
                    id="kniga"
                    onClick={this.cheng_click_id}
                    className={"kniga " + (btn_id === "kniga" ? "click" : "")} 
                >
                    КНИГИ
                </button>
                <button  
                    id="serial"
                    onClick={this.cheng_click_id}
                    className={"serial " + (btn_id === "serial" ? "click" : "")}
                >
                    СЕРИАЛЫ
                </button>
                <button  
                    id="anime"
                    onClick={this.cheng_click_id}
                    className={"anime " + (btn_id === "anime" ? "click" : "")}
                >
                    АНИМЕ
                </button>
            </div>
        )
    }

    render() {
        return (
            <div class="choose">
                {this.buttons_render(this.state.btn_id)}
                <div class="choose_info">
                    <Choose_Text btn_id={this.state.btn_id}/>
                </div>
            </div>
        )
    }
}

export default Choose