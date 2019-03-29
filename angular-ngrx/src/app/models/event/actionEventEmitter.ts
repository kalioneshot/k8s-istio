// Enum action for Event Emitter.
export enum TypeAction {
    DETAIL = 'DETAIL',
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    CREATE = 'CREATE'
}
export class ActionEventEmitter {
    typeAction: TypeAction;
    data: any;

    constructor(typeAction: TypeAction, data: string) {
        this.typeAction = typeAction;
        this.data = data;
    }
}
