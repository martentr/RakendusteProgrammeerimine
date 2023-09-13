//luua array numbritega ja leida spetsiifilise numbri index

const BigNumber = [1, 10, 100, 1000, 10000];

function findMyIndex(BigNumber, element){
    return BigNumber.indexOf(element)
}

console.log(findMyIndex(BigNumber, 100))