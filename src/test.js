let Game = [
  {
    winner: 'NYY',
    loser: 'NYM',
    winnerLeague: 0,
    loserLeague: 1
  },
]

function testInterLeagueFlag(Game){
  let interLeagueGameFlag = props.Games.filter( item => {
    if (item.team === winner || item.team === loser){
      return item.league
    }
  })
  return interLeagueGameFlag
}

describe('test interLeagueFlag', () => {
  let game = new Game
    it('compares the opponents leagues', testInterLeagueFlag(game))
})