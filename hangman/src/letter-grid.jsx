export default function ({secretWord}){
    
    let letters = secretWord
    .split('')
    .map((letter)=>(
        <span>{letter}</span>
    ))

    
    return(
        <div>
           {letters} 
        </div>
    )
}