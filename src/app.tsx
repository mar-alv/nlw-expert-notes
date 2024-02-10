import { ChangeEvent, useState } from 'react'
import logo from './assets/nlw-expert-logo.svg'
import { NewNoteCard, NoteCard } from './components'
import { Note } from './interfaces'

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(loadNotesStoraged)

  function loadNotesStoraged () {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage)
      return JSON.parse(notesOnStorage)

    return []
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const updatedNotes = [newNote, ...notes]

    setNotes(updatedNotes)

    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  function onNotedDeleted(id: string) {
    const updatedNotes = notes.filter(i => i.id !== id)

    setNotes(updatedNotes)

    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  const filteredNotes = search !== ''
    ? notes.filter(i => i.content.toLowerCase().includes(search.toLowerCase()))
    : notes

  return (
    <main className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={logo} alt="NLW Expert" />

      <form className="w-full mt-6">
        <input
          type="text"
          placeholder='Busque em suas notas...'
          onChange={handleSearch}
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <hr className='h-px border-none bg-slate-700' />

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map(i => (
          <NoteCard
            key={i.id}
            note={i}
            onNotedDeleted={onNotedDeleted}
          />
        ))}
      </section>
    </main>
  )
}
