export default function WordleBoard({ children }) {
    return(
        <div className="w-full h-full bg-white dark:bg-gray-900 text-black dark:text-white">
            <style global jsx>{`
                body, html {
                    height:100%;
                    margin:0px;
                }
                #__next {
                    height:100%;                    
                }
           `}</style>
            <div className="flex flex-col my-0 mx-auto w-full h-full 
                            max-w-screen-wordle font-sans text-lg p-0 items-center">
                {children}
             </div>
        </div>
    )
}