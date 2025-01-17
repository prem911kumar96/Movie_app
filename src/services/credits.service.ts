import { httpClient } from '../utils/httpClient';

export const getMovieEditors = async (movieId: number) => {
    try {
        const response = await httpClient.get(`/movie/${movieId}/credits`);

        return response.data.crew
            .filter((person: any) => person.known_for_department === 'Editing')
            .map((editor: any) => editor.name);
    } catch (error) {
        console.warn(`Failed to fetch editors for movie ${movieId}:`, (error as Error).message);

        return [];
    }
};
