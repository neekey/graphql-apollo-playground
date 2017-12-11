const NOTE_LIST = [
  { id: 1, name: 'Note 1', read: true, },
  { id: 2, name: 'Note 2', read: true, },
  { id: 3, name: 'Note 3', read: true, },
];

module.exports = {
  noteList: () => NOTE_LIST,
  note: ({ id }) => {
    return NOTE_LIST.find(item => item.id === id);
  }
};
