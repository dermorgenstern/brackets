module.exports = function check(str, bracketsConfig) {

    let initialArr = str.split('');

    if ((initialArr.length % 2 !== 0) || (initialArr.length < 2)) return false;

    const isOpening = (bracket) => {
        return (bracketsConfig.filter(arrEl => arrEl[0] === bracket).length > 0);
    };

    const isClosing = (bracket) => {
        return (bracketsConfig.filter(arrEl => arrEl[1] === bracket).length > 0);
    };

    const findPair = (bracket) => {
        return (bracketsConfig.filter(arrEl => arrEl[1] === bracket).map(arrEl => arrEl[0]))[0];
    }

    const finalArr = initialArr.reduce((acc, curr) => {

        if (isClosing(curr)) {
            if (acc[acc.length - 1] === findPair(curr)) {
                acc.pop();
                return acc;
            }
        }
        acc.push(curr);
        return acc;

    }, []) || ["error"];

    return (finalArr.length === 0);
}
