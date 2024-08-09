import { useState, ChangeEvent } from 'react';
import '../app/globals.css';

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
        <div className='flex flex-col min-h-screen min-w-full bg-gray-900 text-gray-200'>

            <div className='flex flex-col items-center justify-center min-h-screen min-w-full'>
                <div className='flex flex-col w-[60%]'>
                    <div className='mb-5'>
                        <textarea
                            value={text}
                            onChange={handleChange}
                            className='w-full h-[300px] p-4 bg-gray-800 text-gray-200 border border-gray-600 rounded resize-none'
                            placeholder='Digite aqui...'
                        ></textarea>
                    </div>
                    <div className='bg-gray-800 p-4 rounded'>
                        <div className='flex flex-row justify-between border-b border-gray-700 pb-2 mb-2'>
                            <div className='w-[50%]'>
                                <span className='font-bold'>Palavras: </span>{wordCount}
                            </div>
                            <div className='w-[50%] text-right'>
                                <span className='font-bold'>Espaços: </span>{spaceCount}
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='w-[50%]'>
                                <span className='font-bold'>Consoantes: </span>{consonantCount}
                            </div>
                            <div className='w-[50%] text-right'>
                                <span className='font-bold'>Vogais: </span>{vowelCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
