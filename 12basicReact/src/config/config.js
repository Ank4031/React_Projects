const conf = {
    appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_database_id: String(import.meta.env.VITE_APPWRITE_DB_ID),
    appwrite_collection_id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucked_id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;