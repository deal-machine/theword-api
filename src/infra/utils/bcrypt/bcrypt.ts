import { Encrypter } from "src/infra/protocols/encrypter";
import { compare, hash } from "bcrypt";

export class Bcrypt implements Encrypter {
    async hash(password: string): Promise<string> {
        return hash(password, 12);
    }
    async compare(password: string, hash: string): Promise<boolean> {
        return compare(password, hash);
    }
}
