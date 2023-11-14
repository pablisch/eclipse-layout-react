import RegularPlayer from "./RegularPlayer";

function RegularPlayers({ players, handlePlayerPlaying }) {

  return (
    <div className="regulars">
      <RegularPlayer />
      {players.map(player => (
        <RegularPlayer key={player.name} player={player} handlePlayerPlaying={handlePlayerPlaying} />
      ))}
    </div>
  )
}

export default RegularPlayers
