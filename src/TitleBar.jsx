import React, { Component } from 'react';
import './App.css';

class Title extends Component {
    render() { 
        return ( 
            <div>
                <table className = "titleBar">
                <tbody>
                <tr>
                    <td>
                        <img width = "300" src = "pokemon.png" alt = "IMDB movieApp"/>
                    </td>
                        <td width = "8" />
                    </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Title;