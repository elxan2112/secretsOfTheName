export interface INationalize {
    name: string,
    country: Array<{
        country_id: string,
        probability: number
    }>
}