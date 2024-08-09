'use client'
import { useRouter } from 'next/navigation';

const MeuComponente = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contador');
  };

  return (
    <div className='min-h-screen min-w-full bg-gray-900'>

      <div className='flex flex-col items-center bg-gray-800 text-gray-200 py-10'>
        <h1 className='text-4xl font-bold mb-4'>
          Olá, esta é uma aplicação simples.
        </h1>
        <h2 className='text-2xl'>
          Criada para contar palavras, espaços, consoantes e vogais.
        </h2>
      </div>

      <div className='flex justify-center p-10'>
        <button
          type='button'
          className='bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300'
          onClick={handleClick}>
          Acessar o Contador
        </button>
      </div>
    </div>
  );
};

export default MeuComponente;
