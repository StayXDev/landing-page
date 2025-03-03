import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

// insert resume s3
export const insertResume = async (file, name) => {
  // Upload file to bucket
  const { data: resume, error: uploadError } = await supabase.storage
    .from("Resume")
    .upload(`${Date.now()}_${name}`, file);
  if (uploadError) {
    console.log(uploadError);
    return null;
  }
  // Get public URL for the uploaded file
  const { data: publicURL } = supabase.storage
    .from("Resume")
    .getPublicUrl(resume.path);
  return publicURL.publicUrl;
};

export const insertInNotify = async (data) => {
  const { data: notify, error } = await supabase
    .from("notify")
    .insert([data])
    .select("*");
  if (error) {
    console.log(error);
  }
  return notify;
};

export const insertInCareers = async (data) => {
  const { data: careers, error } = await supabase
    .from("careers")
    .insert([data])
    .select("*");
  if (error) {
    console.log(error);
  }
  return careers;
};
