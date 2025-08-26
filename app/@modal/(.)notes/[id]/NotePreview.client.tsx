'use client'

import NoteModal from '@/components/NoteModal/NoteModal'
import css from './NotePreview.module.css'
import { Note } from '@/types/note'

interface NotePreviewProps {
    note: Note
}

export default function NotePreview({ note }: NotePreviewProps) {
    return (
        <NoteModal>
            <div className={css.item}>
                <h2 className={`${css.header} ${css.h2}`}>{note.title}</h2>
                <p className={css.content}>{note.content}</p>
                <p className={css.date}>Created:{note.createdAt}</p>
                <p className={css.date}>Updated: {note.updatedAt}</p>
                <p className={css.tag}>{note.tag}</p>
            </div>
        </NoteModal>
    )
}
