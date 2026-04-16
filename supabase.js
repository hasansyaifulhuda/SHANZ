import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://buypqhyncmwbqlwzvzhj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_VHhQ2uyBOhnM1H1lg0CpZg_jy0Iom3r";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);