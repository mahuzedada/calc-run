import Keys from "./Keys";
import handleEqual from "./handleEqual";
import handleBackSpace from "./handleBackSpace";
import handleDot from "./handleDot";
import handleClear from "./handleClear";
import handleOperator from "./handleOperator";
import handleNumber from "./handleNumber";
import getOutput from "./getOutput";
import {State} from "./State";

export default function handleKey(this: State, key: typeof Keys[number]) {
    const { workingStatement, updateCallBack } = this;
    if(key !== 'c') {
        this.isPartiallyCleared = false;
    }
    switch (key) {
        case 'c':
            handleClear.bind(this)();
            break;
        case 'bs':
            handleBackSpace.bind(this)();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator.bind(this)(key);
            break;
        case '=':
            handleEqual.bind(this)();
            break;
        case '.':
            handleDot.bind(this)();
            break;
        default:
            handleNumber.bind(this)(key);
            break;
    }
    updateCallBack({ws: workingStatement, output: getOutput.bind(this)()});
}