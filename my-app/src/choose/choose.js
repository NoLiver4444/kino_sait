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

    choose_text = (btn_id) => {
        //Обращение к бд для инфы о выборе
        if (btn_id === "kino") {
            return (
                <h1>a</h1>
            );
        } else if (btn_id === "kniga") {
            return (
                <h1>b</h1>
            );
        } else if (btn_id === "serial") {
            console.log(1);
            return (
                <h1>c</h1>
            );
        } else if (btn_id === "anime") {
            return (
                <h1>d</h1>
            );
        }
    }

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
                    <button  
                        id="anime"
                        onClick={this.cheng_click_id}
                        className={"anime " + (this.state.btn_id === "anime" ? "click" : "")}
                    >
                        АНИМЕ
                    </button>
                </div>
                <div class="choose_info">
                    {this.choose_text(this.state.btn_id)}
                </div>
            </div>
        )
    }
}

export default Choose