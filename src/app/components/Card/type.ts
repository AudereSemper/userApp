interface IUser {
  userInfo: {
    id: number,
    name: string,
    image: string,
    isRowCard?: boolean,
  }
}

export default IUser;
