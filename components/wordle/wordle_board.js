export default function WordleBoard({ children }) {
    return(
        <div className="w-full h-full bg-indigo-500">
            <style global jsx>{`
                body, html {
                    height:100%;
                    margin:0px;
                }
                #__next {
                    height:100%;                    
                }
           `}</style>
            <div className="flex flex-col my-0 mx-auto w-full h-full max-w-xs font-sans text-lg p-0">
                {children}
             </div>
        </div>
    )
}