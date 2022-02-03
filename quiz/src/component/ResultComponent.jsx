import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import './HomeComponent.css'

class ResultComponent extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <center>
                        <div className='res-container'>
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <h1 id='resulttxt'>Result</h1>
                            <div id='result-area'>
                                <h1 id='practice'> You need more practice !</h1>
                                <h1 id='score'> Your Score :  20% </h1>
                                <table>
                                    <tr>
                                        <td>Total number of Questions :</td>
                                        <td> 15 </td>
                                    </tr>
                                    <tr>
                                        <td>Number of attempted Questions :</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Number of correct Answers :</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Number of Wrong Answers :</td>
                                        <td>6</td>
                                    </tr>
                                </table>                      



                            </div>
                            <button className='btncls' id='playa'onClick={HomeComponent} >Play Again</button>
                            <button className='btncls' id='bth'   >Back to Home</button>

                        


                        </div>
                    </center>



                </React.Fragment>
                
            </div>
        );
    }
}

export default ResultComponent;