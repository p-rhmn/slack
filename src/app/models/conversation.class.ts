export class Conversation {
    name: string;
    description: string;
    type: string;
    userIdList: [];
    createdBy: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.description = obj ? obj.description : '';
        this.type = obj ? obj.type : '';
        this.userIdList = obj ? obj.userIdList : '';
        this.createdBy = obj ? obj.createdBy : '';
    }

    public toJSON() {
        return {
            name: this.name,
            description: this.description,
            type: this.type,
            userIdList: this.userIdList,
            createdBy: this.createdBy
        }
    }
}
