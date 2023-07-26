export type GetRecordsMessage = {
    type: 'GET_RECORDS';
    data?: string;
    sender?: string;
};
export type GetRecordsResMessage = {
    type: 'GET_RECORDS_RES';
    data: {
        records: string[];
    };
};
export type GetRecordsRejMessage = {
    type: 'GET_RECORDS_REJ';
    data: {
        error?: string;
    };
};
