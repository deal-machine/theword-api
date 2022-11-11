interface ITest {
    add: (number: number) => number;
}
class Test implements ITest {
    add(number: number) {
        return number + 1;
    }
}

export { Test, ITest };

