import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vlljvshssngonqwagiho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbGp2c2hzc25nb25xd2FnaWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTIwNjksImV4cCI6MjAzMjk4ODA2OX0.jFK0QunYPviiGpk1z7cwv5Jw1u7npqDRReT1uNWZfJE';

export const supabase = createClient(supabaseUrl, supabaseKey);