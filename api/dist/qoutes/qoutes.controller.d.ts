import { QoutesService } from './qoutes.service';
export declare class QoutesController {
    private readonly qouteService;
    constructor(qouteService: QoutesService);
    getAllQuotes(): Promise<({
        votes: {
            id: number;
            userId: number;
            qouteId: number;
        }[];
        _count: {
            votes: number;
        };
    } & {
        id: number;
        text: string;
    })[]>;
    createQuote(req: any): Promise<{
        message: string;
    }>;
    getQuote(req: any): Promise<{
        id: number;
        text: string;
    } | null>;
    updateQuote(req: any): Promise<{
        id: number;
        text: string;
    }>;
    deleteQuote(req: any): Promise<{
        id: number;
        text: string;
    }>;
    voteQuote(req: any): Promise<{
        id: number;
        userId: number;
        qouteId: number;
    }>;
}
