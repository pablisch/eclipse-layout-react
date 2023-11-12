function RegularPlayers({pabloChecked, setPabloChecked, orrinChecked, setOrrinChecked, alexChecked, setAlexChecked, barneyChecked, setBarneyChecked, timChecked, setTimChecked}) {

  return (
    <div className="regulars">
        <label className='checkbox-container'>
          <input
            type='checkbox'
            checked={pabloChecked}
            name='pablo'
            onChange={() => setPabloChecked(!pabloChecked)}
          />{' '}
          Pablo
        </label>
        <label>
          <input
            type='checkbox'
            checked={orrinChecked}
            name='orrin'
            onChange={() => setOrrinChecked(!orrinChecked)}
          />{' '}
          Orrin
        </label>
        <label>
          <input
            type='checkbox'
            checked={alexChecked}
            name='alex'
            onChange={() => setAlexChecked(!alexChecked)}
          />{' '}
          Alex
        </label>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            checked={barneyChecked}
            name='barney'
            onChange={() => setBarneyChecked(!barneyChecked)}
          />{' '}
          Barney
        </label>
        <label>
          <input
            type='checkbox'
            checked={timChecked}
            name='tim'
            onChange={() => setTimChecked(!timChecked)}
          />{' '}
          Tim
            </label>
            </div>
  )
}

export default RegularPlayers
