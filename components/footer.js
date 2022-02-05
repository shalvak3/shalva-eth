import Container from '../components/container'

export default function Footer() {
    return(
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
               <div className="py-10 flex flex-col lg:flex-row items-center justify-between">
                <p>just a footer.</p>
                 {/*}   <div className="flex flex-row space-x-1">
                        <div>Twitter</div>
                        <div>Linkedin</div>
                        <div>Insta</div>
                    </div>
                    <div>random inspirational quote.</div>
                */}
                </div>
            </Container>
        </footer>
    )
}