// testSupabaseConnection.js
require('dotenv').config({ path: '.env.local' }); // Explicitly specify .env.local
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const testConnection = async () => {
  try {
    // Attempt a simple query to check the connection
    const { data, error } = await supabase
      .from('campaign_description') // Replace with a valid table name in your database

      .select('*')
      .limit(1); // Limit to 1 record to test connection only

    if (error) throw error;

    console.log('Connection successful! Sample data:', data);
  } catch (err) {
    console.error('Connection failed:', err.message);
  }
};

testConnection();
