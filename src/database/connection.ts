import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017/payment')
.then(() => console.log('Conectado Mongo'))
.catch(() => console.log('Erro'));
