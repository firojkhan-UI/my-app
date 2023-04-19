import styled from "styled-components"

const hArr = [ "a", "b","c","d","e","f","g","h"]
const vArr = [ "1", "2","3", "4","5","6","7","8"]


const ChessBoard = () => {

    let board = []
  
        for(let i = hArr.length-1; i >=0; i--) {
            for(let j = 0; j < vArr.length; j++) {
                if((i+j) % 2 !== 0) {
                    board.push(<Board key={i.toString()+j.toString()} selectedColor='white' />)
                }
                else {
                    board.push(<Board key={i.toString()+j.toString()} selectedColor='black'/>)
                }
            }
        }

    return (
        <div>
            {board}
        </div>
    )
}

export default ChessBoard

const Board = props => {
    const {selectedColor} = props
    return (
        <div style={{backgroundColor: selectedColor,width: '100px',height: '100px'}}></div>
    )
}