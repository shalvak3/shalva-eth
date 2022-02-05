import Container from "../container"

export default function WordleHeader(){
    return (
        <Container>
            <div className='flex flex-row space-x-1 justify-between'> 
                <button>Help</button>
                <div>WORDLE</div>
                <div className='space-x-1'>
                    <button>Stats</button>
                    <button>Toggle</button>
                </div>
            </div>
        </Container>
    )
}