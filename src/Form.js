import { useEffect, useState } from 'react';

function Form() {
  const [layout, setLayout] = useState(false);
  const [players, setPlayers] = useState([]);
  const [playerOrder, setPlayerOrder] = useState([]);

  const [pabloChecked, setPabloChecked] = useState(true);
  const [orrinChecked, setOrrinChecked] = useState(true);
  const [alexChecked, setAlexChecked] = useState(true);
  const [barneyChecked, setBarneyChecked] = useState(true);
  const [timChecked, setTimChecked] = useState(true);

  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [add3, setAdd3] = useState('');
  const [add4, setAdd4] = useState('');
  const [add5, setAdd5] = useState('');
  const [add6, setAdd6] = useState('');

  const [layoutImage, setLayoutImage] = useState('images/playTable.png');

  const handleCheats = (e) => {
    e.preventDefault();
    alert("It's done, deal with it!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers([]);
    let count = 0;
    console.log(pabloChecked);
    console.log(orrinChecked);
    console.log(alexChecked);
    console.log(barneyChecked);
    console.log(timChecked);
    pabloChecked && count++;
    orrinChecked && count++;
    alexChecked && count++;
    barneyChecked && count++;
    timChecked && count++;
    add1 && count++;
    add2 && count++;
    add3 && count++;
    add4 && count++;
    add5 && count++;
    add6 && count++;
    if (count > 6) {
      alert('Eclipse has a maximum of 6 players.');
      return;
    } else if (count < 4) {
      alert('With less than 4 players, you should be able to work this out yourselves!');
      return;
    }

    pabloChecked && setPlayers((players) => [...players, 'Pablo']);
    orrinChecked && setPlayers((players) => [...players, 'Orrin']);
    alexChecked && setPlayers((players) => [...players, 'Alex']);
    barneyChecked && setPlayers((players) => [...players, 'Barney']);
    timChecked && setPlayers((players) => [...players, 'Tim']);
    add1 && setPlayers((players) => [...players, add1]);
    add2 && setPlayers((players) => [...players, add2]);
    add3 && setPlayers((players) => [...players, add3]);
    add4 && setPlayers((players) => [...players, add4]);
    add5 && setPlayers((players) => [...players, add5]);
    add6 && setPlayers((players) => [...players, add6]);
    
    setAdd1('');
    setAdd2('');
    setAdd3('');
    setAdd4('');
    setAdd5('');
    setAdd6('');
    setLayout(true);
    console.log(players)
  };

  useEffect(() => {
    console.log(players);
    shuffleArray(players);
    setPlayerOrder(players);
    console.log(players);
    getTableImage();
  }, [players])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    if (players.includes('Pablo')) {
      if (Math.floor(Math.random() * (5 - 1 + 1) + 1) !== 1) {
        let index = players.indexOf("Pablo");
        if (index !== -1) {
          let removed = players.splice(index, 1);
          players.unshift(removed[0]);
        }
      }
    }

    return array;
  }

  function getTableImage() { 
    console.log(players.length)
    if (players.length === 4) {
      if (Math.floor(Math.random()*(2-1+1)+1) === 1) {
        setLayoutImage("images/playTableFourV1b.png");
        console.log('layoutImage:', layoutImage);
      } else {
        setLayoutImage("images/playTableFourV2b.png");
        console.log('layoutImage:', layoutImage);
      }
    }

    if (players.length === 5) {
      var randomNumber = (Math.floor(Math.random()*(5-1+1)+1))
      console.log(randomNumber)
      switch(randomNumber) {
        case 1:
          setLayoutImage("images/playTableFiveV1b.png");
          break;
          case 2:
          setLayoutImage("images/playTableFiveV2b.png");
          break;
          case 3:
          setLayoutImage("images/playTableFiveV3b.png");
          break;
          case 4:
          setLayoutImage("images/playTableFiveV4b.png");
          break;
          case 5:
          setLayoutImage("images/playTableFiveV5b.png");
          break;
          default:
          setLayoutImage("images/playTable.png");
          break;
      }
    }
  }

  return (
    <div>
      <nav className="navbar">
      <div className="container">
        <div className="logo">Eclipse Layout Generator</div>
        <ul className="nav">
          <li className={layout ? 'generated' : 'generate'}>
              <p onClick={layout ? handleCheats : handleSubmit}>{ layout ? 'Deal With Game Layout' : 'Generate Game Layout' }</p>
          </li>
        </ul>
      </div>
      </nav>
      
      <div className="formDiv">
          

      
      <form className='form'>
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
          <div className="others">
        <div>
          <label htmlFor='add1'>{add1 ? "Added " : "Add new player: "} </label>
          <input
            id='add1'
              type='text'
              maxlength="10"
            value={add1}
            onChange={(e) => setAdd1(e.target.value)}
          />
        </div>
            

        {add1 && (
          <div>
            <label>{add2 ? "Added " : "Add new player: "}</label>
            <input
              type='text'
              value={add2}
              onChange={(e) => setAdd2(e.target.value)}
            />
          </div>
        )}

        {add2 && (
          <div>
            <label>{add3 ? "Added " : "Add new player: "}</label>
            <input
              type='text'
              value={add3}
              onChange={(e) => setAdd3(e.target.value)}
            />
          </div>
        )}

        {add3 && (
          <div>
            <label>{add4 ? "Added " : "Add new player: "}</label>
            <input
              type='text'
              value={add4}
              onChange={(e) => setAdd4(e.target.value)}
            />
          </div>
        )}

        {add4 && (
          <div>
            <label>{add5 ? "Added " : "Add new player: "}</label>
            <input
              type='text'
              value={add5}
              onChange={(e) => setAdd5(e.target.value)}
            />
          </div>
        )}

        {add5 && (
          <div>
            <label>{add6 ? "Added " : "Add new player: "}</label>
            <input
              type='text'
              value={add6}
              onChange={(e) => setAdd6(e.target.value)}
            />
          </div>
            )}
            </div>
        </form>
        </div>

      <section className="maincols">
      <section className="container">
        
        <section className="left-side">
          <section className="boxes">
            <div className="container">
              <div className="box three">
                <h2 id = "three"><i className="fa-solid fa-ghost"></i>{players[2] ? players[2] : 'Player 3'}</h2>
              </div>
            </div>
          </section>
        </section>

        <section className="right-side">
          <section className="boxes">
              <div className="container">
                {(layout && players.length < 5) ? null : (
                  <div className="box five">
                <h2 id="five"><i className="fa-solid fa-ghost"></i>{players[4] ? players[4] : 'Player 5'}</h2>
              </div>
                )}
              <div className="box one">
                <h2 id ="one"><i className="fa-solid fa-ghost"></i>{players[0] ? players[0] : 'Player 1'}</h2>
              </div>
            </div>
          </section>
            <section className="table">
              {layoutImage && <img className='image' src={layoutImage} alt='table layout'/>}
          </section>
            <section className="boxes">
              <div className="container">
                <div className="box two">
                  <h2 id ="two"><i className="fa-solid fa-ghost"></i>{players[1] ? players[1] : 'Player 2'}</h2>
                </div>
                <div className="box four">
                  <h2 id = "four"><i className="fa-solid fa-ghost"></i>{players[3] ? players[3] : 'Player 4'}</h2>
                </div>
                {(layout && players.length < 6) ? null : (<div className="box six">
                  <h2 id = "six"><i className="fa-solid fa-ghost"></i>{players[5] ? players[5] : 'Player 6'}</h2>
                </div>)}
                
              </div>
            </section>
          </section>

        </section>
      </section>
    </div>
  );
}

export default Form;
