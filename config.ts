export const config = {
    API_CATS: {
        URL: process.env.API_CATS_URL  || "https://api.thecatapi.com/v1", 
        API_KEY: process.env.API_CATS_API_KEY  || "11d63669-c7d5-4f96-8147-b957ccfb692b", 
    },
    ALGOLIA:{
        APP_ID: process.env.ALGOLIA_APP_ID || "BRWYRAUQ7X",
        API_KEY: process.env.ALGOLIA_API_KEY || "313ad2f73f2e9ac0a9065b1bc662f297",
        INDEX_NAME: process.env.ALGOLIA_INDEX_NAME || "prod_xkcd",
    }
}