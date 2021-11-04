import React from 'react';
import {Button} from '../components/Button.js';

function GamesForm(props){
    /*
    function handleWinner(e, i){
        props.setWinnerInfo(String(e.target.value), i)
    }

    function handleLoser(e, i){
        props.setLoserInfo(String(e.target.value), i)
    }

    function handleWinnerRuns(e, i){
        props.setWinnerRuns(e.target.value, i)
    }

    function handleLoserRuns(e, i){
        props.setLoserRuns(e.target.value, i)
    }

    function handleVenue(e, i){
        props.setVenue(e.target.value, i)
    }*/

    return(
        <div>
            {props.Games.map( (i, Index) => {
                return (
                    <form key={Index}>
                        <label>
                        <input required list ="teams" name="winner" id ="winner" value={i.winner} onChange={(e) => props.setWinnerInfo(e.target.value, Index)}/> 
                                <datalist id="teams">
                                <option hidden value=""></option>
                                {props.Teams.map( (i, index) => (
                                    <option key={index} value={props.Teams[index].team}>
                                        {props.Teams[index].team}
                                    </option>
                                ))}
                                </datalist>
                        </label>
                        <label> Loser
                            <input list="teams" name="loser" id ="loser" value={i.loser} onChange={(e) => props.setLoserInfo(e.target.value, Index)}/> 
                                <datalist id="teams">
                                <option hidden></option>
                                {props.Teams.map( (i, index) => (
                                    <option key={index} value={props.Teams[index].team}>
                                        {props.Teams[index].team}
                                    </option>
                                ))}
                                </datalist>
                        </label>
                        <label> Score
                            <input type="text" onChange = {(e)=> props.setWinnerRuns(e.target.value, Index)}></input>
                            -
                            <input type="text" onChange = {(e)=> props.setLoserRuns(e.target.value, Index)}></input>
                        </label>
                        <label> Venue
                            <select name = "venue" id ="venue" defaultValue="" onChange = {(e)=> props.setVenue(e.target.value, Index)}>
                                <option hidden></option>
                                <option> American Family Field </option>
                                <option> Angel Stadium </option>
                                <option> Busch Stadium </option>
                                <option> Camden Yards </option>
                                <option> Chase Field </option>
                                <option> Citi Field</option>
                                <option> Citizens Bank Park</option>
                                <option> Comerica Park</option>
                                <option> Coors Field </option>
                                <option> Dodger Stadium </option>
                                <option> Fenway Park</option>
                                <option> Globe Life Field</option>
                                <option> Great American Ball Park</option>
                                <option> Guaranteed Rate Field</option>
                                <option> Kauffman Stadium</option>
                                <option> loanDepot Park</option>
                                <option> Minute Maid Park</option>
                                <option> Nationals Park</option>
                                <option> Oakland Coliseum</option>
                                <option> Oracle Park</option>
                                <option> Petco Park</option>
                                <option> PNC Park</option>
                                <option> Progressive Field</option>
                                <option> Rogers Centre</option>
                                <option> T-Mobile Park</option>
                                <option> Target Field</option>
                                <option> Tropicana Field</option>
                                <option> Truist Park</option>
                                <option> Wrigley Field</option>
                                <option> Yankee Stadium</option>
                            </select>
                        </label>
                        <Button handleEvent={i => props.removeGame(i)} index={Index}> Remove </Button>
                        <Button handleEvent={i => props.swapMatchup(i)} index={Index}> Swap </Button>
                    </form>
                )
            })}
        </div>
    )
}

export default GamesForm;