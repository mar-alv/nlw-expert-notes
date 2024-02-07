import logo from './assets/nlw-expert-logo.svg'
import { NewNoteCard, NoteCard } from './components'

export function App() {
  return (
    <header className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <hr className='h-px border-none bg-slate-700' />

      <section className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />

        <NoteCard
          note={{
            content: 'aaa',
            date: new Date()
          }}
        />
        <NoteCard
          note={{
            content: 'aaa',
            date: new Date()
          }}
        />
        <NoteCard
          note={{
            content: 'aaa',
            date: new Date()
          }}
        />
      </section>
    </header>
  )
}
