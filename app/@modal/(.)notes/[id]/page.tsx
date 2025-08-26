import { getNoteById } from '@/lib/api'

import NotePreview from './NotePreview.client'
type Props = {
    params: Promise<{ id: string }>
}

const SingleNotePreview = async ({ params }: Props) => {
    const { id } = await params
    const note = await getNoteById(id)

    return (
        <>
            <NotePreview note={note}></NotePreview>
        </>
    )
}

export default SingleNotePreview
