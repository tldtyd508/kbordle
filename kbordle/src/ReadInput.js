import React, { useState } from 'react'
import ReadFile from './ReadFile';


// class ReadInputComponent extends React.Component {

//     onChangeText = (e)=>{
//         this.setState({
//             // text : e.target.value
//         })
//     }

//     onClick = ()=>{
//     }

//     onEnterpress = (e)=>{
        
//         if (e.key === 'Enter') {
//             this.setState({
//                 text: e.target.value
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={this.onChangeText} onKey={this.onEnterpress}/>
//                 <button onClick={this.onClick}>입력</button>
//                 <h2>{this.state.text}</h2>
//             </div>
//         )
//     }
// }

// export default ReadInputComponent;

export default function ReadInput() {

    const [input, setInput] = useState("");

    const onChangeText = (e)=>{
        setInput(e.target.value)
    }

    const onClick = ()=>{
        console.log(input);
    }

    const onEnterpress = (e)=>{
        if (e.keyCode === 13)
            console.log(input);
    }

    console.log(ReadFile());
    

    return (
        <div>
            <input value={input} onChange={onChangeText} onKeyDown={onEnterpress}></input>
            <button onClick={onClick}>확인</button>
            <h2>{input}</h2>
        </div>
    )
    
}