import Container from "../container"

export default function WordleHeader(){

    function toggleTheme() {
      document.documentElement.classList.toggle('dark')
    }

    return (
        <Container>
            <div className='flex flex-row space-x-1 justify-between'> 
                <button><i class="material-icons">help_outline</i></button>
                <div>WORDLE</div>
                <div className='space-x-1'>
                    <button>Stats</button>
                    <button onClick={toggleTheme}>Toggle</button>
                </div>
            </div>
        </Container>
    )
}