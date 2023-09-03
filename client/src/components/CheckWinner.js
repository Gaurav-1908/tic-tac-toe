export const checkWinner = (matrix) => {
    if(matrix[0] === matrix[1] && matrix[1] === matrix[2]){
        if(matrix[0] === "X"){
            
            return "X"
        }
        else if(matrix[0] === "O"){
            return "O"
        }
    }

    if(matrix[3] === matrix[4] && matrix[4] === matrix[5]){
        if(matrix[3] === "X"){
            return "X"
        }
        else if(matrix[3] === "O"){
            return "O"
        }
    }

    if(matrix[6] === matrix[7] && matrix[7] === matrix[8]){
        if(matrix[6] === "X"){
            return "X"
        }
        else if(matrix[6] === "O"){
            return "O"
        }
    }

    if(matrix[0] === matrix[3] && matrix[3] === matrix[6]){
        if(matrix[0] === "X"){
            return "X"
        }
        else if(matrix[0] === "O"){
            return "O"
        }
    }

    if(matrix[1] === matrix[4] && matrix[4] === matrix[7]){
        if(matrix[1] === "X"){
            return "X"
        }
        else if(matrix[1] === "O"){
            return "O"
        }
    }

    if(matrix[2] === matrix[5] && matrix[5] === matrix[8]){
        if(matrix[2] === "X"){
            return "X"
        }
        else if(matrix[2] === "O"){
            return "O"
        }
    }

    if(matrix[0] === matrix[4] && matrix[4] === matrix[8]){
        if(matrix[0] === "X"){
            return "X"
        }
        else if(matrix[0] === "O"){
            return "O"
        }
    }

    if(matrix[6] === matrix[4] && matrix[4] === matrix[2]){
        if(matrix[6] === "X"){
            return "X"
        }
        else if(matrix[6] === "O"){
            return "O"
        }
    }

    return ""
}