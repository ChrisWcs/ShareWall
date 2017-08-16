import glamorous from 'glamorous';

const SInput = glamorous.button({
    fontFamily: "Arial",
    fontSize: 20,
    letterSpacing: 2,
    color: "black",
    background: "white",
    border: "black 1px solid",
    padding: 5,
    ":hover": {
        color: "white",
        background: "black",
    }
});

export default SInput;