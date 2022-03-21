export type EditActionType = {
    isEdit: boolean;
    userToEdit?: { firstName: string } | null;
}

export type UserType = {
    name: string;
    id: string;
    image?: string;
}

export interface IAddNewState {
    users: { name: string, id: string, image?: string}[] ;
    loading: boolean;
    editAction: EditActionType;
    userToAdd: {};
    failsCounter: number;
    retryAction: boolean;
};



  