import { useState, ChangeEvent } from 'react'
import '../app/globals.css'

export default function Teste() {

    const [text, setText] = useState('');

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const spaceCount = (text.match(/\s/g) || []).length;
    const consonantCount = (text.match(/[^aeiou\s\d\W]/gi) || []).length;
    const vowelCount = (text.match(/[aeiou]/gi) || []).length;

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <div className='flex flex-col min-h-screen min-w-screen'>

            <div className='flex flex-col min-h-screen min-w-screen align-middle justify-center'>
                <div className='flex justify-center p-5 flex-col'>
                    <div className='flex justify-center p-5'>
                        <textarea
                            value={text}
                            onChange={handleChange}
                            className='text-gray-800 w-[50%] h-[300px] mx-auto p-2'
                            placeholder='Digite aqui...'
                        ></textarea>
                    </div>
                    <div className='flex min-w-full min-h-full justify-center p-5'>
                        <div className='flex flex-col min-w-[50%] justify-center'>
                            <div className='bg-slate-200 flex flex-row'>
                                <div className='bg-slate-400 w-[50%] p-1'>
                                    Palavras: {wordCount}
                                </div>
                                <div className='text-gray-800 flex w-[50%] p-1'>
                                    Espaços: {spaceCount}
                                </div>
                            </div>
                            <div className='bg-slate-200 flex flex-row min-w-full'>
                                <div className='text-gray-800 flex w-[50%] p-1'>
                                    Consoantes: {consonantCount}
                                </div>
                                <div className='bg-slate-400 w-[50%] p-1'>
                                    Vogais: {vowelCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
