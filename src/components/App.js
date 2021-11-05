import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Output } from "./Output";
import GamesForm from "../container/GamesForm.js";
import "../App.css";

export default function App(props) {
  let [displayOutput, setDisplayOutput] = useState(false);

  let initTeamState = props.addFranchise;
  useEffect(() => {
    fetch(`https://api-mlb.herokuapp.com`)
      .then((res) => res.json())
      .then((data) => {
        initTeamState(data);
      });
  }, [initTeamState]);

  function handleDate(e) {
    e.preventDefault();
    props.setDate(e.target.value);
  }

  function formatDate() {
    let [year, ...date] = props.Date.split("-");
    date = date.join("-");
    date = [date, "-", ...year].join("");
    return date;
  }

  let matchUpFunc = function (winner, loser) {
    let opponent = 1;
    let isMatchInterLeague = (function () {
      opponent = props.MLBTeams.filter((item) => {
        return item.team === winner || item.team === loser ? item : null;
      });
      return checkLeague(opponent[0].league, opponent[1].league);
    })();

    function checkLeague(a, b) {
      return a === b ? 0 : 1;
    }

    function checkDivisionString(a, b) {
      return a === b ? 1 : 0;
    }

    function checkDivisionRivals() {
      if (!isMatchInterLeague)
        return checkDivisionString(opponent[0].division, opponent[1].division);
      return 0;
    }

    return [isMatchInterLeague, checkDivisionRivals];
  };

  function generateOutput() {
    let output = props.Games.map((item, i) => {
      if (item.winner !== "" && item.loser !== "") {
        let [printInterLeagueValue, printDivisionRivalValue] = matchUpFunc(
          item.winner,
          item.loser
        );
        return (
          <Output key={i}>
            {item.winner} vs {item.loser}, {item.venue}, {formatDate()},
            {item.winnerRuns}, {item.loserRuns}, 0, {printDivisionRivalValue()},
            {printInterLeagueValue},
          </Output>
        );
      }
      return;
    });

    return output;
  }
  return (
    <div className="App">
      <input
        required
        type="text"
        placeholder={new Date().toISOString().split("T")[0]}
        onFocus={(e) => (e.currentTarget.type = "date")}
        onBlur={(e) => (e.currentTarget.type = "text")}
        onChange={(e) => handleDate(e)}
      ></input>
      {props.Games.length === 0 ? (
        <div> No game data </div>
      ) : (
        <GamesForm
          Games={props.Games}
          Teams={props.MLBTeams}
          setWinnerInfo={props.setWinnerInfo}
          setLoserInfo={props.setLoserInfo}
          setWinnerRuns={props.setWinnerRuns}
          setLoserRuns={props.setLoserRuns}
          setVenue={props.setVenue}
          removeGame={props.removeGame}
          swapMatchup={props.swapMatchup}
        />
      )}
      <Button handleEvent={props.addGame}> Enter another game </Button>
      <Button handleEvent={() => setDisplayOutput(!displayOutput)}>
        Toggle output
      </Button>
      {displayOutput ? generateOutput() : () => props.getGames}

    </div>
  );
}
