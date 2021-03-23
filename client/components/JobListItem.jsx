import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {Provider} from 'react-redux'

import { JobListItem } from './JobList'

import { deleteJob } from './api'
import { REMOVE_JOB } from './actions'
import store from './store'

const job = {id: 1, jobName: 'Test Job'}

jest.mock('../api', () => ({
    deleteJob: jest.fn(() => Promise.resolve('done'))
}))

jest.mock('./JobEdit.jsx', () => (() => <>JobEdit</>))

jest.spyOn(store, 'dispatch')

beforeEach(() => render(<Provider store={store}><JobListItem job={job}/></Provider>))

test('renders a list item', () => {
    const listItem = screen.getByRole('tr')
    expect(listItem.innerHTML).toMatch(/do stuff/)
})

test("shows edit form", () => {
    let listItem = screen.getByRole('listitem')
    expect(listitem.innerHTML).toMatch(/Edit Form/)
})