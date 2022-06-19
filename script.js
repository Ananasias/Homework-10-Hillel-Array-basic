let array = [];

function homework() {
    while (true) {
        const value = prompt('Enter value or "break" for break');
        if (value === "break") break;
        if (value === "") break;
        if (value === null) break;
        else array.push(`${value[0].toUpperCase()}${value.slice(1)}`);
        array.sort(function (first, second) {
            return first.length - second.length;
        });
    }
    return array;
}
homework();