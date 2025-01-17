import { Request, Response } from 'express';
import { getMoviesByYear } from '../services/movie.service';
import { getMovieEditors } from '../services/credits.service';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const { year, page = '1' } = req.query;

        if (!year || isNaN(Number(year))) {
            res.status(400).json({ error: 'Invalid or missing year parameter' });
            return;
        }

        const movies = await getMoviesByYear(year as string, Number(page));

        const moviesWithEditors = await Promise.all(
            movies.map(async (movie: { id: number; title: string; release_date: string; vote_average: number }) => ({
                ...movie,
                editors: await getMovieEditors(movie.id)
            }))
        );

        res.json(moviesWithEditors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
