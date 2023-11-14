function AdditionalPlayers({ addPlayer, setAddPlayer, handleNewPlayer }) {

  const handleAddPlayerSubmit = (e) => {
    e.preventDefault(); 
    handleNewPlayer(addPlayer);
    setAddPlayer('')
  };

  return (
    <div className='others'>
      <form onSubmit={handleAddPlayerSubmit}>
        <label htmlFor=''>Name: </label>
        <input
          id='add'
          type='text'
          value={addPlayer}
          onChange={(e) => setAddPlayer(e.target.value)}
        />
        <button className="add-player-btn" type="submit">Add new player</button>
      </form>
    </div>
  );
}

export default AdditionalPlayers;
