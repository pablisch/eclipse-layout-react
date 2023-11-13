function AdditionalPlayers({ addPlayer, setAddPlayer, handleNewPlayer }) {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleNewPlayer(addPlayer);
    setAddPlayer('')
  };

  return (
    <div className='others'>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name: </label>
        <input
          id='add1'
          type='text'
          value={addPlayer}
          onChange={(e) => setAddPlayer(e.target.value)}
        />
        <button type="submit">Add new player</button>
      </form>
    </div>
  );
}

export default AdditionalPlayers;
