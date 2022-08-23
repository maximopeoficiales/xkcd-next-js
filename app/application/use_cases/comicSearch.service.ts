import { OptionsAlgolia } from "@/domain/ComicSearch.response";
import { comicSearchRepositoryInstance } from "app/infrastructure/externalServices/ComicSearch.repository";

export class ComicSearchService {
    constructor(private repository = comicSearchRepositoryInstance) {

    }
    async search(query: string, options?: OptionsAlgolia) {
        return await this.repository.search(query, options);
    }
}

export const comicSearchServiceInstance = new ComicSearchService();