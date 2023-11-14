function RegularPlayer({ player, handlePlayerPlaying }) {

  if (!player) {
    return null;
  }

  return (
    <>
      {player && (
        <label className='checkbox-container'>
        <input
          type='checkbox'
          checked={player.playing}
          name={player.name}
          onChange={() => handlePlayerPlaying(player.name)}
        />
        {player.name}
      </label>
      )}
      
    </>
  );
}

export default RegularPlayer;

