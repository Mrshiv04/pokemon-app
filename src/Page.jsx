import React, { Component } from 'react';

class Page extends Component {
    state = {  }
    render() { 
        return ( 

                <div class="card">
                <img src={this.props.image} alt="John" style ={{width:100}}></img>
                <h1>{this.props.name}</h1>
                <p class="title">{this.props.type} type Pokemon</p>
                <table class = "tables">
                    <tr>
                        <td><b>{this.props.stat_name[0]}</b></td>
                        <td>{this.props.stat_value[0]}</td>
                    </tr>
                    <tr>
                        <td><b>{this.props.stat_name[1]}</b></td>
                        <td>{this.props.stat_value[1]}</td>
                    </tr>
                    <tr>
                        <td><b>{this.props.stat_name[2]}</b></td>
                        <td>{this.props.stat_value[2]}</td>
                    </tr>
                    <tr>
                        <td><b>{this.props.stat_name[3]}</b></td>
                        <td>{this.props.stat_value[3]}</td>
                    </tr>
                    <tr>
                        <td><b>{this.props.stat_name[4]}</b></td>
                        <td>{this.props.stat_value[4]}</td>
                    </tr>
                    <tr>
                        <td><b>{this.props.stat_name[5]}</b></td>
                        <td>{this.props.stat_value[5]}</td>
                    </tr>
                </table>
                </div>

         );
    }
}
 
export default Page;


// 0: "speed"
// 1: "special-defense"
// 2: "special-attack"
// 3: "defense"
// 4: "attack"
// 5: "hp"