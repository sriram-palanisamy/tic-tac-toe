import React,{useState, useEffect} from 'react'

const winningPossible = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let counter=0;
const TicTok = () => {
  const [list, setList] = useState(new Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(false);


  useEffect(()=>{
    const isWinner = counter>= 5 ? checkWinner() : null;
    if(!!isWinner){
      alert("winner");
      onReset();
    }else{
      const isDraw = list.filter(item=>item);
      if(isDraw.length === 9 ){
        alert("MATCH DRAW")
        onReset();
      }

    }
  },[list])
  
  const checkWinner = () =>{
    for(var a=0;a<winningPossible.length ; a++){
      const [value1, value2, value3] = winningPossible[a];
      if(list[value1] === list[value2] && list[value1] === list[value3]){
        return list[value1]
      }
    }
    return false;
  }

  const onClickHandler =  (e, index) =>{
    if(!list[index]){
      counter = counter + 1;
      const oldList = [...list];
      oldList[index] = nextPlayer ? "O" :"X";
      setList([...oldList]);
      setNextPlayer((prevState)=>!prevState)
    }
  }

  const onReset= () =>{
    setList(new Array(9).fill(null));
    setNextPlayer(false)
  }
    return (
      <>
        <div className="board">
          {list.map((value, index)=>{
            return <span onClick={(e)=>onClickHandler(e,index)} className="box">{value}</span>
          })}
        </div>
        <div>
          <span>Player : &nbsp;</span>
          <span>{nextPlayer ? "O" :"X" }</span>
        </div>
         <div>
          <button onClick={onReset}>Reset</button>
        </div>
      </>
    )
}

export default TicTok;