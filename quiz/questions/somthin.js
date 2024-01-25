



const text = 'This is sentence 1. This is sentence 2! And this is sentence 3?';

const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
