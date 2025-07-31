export interface Exercise {
    id: number;
    name: string;
    description?: string;
    type: string;
    equipment?: string;
    isBodyweight: boolean
}