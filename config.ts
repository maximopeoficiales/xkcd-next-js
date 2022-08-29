export const config = {
    ALGOLIA: {
        APP_ID: process.env.ALGOLIA_APP_ID || "",
        API_KEY: process.env.ALGOLIA_API_KEY || "",
        INDEX_NAME: process.env.ALGOLIA_INDEX_NAME || "",
    }
}