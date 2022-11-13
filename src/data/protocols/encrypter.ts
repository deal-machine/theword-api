export interface Encrypter {
    hash: (password: string) => Promise<string>;
    compare: ({
        password,
        hash,
    }: {
        password: string;
        hash: string;
    }) => Promise<boolean>;
}
