import Button from './button';

export default function ({letterGuessed, isShown}){
    
    let letters = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
        
    ];
    let buttons = letters
    
    .map((letter,index)=>(
        <Button 
            value={letter}
            key={index}
            onClick={letterGuessed}
        />
    ));
    let className = 'flex flex-wrap mt-10';
    let className2= '';
    if (!isShown){
        className += ' hidden'
    }
    else{
        className2 ='hidden'
    }
    return(
        <div>
            <div className={className}>
                {buttons} 
            </div>
            <div className={className2}>
                <h1 id="lost">You Lost</h1> 
            </div>
        </div>
    )
}