const textDefault = `João é um nome muito comum no Brasil, sendo utilizado por diversas pessoas.
Alguns dos significados atribuídos a esse nome incluem 'Deus é gracioso' ou 'agraciado por Deus'.
Além disso, João é um dos nomes mais mencionados na Bíblia, sendo o nome do apóstolo que escreveu o livro de Apocalipse.`;

const files = ['att.jpg', 'teste.png', 'teste.JPEG', 'list.txt', 'FOTO.jpeg'];

const html = `<p>Olá mundo</p> <p>Hello world</p>`;

const characters = `abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%&*()-+/={}[];:<>,.? 012345678910 $%&*()-`;

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs1 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = { textDefault, files, html, characters, cpfs, cpfs1, lookahead };