// export default function Btn(){
//     const clickHandler = () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );
// }


export default function Btn(){
    const clickHandler = () => console.log('Mouse Over')
    return (
        <button onMouseOver={clickHandler}>
            Click me
        </button>
    );
}