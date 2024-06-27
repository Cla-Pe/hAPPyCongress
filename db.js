// Importa il modulo mysql
const mysql = require('mysql');

// Configura i parametri di connessione al database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Utente di default di XAMPP
  password: '', // Password di default di XAMPP (solitamente vuota)
  database: 'happycongress' // Nome del database a cui connettersi
});

// Connettiti al database
connection.connect((err) => {
  if (err) {
    console.error('Errore durante la connessione al database:', err);
    return;
  }
  console.log('Connessione al database avvenuta con successo!');

  // Esegui una query di esempio
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Errore durante l\'esecuzione della query:', error);
      return;
    }
    console.log('Risultati della query:', results);
  });

  // Chiudi la connessione quando hai finito
  connection.end();
});
