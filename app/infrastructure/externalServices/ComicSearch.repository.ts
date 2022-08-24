import { config } from '@/config';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite';
import { ComicSearch, OptionsAlgolia } from '@/domain/ComicSearch.response';
export class ComicSearchRepository {
    client: SearchClient;
    index: SearchIndex;
    CACHE: any = {};
    constructor() {
        this.client = algoliasearch(config.ALGOLIA.APP_ID, config.ALGOLIA.API_KEY);
        this.index = this.client.initIndex(config.ALGOLIA.INDEX_NAME);
    }

    async search(query: string, options?: OptionsAlgolia) {
        if (this.CACHE[query]) {
            console.log("en cache", query);
            return this.CACHE[query];
        }
        console.log("buscando", query);

        const { hits } = await this.index.search<ComicSearch>(query, options);
        this.CACHE[query] = hits;
        return hits;
    }

}

export const comicSearchRepositoryInstance = new ComicSearchRepository();