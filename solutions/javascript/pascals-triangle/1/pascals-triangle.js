export function rows(totalRows) {
    const pascalTriangle = [];

    for(let rowIndex = 0; rowIndex < totalRows; rowIndex++){
        const currentRow = [1];

        let previousRow = pascalTriangle[rowIndex - 1];
        if(previousRow){
            for(i=1; i < previousRow.length; i++) {
                currentRow.push(previousRow[i-1] + previousRow[i]);
            }

          currentRow.push(1);  
        }
        pascalTriangle.push(currentRow);
    }

    return pascalTriangle;
}

console.log(rows(10));