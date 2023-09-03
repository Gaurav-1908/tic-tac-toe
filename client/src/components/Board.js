import { Row } from "react-bootstrap";
import { MyButton } from "./MyButton"
import { useState } from "react";
import { checkWinner } from "./CheckWinner";
import { w3cwebsocket  } from "websocket";

const url = process.env.REACT_APP_SERVER_ADDRESS;
const client = new w3cwebsocket(url);

export const Board = ({turn,setTurn}) =>{
    const [matrix, setMatrix] = useState(Array(9).fill(null));
    const [winner, SetWinner] = useState("");

    function reStart(){
        const tempMatrix = Array(9).fill(null)
        setMatrix(tempMatrix);
        setTurn("X");
        SetWinner("");
    }
    
    function onClick(index){
        client.send(JSON.stringify({
            index: index
          }));
    }

    client.onmessage = (index) =>{
        const dataFromServer = JSON.parse(index.data);
        // console.log( dataFromServer.index);
        const ind = dataFromServer.index;

        const tempMatrix = matrix
        if(turn === "X"){
            tempMatrix[ind] = "X";
            setTurn("O")
        }
        else{
            tempMatrix[ind] = "O";
            setTurn("X")
        }

        setMatrix(tempMatrix);
        const winner =  checkWinner(matrix);
        SetWinner(winner);
      }
   
    return(

        <Row className= "justify-content-center" style={{
            width:"270px",
            height:"270px",
            display:'flex',
            marginLeft:"35%",
            marginTop:"10%",
            marginRight:"45"
            
        }}
        >
            <p>{turn} Plays</p>
            {matrix.map(
                (mat,index) =>
                
                    <MyButton
                        key={index}
                        value={mat}
                        winner = {winner}
                        onClick={()=>onClick(index)}
                    />
            )
            }
            {winner ?
                <p>{winner} wins </p>
                :
                <Row><br/><br/></Row>
            }
            
            <button onClick={()=>reStart()}>Restart</button>
        </Row>
    )
}