const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your actual MongoDB connection string
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const dbName = 'helpCenter';
let db, cardsCollection;

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    db = client.db(dbName);
    cardsCollection = db.collection('cards');
  })
  .catch(error => console.error(error));

app.use(express.json());

app.use(express.static(path.join(__dirname,'help-center','dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'help-center','dist'))
})
// Create a card
app.post('/api/cards', async (req, res) => {
  try {
    const card = req.body;
    const result = await cardsCollection.insertOne(card);
    console.log(result.insertedId);
    
    res.status(201).json(result.insertedId);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: 'Failed to create card' });
  }
});

// Get all cards
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await cardsCollection.find().toArray();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
});

// Get a specific card by title
app.get('/api/cards/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const card = await cardsCollection.findOne({ title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch card' });
  }
});

// Update a card by ID
app.put('/api/cards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = req.body;
    const result = await cardsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updatedCard },
      { returnOriginal: false }
    );
    res.json(result.value);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update card' });
  }
});

// Delete a card by ID
app.delete('/api/cards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await cardsCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete card' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
