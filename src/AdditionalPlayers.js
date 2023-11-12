function AdditionalPlayers({add1, add2, add3, add4, add5, add6, setAdd1, setAdd2, setAdd3, setAdd4, setAdd5, setAdd6}
) {
  return (
      <div className='others'>
        <div>
          <label htmlFor='add1'>{add1 ? 'Added ' : 'Add new player: '} </label>
          <input
            id='add1'
            type='text'
            value={add1}
            onChange={(e) => setAdd1(e.target.value)}
          />
        </div>

        {add1 && (
          <div>
            <label>{add2 ? 'Added ' : 'Add new player: '}</label>
            <input
              type='text'
              value={add2}
              onChange={(e) => setAdd2(e.target.value)}
            />
          </div>
        )}

        {add2 && (
          <div>
            <label>{add3 ? 'Added ' : 'Add new player: '}</label>
            <input
              type='text'
              value={add3}
              onChange={(e) => setAdd3(e.target.value)}
            />
          </div>
        )}

        {add3 && (
          <div>
            <label>{add4 ? 'Added ' : 'Add new player: '}</label>
            <input
              type='text'
              value={add4}
              onChange={(e) => setAdd4(e.target.value)}
            />
          </div>
        )}

        {add4 && (
          <div>
            <label>{add5 ? 'Added ' : 'Add new player: '}</label>
            <input
              type='text'
              value={add5}
              onChange={(e) => setAdd5(e.target.value)}
            />
          </div>
        )}

        {add5 && (
          <div>
            <label>{add6 ? 'Added ' : 'Add new player: '}</label>
            <input
              type='text'
              value={add6}
              onChange={(e) => setAdd6(e.target.value)}
            />
          </div>
        )}
      </div>
  );
}

export default AdditionalPlayers;
