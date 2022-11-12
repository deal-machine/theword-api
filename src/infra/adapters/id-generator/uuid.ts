import { IdGenerator } from "@infra/protocols/id-generator";
import { v4 as uuidv4 } from "uuid";

export class Uuid implements IdGenerator {
    random() {
        return uuidv4();
    }
}
