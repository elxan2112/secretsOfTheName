export interface INameInfo {
    age: number,
    count: number,
    country: Array<{
        country_id: string,
        probability: number
    }>,
    gender: string,
    name: string
}