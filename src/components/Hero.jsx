import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-5'>
        <img src={logo} alt="logo" className='w-28 object-contain'/>

        <button
          type='button'
          onClick={() => window.open('https//github.com')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      
      <h1 className='head_text'>
          Summarize Your Article <br className='max-md:hidden' />
          <span className='orange_gradient'>with GPT-4</span>
      </h1>
      <h2 className='desc'>
        AI Summarizer is a web application designed to simplify the process of summarizing information. 
        Using advanced natural language processing, the tool enables users to condense lengthy texts 
        into concise summaries with ease.
      </h2>
    </header>
  )
}

export default Hero