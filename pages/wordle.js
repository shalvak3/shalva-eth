import Head from 'next/head'

import WordleMeta from '../components/wordle/wordle_meta'
import WordleHeader from '../components/wordle/wordle_header'
import WordleFooter from '../components/wordle/wordle_footer'
import WordleBoard from '../components/wordle/wordle_board'
import WordleTiles from '../components/wordle/wordle_tiles'

export default function Wordle() {
    return (
        <WordleBoard>
            <WordleMeta />
            <Head>
                <title>Wordle - a daily word game clone 🐑</title>
            </Head>
                <WordleHeader />
                <WordleTiles />
                <WordleFooter />
        </WordleBoard>
    )
}