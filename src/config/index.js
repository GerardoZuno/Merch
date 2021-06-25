require('dotenv').config();

const config = {
   
    db_user: process.env.DB_USER,
    client_id: process.env.CLIENT_ID,
    google_api_key: process.env.GOOGLE_API_KEY


}

module.exports = {
    config
}